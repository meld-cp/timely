import { LocalStorageController } from "./LocalStorageController";
import type { InvoiceModel } from "$lib/models/InvoiceModel";
import type { TaskModel } from "$lib/models/TaskModel";
import { SettingsController } from "./SettingsController";

export const taskRepo = new LocalStorageController<TaskModel>("tasks");

export const invRepo = new LocalStorageController<InvoiceModel>("invoices");
export const invPreviewsRepo = new LocalStorageController<InvoiceModel>("invoice-previews");

export const settingsController = new SettingsController();
