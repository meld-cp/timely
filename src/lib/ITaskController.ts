import type { TaskViewModel } from "./view-models/TaskViewModel.svelte";

export interface ITaskController{
	pauseTask( task: TaskViewModel ):void;
	startTask( task: TaskViewModel ):void,
	stopTask( task: TaskViewModel ):void,
	duplicateAndStartTask( task: TaskViewModel ):void,
	increaseDuration( task: TaskViewModel, mins:number ):void,
	deleteTask( task: TaskViewModel ):void
	saveTask( task: TaskViewModel ):void
}