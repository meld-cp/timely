import type { ScratchPadsDictionary, SettingsModel } from "$lib/models/SettingsModel";

export class SettingsViewModel{

	public label?:string = $state()
	public localeCode:string = $state(navigator.language)
	public address?:string = $state()
	public logoData?:string = $state()
	
	public scratchPads:ScratchPadsDictionary = $state({});
	
	public nextInvoiceNumber:number = $state(1000);
	public defaultInvoiceHeader?:string = $state();
	public defaultInvoiceCurrencyCode:string = $state("USD");
	public defaultInvoiceFooter?:string = $state();
	
	public cloudSyncHost?:string = $state();
	public cloudSyncUserId?:string = $state();

	constructor( m?:SettingsModel ){
		if (m){
			this.applyModel(m);
		}
	}

	public applyModel(m: SettingsModel) {
		this.label = m.label;
		this.localeCode = m.localeCode ?? navigator.language;
		this.address = m.address ?? "";
		this.logoData = m.logoData;
		
		this.scratchPads = m.scratchPads ?? {};
		
		this.nextInvoiceNumber = m.nextInvoiceNumber ?? 1000;
		this.defaultInvoiceHeader = m.defaultInvoiceHeader;
		this.defaultInvoiceCurrencyCode = m.defaultInvoiceCurrencyCode ?? "USD";
		this.defaultInvoiceFooter = m.defaultInvoiceFooter;
		
		this.cloudSyncHost = m.cloudSyncHost;
		this.cloudSyncUserId = m.cloudSyncUserId;
		
	}

	public getModel(): SettingsModel {
		return {
			label: this.label,
			localeCode: this.localeCode,
			address: this.address,
			logoData: this.logoData,
			
			scratchPads: this.scratchPads,
			
			nextInvoiceNumber: this.nextInvoiceNumber,
			defaultInvoiceHeader: this.defaultInvoiceHeader,
			defaultInvoiceCurrencyCode: this.defaultInvoiceCurrencyCode,
			defaultInvoiceFooter: this.defaultInvoiceFooter,

			cloudSyncHost: this.cloudSyncHost,
			cloudSyncUserId: this.cloudSyncUserId,
		};
	}
}
