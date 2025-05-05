import { APP_LOCALSTORE_INVOICES_NAME, APP_LOCALSTORE_TASKS_NAME } from "$lib/constants";
import type { ApplicationData } from "$lib/models/ApplicationData";
import type { InvoiceModel } from "$lib/models/InvoiceModel";
import type { TaskModel } from "$lib/models/TaskModel";
import { SettingsViewModel } from "$lib/view-models/SettingsViewModel.svelte";
import { InvoiceViewModel } from "$lib/view-models/InvoiceViewModel.svelte";
import { TaskViewModel } from "$lib/view-models/TaskViewModel.svelte";
import { LocalStorageController } from "./LocalStorageController";
import { SettingsController } from "./SettingsController";

export class ApplicationController {
	public taskRepo = new LocalStorageController<TaskModel>(APP_LOCALSTORE_TASKS_NAME);
	public invRepo = new LocalStorageController<InvoiceModel>(APP_LOCALSTORE_INVOICES_NAME);
	public settingsController = new SettingsController();

	public settings:SettingsViewModel = $state( this.settingsController.read() )

	// public async getSettings():Promise<SettingsViewModel>{
	// 	return this.settingsController.read();
	// }

	public async getTasks():Promise<TaskViewModel[]>{
		return this.taskRepo.getAll().map(t => new TaskViewModel(t));
	}

	public async getInvoices():Promise<InvoiceViewModel[]>{
		return this.invRepo.getAll().map(i => new InvoiceViewModel(i));
	}

	public getAppData(): ApplicationData {
		return {
			settings: this.settingsController.read().getModel(),
			tasks: this.taskRepo.getAll(),
			invoices: this.invRepo.getAll()
		}
    }

	public async restoreAppData(data:ApplicationData):Promise<void> {
	
		console.debug("this.restore", data);
		localStorage.clear();

		// Restore localStorage

		// restore settings
		const settingsController = new SettingsController();
		settingsController.write( new SettingsViewModel( data.settings ) );

		// restore tasks
		const taskRepo = new LocalStorageController<TaskModel>(APP_LOCALSTORE_TASKS_NAME);
		for (const task of data.tasks) {
			taskRepo.set(task.id, task);
		}

		// restore invoices
		const invRepo = new LocalStorageController<InvoiceModel>(APP_LOCALSTORE_INVOICES_NAME);
		for (const invoice of data.invoices) {
			invRepo.set(invoice.id, invoice);
		}
		
	}
}