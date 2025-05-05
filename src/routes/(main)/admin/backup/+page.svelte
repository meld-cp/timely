<script lang="ts">
    import { KV_STORE_APP_ID } from "$lib/constants";
    
    import { KvStorBackupService } from "$lib/services/backup-services/KvStorBackupService";
    import { LocalBackupService } from "$lib/services/backup-services/LocalBackupService";
    import { appController } from "$lib/services/Singletons";
	
	let appDataToBackup = $state( appController.getAppData() );
	const settings = appController.settingsController.read();

	//TODO: move this to app controller
	let cloudService = $state( KvStorBackupService.build(
		settings.cloudSyncHost,
		settings.cloudSyncUserId,
		KV_STORE_APP_ID,
	));

	let writingToCloudData = $state( false );
	let canWriteToCloudData = $derived( cloudService && !writingToCloudData );

	let readingFromCloudData = $state( false );
	let canReadFromCloudData = $derived( cloudService && !readingFromCloudData );
	
	//TODO: move this to app controller
	const localBackupSvr = new LocalBackupService();
	let dataToBackup = $state( localBackupSvr.encodeDataToBackup( appDataToBackup ) );
	
	let restoreFiles:FileList | undefined = $state();
	let dataAsTextToRestore:string | undefined = $state();

	let eInputRestoreFile:HTMLInputElement;

	// local backup
	function onBackupDataLocal(){
		localBackupSvr.downloadAsFile( dataToBackup );
	}

	async function onRestoreFileSelected(){
		const file = restoreFiles?.item(0); // Get the first file

		if (!file) {
			return;
		}

		dataAsTextToRestore = await file.text();

	}

	// cloud backup
	async function onBackupDataCloud(){
		writingToCloudData = true;
		try{
			if (!cloudService){
				return;
			}
			await cloudService.backup( appDataToBackup);
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
			
			const dataToRestore = await cloudService.getData();
			if (!dataToRestore){
				throw Error("Invalid data to restore");
			}
			dataAsTextToRestore = localBackupSvr.encodeDataToBackup( dataToRestore );
		}finally{
			readingFromCloudData = false;
		}
	}


	async function onRestoreData(){
		try {
			if (!dataAsTextToRestore){
				throw Error("No data to restore, select a file first")
			}
			
			const dataToRestore = localBackupSvr.decodeFromBase64(dataAsTextToRestore);

			if (!dataToRestore){
				throw Error("Invalid data to restore");
			}

			await appController.restoreAppData(dataToRestore);

			// reset
			dataAsTextToRestore = undefined;
			if ( eInputRestoreFile ) eInputRestoreFile.value = '';
			
			// refresh data to backup
			dataToBackup = localBackupSvr.encodeDataToBackup( dataToRestore )

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
		<textarea name="restore-text" bind:value={dataAsTextToRestore}></textarea>
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