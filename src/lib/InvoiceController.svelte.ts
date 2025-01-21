import { LocalStorageController } from "./LocalStoragController";
import type { InvoiceModel } from "./Models";

class InvoiceController{

    private repo = new LocalStorageController<InvoiceModel>("invoices");

    save( inv: InvoiceModel ){
        this.repo.set(inv.id, inv);
    }

    fetch(id: string): InvoiceModel | null {
        return this.repo.get( id );
    }


}

export const invoiceController = new InvoiceController();