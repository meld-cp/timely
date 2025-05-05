interface ScratchPadsDictionary{
	[key: string]:string;
};

export type SettingsModel = {
	logoData?: string | undefined;
	nextInvoiceNumber: number;
	defaultInvoiceFooter?: string | undefined;
	scratchPads:ScratchPadsDictionary;
};
