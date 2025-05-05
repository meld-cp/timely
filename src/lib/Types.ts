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
    public id = crypto.randomUUID().toString();
    
    public number:string = "";
    public date:string = DateHelper.toInputDateValue( new Date());
    public orderRef:string = "";

    public issueToLines: string[] = [];
    public footerLines: string[] = [];

    public lines: InvoiceLineModel[] = [];

    // public addLine( line: InvoiceLineModel ){
    //     this.removeLinesWithId(line.id)

    //     //this.lineCounter++;
        
    //     //line.number = this.lineCounter;
    //     this.lines.push( line );
    // }

    // public removeLinesWithExtRefId( extRefId:string ) {
    //     this.lines = this.lines.filter( l=>l.extRefId != extRefId );
    // }

    // public removeLinesWithId(id: string) {
    //     this.lines = this.lines.filter( l=>l.id != id );
    // }

    // public containsLineWithId(id: string) : boolean {
    //     return this.lines.some( l=>l.id == id );
    // }
    // public getSubtotal():number {
    //     return this.lines.reduce( (p,line) => p + line.getTotal(), 0 );
    // }
    
    // public getTaxTotal():number {
    //     return this.lines.reduce( (p,line) => p + line.getTax(), 0 );
    // }

    // public getGrandTotal():number {
    //     return this.getSubtotal() + this.getTaxTotal();
    // }
}

export class InvoiceLineModel {
    public id = crypto.randomUUID().toString();
    public extRefId:string|undefined;
    public number:number = 0;
    public description:string = "";
    public units:string = "";
    public quantity:number = 0;
    public unitCost:number = 0;
}