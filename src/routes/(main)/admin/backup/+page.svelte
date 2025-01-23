<script lang="ts">
	let dataToBackup = $state( encodeDataToBackup() );
	
	let restoreFiles:FileList | undefined = $state();
	let dataToRestore:string | undefined = $state();

	let restoreFilesValue: any = $state();

	function encodeDataToBackup() : string {
		return btoa(JSON.stringify(localStorage));
	}

	function backupToFile(){
		const data = encodeDataToBackup();

		// Create a Blob from the data
		const blob = new Blob([data], { type: 'text/plain' });

		// Create a link element
		const link = document.createElement('a');

		// Create a URL for the Blob and set it as the href attribute
		link.href = URL.createObjectURL(blob);

		// Set the download attribute with a filename
		link.download = `${new Date().valueOf()}.timely-backup`;

		// Programmatically click the link to trigger the download
		link.click();

		// Clean up by revoking the Object URL
		URL.revokeObjectURL( link.href );
	}

	function onRestoreFileSelected(){
		const file = restoreFiles?.item(0); // Get the first file

		//console.log('reading file', file)
		if (!file) {
			return;
		}

		const reader = new FileReader();

		// Define the onload event for the reader
		reader.onload = function(event) {
			if (event.target){
				dataToRestore = event.target.result?.toString(); // Get the file content
			}
		};

		// Read the file as text
		reader.readAsText(file);

	}

	function validateAndRestore(){
		try {
			if (!dataToRestore){
				throw Error("No data to restore, select a file first")
			}
			const json = atob(dataToRestore);

			const data = JSON.parse(json);

			// TODO: validate
			
			
			localStorage.clear();

			// Restore localStorage
			for (const key in data) {
				if (data.hasOwnProperty(key)) {
					localStorage.setItem(key, data[key]);
					//console.log("localStorage.setItem", {key, value:data[key]})
				}
			}

			alert('Restored successfully!');

			dataToRestore = undefined;
			restoreFilesValue = undefined;
			dataToBackup = encodeDataToBackup();
			

		} catch (error) {
			alert(error)
		}
	}

</script>


<h2>Backup & Restore</h2>

<section>
	<article>
		<textarea name="backup-text" bind:value={dataToBackup}></textarea>
		<button onclick={backupToFile}>Backup</button>
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