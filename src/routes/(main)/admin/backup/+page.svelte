<script lang="ts">
    import { BackupService, RestoreService } from "$lib/services/BackupAndRestore";
    
	const backupSvr = new BackupService();
	let dataToBackup = $state( backupSvr.encodeDataToBackup() );
	
	let restoreFiles:FileList | undefined = $state();
	let dataToRestore:string | undefined = $state();

	let eInputRestoreFile:HTMLInputElement;

	function onBackupData(){
		backupSvr.downloadBackupFile();
	}

	async function onRestoreFileSelected(){
		const file = restoreFiles?.item(0); // Get the first file

		if (!file) {
			return;
		}

		dataToRestore = await file.text();

	}

	function onRestoreData(){
		try {
			if (!dataToRestore){
				throw Error("No data to restore, select a file first")
			}
			
			const restoreSvr = new RestoreService();
			restoreSvr.restoreFromBase64(dataToRestore);

			dataToRestore = undefined;
			if ( eInputRestoreFile ) eInputRestoreFile.value = '';
			
			// refresh data to backup
			dataToBackup = backupSvr.encodeDataToBackup();

			alert('Restored successfully!');

		} catch (error) {
			alert(error)
		}
	}

</script>


<h2>Backup & Restore</h2>

<section>
	<article>
		<textarea name="backup-text" bind:value={dataToBackup}></textarea>
		<button onclick={onBackupData}>Backup</button>
	</article>
</section>

<section>
	<article>
		<input
			bind:this={eInputRestoreFile}
			name="restore-file"
			type="file"
			accept=".timely-backup"
			bind:files={restoreFiles}
			onchange="{onRestoreFileSelected}"
		>
		<textarea name="restore-text" bind:value={dataToRestore}></textarea>
		<button onclick={onRestoreData}>Restore</button>
	</article>
</section>

<style>
	textarea{
		font-family: monospace;
		font-size: 80%;
		height: 5rem;
	}
</style>