import { TaskState } from "$lib/models/TaskState";
import { taskRepo } from "../services/Singletons";
import { FormatDate } from "$lib/services/formatters/FormatDate";
import { TaskViewModel } from "./ViewModels.svelte";
import type { ITaskController } from "$lib/ITaskController";

export class TimeLogPageViewModel implements ITaskController {

	tasksRunning: TaskViewModel[] = $state([]);
	tasksPaused: TaskViewModel[] = $state([]);
	tasksStopped: TaskViewModel[] = $state([]);
	tasksArchived: TaskViewModel[] = $state([]);

	intervalId: number | undefined;

	constructor() {
	}

	start() {
		this.stop();

		this.refresh();
		// catch up duration
		for (const task of this.tasksRunning) {
			console.log("recalculateDurationFromRunningSession:before", task.getModel());
			task.recalculateDurationFromRunningSession();
			console.log("recalculateDurationFromRunningSession:after", task.getModel());
		}

		this.intervalId = setInterval(() => this.incrementRunningTaskDuration(), 1000);

	}

	stop() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
	}
	private refresh() {
		const allTasks = taskRepo.getAll().map(t => new TaskViewModel(t));
		this.tasksRunning = this.fetchTasksByState(allTasks, [TaskState.Running]);
		this.tasksPaused = this.fetchTasksByState(allTasks, [TaskState.Paused]);
		this.tasksStopped = this.fetchTasksByState(allTasks, [TaskState.Stopped]);
		this.tasksArchived = this.fetchTasksByState(allTasks, [TaskState.Archived]);
	}

	private fetchTasksByState(tasks: TaskViewModel[], states: TaskState[]): TaskViewModel[] {
		return tasks.filter(t => states.includes(t.state));
	}

	public startNewTask(name: string) {
		const task = new TaskViewModel();
		task.name = name;
		this.startTask(task);
	}

	public saveTask(task: TaskViewModel) {
		taskRepo.set(task.id, task.getModel());
	}

	public pauseAll() {
		this.refresh();
		for (const task of this.tasksRunning) {
			task.pause();
			this.saveTask(task);
		}
		this.refresh();
	}

	private incrementRunningTaskDuration() {
		for (const task of this.tasksRunning) {
			task.setDuration(task.duration + 1);
			this.saveTask(task);
		}
	}

	public pauseTask(task: TaskViewModel) {
		task.pause();
		this.saveTask(task);
		this.refresh();
	}

	public startTask(task: TaskViewModel) {
		this.pauseAll();
		task.start();
		this.saveTask(task);
		this.refresh();
	}

	public stopTask(task: TaskViewModel) {
		task.stop();
		this.saveTask(task);
		this.refresh();
	}

	public duplicateAndStartTask(task: TaskViewModel) {
		const dup = new TaskViewModel(task.getModel(crypto.randomUUID()));
		dup.setDuration(0);
		dup.date = FormatDate.toInputDateValue(new Date());
		dup.invoiceRefId = "";
		this.startTask(dup);
	}

	public increaseDuration(task: TaskViewModel, mins: number) {
		task.incrementDuration(mins);
		this.saveTask(task);
	}

	public deleteTask(task: TaskViewModel) {
		taskRepo.remove(task.id);
		this.refresh();
	}

}
