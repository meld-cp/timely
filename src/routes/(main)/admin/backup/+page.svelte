<script lang="ts">
    import { KV_STORE_APP_ID, KV_STORE_BACKUP_KEY, KV_STORE_BUCKET_ID } from "$lib/constants";
    import { BackupService, CloudBackupService, RestoreService } from "$lib/services/BackupAndRestore";
    import { settingsController } from "$lib/services/Singletons";
	
	const settings = settingsController.read();
	
	let cloudService = CloudBackupService.build(
		settings.cloudSyncHost,
		settings.cloudSyncUserId,
		KV_STORE_APP_ID,
		KV_STORE_BUCKET_ID
	);

	let writingToCloudData = $state( false );
	let canWriteToCloudData = $derived( cloudService !== undefined && !writingToCloudData );

	let readingFromCloudData = $state( false );
	let canReadFromCloudData = $derived( cloudService !== undefined && !readingFromCloudData );
	

	const backupSvr = new BackupService();
	let dataToBackup = $state( backupSvr.encodeDataToBackup() );
	
	let restoreFiles:FileList | undefined = $state();
	let dataToRestore:string | undefined = $state();

	let eInputRestoreFile:HTMLInputElement;

	// local backup
	function onBackupDataLocal(){
		backupSvr.downloadBackupFile();
	}

	async function onRestoreFileSelected(){
		const file = restoreFiles?.item(0); // Get the first file

		if (!file) {
			return;
		}

		dataToRestore = await file.text();

	}

	// cloud backup
	async function onBackupDataCloud(){
		writingToCloudData = true;
		try{
			if (!cloudService){
				return;
			}
			await cloudService.put(KV_STORE_BACKUP_KEY, dataToBackup);
		}finally{
			writingToCloudData = false;
		}
	}

	async function onReadFromCloudData(){
		readingFromCloudData = true;
		try{
			if (!cloudService){
				return;
			}
			dataToRestore = await cloudService.get(KV_STORE_BACKUP_KEY);
		}finally{
			readingFromCloudData = false;
		}
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


<h2>Backup</h2>

<section>
	<article>
		<textarea name="backup-text" bind:value={dataToBackup}></textarea>
		<button onclick={onBackupDataLocal}>Local Backup</button>
		<button
			onclick={onBackupDataCloud}
			disabled={!canWriteToCloudData}
			aria-busy="{writingToCloudData}"
		>Cloud Backup</button>
	</article>
</section>

<h2>Restore</h2>
<section>
	<article>
		<div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;">
			<input
				style:flex-shrink="1"
				style:margin-bottom="0"
				bind:this={eInputRestoreFile}
				name="restore-file"
				type="file"
				accept=".timely-backup"
				bind:files={restoreFiles}
				onchange="{onRestoreFileSelected}"
			>
			or
			<button
				style="flex-shrink: 0;"
				onclick={onReadFromCloudData}
				disabled={!canReadFromCloudData}
				aria-busy="{readingFromCloudData}"
			>Read From Cloud</button>
		</div>
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