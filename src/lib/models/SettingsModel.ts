export interface ScratchPadsDictionary{
	[key: string]:string;
};

export type SettingsModel = {
	localeCode?:string;
	address?:string;
	logoData?: string;
	nextInvoiceNumber?: number;
	invoiceHeader?:string;
	defaultInvoiceCurrencyCode?: string;
	defaultInvoiceFooter?: string;
	scratchPads?:ScratchPadsDictionary;
};
