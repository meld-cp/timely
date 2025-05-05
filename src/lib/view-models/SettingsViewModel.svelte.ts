import type { ScratchPadsDictionary, SettingsModel } from "$lib/models/SettingsModel";

export class SettingsViewModel{

	public localeCode:string = $state(navigator.language)
	public address?:string = $state()
	public logoData?:string = $state()
	public nextInvoiceNumber:number = $state(1000);
	public scratchPads:ScratchPadsDictionary = $state({});
	public invoiceHeader?:string = $state();
	public defaultInvoiceCurrencyCode:string = $state("USD");
	public defaultInvoiceFooter?:string = $state();

	constructor( m?:SettingsModel ){
		if (m){
			this.applyModel(m);
		}
	}

	public applyModel(m: SettingsModel) {
		this.localeCode = m.localeCode ?? navigator.language;
		this.address = m.address ?? "";
		this.logoData = m.logoData;
		this.nextInvoiceNumber = m.nextInvoiceNumber ?? 1000;
		this.invoiceHeader = m.invoiceHeader;
		this.defaultInvoiceCurrencyCode = m.defaultInvoiceCurrencyCode ?? "USD";
		this.defaultInvoiceFooter = m.defaultInvoiceFooter;
		this.scratchPads = m.scratchPads ?? {};
	}

	public getModel(): SettingsModel {
		return {
			localeCode: this.localeCode,
			address: this.address,
			logoData: this.logoData,
			nextInvoiceNumber: this.nextInvoiceNumber,
			invoiceHeader: this.invoiceHeader,
			defaultInvoiceCurrencyCode: this.defaultInvoiceCurrencyCode,
			defaultInvoiceFooter: this.defaultInvoiceFooter,
			scratchPads: this.scratchPads,
		};
	}
}
