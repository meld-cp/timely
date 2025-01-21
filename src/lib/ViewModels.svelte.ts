import { type InvoiceModel, type InvoiceLineModel } from "./Models";
import { DateFormat } from "./utils";

export class InvoiceViewModel {
   
    public id = crypto.randomUUID().toString();
    
    public number:string = $state("");
    public date:string = $state(DateFormat.toInputDateValue( new Date()));
    public orderRef:string = $state("");

    public issueToLines: string[] = $state([]);
    public footerLines: string[] = $state([]);

    public lines: InvoiceLineViewModel[] = $state([]);

    subtotal:number = $derived( this.lines.reduce( (p,line) => p + line.total, 0 ))
    taxTotal:number = $derived( this.lines.reduce( (p,line) => p + line.tax, 0 ))
    grandTotal:number = $derived( this.subtotal + this.taxTotal )

    constructor( m?:InvoiceModel ){
        if (m){
            this.applyModel(m);
        }
    }

    get issueToAsText() {
        return this.issueToLines.join("\n")
    }
    set issueToAsText( v:string ){
        this.issueToLines = v.split("\n");
    }

    get footnoteAsText() {
        return this.footerLines.join("\n")
    }
    set footnoteAsText( v:string ){
        this.footerLines = v.split("\n");
    }
    
    public containsExtRefId(extRefId: string): boolean {
        return this.lines.some( l=>l.extRefId == extRefId);
    }
    
    public removeLineWithExtRefId( extRefId:string ){
        this.lines = this.lines.filter( l=>l.extRefId != extRefId );
    }

    public addLine( line?: InvoiceLineViewModel ):string{
        const m  = line ?? new InvoiceLineViewModel();
        this.lines.push(m);
        return m.id;
    }

    public sortLines(){
        //TODO:
    }

    getModel(): InvoiceModel {
        return {
            id:this.id,
            number:this.number,
            date:this.date,
            orderRef:this.orderRef,
            issueToLines:this.issueToLines,
            lines:this.lines.map( l=>l.getModel() ),
            footerLines:this.footerLines,
        }
    }

    applyModel(m: InvoiceModel) {
        this.id = m.id;
        this.number = m.number;
        this.date = m.date;
        this.orderRef = m.orderRef;
        this.issueToLines = m.issueToLines;
        this.lines = m.lines.map( l => new InvoiceLineViewModel(l) );
        this.footerLines = m.footerLines;
    }

}

export class InvoiceLineViewModel {
    public id = $state( crypto.randomUUID().toString() );
    public extRefId:string|undefined = $state();
    public number:number = $state(0);
    public description:string = $state("");
    public units:string = $state("");
    public quantity:number = $state(0);
    public unitCost:number = $state(0);

    //model:InvoiceLineModel = $state( new InvoiceLineModel() );
    tax:number = $derived(0);
    total:number = $derived(this.quantity * this.unitCost );
    
    constructor( m?:InvoiceLineModel ){
        if (m){
            this.applyModel(m);
        }
    }

    getModel(): InvoiceLineModel {
        return {
            id:this.id,
            extRefId:this.extRefId,
            number:this.number,
            description:this.description,
            units:this.units,
            quantity:this.quantity,
            unitCost:this.unitCost
        }
    }

    applyModel(m: InvoiceLineModel) {
        this.id = m.id;
        this.extRefId = m.extRefId;
        this.number = m.number;
        this.description = m.description;
        this.units = m.units;
        this.quantity = m.quantity;
        this.unitCost = m.unitCost;
    }
}