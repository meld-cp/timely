<script lang="ts">
    import { taskController } from "$lib/TaskController.svelte";
    import TaskList from "$lib/TaskList.svelte";
    import TimeLogger from "$lib/TimeLogger.svelte";
    import { TaskState } from "$lib/Types";
    import { onDestroy, onMount } from "svelte";
    
    onMount(()=>{
        taskController.start();
    })

    onDestroy(() =>{
        taskController.stop();
    })

    let tasksRunning = $derived( taskController.fetchTasksByState( [TaskState.Running] ) );
    let tasksPaused = $derived( taskController.fetchTasksByState( [TaskState.Paused] ) );
    let tasksStopped = $derived( taskController.fetchTasksByState( [TaskState.Stopped] ) );
    let tasksArchived = $derived( taskController.fetchTasksByState( [TaskState.Archived] ) );

</script>

<h1>Time Log</h1>

<TimeLogger/>

<section>
    <summary>In Progress ({tasksRunning.length})</summary>
    <TaskList tasks={tasksRunning}/>
</section>

<section>
    <summary>Paused ({tasksPaused.length})</summary>
    <TaskList tasks={tasksPaused}/>
</section>

<section>
    <details>
        <summary>Stopped ({tasksStopped.length})</summary>
        <TaskList tasks={tasksStopped}/>
    </details>
</section>


<section>
    <details>
        <summary>Archived ({tasksArchived.length})</summary>
        <TaskList tasks={tasksArchived}/>
    </details>
</section>