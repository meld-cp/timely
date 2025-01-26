import type { InvoiceModel } from "./InvoiceModel";
import type { SettingsModel } from "./SettingsModel";
import type { TaskModel } from "./TaskModel";

export type ApplicationData = {
	modified: number;
	settings: SettingsModel;
	tasks: TaskModel[];
	invoices: InvoiceModel[];
};
