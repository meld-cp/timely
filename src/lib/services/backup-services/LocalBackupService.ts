import type { ApplicationData } from "$lib/models/ApplicationData";
import type { IBackupService } from "./IBackupService";
import { Utils } from "../Utils";


export class LocalBackupService implements IBackupService {

	public async backup(data: ApplicationData): Promise<void> {
		const encodedData = this.encode(data);
		this.downloadAsFile(encodedData);
	}

	public downloadAsFile(encodedData: string) {
		const filename = `${new Date().valueOf()}.timely-backup`;
		Utils.downloadAsFile(encodedData, filename);
	}

	public encode(data: ApplicationData): string {
		return JSON.stringify(data, null, 2);
	}

	public decodeFromJson(json: string): ApplicationData | null {
		return JSON.parse(json) as ApplicationData;
	}
}
