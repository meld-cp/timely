<script lang="ts">
    import Task from "./Task.svelte";
    import { slide } from "svelte/transition";
    import type { TaskViewModel } from "./ViewModels.svelte";
        
    let {
        tasks,
        onPauseTask,
        onStartTask,
        onStopTask,
        onDuplicateAndStartTask,
        onIncreaseDuration,
        onDeleteTask,
    } : {
        tasks: TaskViewModel[],
        onPauseTask:(task:TaskViewModel)=>void,
        onStartTask:(task:TaskViewModel)=>void,
        onStopTask:(task:TaskViewModel)=>void,
        onDuplicateAndStartTask:(task:TaskViewModel)=>void,
        onIncreaseDuration:(task:TaskViewModel, mins:number )=>void,
        onDeleteTask:(task:TaskViewModel)=>void,
    } = $props();

</script>

{#each tasks as task, index (task.id)}
<div transition:slide={{duration:200}}>
    <Task
        vm={task}
        {onPauseTask}
        {onStartTask}
        {onStopTask}
        {onDuplicateAndStartTask}
        {onIncreaseDuration}
        {onDeleteTask}
    />
</div>
{/each}
