export interface ScratchPadsDictionary{
	[key: string]:string;
};

export type SettingsModel = {
	localeCode?:string;
	address?:string;
	logoData?: string;
	nextInvoiceNumber?: number;
	defaultInvoiceHeader?:string;
	defaultInvoiceCurrencyCode?: string;
	defaultInvoiceFooter?: string;
	scratchPads?:ScratchPadsDictionary;
	
	cloudSyncHost?:string;
	cloudSyncUserId?:string;
	cloudSyncTimestamp?:number;
};
