import { DateHelper } from "./utils";

export class Icons {
    static TaskPause = "⏸️";
    static TaskResume = "▶️";
    static TaskStop = "⏹️";
    static TaskDuplicateAndStart = "⏫";
}

export enum TaskState {
    Running,
    Paused,
    Stopped,
    Archived
}
export type TTask = {
    id: string;
    state: TaskState;
    date: string;
    name: string;
    duration: number;
    affectiveDurationHours: number;
    timeRunStarted : number | undefined;
    //timeRunPaused : number | undefined;
}

// export class TaskModel implements TTask {
//     id: string = crypto.randomUUID();
//     state: TaskState = $state(TaskState.Stopped);
//     date: string = $state( DateHelper.toInputDateValue( new Date() ) );
//     name: string = $state("");
//     duration: number = $state(0);
//     affectiveDurationHours: number = $state(0);
//     runStartedTime : number = $state(0);
// }

export type TaskActionModel = {
    icon: ( task: TTask ) => string | undefined;
    hint: ( task: TTask ) => string | undefined;
    execute: ( task: TTask ) => void;
}

export class InvoiceModel{
    public id = $state(crypto.randomUUID().toString())
    
    public number:string = $state("");
    public date:string = $state( DateHelper.toInputDateValue( new Date()) );
    public orderRef:string = $state("");

    public issueToLines: string[] = $state([]);
    public footerLines: string[] = $state([]);


    public lines: InvoiceLineModel[] = $state([]);

    private lineCounter = 0;

    public addLine( line: InvoiceLineModel ){
        this.removeLineWithId(line.id)

        this.lineCounter++;
        
        line.number = this.lineCounter;
        this.lines.push( line );
    }

    public removeLineWithId(id: string) {
        this.lines = this.lines.filter( l=>l.id != id );
    }

    public containsLineWithId(id: string) : boolean {
        return this.lines.some( l=>l.id == id );
    }
    public getSubtotal():number {
        return this.lines.reduce( (p,line) => p + line.getTotal(), 0 );
    }
    
    public getTaxTotal():number {
        return this.lines.reduce( (p,line) => p + line.getTax(), 0 );
    }

    public getGrandTotal():number {
        return this.getSubtotal() + this.getTaxTotal();
    }
}

export class InvoiceLineModel {
    public id = $state(crypto.randomUUID().toString())
    public number:number = $state(0)
    public description:string = $state("")
    public units:string = $state("")
    public quantity:number = $state(0)
    public unitCost:number = $state(0)

    public getTotal():number {
        return this.quantity * this.unitCost;
    }
    public getTax():number {
        return 0;
    }
}