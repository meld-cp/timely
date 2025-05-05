import { settingsController } from "./SettingsController.svelte";
import { InvoiceLineModel, InvoiceModel } from "./Types.svelte";

class InvoiceController{

    build():InvoiceModel{
        
        const settings = settingsController.read();
        
        const inv = new InvoiceModel();

        inv.number = `${settings.nextInvoiceNumber}`
        inv.footerLines = settings.defaultInvoiceFooter?.split("\n") ?? []
        
        //settings.nextInvoiceNumber = settings.nextInvoiceNumber + 1;
        //settingsController.write(settings);

        
        return inv;
    }

    get(id: string): InvoiceModel | undefined {
        
        const inv = this.build()
        inv.issueToLines = [
            "Cedenco Foods NZ Ltd.",
            "40 Innes Street",
            "Gisborne 4040",
            "New Zealand",
        ];
        for (let i = 0; i < 20; i++) {
            const line = new InvoiceLineModel();
            line.description = `Line ${i+1} description`
            line.quantity = Math.ceil( Math.random() * 10 )
            line.units = "pc"
            line.unitCost = 123.45
            inv.addLine(line)
        }
        return inv;
    }

}

export const invoiceController = new InvoiceController();