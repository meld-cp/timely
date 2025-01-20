class SettingsController{

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

type SettingsModel = {
    logoData?: string | undefined;
    nextInvoiceNumber:number;
    defaultInvoiceFooter?: string | undefined;
}


export const settingsController = new SettingsController();