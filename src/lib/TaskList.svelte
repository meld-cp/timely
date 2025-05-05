<script lang="ts">
    import Task from "./Task.svelte";
    import { getTaskControllerContext } from "./TaskController.svelte";
    import { blur, fade, fly, scale, slide } from "svelte/transition";
        
    const taskController = getTaskControllerContext();

    let runningTask = $derived( taskController.fetchFirstRunningTask() )
    let activePausedTasks = $derived( taskController.fetchActiveButPausedTasks() )
    let inactiveTasks = $derived( taskController.fetchInactiveTasks() )

</script>

<div class="container">
    {#if runningTask}
    <section class="list">
        <header>In Progress</header>
        {#key runningTask}
        <div transition:slide={{duration:200}}>
            <Task taskId={runningTask.id}/>
        </div>
        {/key}
    </section>
    {/if}
    
    {#if activePausedTasks.length > 0}
    <hr/>
    <details open>
        <summary>Paused</summary>
        {#each activePausedTasks as task, index (task.id)}
        <div transition:slide={{duration:200}}>
            <Task taskId={task.id}/>
        </div>
        {/each}
    </details>
    {/if}
    
    {#if inactiveTasks.length > 0}
    <hr/>
    <details>
        <summary>Inactive</summary>
        {#each inactiveTasks as task, index(task.id)}
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