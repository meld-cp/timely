import PocketBase from 'pocketbase';
import { SCRATCH_PAD_INVOICE_BUILDER } from '$lib/StorageKeys';
import type { InvoiceLineModel } from '$lib/models/InvoiceLineModel';
import type { InvoiceModel } from '$lib/models/InvoiceModel';
import type { TaskModel } from '$lib/models/TaskModel';
import type { SettingsModel } from '$lib/models/SettingsModel';
import { TaskState } from '$lib/models/TaskState';
import { FormatDate } from './formatters/FormatDate';
import { PB_URL_KEY, PB_EMAIL_KEY, DRAFT_INVOICE_ID } from '$lib/StorageKeys';

const C = {
	USERS: 'users',
	TIMELY_USER: 'timely_user',
	TIMELY_TASK: 'timely_task',
	TIMELY_INVOICE: 'timely_invoice',
	TIMELY_INVOICE_LINE: 'timely_invoice_line',
} as const;

export class PocketBaseService {
	public pb: PocketBase;
	private _timelyUserId: string = '';
	private _authUserId: string = '';
	public isInitialized: boolean = $state(false);

	constructor() {
		const url =
			typeof localStorage !== 'undefined'
				? (localStorage.getItem(PB_URL_KEY) ?? 'http://localhost:8090')
				: 'http://localhost:8090';
		this.pb = new PocketBase(url);
	}

	get isLoggedIn(): boolean {
		return this.pb.authStore.isValid && this._timelyUserId !== '';
	}

	get authUserId(): string {
		return this._authUserId;
	}

	get timelyUserId(): string {
		return this._timelyUserId;
	}

	private async resolveTimelyUserId(authUserId: string): Promise<string> {
		// First try: read timelyUser relation from the auth user record
		const userRecord = await this.pb.collection(C.USERS).getOne(authUserId);
		const fromRelation = userRecord['timelyUser'] as string;
		if (fromRelation) {
			return fromRelation;
		}
		// Second try: query timely_user where user = authUserId
		const timelyUser = await this.pb
			.collection(C.TIMELY_USER)
			.getFirstListItem(`user="${authUserId}"`);
		return timelyUser.id;
	}

	async initialize(): Promise<boolean> {
		if (!this.pb.authStore.isValid) {
			return false;
		}
		try {
			this._authUserId = this.pb.authStore.record!.id;
			this._timelyUserId = await this.resolveTimelyUserId(this._authUserId);
			this.isInitialized = true;
			return true;
		} catch {
			this.pb.authStore.clear();
			return false;
		}
	}

	async login(url: string, email: string, password: string): Promise<void> {
		localStorage.setItem(PB_URL_KEY, url);
		localStorage.setItem(PB_EMAIL_KEY, email);
		this.pb = new PocketBase(url);

		const authData = await this.pb.collection(C.USERS).authWithPassword(email, password);
		this._authUserId = authData.record.id;
		this._timelyUserId = await this.resolveTimelyUserId(this._authUserId);
		this.isInitialized = true;
	}

	logout(): void {
		this.pb.authStore.clear();
		this._timelyUserId = '';
		this._authUserId = '';
		this.isInitialized = false;
		this._knownTaskIds.clear();
		this._knownInvoiceIds.clear();
	}

	private _knownTaskIds = new Set<string>();
	private _knownInvoiceIds = new Set<string>();

	// ---- Tasks ----

	async getAllTasks(): Promise<TaskModel[]> {
		const records = await this.pb.collection(C.TIMELY_TASK).getFullList({
			filter: `user="${this._timelyUserId}"`,
			sort: '-created',
			requestKey: null
		});
		records.forEach(r => this._knownTaskIds.add(r.id));
		return records.map((r) => this.pbToTaskModel(r));
	}

	async upsertTask(task: TaskModel): Promise<void> {
		const data: Record<string, unknown> = {
			user: this._timelyUserId,
			state: task.state,
			name: task.name,
			duration: task.duration,
			affectiveDurationHours: task.affectiveDurationHours,
			timeRunStarted: task.timeRunStarted ?? 0,
			invoice: task.invoiceRefId || null,
			tags: task.tags
		};
		if (this._knownTaskIds.has(task.id)) {
			await this.pb.collection(C.TIMELY_TASK).update(task.id, data);
		} else {
			await this.pb.collection(C.TIMELY_TASK).create({ id: task.id, ...data });
			this._knownTaskIds.add(task.id);
		}
	}

