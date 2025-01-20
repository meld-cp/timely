import { LocalStorageController } from "./LocalStoragController";
import { InvoiceLineModel, InvoiceModel } from "./Types";

class InvoiceController{

    
    private repo = new LocalStorageController<InvoiceModel>("invoices");

    save( inv: InvoiceModel ){
        this.repo.set(inv.id, inv);
    }

    fetch(id: string): InvoiceModel | null {
        return this.repo.get( id );
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