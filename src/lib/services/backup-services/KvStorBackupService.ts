import type { ApplicationData } from "$lib/models/ApplicationData";
import type { InvoiceModel } from "$lib/models/InvoiceModel";
import type { SettingsModel } from "$lib/models/SettingsModel";
import type { TaskModel } from "$lib/models/TaskModel";
import type { IBackupService } from "./IBackupService";
import { KvStorClient } from "../kvstor-client";

export class KvStorBackupService implements IBackupService {

	constructor(
		public host: string,
		public userId: string,
		public appId: string
	) { }

	public static build(host?: string, userId?: string, appId?: string): KvStorBackupService | null {
		if (host != undefined
			&& (
				host.startsWith("https://")
				|| host.startsWith("http://")
			)
			&& userId != undefined
			&& userId.length > 0
			&& appId != undefined
			&& appId.length > 0) {
			return new KvStorBackupService(
				host,
				userId,
				appId
			);
		};
		return null;
	}

	async backup(data: ApplicationData): Promise<void> {
		const kv = new KvStorClient(
			this.host,
			this.userId,
			this.appId
		);

		// save settings
		await kv.setItem("settings", "default", JSON.stringify(data.settings));

		// save tasks
		const taskIds = data.tasks.map((task) => task.id);
		await kv.setItem("tasks", "ids", JSON.stringify(taskIds));
		for (const task of data.tasks) {
			await kv.setItem("tasks", task.id, JSON.stringify(task));
		}

		// save invoices
		const invoiceIds = data.invoices.map((invoice) => invoice.id);
		await kv.setItem("invoices", "ids", JSON.stringify(invoiceIds));
		for (const invoice of data.invoices) {
			await kv.setItem("invoices", invoice.id, JSON.stringify(invoice));
		}

	}

	async getData(): Promise<ApplicationData | null> {
		const kv = new KvStorClient(
			this.host,
			this.userId,
			this.appId
		);

		// get settings
		const settingsJson = await kv.getItem("settings", "default");
		const settings = JSON.parse(settingsJson) as SettingsModel;

		// get tasks
		const taskIdsJson = await kv.getItem("tasks", "ids");
		const taskIds = JSON.parse(taskIdsJson) as string[];
		const tasks = await Promise.all(taskIds.map(async (id) => {
			const taskJson = await kv.getItem("tasks", id);
			return JSON.parse(taskJson) as TaskModel;
		}));

		// get invoices
		const invoiceIdsJson = await kv.getItem("invoices", "ids");
		const invoiceIds = JSON.parse(invoiceIdsJson) as string[];
		const invoices = await Promise.all(invoiceIds.map(async (id) => {
			const invoiceJson = await kv.getItem("invoices", id);
			return JSON.parse(invoiceJson) as InvoiceModel;
		}));


		return {
			settings,
			tasks,
			invoices
		};

	}

}