	async deleteTask(id: string): Promise<void> {
		await this.pb.collection(C.TIMELY_TASK).delete(id);
		this._knownTaskIds.delete(id);
	}

	// ---- Invoices ----

	async getAllInvoices(): Promise<InvoiceModel[]> {
		const records = await this.pb.collection(C.TIMELY_INVOICE).getFullList({
			filter: `user="${this._authUserId}"`,
			sort: '-created',
			requestKey: null
		});
		records.forEach(r => this._knownInvoiceIds.add(r.id));
		const invoices: InvoiceModel[] = [];
		for (const inv of records) {
			if (inv.id === DRAFT_INVOICE_ID) continue;
			const lines = await this.pb.collection(C.TIMELY_INVOICE_LINE).getFullList({
				filter: `invoice="${inv.id}"`,
				sort: 'lineNumber',
				requestKey: null
			});
			invoices.push(this.pbToInvoiceModel(inv, lines));
		}
		return invoices;
	}

	async getInvoiceById(id: string): Promise<InvoiceModel | null> {
		const result = await this.pb.collection(C.TIMELY_INVOICE).getList(1, 1, {
			filter: `id="${id}"`,
			requestKey: null
		});
		if (result.items.length === 0) return null;
		const inv = result.items[0];
		this._knownInvoiceIds.add(inv.id);
		const lines = await this.pb.collection(C.TIMELY_INVOICE_LINE).getFullList({
			filter: `invoice="${id}"`,
			sort: 'lineNumber',
			requestKey: null
		});
		return this.pbToInvoiceModel(inv, lines);
	}

	async upsertInvoice(invoice: InvoiceModel): Promise<void> {
		const data: Record<string, unknown> = {
			user: this._authUserId,
			invoiceDate: invoice.date,
			currencyCode: invoice.currencyCode,
			number: parseInt(invoice.number) || 0,
			orderRef: invoice.orderRef,
			header: invoice.headerLines.join('\n'),
			issueTo: invoice.issueToLines.join('\n'),
			footer: invoice.footerLines.join('\n')
		};
		if (this._knownInvoiceIds.has(invoice.id)) {
			await this.pb.collection(C.TIMELY_INVOICE).update(invoice.id, data);
		} else {
			await this.pb.collection(C.TIMELY_INVOICE).create({ id: invoice.id, ...data });
			this._knownInvoiceIds.add(invoice.id);
		}
		// Replace lines: delete existing then recreate
		const existingLines = await this.pb.collection(C.TIMELY_INVOICE_LINE).getFullList({
			filter: `invoice="${invoice.id}"`,
			requestKey: null
		});
		await Promise.all(existingLines.map(line =>
			this.pb.collection(C.TIMELY_INVOICE_LINE).delete(line.id, { requestKey: null })
		));
		await Promise.all(invoice.lines.map(line =>
			this.pb.collection(C.TIMELY_INVOICE_LINE).create({
				id: line.id,
				invoice: invoice.id,
				lineNumber: line.number,
				description: line.description,
				units: line.units,
				quantity: line.quantity,
				unitCost: line.unitCost,
				task: line.extRefId || null
			}, { requestKey: null })
		));
	}

	async deleteAllData(): Promise<void> {
		// Delete tasks first (they reference invoices)
		const tasks = await this.pb.collection(C.TIMELY_TASK).getFullList({
			filter: `user="${this._timelyUserId}"`,
			requestKey: null
		});
		await Promise.all(tasks.map(t => this.pb.collection(C.TIMELY_TASK).delete(t.id, { requestKey: null })));
		this._knownTaskIds.clear();

		// Delete invoices (cascades to lines via deleteInvoice)
		const invoices = await this.pb.collection(C.TIMELY_INVOICE).getFullList({
			filter: `user="${this._authUserId}"`,
			requestKey: null
		});
		for (const inv of invoices) {
			await this.deleteInvoice(inv.id);
		}
	}

	async deleteInvoice(id: string): Promise<void> {
		const lines = await this.pb.collection(C.TIMELY_INVOICE_LINE).getFullList({
			filter: `invoice="${id}"`,
			requestKey: null
		});
		for (const line of lines) {
			await this.pb.collection(C.TIMELY_INVOICE_LINE).delete(line.id);
		}
		await this.pb.collection(C.TIMELY_INVOICE).delete(id);
		this._knownInvoiceIds.delete(id);
	}

	// ---- Settings (timely_user) ----

