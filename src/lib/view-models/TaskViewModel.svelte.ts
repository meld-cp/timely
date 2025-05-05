import type { TaskModel } from "$lib/models/TaskModel";
import { TaskState } from "$lib/models/TaskState";
import { FormatDate } from "$lib/services/formatters/FormatDate";
import { appController } from "$lib/services/Singletons";

export class TaskViewModel {
	id: string = $state(crypto.randomUUID());
	state: TaskState = $state(TaskState.Stopped);
	date: string = $state(FormatDate.toInputDateValue(new Date()));
	name: string = $state("");
	duration: number = $state(0);
	affectiveDurationHours: number = $state(0);
	timeRunStarted: number | undefined = $state();
	invoiceRefId: string = $state("");
	tags: string[] = $state([]);

	get tagsAsText(): string {
		return this.tags.join(" ");
	}
	set tagsAsText(txt: string) {
		this.tags = txt.trim().split(" ");
	}

	constructor(m?: TaskModel) {
		if (m) {
			this.applyModel(m);
		}
	}

	getModel(withId?: string): TaskModel {
		return {
			id: withId ?? this.id,
			state: this.state,
			date: this.date,
			name: this.name,
			duration: this.duration,
			affectiveDurationHours: this.affectiveDurationHours,
			timeRunStarted: this.timeRunStarted,
			invoiceRefId: this.invoiceRefId,
			tags: this.tags,
		};
	}

	applyModel(m: TaskModel) {
		this.id = m.id;
		this.state = m.state;
		this.date = m.date;
		this.name = m.name;
		this.duration = m.duration;
		this.affectiveDurationHours = m.affectiveDurationHours;
		this.timeRunStarted = m.timeRunStarted;
		this.invoiceRefId = m.invoiceRefId;
		this.tags = m.tags;
	}

	public save() {
		appController.taskRepo.set(this.id, this.getModel());
	}

	public pause() {
		if (this.state != TaskState.Running) {
			return;
		}
		this.state = TaskState.Paused;
		this.timeRunStarted = undefined;
	}

	public start() {
		this.state = TaskState.Running;
		this.timeRunStarted = Date.now();
	}

	public stop() {
		this.state = TaskState.Stopped;
		this.timeRunStarted = undefined;
	}

	public incrementDuration(incrementMinutes: number) {
		if (this.state == TaskState.Running) {
			// inc session start time
			const currentSessionStartTime = (this.timeRunStarted ?? Date.now());
			//const dt = new Date( currentSessionStartTime );
			const incMs = incrementMinutes * 60 * 1000;
			const newSessionTime = currentSessionStartTime - incMs;
			this.timeRunStarted = newSessionTime;
			this.recalculateDurationFromRunningSession();
		} else {
			this.setDuration(this.duration + incrementMinutes * 60);
		}
	}

	public recalculateDurationFromRunningSession() {
		if (this.state != TaskState.Running) {
			return;
		}
		const sessionStartTime = (this.timeRunStarted ?? Date.now());
		const secs = (Date.now() - sessionStartTime) / 1000;
		this.setDuration(secs);
	}

	public setDuration(newDurationInSeconds: number) {
		this.duration = Math.ceil(newDurationInSeconds);
		this.affectiveDurationHours = this.calculateAffectiveHours(this.duration, 15);
	}

	private calculateAffectiveHours(durationSeconds: number, incrementMinutes: number): number {
		let mins = durationSeconds / 60;
		const increments = Math.ceil(mins / incrementMinutes);
		const affectiveMins = increments * incrementMinutes;
		const affectiveHours = affectiveMins / 60;
		return affectiveHours;
	}
}
