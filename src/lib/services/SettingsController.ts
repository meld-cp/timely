import { APP_LOCALSTORE_SETTINGS_NAME } from "$lib/constants";
import { SettingsViewModel } from "$lib/view-models/SettingsViewModel.svelte";
import type { SettingsModel } from "../models/SettingsModel";

export class SettingsController{

	private defaultSettings:SettingsModel = {
		localeCode : navigator.language,
		nextInvoiceNumber : 1000,
		defaultInvoiceCurrencyCode : "USD",
		scratchPads : {},
	};


	public modify( fn: (settings:SettingsViewModel) => void ){
		const settings = this.read();
		fn(settings);
		this.write(settings);
	}

	public read() : SettingsViewModel{
		
		const json = localStorage.getItem(APP_LOCALSTORE_SETTINGS_NAME);
		
		if (!json){
			return new SettingsViewModel(this.defaultSettings);
		}
		
		return new SettingsViewModel( JSON.parse( json ) as SettingsModel || this.defaultSettings );
	}

	public write(settings: SettingsViewModel){
		const json = JSON.stringify( settings.getModel() );
		localStorage.setItem(APP_LOCALSTORE_SETTINGS_NAME, json);
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

