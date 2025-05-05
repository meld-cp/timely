import { LocalStorageController } from "./LocalStoragController";
import { settingsController } from "./SettingsController.svelte";
import { InvoiceLineModel, InvoiceModel } from "./Types";

class InvoiceController{

    
    private repo = new LocalStorageController<InvoiceModel>("invoices");

    //workingInvoice = this.build();

    // commitWorkingInvoice( inv: InvoiceModel ) {
    //     //TODO: save working invoice, update next invoice number

    //     const settings = settingsController.read();

    //     //newInv.number = `${settings.nextInvoiceNumber}`

    //     this.save(inv);

    //     settings.nextInvoiceNumber++
    //     settingsController.write(settings);

    //     //this.workingInvoice = this.build();

    //     //return newInv;
    // }

    build():InvoiceModel{
        
        const settings = settingsController.read();
        
        const inv = new InvoiceModel();

        inv.number = `${settings.nextInvoiceNumber}`
        inv.footerLines = settings.defaultInvoiceFooter?.split("\n") ?? []
        
        return inv;
    }

    save( inv: InvoiceModel ){
        this.repo.set(inv.id, inv);
    }

    fetch(id: string): InvoiceModel | null {
        const inv = this.repo.get( id );
        
        if (!inv){
            return null;
        }

        // for (let i = 0; i < 20; i++) {
        //     const line = new InvoiceLineModel();
        //     line.description = `Line ${i+1} description`
        //     line.quantity = Math.ceil( Math.random() * 10 )
        //     line.units = "pc"
        //     line.unitCost = 123.45
        //     inv.addLine(line)
        // }
        return inv;
    }

    public containsExtRefId(lines: InvoiceLineModel[], extRefId: string): boolean {
        return lines.some( l=>l.extRefId == extRefId);
    }

    public getLineTotal( line:InvoiceLineModel):number {
        return line.quantity * line.unitCost;
    }
    
    public getLineTax(line:InvoiceLineModel):number {
        return 0;
    }
    public getSubtotal( lines: InvoiceLineModel[] ):number {
        return lines.reduce( (p,line) => p + this.getLineTotal(line), 0 );
    }
    
    public getTaxTotal( lines: InvoiceLineModel[]):number {
        return lines.reduce( (p,line) => p + this.getLineTax(line), 0 );
    }

    public getGrandTotal( lines: InvoiceLineModel[]):number {
        return this.getSubtotal(lines) + this.getTaxTotal(lines);
    }

}

export const invoiceController = new InvoiceController();