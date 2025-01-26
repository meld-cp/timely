import type { ApplicationData } from "$lib/models/ApplicationData";
import type { InvoiceModel } from "$lib/models/InvoiceModel";
import type { SettingsModel } from "$lib/models/SettingsModel";
import type { TaskModel } from "$lib/models/TaskModel";
import type { IBackupService } from "./IBackupService";
import { KvStorClient } from "../kvstor-client";

const KEY_SETTINGS_DEFAULT = "default";
const KEY_DATA_TIMESTAMP = "dataTimestamp";
const KEY_ID_LIST = "ids";

export class KvStorBackupService implements IBackupService {

	public static readonly BUCKET_ID_META = "meta";
	public static readonly BUCKET_ID_SETTINGS = "settings";
	public static readonly BUCKET_ID_TASKS = "tasks";
	public static readonly BUCKET_ID_INVOICES = "invoices";
	

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

		//save last modified
		await kv.setItem(
			KvStorBackupService.BUCKET_ID_META,
			KEY_DATA_TIMESTAMP,
			JSON.stringify(data.modified)
		);

		// save settings
		await kv.setItem(
			KvStorBackupService.BUCKET_ID_SETTINGS,
			KEY_SETTINGS_DEFAULT,
			JSON.stringify(data.settings)
		);

		// save tasks
		const taskIds = data.tasks.map((task) => task.id);
		await kv.setItem(
			KvStorBackupService.BUCKET_ID_TASKS,
			KEY_ID_LIST,
			JSON.stringify(taskIds)
		);
		for (const task of data.tasks) {
			await kv.setItem(
				KvStorBackupService.BUCKET_ID_TASKS,
				task.id,
				JSON.stringify(task)
			);
		}

		// save invoices
		const invoiceIds = data.invoices.map((invoice) => invoice.id);
		await kv.setItem(
			KvStorBackupService.BUCKET_ID_INVOICES,
			KEY_ID_LIST,
			JSON.stringify(invoiceIds)
		);
		for (const invoice of data.invoices) {
			await kv.setItem(
				KvStorBackupService.BUCKET_ID_INVOICES,
				invoice.id,
				JSON.stringify(invoice)
			);
		}

	}

	async getStoredValueOrDefault<T>( kv:KvStorClient, bucketId:string, key:string, defaultValue:T ):Promise<T> {
		try{
			const jsonValue = await kv.getItem( bucketId, key );
			if (jsonValue == undefined) {
				return defaultValue;
			}
			const jsonObj = JSON.parse(jsonValue) as T;
			if (jsonObj == undefined) {
				return defaultValue
			}
			return jsonObj;
		}catch (e) {
			return defaultValue;
		}
	}

	async getStoredValueOrThrow<T>( kv:KvStorClient, bucketId:string, key:string ):Promise<T> {
		try{
			const jsonValue = await kv.getItem( bucketId, key );
			const jsonObj = JSON.parse(jsonValue) as T;
			if (jsonObj == undefined) {
				throw new Error( `Object is undefined after parsing and casting. JSON: ${jsonValue}`);
			}
			return jsonObj;
		}catch (e) {
			throw new Error( `Unable to get stored value for key ${key} in bucket ${bucketId}. ${e}` );
		}
	}

	async getData(): Promise<ApplicationData | null> {
		const kv = new KvStorClient(
			this.host,
			this.userId,
			this.appId
		);

		// get last modified
		const lastModified = await this.getStoredValueOrDefault<number>(
			kv,
			KvStorBackupService.BUCKET_ID_META,
			KEY_DATA_TIMESTAMP,
			0
		);

		// get settings
		let settings:SettingsModel = await this.getStoredValueOrThrow<SettingsModel>(
			kv,
			KvStorBackupService.BUCKET_ID_SETTINGS,
			KEY_SETTINGS_DEFAULT
		);

		// get tasks
		const taskIds = await this.getStoredValueOrDefault<string[]>(
			kv,
			KvStorBackupService.BUCKET_ID_TASKS,
			KEY_ID_LIST,
			[]
		);
		const tasks:TaskModel[] = [];
		for await (const id of taskIds) {
			try {
				const task = await this.getStoredValueOrThrow<TaskModel>( kv, KvStorBackupService.BUCKET_ID_TASKS, id );
				tasks.push(task);
			} catch (e) {
				console.error( e );
			}
		}
		
		// get invoices
		const invoiceIds = await this.getStoredValueOrDefault<string[]>(
			kv,
			KvStorBackupService.BUCKET_ID_INVOICES,
			KEY_ID_LIST,
			[]
		);
		const invoices:InvoiceModel[] = [];
		for await (const id of invoiceIds) {
			try {
				const inv = await this.getStoredValueOrThrow<InvoiceModel>( kv, KvStorBackupService.BUCKET_ID_INVOICES, id );
				invoices.push(inv);
			} catch (e) {
				console.error( e );
			}
		}

		return {
			modified: lastModified,
			settings: settings,
			tasks: tasks,
			invoices: invoices
		};

	}

}
