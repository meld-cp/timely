import { SettingsViewModel } from "$lib/view-models/SettingsViewModel.svelte";
import type { SettingsModel } from "../models/SettingsModel";
import { LocalStorageController } from "./LocalStorageController";

export class SettingsController{
	
	private static defaultSettings:SettingsModel = {
		localeCode : "en-US",
		
		nextInvoiceNumber : 1000,
		defaultInvoiceCurrencyCode : "USD",
		
		scratchPads : {},
	};
	
	constructor( private repo:LocalStorageController<SettingsModel> ){}

	public modify( fn: (settings:SettingsViewModel) => void ){
		const settings = this.read();
		fn(settings);
		this.write(settings);
	}

	public read() : SettingsViewModel{

		const data = this.repo.get("")
		if (!data){
			return new SettingsViewModel(SettingsController.defaultSettings);
		}
		
		return new SettingsViewModel( data );
	}

	public write(settings: SettingsViewModel){
		this.repo.set("", settings.getModel());
	}

    public incrementNextInvoiceNumber() {
		this.modify(settings =>{
			settings.nextInvoiceNumber++;
		});
    }


	public getScratchPad(name: string): string {
		const settings = this.read();
		return settings.scratchPads[name] ?? "";
    }

	public setScratchPad(name: string, text:string){
		this.modify(( settings ) =>{
			settings.scratchPads[name] = text;
		})
	}

}

