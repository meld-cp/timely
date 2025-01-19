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
    public number:string = $state("");
    public date:string = $state( DateHelper.toInputDateValue( new Date()) );

    public lines: InvoiceLineModel[] = $state([]);

    private lineCounter = 0;

    public addLine( line: InvoiceLineModel ){
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

export class InvoiceLineModel {
    public number:number = $state(0)
    public refId = $state(crypto.randomUUID().toString())
    public description:string = $state("")
    public units:string = $state("")
    public quantity:number = $state(0)
    public unitCost:number = $state(0)

    public getTotal():number {
        return this.quantity * this.unitCost;
    }
}