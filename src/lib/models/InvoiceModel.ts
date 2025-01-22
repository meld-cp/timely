import type { InvoiceLineModel } from "./InvoiceLineModel";


export type InvoiceModel = {
	id: string;
	currencyCode: string;
	number: string;
	date: string;
	orderRef: string;

	issueToLines: string[];
	footerLines: string[];

	lines: InvoiceLineModel[];
};
