import type { TaskState } from "./TaskState";


export type TaskModel = {
	id: string;
	state: TaskState;
	date: string;
	name: string;
	duration: number;
	affectiveDurationHours: number;
	timeRunStarted: number | undefined;
};
