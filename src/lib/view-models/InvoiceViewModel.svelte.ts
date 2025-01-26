import type { InvoiceModel } from "$lib/models/InvoiceModel";
import { FormatDate } from "$lib/services/formatters/FormatDate";
import { InvoiceLineViewModel } from "./InvoiceLineViewModel.svelte";


export class InvoiceViewModel {

	public id = $state(crypto.randomUUID().toString());
	public currencyCode: string = $state("USD");

	public number: string = $state("");
	public date: string = $state(FormatDate.toInputDateValue(new Date()));
	public orderRef: string = $state("");

	public headerLines: string[] = $state([]);
	public issueToLines: string[] = $state([]);
	public footerLines: string[] = $state([]);

	public nextLineNumber = $state(10);
	public lines: InvoiceLineViewModel[] = $state([]);

	subtotal: number = $derived(this.lines.reduce((p, line) => p + line.total, 0));
	taxTotal: number = $derived(this.lines.reduce((p, line) => p + line.tax, 0));
	grandTotal: number = $derived(this.subtotal + this.taxTotal);

	constructor(m?: InvoiceModel) {
		if (m) {
			this.applyModel(m);
		}
	}

	getModel(): InvoiceModel {
		return {
			id: this.id,
			currencyCode: this.currencyCode,
			number: this.number,
			date: this.date,
			orderRef: this.orderRef,
			headerLines: this.headerLines,
			issueToLines: this.issueToLines,
			lines: this.lines.map(l => l.getModel()),
			footerLines: this.footerLines,
		};
	}

	applyModel(m: InvoiceModel) {
		this.id = m.id;
		this.currencyCode = m.currencyCode;
		this.number = m.number;
		this.date = m.date;
		this.orderRef = m.orderRef;
		this.headerLines = m.headerLines ?? [];
		this.issueToLines = m.issueToLines;
		this.lines = m.lines.map(l => new InvoiceLineViewModel(l));
		this.footerLines = m.footerLines ?? [];
	}

	get headerLinesAsText() {
		return this.headerLines.join("\n");
	}

	set headerLinesAsText(v: string) {
		this.headerLines = v.split("\n");
	}

	get issueToAsText() {
		return this.issueToLines.join("\n");
	}

	set issueToAsText(v: string) {
		this.issueToLines = v.split("\n");
	}

	get footnoteAsText() {
		return this.footerLines.join("\n");
	}

	set footnoteAsText(v: string) {
		this.footerLines = v.split("\n");
	}

	public containsExtRefId(extRefId: string): boolean {
		const contains = this.lines.some(l => l.extRefId === extRefId);
		return contains;
	}

	public removeLineWithId(id: string): void {
		this.lines = this.lines.filter(l => l.id != id);
	}

	public removeLineWithExtRefId(extRefId: string) {
		this.lines = this.lines.filter(l => l.extRefId != extRefId);
	}

	public addLine(line?: InvoiceLineViewModel): string {
		const m = line ?? new InvoiceLineViewModel();

		m.number = this.nextLineNumber;
		this.nextLineNumber += 10;
		this.lines.push(m);

		return m.id;
	}

	public sortAndRenumberLines() {
		this.lines.sort((a, b) => a.number - b.number);
		this.renumberLines();
	}

	public renumberLines() {
		let lineNumber = 10;
		for (let i = 0; i < this.lines.length; i++) {
			const line = this.lines[i];
			line.number = lineNumber;
			lineNumber += 10;
		}
		this.nextLineNumber = lineNumber;
	}
}
