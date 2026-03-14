<script lang="ts">
	import InvoiceEditorView from "$lib/views/invoice-editor/InvoiceEditorView.svelte";
	import { TaskState } from "$lib/models/TaskState";
	import { onMount } from "svelte";

	import { InvoiceLineViewModel } from "$lib/view-models/InvoiceLineViewModel.svelte";
	import { InvoiceViewModel } from "$lib/view-models/InvoiceViewModel.svelte";
	import { TaskViewModel } from "$lib/view-models/TaskViewModel.svelte";
	import { FormatDate } from "$lib/services/formatters/FormatDate";
	import { appController } from "$lib/services/Singletons";
	import type { TaskModel } from "$lib/models/TaskModel";
	import { Utils } from "$lib/services/Utils";
	import { DRAFT_INVOICE_KEY, DRAFT_INVOICE_ID } from "$lib/StorageKeys";

	let workingInvoice: InvoiceViewModel = $state(buildNewDraftInvoice());
	let isEditingDraftInvoice: boolean = $derived(workingInvoice.id === DRAFT_INVOICE_ID);
	let workingInvoiceTitle: string = $derived.by(() => {
		if (isEditingDraftInvoice) {
			return "Draft Invoice";
		}
		return `Editing Invoice ${workingInvoice.number}`;
	});
	let uninvoicedTasks: TaskViewModel[] = $state([]);
	let scratchPad: string = $state("");
	let closedInvoices: InvoiceViewModel[] = $state([]);

	let scratchPadSaveTimer: ReturnType<typeof setTimeout> | undefined;

	onMount(async () => {
		scratchPad = appController.getScratchPad("page-invoice-builder");
		workingInvoice = loadDraftInvoice();
		uninvoicedTasks = await fetchUninvoicedTasks();
		closedInvoices = await fetchInvoices();
	});

	function loadDraftInvoice(): InvoiceViewModel {
		const stored = localStorage.getItem(DRAFT_INVOICE_KEY);
		if (stored) {
			try {
				return new InvoiceViewModel(JSON.parse(stored));
			} catch {
				// fall through
			}
		}
		return buildNewDraftInvoice();
	}

	async function fetchInvoices(): Promise<InvoiceViewModel[]> {
		const all = await appController.getInvoices();
		return all.sort((a, b) => {
			const aDate = new Date(a.date).valueOf();
			const bDate = new Date(b.date).valueOf();
			if (aDate > bDate) return -1;
			if (aDate < bDate) return 1;
			if (a.number > b.number) return -1;
			if (a.number < b.number) return 1;
			if (a.id > b.id) return 1;
			if (a.id < b.id) return -1;
			return 0;
		});
	}

	function buildNewDraftInvoice(): InvoiceViewModel {
		const settings = appController.settings;
		const result = new InvoiceViewModel();
		result.id = DRAFT_INVOICE_ID;
		result.headerLinesAsText = settings.defaultInvoiceHeader ?? "";
		result.currencyCode = settings.defaultInvoiceCurrencyCode;
		result.number = `${settings.nextInvoiceNumber}`;
		result.footnoteAsText = settings.defaultInvoiceFooter ?? "";
		return result;
	}

	function saveScratchPad() {
		clearTimeout(scratchPadSaveTimer);
		scratchPadSaveTimer = setTimeout(() => {
			appController.setScratchPad("page-invoice-builder", scratchPad);
		}, 1000);
	}

	async function fetchUninvoicedTasks(): Promise<TaskViewModel[]> {
		const all = await appController.getTasks();
		return all.filter(t => t.invoiceRefId.length === 0 && t.state === TaskState.Stopped);
	}

	function buildTimeLogInvoiceLine(timeLog: TaskModel): InvoiceLineViewModel {
		const newLine = new InvoiceLineViewModel();
		newLine.extRefId = timeLog.id;
		newLine.description = `${timeLog.date} - ${timeLog.name}`;
		newLine.units = "hr";
		newLine.quantity = timeLog.affectiveDurationHours;
		newLine.unitCost = appController.settings.defaultHourlyRate;
		return newLine;
	}

	function onViewDraftInvoice() {
		saveDraftInvoice();
		viewInvoice(workingInvoice.id, { watermark: "DRAFT" });
	}

	function saveDraftInvoice() {
		localStorage.setItem(DRAFT_INVOICE_KEY, JSON.stringify(workingInvoice.getModel()));
	}

	async function onBuildInvoice(): Promise<void> {
		const newInvModel = workingInvoice.getModel();
		const isDraftInvoice = isEditingDraftInvoice;

		if (isDraftInvoice) {
			newInvModel.id = Utils.generateId();
		}

		appController.saveInvoice(newInvModel);

		const attachedTaskIds = new Set(
			newInvModel.lines.map(l => l.extRefId).filter((id): id is string => !!id)
		);
		const attachedTasks = uninvoicedTasks.filter(t => attachedTaskIds.has(t.id));
		for (const task of attachedTasks) {
			task.invoiceRefId = newInvModel.id;
			task.state = TaskState.Archived;
			appController.saveTask(task.getModel());
		}

		if (isDraftInvoice) {
			appController.incrementNextInvoiceNumber();
		}

		closedInvoices = await fetchInvoices();
		uninvoicedTasks = await fetchUninvoicedTasks();

		resetWorkingInvoice();
		viewInvoice(newInvModel.id);
	}

	function viewInvoice(id: string, options?: { watermark?: string }) {
		let url = `/view-invoice/${id}`;
		if (options?.watermark) {
			url += `/${options.watermark}`;
		}
		window.open(url, `inv-${id}`);
	}

	async function editInvoice(id: string) {
		const invVm = await appController.getInvoiceById(id);
		if (!invVm) {
			return;
		}
		workingInvoice = invVm;
		window.scrollTo(0, 0);
	}

	function allUninvoicedTimeHaveBeenAddedToWorkingInvoice(): boolean {
		if (uninvoicedTasks.length === 0) {
			return false;
		}
		for (const task of uninvoicedTasks) {
			if (!workingInvoice.containsExtRefId(task.id)) {
				return false;
			}
		}
		return true;
	}

	function selectAllUninvoicedTime(select: boolean) {
		for (const task of uninvoicedTasks) {
			if (select) {
				workingInvoice.addLine(buildTimeLogInvoiceLine(task));
			} else {
				workingInvoice.removeLineWithExtRefId(task.id);
			}
		}
	}

	function onDraftInvoiceAddLine() {
		workingInvoice.addLine();
		saveDraftInvoice();
	}

	function onDraftInvoiceRemoveLine(line: InvoiceLineViewModel) {
		workingInvoice.removeLineWithId(line.id);
		saveDraftInvoice();
	}

	function onDraftInvoiceSortLines() {
		workingInvoice.sortAndRenumberLines();
		saveDraftInvoice();
	}

	function resetWorkingInvoice() {
		workingInvoice = buildNewDraftInvoice();
		saveDraftInvoice();
	}
