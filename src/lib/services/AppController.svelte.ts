import type { InvoiceModel } from '$lib/models/InvoiceModel';
import type { TaskModel } from '$lib/models/TaskModel';
import { SettingsViewModel } from '$lib/view-models/SettingsViewModel.svelte';
import { InvoiceViewModel } from '$lib/view-models/InvoiceViewModel.svelte';
import { TaskViewModel } from '$lib/view-models/TaskViewModel.svelte';
import type { PocketBaseService } from './PocketBaseService.svelte';
import type { ApplicationData } from '$lib/models/ApplicationData';

export class ApplicationController {
	public settings: SettingsViewModel = $state(new SettingsViewModel());

	constructor(private pbService: PocketBaseService) {}

	get draftInvoiceId(): string {
		return this.pbService.draftInvoiceId;
	}

	async initialize(): Promise<void> {
		const settingsModel = await this.pbService.getSettings();
		this.settings = new SettingsViewModel(settingsModel);
	}

	public saveSettings(): void {
		this.pbService.saveSettings(this.settings.getModel());
	}

	public getScratchPad(name: string): string {
		return this.settings.scratchPads[name] ?? '';
	}

	public setScratchPad(name: string, text: string): void {
		this.settings.scratchPads[name] = text;
		this.saveSettings();
	}

	public incrementNextInvoiceNumber(): void {
		this.settings.nextInvoiceNumber++;
		this.saveSettings();
	}

	public async getTasks(): Promise<TaskViewModel[]> {
		const models = await this.pbService.getAllTasks();
		return models.map((m) => new TaskViewModel(m));
	}

	public async getInvoices(): Promise<InvoiceViewModel[]> {
		const models = await this.pbService.getAllInvoices();
		return models.map((m) => new InvoiceViewModel(m));
	}

	public async getInvoiceById(id: string): Promise<InvoiceViewModel | null> {
		const model = await this.pbService.getInvoiceById(id);
		return model ? new InvoiceViewModel(model) : null;
	}

	public saveTask(model: TaskModel): void {
		this.pbService.upsertTask(model).catch(e => console.error('saveTask failed:', e, JSON.stringify(e?.data)));
	}

	public deleteTask(id: string): void {
		this.pbService.deleteTask(id).catch(e => console.error('deleteTask failed:', e));
	}

	public saveInvoice(model: InvoiceModel): Promise<void> {
		return this.pbService.upsertInvoice(model).catch(e => console.error('saveInvoice failed:', e, JSON.stringify(e?.data)));
	}

	public deleteInvoice(id: string): void {
		this.pbService.deleteInvoice(id).catch(e => console.error('deleteInvoice failed:', e));
	}

	public async getAppData(): Promise<ApplicationData> {
		const [tasks, invoices] = await Promise.all([
			this.pbService.getAllTasks(),
			this.pbService.getAllInvoices(),
		]);
		const settings = this.settings.getModel();
		// Convert logo URL to data URL so backups are self-contained
		if (settings.logoData?.startsWith('http')) {
			settings.logoData = await fetch(settings.logoData)
				.then(r => r.blob())
				.then(blob => new Promise<string>((resolve, reject) => {
					const reader = new FileReader();
					reader.onload = () => resolve(reader.result as string);
					reader.onerror = reject;
					reader.readAsDataURL(blob);
				}))
				.catch(() => settings.logoData);
		}
		return { modified: Date.now(), settings, tasks, invoices };
	}
}
