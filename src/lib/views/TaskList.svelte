<script lang="ts">
	import Task from "./Task.svelte";
	import { slide } from "svelte/transition";
	
	import type { TaskViewModel } from "$lib/view-models/TaskViewModel.svelte";
    import type { ITaskController } from "$lib/ITaskController";
		
	let {
		tasks,
		taskController,
	} : {
		tasks: TaskViewModel[],
		taskController:ITaskController,
	} = $props();

</script>

{#each tasks as task, index (task.id)}
<div transition:slide={{duration:200}}>
	<Task
		vm={task}
		{taskController}
	/>
</div>
{/each}
