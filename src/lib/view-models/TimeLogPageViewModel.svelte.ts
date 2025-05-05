import { TaskState } from "$lib/models/TaskState";
import { FormatDate } from "$lib/services/formatters/FormatDate";
import { TaskViewModel } from "./TaskViewModel.svelte";
import type { ITaskController } from "$lib/ITaskController";
import { appController } from "$lib/services/Singletons";

export class TimeLogPageViewModel implements ITaskController {

	public previouslyUsedTasks:TaskViewModel[] = $state([]);

	public tasksRunning: TaskViewModel[] = $state([]);
	public tasksPaused: TaskViewModel[] = $state([]);
	public tasksStopped: TaskViewModel[] = $state([]);
	public tasksArchived: TaskViewModel[] = $state([]);

	private intervalId: number | undefined;

	start() {
		this.stop();

		this.refreshAndCatchUpRunningTaskDurations();

		this.intervalId = setInterval(() => this.incrementRunningTaskDuration(), 1000);
	}

	stop() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
	}

	public refreshAndCatchUpRunningTaskDurations(){
		console.debug("refreshAndCatchUpRunningTaskDurations");
		this.refresh();
		// catch up duration
		for (const task of this.tasksRunning) {
			task.recalculateDurationFromRunningSession();
		}
	}

	private refresh() {
		const allTasks = appController.taskRepo.getAll().map(t => new TaskViewModel(t));

		// sort by date and take top 20
		this.previouslyUsedTasks = allTasks.sort( (a, b) => a.date > b.date ? -1 : 1 ).slice(0, 20);

		// split by state
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
		appController.taskRepo.set(task.id, task.getModel());
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
		appController.taskRepo.remove(task.id);
		this.refresh();
	}

}
