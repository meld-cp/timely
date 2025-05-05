import type { TaskViewModel } from "$lib/view-models/ViewModels.svelte";


export type TaskActionModel = {
	icon: (task: TaskViewModel) => string | undefined;
	hint: (task: TaskViewModel) => string | undefined;
	execute: (task: TaskViewModel) => void;
};
