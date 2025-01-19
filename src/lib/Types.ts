import { DateHelper } from "./utils";

export type TaskModel = {
    id: string;
    date: string;
    name: string;
    duration: number;
    affectiveDurationHours: number;
    active:boolean;
    paused: boolean;
}

export class InvoiceModel{
    public number:string = "";
    public date:string = DateHelper.toInputDateValue( new Date());

    public lines: InvoiceLine[] = [];

    private lineCounter = 0;

    public addLine( line: InvoiceLine ){
        this.removeLineWithRef(line.refId)

        this.lineCounter++;
        
        line.number = this.lineCounter;

        this.lines.push( line );
    }

    public removeLineWithRef(id: string) {
        this.lines = this.lines.filter( l=>l.refId != id );
    }

    public containsLineWithRef(id: string) : boolean {
        return this.lines.some( l=>l.refId == id );
    }
    public getSubtotal():number {
        return 0;
    }
    
    public getTaxTotal():number {
        return 0;
    }

    public getGrandTotal():number {
        return 0;
    }
}

export class InvoiceLine {
    public number:number = 0
    public refId = crypto.randomUUID().toString()
    public description:string = ""
    public units:string = ""
    public quantity:number = 0
    public unitCost:number = 0

    public getTotal():number {
        return this.quantity * this.unitCost;
    }
}