</script>

<h2>Invoice Builder</h2>

<div id="container">
	<section id="row1">
		<InvoiceEditorView
			vm={workingInvoice}
			title={workingInvoiceTitle}
			canChangeNumber={isEditingDraftInvoice}
			onChange={saveDraftInvoice}
			onAddLine={onDraftInvoiceAddLine}
			onRemoveLine={onDraftInvoiceRemoveLine}
			onSortLines={onDraftInvoiceSortLines}
			{onBuildInvoice}
			onPreviewInvoice={onViewDraftInvoice}
			onResetInvoice={resetWorkingInvoice}
		/>

		<div class="c-col-2">

			<article class="time-list">
				<header>Uninvoiced Time</header>

				{#if uninvoicedTasks.length !== 0}
					{#if uninvoicedTasks.length > 1}
						<label>
							<input id="untagged-select-all" type="checkbox" bind:checked={
								() => allUninvoicedTimeHaveBeenAddedToWorkingInvoice(),
								(checked) => selectAllUninvoicedTime(checked)
							}/>
							Select All
						</label>
						<hr/>
					{/if}
					{#each uninvoicedTasks as task}
					<div class="c-task-line">
						<label>
							<input name="task-line" type="checkbox" bind:checked={
								() => workingInvoice.containsExtRefId(task.id),
								(checked) => {
									if (checked) {
										workingInvoice.addLine(buildTimeLogInvoiceLine(task));
									} else {
										workingInvoice.removeLineWithExtRefId(task.id);
									}
								}
							}/>
							{FormatDate.toLocalDateFromString(task.date, appController.settings.localeCode)} ({task.affectiveDurationHours.toFixed(2)} hrs) - {task.name}
						</label>
					</div>
					{/each}
				{:else}
					<p><i>All time has been accounted for.</i></p>
				{/if}
			</article>

			<article class="scratch-pad">
				<header>Scratch Pad</header>
				<textarea name="scratch-pad" bind:value={scratchPad} oninput={() => saveScratchPad()}></textarea>
			</article>
		</div>
	</section>

	<section id="row2">
		<article>
			<details>
				<summary>Closed Invoices ({closedInvoices.length})</summary>
				{#each closedInvoices as inv}
				<article>
					{inv.number}
					<a href="##" onclick="{(ev) => { ev.preventDefault(); viewInvoice(inv.id);}}">View</a>
					<a href="##" onclick="{(ev) => { ev.preventDefault(); editInvoice(inv.id);}}">Edit</a>
				</article>
				{/each}
			</details>
		</article>
	</section>
</div>

<style>
	#row1{
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		font-size: medium;
	}

	.c-col-2{
		display: flex;
		flex-direction: column;
		flex: 4;
		min-width: 200px;
		height: max-content;
	}

	.time-list{
		flex: 2;
		overflow-y: auto;

		.c-task-line{
			font-size: 80%;
		}
	}

	.scratch-pad{
		flex: 2;
		overflow-y: auto;

		textarea{
			font-size: 80%;
			height: 13rem;
			margin: 0;
			box-sizing: border-box;
		}
	}
</style>
