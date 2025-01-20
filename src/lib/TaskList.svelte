<script lang="ts">
    import Task from "./Task.svelte";
    import { getTaskControllerContext } from "./TaskController.svelte";
    import { blur, fade, fly, scale, slide } from "svelte/transition";
    import { TaskState } from "./Types.svelte";
        
    const taskController = getTaskControllerContext();

    let runningTasks = $derived( taskController.fetchTasksByState( [TaskState.Running]) )
    let pausedTasks = $derived( taskController.fetchTasksByState( [TaskState.Paused]) )
    let stoppedTasks = $derived( taskController.fetchTasksByState( [TaskState.Stopped]) )

</script>

<div class="container">
    {#if runningTasks.length > 0}
    <section class="list">
        <header>In Progress</header>
        {#each runningTasks as task, index (task.id)}
        <div transition:slide={{duration:200}}>
            <Task taskId={task.id}/>
        </div>
        {/each}
    </section>
    {/if}
    
    {#if pausedTasks.length > 0}
    <hr/>
    <details open>
        <summary>Paused</summary>
        {#each pausedTasks as task, index (task.id)}
        <div transition:slide={{duration:200}}>
            <Task taskId={task.id}/>
        </div>
        {/each}
    </details>
    {/if}
    
    {#if stoppedTasks.length > 0}
    <hr/>
    <details>
        <summary>Inactive</summary>
        {#each stoppedTasks as task, index(task.id)}
        <div transition:slide={{duration:200}}>
            <Task taskId={task.id}/>
        </div>
        {/each}
    </details>
    {/if}
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
    }
    .list{
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    .list header{
        font-weight: bold;
    }
</style>