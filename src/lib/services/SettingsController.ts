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

}

