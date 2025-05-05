import { KvStorClient } from "./kvstor-client";

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
		const dataBase64 = await file.text();
		this.restoreFromBase64(dataBase64);
	}

	
}

export class CloudBackupService{

	constructor(
		public host:string,
		public userId:string,
		public appId:string,
		public bucketId:string
	){}

	public static build(
		host?:string,
		userId?:string,
		appId?:string,
		bucketId?:string
	) : CloudBackupService | null{
		if (
			host != undefined
			&& (
				host.startsWith("https://")
				|| host.startsWith("http://")
			)
			&& userId != undefined
			&& userId.length > 0
			&& appId != undefined
			&& appId.length > 0
			&& bucketId != undefined
			&& bucketId.length > 0
		){
			return new CloudBackupService(
				host,
				userId,
				appId,
				bucketId
			)
		};
		return null;
	}

	public async put( key:string, value:string ){
		const kv = new KvStorClient(
			this.host,
			this.userId,
			this.appId,
			this.bucketId
		);
		await kv.setItem( key, value );
	}

	public async get( key:string ) : Promise<string> {
		const kv = new KvStorClient(
			this.host,
			this.userId,
			this.appId,
			this.bucketId
		);
		return await kv.getItem(key);
	}
}