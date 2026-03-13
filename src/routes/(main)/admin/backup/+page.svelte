<script lang="ts">
	import { LocalBackupService } from "$lib/services/backup-services/LocalBackupService";
	import { appController } from "$lib/services/Singletons";
	import { onMount } from "svelte";

	const localBackupSvr = new LocalBackupService();

	let dataToBackupAsText = $state('');
	let loading = $state(false);

	let restoreFiles: FileList | undefined = $state();
	let dataAsTextToRestore: string | undefined = $state();
	let eInputRestoreFile: HTMLInputElement;

	onMount(async () => {
		loading = true;
		try {
			const appData = await appController.getAppData();
			dataToBackupAsText = localBackupSvr.encode(appData);
		} finally {
			loading = false;
		}
	});

	function onBackupDataLocal() {
		localBackupSvr.downloadAsFile(dataToBackupAsText, appController.settings.label);
	}

	async function onRestoreFileSelected() {
		const file = restoreFiles?.item(0);
		if (!file) return;
		dataAsTextToRestore = await file.text();
	}

	async function onRestoreData() {
		try {
			if (!dataAsTextToRestore) {
				throw Error("No data to restore, select a file first");
			}
			const dataToRestore = localBackupSvr.decodeFromJson(dataAsTextToRestore);
			if (!dataToRestore) {
				throw Error("Invalid data to restore");
			}

			// Note: restoring to PocketBase is not supported.
			// Use PocketBase admin panel to import data if needed.
			alert("Restore to PocketBase is not supported from this UI.\n\nYour local backup JSON has been validated successfully. To restore, use the PocketBase admin panel.");

			dataAsTextToRestore = undefined;
			if (eInputRestoreFile) eInputRestoreFile.value = '';
		} catch (error) {
			alert(error);
		}
	}
</script>

<h2>Backup</h2>

<section>
	<article>
		{#if loading}
			<p aria-busy="true">Loading data...</p>
		{:else}
			<textarea name="backup-text" bind:value={dataToBackupAsText}></textarea>
			<button onclick={onBackupDataLocal}>Download Local Backup</button>
		{/if}
	</article>
</section>

<h2>Restore</h2>
<section>
	<article>
		<p><small>Select a <code>.timely-backup</code> file to validate it. To restore data, use the PocketBase admin panel.</small></p>
		<input
			style:margin-bottom="0"
			bind:this={eInputRestoreFile}
			name="restore-file"
			type="file"
			accept=".timely-backup"
			bind:files={restoreFiles}
			onchange="{onRestoreFileSelected}"
		>
		<textarea name="restore-text" bind:value={dataAsTextToRestore}></textarea>
		<button onclick={onRestoreData} disabled={!dataAsTextToRestore}>Validate Backup File</button>
	</article>
</section>

<style>
	textarea{
		font-family: monospace;
		font-size: 80%;
		height: 5rem;
	}
</style>
