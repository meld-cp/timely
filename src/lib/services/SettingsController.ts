import type { SettingsModel } from "../models/SettingsModel";

export class SettingsController{

	private defaultSettings:SettingsModel = {
		nextInvoiceNumber : 1000,
		scratchPads : {},
	};


	public modify( fn: (settings:SettingsModel) => void ){
		const settings = this.read();
		fn(settings);
		this.write(settings);
	}

	public read() : SettingsModel{
		
		const json = localStorage.getItem("settings");
		
		if (!json){
			return this.defaultSettings;
		}
		
		return JSON.parse( json ) as SettingsModel || this.defaultSettings;
	}

	public write(settings: SettingsModel){
		const json = JSON.stringify( settings );
		console.log(json)
		localStorage.setItem("settings", json);
	}

	public getScratchPad(name: string): string {
		const settings = this.read();
		if (!settings.scratchPads){
			settings.scratchPads = {};
			this.write(settings);
		}
		return settings.scratchPads[name] ?? "";
    }

	public setScratchPad(name: string, text:string){
		this.modify(( settings ) =>{
			if (!settings.scratchPads){
				settings.scratchPads = {};
			}
			settings.scratchPads[name] = text;
		})
	}

}