	async getSettings(): Promise<SettingsModel> {
		const record = await this.pb.collection(C.TIMELY_USER).getOne(this._timelyUserId);
		const logoFilename = record['logo'] as string;
		const logoData = logoFilename
			? this.pb.files.getURL(record as Parameters<typeof this.pb.files.getURL>[0], logoFilename)
			: undefined;
		return {
			label: (record['companyName'] as string) ?? undefined,
			localeCode: (record['localeCode'] as string) ?? undefined,
			address: (record['address'] as string) ?? undefined,
			logoData,
			scratchPads: { [SCRATCH_PAD_INVOICE_BUILDER]: (record['scratchPad'] as string) ?? '' },
			nextInvoiceNumber: (record['nextInvoiceNumber'] as number) ?? 1000,
			defaultInvoiceHeader: (record['defaultInvoiceHeader'] as string) ?? undefined,
			defaultInvoiceCurrencyCode: (record['defaultInvoiceCurrencyCode'] as string) ?? undefined,
			defaultInvoiceFooter: (record['defaultInvoiceFooter'] as string) ?? undefined,
			defaultHourlyRate: (record['defaultHourlyRate'] as number) ?? 0
		};
	}

	async saveSettings(settings: SettingsModel): Promise<void> {
		const data: Record<string, unknown> = {
			companyName: settings.label ?? '',
			localeCode: settings.localeCode ?? '',
			address: settings.address ?? '',
			scratchPad: settings.scratchPads?.[SCRATCH_PAD_INVOICE_BUILDER] ?? '',
			nextInvoiceNumber: settings.nextInvoiceNumber ?? 1000,
			defaultInvoiceHeader: settings.defaultInvoiceHeader ?? '',
			defaultInvoiceCurrencyCode: settings.defaultInvoiceCurrencyCode ?? '',
			defaultInvoiceFooter: settings.defaultInvoiceFooter ?? '',
			defaultHourlyRate: settings.defaultHourlyRate ?? 0
		};
		if (settings.logoData?.startsWith('data:')) {
			data['logo'] = this.dataURLToFile(settings.logoData, 'logo');
		}
		await this.pb.collection(C.TIMELY_USER).update(this._timelyUserId, data);
	}

	private dataURLToFile(dataUrl: string, filename: string): File {
		const [header, base64] = dataUrl.split(',');
		const mime = header.match(/:(.*?);/)?.[1] ?? 'image/png';
		const bytes = atob(base64);
		const arr = new Uint8Array(bytes.length);
		for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i);
		return new File([arr], filename, { type: mime });
	}

	// ---- Converters ----

	private pbToTaskModel(r: Record<string, unknown>): TaskModel {
		return {
			id: r['id'] as string,
			state: r['state'] as TaskState,
			date: (r['created'] as string)?.substring(0, 10) ?? FormatDate.toInputDateValue(new Date()),
			name: r['name'] as string,
			duration: (r['duration'] as number) ?? 0,
			affectiveDurationHours: (r['affectiveDurationHours'] as number) ?? 0,
			timeRunStarted: (r['timeRunStarted'] as number) || undefined,
			invoiceRefId: (r['invoice'] as string) ?? '',
			tags: Array.isArray(r['tags']) ? (r['tags'] as string[]) : []
		};
	}

	private pbToInvoiceModel(
		inv: Record<string, unknown>,
		lines: Record<string, unknown>[]
	): InvoiceModel {
		const header = (inv['header'] as string) ?? '';
		const issueTo = (inv['issueTo'] as string) ?? '';
		const footer = (inv['footer'] as string) ?? '';
		return {
			id: inv['id'] as string,
			currencyCode: (inv['currencyCode'] as string) ?? 'USD',
			number: String(inv['number'] ?? ''),
			date:
				(inv['invoiceDate'] as string)?.substring(0, 10) ??
				(inv['created'] as string)?.substring(0, 10) ??
				FormatDate.toInputDateValue(new Date()),
			orderRef: (inv['orderRef'] as string) ?? '',
			headerLines: header ? header.split('\n') : [],
			issueToLines: issueTo ? issueTo.split('\n') : [],
			footerLines: footer ? footer.split('\n') : [],
			lines: lines.map((l) => this.pbToLineModel(l))
		};
	}

	private pbToLineModel(l: Record<string, unknown>): InvoiceLineModel {
		return {
			id: l['id'] as string,
			extRefId: (l['task'] as string) || undefined,
			number: (l['lineNumber'] as number) ?? 0,
			description: (l['description'] as string) ?? '',
			units: (l['units'] as string) ?? '',
			quantity: (l['quantity'] as number) ?? 0,
			unitCost: (l['unitCost'] as number) ?? 0
		};
	}
}
