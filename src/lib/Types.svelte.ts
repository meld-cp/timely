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

export class TaskModel {
    id: string = crypto.randomUUID()
    state: TaskState = $state(TaskState.Stopped);
    date: string = DateHelper.toInputDateValue(new Date());
    name: string = "";
    duration: number = 0;
    affectiveDurationHours: number = 0; // todo: move this to invoice calculation?
}

export class TaskActionModel{
    icon: ( task: TaskModel ) => string | undefined;
    hint: ( task: TaskModel ) => string | undefined;
    execute: ( task: TaskModel ) => void;
    
    constructor( params : {
        icon: ( task: TaskModel ) => string | undefined,
        hint: ( task: TaskModel ) => string | undefined,
        action: ( task: TaskModel ) => void
    }){
        this.icon = params.icon;
        this.hint = params.hint;
        this.execute = params.action;
    }
}

export class InvoiceModel{
    public id = $state(crypto.randomUUID().toString())
    public number:string = $state("");
    public date:string = $state( DateHelper.toInputDateValue( new Date()) );

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
    public id = $state(crypto.randomUUID().toString())
    public number:number = $state(0)
    public description:string = $state("")
    public units:string = $state("")
    public quantity:number = $state(0)
    public unitCost:number = $state(0)

    public getTotal():number {
        return this.quantity * this.unitCost;
    }
}