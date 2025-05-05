import type { ApplicationData } from "$lib/models/ApplicationData";
import type { IBackupService } from "./IBackupService";
import { Utils } from "../Utils";


export class LocalBackupService implements IBackupService {

	public async backup(data: ApplicationData): Promise<void> {
		const encodedData = this.encodeDataToBackup(data);
		this.downloadAsFile(encodedData);
	}

	public downloadAsFile(encodedData: string) {
		const filename = `${new Date().valueOf()}.timely-backup`;
		Utils.downloadAsFile(encodedData, filename);
	}

	public encodeDataToBackup(data: ApplicationData): string {
		return btoa(JSON.stringify(data));
	}

	public decodeFromBase64(base64Text: string): ApplicationData | null {
		const dataJson = atob(base64Text);
		console.debug(dataJson);
		return JSON.parse(dataJson) as ApplicationData;
	}
}
