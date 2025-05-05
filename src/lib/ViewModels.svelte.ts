import { InvoiceModel, InvoiceLineModel } from "./Models";

export class InvoiceViewModel {
    
    model:InvoiceModel = $state( new InvoiceModel() );

    lines:InvoiceLineViewModel[] = $derived( this.model.lines.map( m=> new InvoiceLineViewModel(m) ) )
    subtotal:number = $derived( this.lines.reduce( (p,line) => p + line.total, 0 ))
    taxTotal:number = $derived( this.lines.reduce( (p,line) => p + line.tax, 0 ))
    grandTotal:number = $derived( this.subtotal + this.taxTotal )

    constructor( model: InvoiceModel ){
        this.model = model;
    }
    
    public containsExtRefId(extRefId: string): boolean {
        return this.model.lines.some( l=>l.extRefId == extRefId);
    }
}

export class InvoiceLineViewModel {
    
    model:InvoiceLineModel = $state( new InvoiceLineModel() );
    tax:number = $derived(0);
    total:number = $derived(this.model.quantity * this.model.unitCost );

    constructor( model: InvoiceLineModel ){
        this.model = model;
    }
    
}