import type { ApplicationData } from "$lib/models/ApplicationData";
import type { IBackupService } from "./IBackupService";
import { Utils } from "../Utils";


export class LocalBackupService implements IBackupService {

	public async backup(data: ApplicationData): Promise<void> {
		const encodedData = this.encode(data);
		this.downloadAsFile(encodedData, data.settings.label );
	}

	public downloadAsFile( encodedData: string, filePrefix?:string ) {
		const prefix = filePrefix ? `${filePrefix}-` : "";
		const filename = `${prefix}${new Date().valueOf()}.timely-backup`;
		Utils.downloadAsFile(encodedData, filename);
	}

	public encode(data: ApplicationData): string {
		return JSON.stringify(data, null, 2);
	}

	public decodeFromJson(json: string): ApplicationData | null {
		const obj = JSON.parse(json);
		return obj as ApplicationData;
	}
}
