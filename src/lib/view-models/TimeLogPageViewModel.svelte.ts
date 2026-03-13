import { TaskState } from "$lib/models/TaskState";
import { FormatDate } from "$lib/services/formatters/FormatDate";
import { TaskViewModel } from "./TaskViewModel.svelte";
import type { ITaskController } from "$lib/ITaskController";
import { appController } from "$lib/services/Singletons";
import { Utils } from "$lib/services/Utils";


export class TimeLogPageViewModel implements ITaskController {

	public previouslyUsedTasks: string[] = $state([]);

	public tasksRunning: TaskViewModel[] = $state([]);
	public tasksPaused: TaskViewModel[] = $state([]);
	public tasksStopped: TaskViewModel[] = $state([]);
	public tasksArchived: TaskViewModel[] = $state([]);

	private intervalId: number | undefined;
	private saveTick = 0;

	start() {
		this.stop();
		this.refreshAndCatchUpRunningTaskDurations();
		this.intervalId = setInterval(() => this.incrementRunningTaskDuration(), 1000);
	}

	stop() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = undefined;
		}
		// Save current duration of all running tasks before stopping
		for (const task of this.tasksRunning) {
			task.recalculateDurationFromRunningSession();
			this.saveTask(task);
		}
	}

	public async refreshAndCatchUpRunningTaskDurations() {
		await this.refresh();
		for (const task of this.tasksRunning) {
			task.recalculateDurationFromRunningSession();
			this.saveTask(task);
		}
	}

	private async refresh() {
		const allTasks = await appController.getTasks();
		this.previouslyUsedTasks = this.buildPreviouslyUsedTasks(allTasks, 20);
		this.tasksRunning = this.fetchTasksByState(allTasks, [TaskState.Running]);
		this.tasksPaused = this.fetchTasksByState(allTasks, [TaskState.Paused]);
		this.tasksStopped = this.fetchTasksByState(allTasks, [TaskState.Stopped]);
		this.tasksArchived = this.fetchTasksByState(allTasks, [TaskState.Archived]);
	}

	private buildPreviouslyUsedTasks(tasks: TaskViewModel[], limit: number = 20): string[] {
		const sortedTasks = Utils.sortByProperties(tasks, ["date:desc", "name:asc"]).slice(0, limit);
		const names = sortedTasks.map(t => t.name);
		const uniqueNames = [...new Set(names)];
		return uniqueNames;
	}

	private fetchTasksByState(tasks: TaskViewModel[], states: TaskState[]): TaskViewModel[] {
		return tasks.filter(t => states.includes(t.state));
	}

	private removeFromAllLists(task: TaskViewModel) {
		this.tasksRunning = this.tasksRunning.filter(t => t.id !== task.id);
		this.tasksPaused = this.tasksPaused.filter(t => t.id !== task.id);
		this.tasksStopped = this.tasksStopped.filter(t => t.id !== task.id);
		this.tasksArchived = this.tasksArchived.filter(t => t.id !== task.id);
	}

	public startNewTask(name: string) {
		const task = new TaskViewModel();
		task.name = name;
		this.startTask(task);
		if (!this.previouslyUsedTasks.includes(name)) {
			this.previouslyUsedTasks = [name, ...this.previouslyUsedTasks].slice(0, 20);
		}
	}

	public saveTask(task: TaskViewModel) {
		appController.saveTask(task.getModel());
	}

	public pauseAll() {
		for (const task of [...this.tasksRunning]) {
			task.pause();
			this.saveTask(task);
		}
		this.tasksPaused = [...this.tasksPaused, ...this.tasksRunning];
		this.tasksRunning = [];
	}

	private incrementRunningTaskDuration() {
		this.saveTick++;
		for (const task of this.tasksRunning) {
			task.setDuration(task.duration + 1);
			if (this.saveTick >= 30) {
				this.saveTask(task);
			}
		}
		if (this.saveTick >= 30) {
			this.saveTick = 0;
		}
	}

	public pauseTask(task: TaskViewModel) {
		task.pause();
		this.saveTask(task);
		this.removeFromAllLists(task);
		this.tasksPaused = [...this.tasksPaused, task];
	}

	public startTask(task: TaskViewModel) {
		this.pauseAll();
		task.start();
		this.saveTask(task);
		this.removeFromAllLists(task);
		this.tasksRunning = [task];
	}

	public stopTask(task: TaskViewModel) {
		task.stop();
		this.saveTask(task);
		this.removeFromAllLists(task);
		this.tasksStopped = [...this.tasksStopped, task];
	}

	public duplicateAndStartTask(task: TaskViewModel) {
		const dup = new TaskViewModel(task.getModel(Utils.generateId()));
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
		appController.deleteTask(task.id);
		this.removeFromAllLists(task);
	}

	public archiveTask(task: TaskViewModel) {
		task.archive();
		this.saveTask(task);
		this.removeFromAllLists(task);
		this.tasksArchived = [...this.tasksArchived, task];
	}
}
