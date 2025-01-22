import { DateFormat } from "../services/utils";
import type { TaskViewModel } from "../view-models/ViewModels.svelte";

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

export type TaskModel = {
    id: string;
    state: TaskState;
    date: string;
    name: string;
    duration: number;
    affectiveDurationHours: number;
    timeRunStarted : number | undefined;
}

export type TaskActionModel = {
    icon: ( task: TaskViewModel ) => string | undefined;
    hint: ( task: TaskViewModel ) => string | undefined;
    execute: ( task: TaskViewModel ) => void;
}

export type InvoiceModel = {
    id:string;
    currencyCode:string;    
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

