export class BackupService{
	
	public encodeDataToBackup() : string {
		return btoa(JSON.stringify(localStorage));
	}

	public downloadBackupFile(){
		const data = this.encodeDataToBackup();

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
}

export class RestoreService{

	public async getFileTextContents(file:File) : Promise<string>{
		const blob = new Blob([file], { type: file.type }); // Create a Blob from the file
		return await blob.text()
	}

	public restoreFromBase64( base64Text:string ){
		const dataJson = atob(base64Text);

		const data = JSON.parse(dataJson);

		// TODO: validate

		localStorage.clear();
		// Restore localStorage
		for (const key in data) {
			if (data.hasOwnProperty(key)) {
				localStorage.setItem(key, data[key]);
			}
		}
	}

	public async restoreFromFile( file:File ){
		const dataBase64 = await this.getFileTextContents(file);
		this.restoreFromBase64(dataBase64);
	}

}