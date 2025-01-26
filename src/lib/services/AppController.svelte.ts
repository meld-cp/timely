import { APP_LOCALSTORE_INVOICES_NAME, APP_LOCALSTORE_SETTINGS_NAME, APP_LOCALSTORE_TASKS_NAME } from "$lib/constants";
import type { ApplicationData } from "$lib/models/ApplicationData";
import type { InvoiceModel } from "$lib/models/InvoiceModel";
import type { TaskModel } from "$lib/models/TaskModel";
import { SettingsViewModel } from "$lib/view-models/SettingsViewModel.svelte";
import { InvoiceViewModel } from "$lib/view-models/InvoiceViewModel.svelte";
import { TaskViewModel } from "$lib/view-models/TaskViewModel.svelte";
import { LocalStorageController } from "./LocalStorageController";
import { SettingsController } from "./SettingsController";
import type { SettingsModel } from "$lib/models/SettingsModel";

export class ApplicationController {
	private settingsRepo: LocalStorageController<SettingsModel>;
	public taskRepo:LocalStorageController<TaskModel>;
	public invRepo:LocalStorageController<InvoiceModel>;
	public settingsController:SettingsController;

	constructor(){
		const localStorageOptions = {
			onModifiedCallback: () => this.setChangedTimestamp()
		};
		this.settingsRepo = new LocalStorageController<SettingsModel>(APP_LOCALSTORE_SETTINGS_NAME, localStorageOptions);
		this.taskRepo = new LocalStorageController<TaskModel>(APP_LOCALSTORE_TASKS_NAME, localStorageOptions);
		this.invRepo = new LocalStorageController<InvoiceModel>(APP_LOCALSTORE_INVOICES_NAME, localStorageOptions);
		this.settingsController = new SettingsController( this.settingsRepo);
	}

	public async getTasks():Promise<TaskViewModel[]>{
		return this.taskRepo.getAll().map(t => new TaskViewModel(t));
	}

	public async getInvoices():Promise<InvoiceViewModel[]>{
		return this.invRepo.getAll().map(i => new InvoiceViewModel(i));
	}

	public getAppData(): ApplicationData {
		return {
			modified: this.getDataModifiedTimestamp() ?? 0,
			settings: this.settingsController.read().getModel(),
			tasks: this.taskRepo.getAll(),
			invoices: this.invRepo.getAll()
		}
    }

	private setChangedTimestamp(){
		localStorage.setItem( "_modified", new Date().valueOf().toString() );
	}
	
	public getDataModifiedTimestamp():number | null {
		const value = localStorage.getItem( "_modified" );
		if (value === null){
			return null;
		}
		const num = parseInt(value);
		if (isNaN(num)){
			return null;
		}
		return num;
	}

	public async restoreAppData(data:ApplicationData):Promise<void> {
	
		console.debug("this.restore", data);
		localStorage.clear();

		// Restore localStorage

		// restore last modified timestamp


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