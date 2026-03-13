export interface ScratchPadsDictionary{
	[key: string]:string;
};

export type SettingsModel = {
	label?:string;
	localeCode?:string;
	address?:string;
	logoData?: string;
	
	scratchPads?:ScratchPadsDictionary;

	nextInvoiceNumber?: number;
	defaultInvoiceHeader?:string;
	defaultInvoiceCurrencyCode?: string;
	defaultInvoiceFooter?: string;
	defaultHourlyRate?: number;
	
	cloudSyncHost?:string;
	cloudSyncUserId?:string;
	
};
