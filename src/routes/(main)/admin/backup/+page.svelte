<script lang="ts">
	import { LocalBackupService } from "$lib/services/backup-services/LocalBackupService";
	import { appController, pbService } from "$lib/services/Singletons";
	import { DRAFT_INVOICE_ID } from "$lib/StorageKeys";
	import type { TaskModel } from "$lib/models/TaskModel";
	import type { InvoiceModel } from "$lib/models/InvoiceModel";
	import { Utils } from "$lib/services/Utils";
	import { onMount } from "svelte";

	let pbUrl = $derived(pbService.pb.baseURL);

	const localBackupSvc = new LocalBackupService();

	// ---- Backup ----

	let dataToBackupAsText = $state('');
	let backupLoading = $state(false);

	onMount(async () => {
		backupLoading = true;
		try {
			const appData = await appController.getAppData();
			dataToBackupAsText = localBackupSvc.encode(appData);
		} finally {
			backupLoading = false;
		}
	});

	function onBackupDataLocal() {
		localBackupSvc.downloadAsFile(dataToBackupAsText, appController.settings.label);
	}

	// ---- Restore / Migrate ----

	type RestoreStatus = 'idle' | 'previewing' | 'running' | 'done' | 'error';
	type ResetStatus = 'idle' | 'confirming' | 'running' | 'done' | 'error';

	let restoreStatus: RestoreStatus = $state('idle');
	let restoreError = $state('');
	let selectedFile: File | undefined = $state();
	let parsedData = $state<Awaited<ReturnType<typeof localBackupSvc.decodeFromJson>>>(undefined);
	let progress = $state({ done: 0, total: 0, current: '' });

	let resetStatus: ResetStatus = $state('idle');
	let resetError = $state('');

	function onFileSelected(e: Event) {
		const input = e.target as HTMLInputElement;
		selectedFile = input.files?.[0];
		parsedData = undefined;
		restoreStatus = 'idle';
		restoreError = '';
	}

	async function onPreview() {
		if (!selectedFile) return;
		restoreStatus = 'previewing';
		restoreError = '';
		try {
			const text = await selectedFile.text();
			const data = localBackupSvc.decodeFromJson(text);
			if (!data) throw new Error('Could not parse backup file.');
			parsedData = data;
		} catch (e) {
			restoreError = e instanceof Error ? e.message : String(e);
			restoreStatus = 'error';
		}
	}

	async function onRunRestore() {
		if (!parsedData) return;
		restoreStatus = 'running';
		restoreError = '';
		progress = { done: 0, total: 0, current: '' };

		try {
			const { tasks, settings } = parsedData;
			const invoices = parsedData.invoices.filter(inv => inv.id !== DRAFT_INVOICE_ID);

			const taskIdMap = new Map<string, string>();
			for (const t of tasks) taskIdMap.set(t.id, Utils.generateId());
			const invoiceIdMap = new Map<string, string>();
			for (const inv of invoices) invoiceIdMap.set(inv.id, Utils.generateId());

			const tasksWithInvoiceRef = tasks.filter(t => t.invoiceRefId);
			progress.total = tasks.length + invoices.length + tasksWithInvoiceRef.length;

			// Pass 1: tasks (invoice FK cleared — patched in pass 3)
			for (const task of tasks) {
				const newTask: TaskModel = {
					...task,
					id: taskIdMap.get(task.id)!,
					invoiceRefId: '',
					timeRunStarted: task.timeRunStarted ?? undefined,
					tags: task.tags ?? [],
				};
				progress.current = `Task: ${task.name}`;
				await pbService.upsertTask(newTask);
				progress.done++;
			}

			// Pass 2: invoices with lines (tasks exist now)
			for (const inv of invoices) {
				const newInv: InvoiceModel = {
					...inv,
					id: invoiceIdMap.get(inv.id)!,
					lines: inv.lines.map(l => ({
						...l,
						id: Utils.generateId(),
						extRefId: l.extRefId ? (taskIdMap.get(l.extRefId) ?? undefined) : undefined,
					})),
				};
				progress.current = `Invoice #${inv.number}`;
				await pbService.upsertInvoice(newInv);
				progress.done++;
			}

			// Pass 3: restore invoiceRefId on tasks that had one
			for (const task of tasksWithInvoiceRef) {
				const patchedTask: TaskModel = {
					...task,
					id: taskIdMap.get(task.id)!,
					invoiceRefId: invoiceIdMap.get(task.invoiceRefId) ?? '',
					timeRunStarted: task.timeRunStarted ?? undefined,
					tags: task.tags ?? [],
				};
				progress.current = `Linking task: ${task.name}`;
				await pbService.upsertTask(patchedTask);
				progress.done++;
			}

			// Import settings
			if (settings) {
				const current = appController.settings.getModel();
				const maxImportedNumber = invoices.reduce((max, inv) => Math.max(max, parseInt(inv.number) || 0), 0);
				await pbService.saveSettings({
					...current,
					logoData: settings.logoData ?? current.logoData,
					label: settings.label ?? current.label,
					localeCode: settings.localeCode ?? current.localeCode,
					address: settings.address ?? current.address,
					nextInvoiceNumber: maxImportedNumber > 0 ? maxImportedNumber + 1 : (settings.nextInvoiceNumber ?? current.nextInvoiceNumber),
					defaultInvoiceHeader: settings.defaultInvoiceHeader ?? current.defaultInvoiceHeader,
					defaultInvoiceCurrencyCode: settings.defaultInvoiceCurrencyCode ?? current.defaultInvoiceCurrencyCode,
					defaultInvoiceFooter: settings.defaultInvoiceFooter ?? current.defaultInvoiceFooter,
					defaultHourlyRate: settings.defaultHourlyRate ?? current.defaultHourlyRate,
					scratchPads: { ...current.scratchPads, ...settings.scratchPads },
				});
				await appController.initialize();
			}

			progress.current = 'Complete';
			restoreStatus = 'done';
		} catch (e) {
			restoreError = e instanceof Error ? e.message : String(e);
			restoreStatus = 'error';
		}
	}

	async function onResetConfirmed() {
		resetStatus = 'running';
		resetError = '';
		try {
			await pbService.deleteAllData();
			resetStatus = 'done';
			restoreStatus = parsedData ? 'previewing' : 'idle';
		} catch (e) {
			resetError = e instanceof Error ? e.message : String(e);
			resetStatus = 'error';
		}
	}
