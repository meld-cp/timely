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
		
		const json = localStorage.getItem("settings");
		
		if (!json){
			return new SettingsViewModel(this.defaultSettings);
		}
		
		return new SettingsViewModel( JSON.parse( json ) as SettingsModel || this.defaultSettings );
	}

	public write(settings: SettingsViewModel){
		const json = JSON.stringify( settings.getModel() );
		//console.log(json)
		localStorage.setItem("settings", json);
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

