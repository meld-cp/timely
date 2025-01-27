import { APP_LOCALSTORE_INVOICES_NAME, APP_LOCALSTORE_SETTINGS_NAME, APP_LOCALSTORE_TASKS_NAME, KV_STORE_APP_ID } from "$lib/constants";
import type { ApplicationData } from "$lib/models/ApplicationData";
import type { InvoiceModel } from "$lib/models/InvoiceModel";
import type { TaskModel } from "$lib/models/TaskModel";
import { SettingsViewModel } from "$lib/view-models/SettingsViewModel.svelte";
import { InvoiceViewModel } from "$lib/view-models/InvoiceViewModel.svelte";
import { TaskViewModel } from "$lib/view-models/TaskViewModel.svelte";
import { LocalStorageController } from "./LocalStorageController";
import { SettingsController } from "./SettingsController";
import type { SettingsModel } from "$lib/models/SettingsModel";
import { KvStorBackupService } from "./backup-services/KvStorBackupService";
import { LocalBackupService } from "./backup-services/LocalBackupService";

export class ApplicationController {
	private settingsRepo: LocalStorageController<SettingsModel>;
	public taskRepo:LocalStorageController<TaskModel>;
	public invRepo:LocalStorageController<InvoiceModel>;
	public settingsController:SettingsController;
	
	public dataModifiedTimestamp:number = $state(0);

	constructor(){
		const localStorageOptions = {
			onModifiedCallback: () => this.setChangedTimestamp()
		};
		this.settingsRepo = new LocalStorageController<SettingsModel>(APP_LOCALSTORE_SETTINGS_NAME, localStorageOptions);
		this.taskRepo = new LocalStorageController<TaskModel>(APP_LOCALSTORE_TASKS_NAME, localStorageOptions);
		this.invRepo = new LocalStorageController<InvoiceModel>(APP_LOCALSTORE_INVOICES_NAME, localStorageOptions);
		this.settingsController = new SettingsController( this.settingsRepo);

		this.dataModifiedTimestamp = this.readDataModifiedTimestamp() ?? 0;
	}

	public async getTasks():Promise<TaskViewModel[]>{
		return this.taskRepo.getAll().map(t => new TaskViewModel(t));
	}

	public async getInvoices():Promise<InvoiceViewModel[]>{
		return this.invRepo.getAll().map(i => new InvoiceViewModel(i));
	}

	public getAppData(): ApplicationData {
		return {
			modified: this.readDataModifiedTimestamp() ?? 0,
			settings: this.settingsController.read().getModel(),
			tasks: this.taskRepo.getAll(),
			invoices: this.invRepo.getAll()
		}
    }

	private setChangedTimestamp( newTimestamp?:number ){
		this.dataModifiedTimestamp = newTimestamp ?? new Date().valueOf();
		localStorage.setItem( "_modified", this.dataModifiedTimestamp.toString() );
	}
	
	private readDataModifiedTimestamp():number | null {
		const value = localStorage.getItem( "_modified" );
		if (value === null){
			return null;
		}
		const num = parseInt(value);
		if (isNaN(num)){
			return null;
		}
		this.dataModifiedTimestamp = num;
		return num;
	}

    async backupData( mode: "auto" | "cloud" | "local" ):Promise<void> {
		const appData = this.getAppData();
		
		const settings = this.settingsController.read();

		const cloud = KvStorBackupService.build(
			settings.cloudSyncHost,
			settings.cloudSyncUserId,
			KV_STORE_APP_ID
		);
		
		if ( ( mode === "auto" || mode === "cloud" ) && cloud != null ) {
			// if we can, backup to cloud
			// else backup to local
			const cloudData = await cloud.getData();
			if ( cloudData ) {
				if ( cloudData.modified >= appData.modified ) {
					// Cloud data is newer or the same as app data, switching to local backup
					await this.backupData( "local" );
					return;
				}
			}
			
			// send to cloud
			await cloud.backup( appData);

			alert( "Backup to cloud successful" );

		}else if ( mode === "local" ) {
			const localBackup = new LocalBackupService();
			await localBackup.backup( appData );
		}

    }


	public async restoreAppData(data:ApplicationData):Promise<void> {
	
		//console.debug("this.restore", data);
		localStorage.clear();

		// Restore localStorage

		// restore last modified timestamp
		this.setChangedTimestamp( data.modified );

		// restore settings
		this.settingsController.write( new SettingsViewModel( data.settings ) );

		// restore tasks
		for (const task of data.tasks) {
			this.taskRepo.set(task.id, task);
		}

		// restore invoices
		for (const invoice of data.invoices) {
			this.invRepo.set(invoice.id, invoice);
		}
		
	}
}