<script lang="ts">
    import { BackupService, RestoreService } from "$lib/services/BackupAndRestore";

	const backupSvr = new BackupService();
	const restoreSvr = new RestoreService();

	let dataToBackup = $state( backupSvr.encodeDataToBackup() );
	
	let restoreFiles:FileList | undefined = $state();
	let dataToRestore:string | undefined = $state();

	let restoreFilesValue: any = $state();


	async function onRestoreFileSelected(){
		const file = restoreFiles?.item(0); // Get the first file

		if (!file) {
			return;
		}

		dataToRestore = await restoreSvr.getFileTextContents(file);

	}

	function validateAndRestore(){
		try {
			if (!dataToRestore){
				throw Error("No data to restore, select a file first")
			}
			
			restoreSvr.restoreFromBase64(dataToRestore);

			alert('Restored successfully!');

			dataToRestore = undefined;
			restoreFilesValue = undefined;
			dataToBackup = backupSvr.encodeDataToBackup();

		} catch (error) {
			alert(error)
		}
	}

</script>


<h2>Backup & Restore</h2>

<section>
	<article>
		<textarea name="backup-text" bind:value={dataToBackup}></textarea>
		<button onclick={() => backupSvr.downloadBackupFile()}>Backup</button>
	</article>
</section>

<section>
	<article>
		<input
			name="restore-file"
			type="file"
			accept=".timely-backup"
			bind:value={restoreFilesValue}
			bind:files={restoreFiles}
			onchange="{()=>onRestoreFileSelected()}"
		>
		<textarea name="restore-text" bind:value={dataToRestore}></textarea>
		<button onclick={validateAndRestore}>Restore</button>
	</article>
</section>

<style>
	textarea{
		font-family: monospace;
		font-size: 80%;
		height: 5rem;
	}
</style>