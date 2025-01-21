import { DateFormat } from "./utils";

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

// export class InvoiceModel{
//     public id = crypto.randomUUID().toString();
    
//     public number:string = "";
//     public date:string = DateFormat.toInputDateValue( new Date());
//     public orderRef:string = "";

//     public issueToLines: string[] = [];
//     public footerLines: string[] = [];

//     public lines: InvoiceLineModel[] = [];

// }


export type InvoiceModel = {
    id:string;
    
    number:string;
    date:string;
    orderRef:string;

    issueToLines: string[];
    footerLines: string[];

    lines: InvoiceLineModel[];
}

export type InvoiceLineModel = {
    id:string;
    extRefId:string|undefined;
    number:number;
    description:string;
    units:string;
    quantity:number;
    unitCost:number;
}

