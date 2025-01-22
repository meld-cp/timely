interface ScratchPadsDictionary{
	[key: string]:string;
};

export type SettingsModel = {
	localeCode?:string;
	address:string;
	logoData?: string;
	nextInvoiceNumber: number;
	invoiceHeader:string;
	defaultInvoiceFooter?: string;
	scratchPads:ScratchPadsDictionary;
};
