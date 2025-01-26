import type { ApplicationData } from "$lib/models/ApplicationData";

export interface IBackupService {
	backup( data:ApplicationData ) :Promise<void>;
}
