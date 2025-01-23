import type { TaskViewModel } from "$lib/view-models/ViewModels.svelte";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type TaskActionModel = {
	icon: (task: TaskViewModel) => IconDefinition | undefined;
	hint: (task: TaskViewModel) => string | undefined;
	execute: (task: TaskViewModel) => void;
};
