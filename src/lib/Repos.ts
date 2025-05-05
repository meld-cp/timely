import { LocalStorageController } from "./LocalStoragController";
import type { InvoiceModel, TaskModel } from "./Models";

export const taskRepo = new LocalStorageController<TaskModel>("tasks");

export const invRepo = new LocalStorageController<InvoiceModel>("invoices");