</script>

<h2>PocketBase</h2>

<section>
	<article>
		<p>Server: <code>{pbUrl}</code></p>
		<p><a href="{pbUrl}/_/" target="_blank" rel="noopener">Open PocketBase Admin Panel</a></p>
	</article>
</section>

<h2>Backup</h2>

<section>
	<article>
		{#if backupLoading}
			<p aria-busy="true">Loading data...</p>
		{:else}
			<textarea name="backup-text" bind:value={dataToBackupAsText}></textarea>
			<button onclick={onBackupDataLocal}>Download Backup</button>
		{/if}
	</article>
</section>

<h2>Restore from Backup</h2>

<section>
	<article>
		<p><small>Select a <code>.timely-backup</code> file to import its data into PocketBase.</small></p>

		<label>
			Backup File
			<input
				type="file"
				accept=".timely-backup"
				onchange={onFileSelected}
				disabled={restoreStatus === 'running'}
			/>
		</label>

		{#if selectedFile && restoreStatus === 'idle'}
			<button onclick={onPreview}>Preview</button>
		{/if}

		{#if parsedData && (restoreStatus === 'previewing' || restoreStatus === 'done')}
			<table>
				<tbody>
					<tr><th>Tasks</th><td>{parsedData.tasks.length}</td></tr>
					<tr><th>Invoices</th><td>{parsedData.invoices.filter(inv => inv.id !== DRAFT_INVOICE_ID).length}</td></tr>
					<tr><th>Backup date</th><td>{new Date(parsedData.modified).toLocaleString()}</td></tr>
					<tr><th>Label</th><td>{parsedData.settings?.label ?? '—'}</td></tr>
				</tbody>
			</table>
		{/if}

		{#if restoreStatus === 'previewing'}
			<button onclick={onRunRestore}>Import into PocketBase</button>
		{/if}

		{#if restoreStatus === 'running'}
			<p aria-busy="true">Importing… {progress.done} / {progress.total} — {progress.current}</p>
			<progress value={progress.done} max={progress.total}></progress>
		{/if}

		{#if restoreStatus === 'done'}
			<p style="color: var(--pico-color-green-500);">
				✓ Restore complete. {progress.done} records imported.
			</p>
		{/if}

		{#if restoreStatus === 'error'}
			<p style="color: var(--pico-color-red-500);">Error: {restoreError}</p>
			<button class="secondary" onclick={() => restoreStatus = parsedData ? 'previewing' : 'idle'}>Try Again</button>
		{/if}
	</article>
</section>

<h2>Reset Database</h2>
<section>
	<article>
		<p><small>Permanently deletes <strong>all tasks and invoices</strong> for your account. Use this to clear partial imports before re-running a restore.</small></p>

		{#if resetStatus === 'idle'}
			<button class="secondary" style="color: var(--pico-color-red-500);" onclick={() => resetStatus = 'confirming'}>
				Delete All Data
			</button>
		{/if}

		{#if resetStatus === 'confirming'}
			<p><strong>Are you sure? This cannot be undone.</strong></p>
			<div style="display: flex; gap: 1rem;">
				<button onclick={onResetConfirmed} style="background: var(--pico-color-red-500); border-color: var(--pico-color-red-500);">
					Yes, delete everything
				</button>
				<button class="secondary" onclick={() => resetStatus = 'idle'}>Cancel</button>
			</div>
		{/if}

		{#if resetStatus === 'running'}
			<p aria-busy="true">Deleting all data…</p>
		{/if}

		{#if resetStatus === 'done'}
			<p style="color: var(--pico-color-green-500);">✓ All data deleted.</p>
			<button class="secondary" onclick={() => resetStatus = 'idle'}>OK</button>
		{/if}

		{#if resetStatus === 'error'}
			<p style="color: var(--pico-color-red-500);">Error: {resetError}</p>
			<button class="secondary" onclick={() => resetStatus = 'idle'}>Dismiss</button>
		{/if}
	</article>
</section>

<style>
	textarea {
		font-family: monospace;
		font-size: 80%;
		height: 5rem;
	}
	table {
		margin: 1rem 0;
	}
	th {
		text-align: left;
		padding-right: 2rem;
		font-weight: normal;
		color: var(--pico-muted-color);
	}
	progress {
		width: 100%;
	}
</style>
