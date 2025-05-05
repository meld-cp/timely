import { LocalStorageController } from "./LocalStorageController";
import type { InvoiceModel, TaskModel } from "../models/Models";

export const taskRepo = new LocalStorageController<TaskModel>("tasks");

export const invRepo = new LocalStorageController<InvoiceModel>("invoices");