import type { SettingsModel } from "../models/SettingsModel";

export class SettingsController{

	private defaultSettings:SettingsModel = {
		nextInvoiceNumber : 1000,
	};


	public read() : SettingsModel{
		
		const json = localStorage.getItem("settings");
		
		if (!json){
			return this.defaultSettings;
		}
		
		return JSON.parse( json ) as SettingsModel || this.defaultSettings;
	}

	public write( settings: SettingsModel){
		const json = JSON.stringify( settings );
		localStorage.setItem("settings", json);
	}
}

