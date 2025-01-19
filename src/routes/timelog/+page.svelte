<script lang="ts">
    import { setTaskControllerContext, TaskController } from "$lib/TaskController.svelte";
    import TaskList from "$lib/TaskList.svelte";
    import { setTaskRepoContext, TaskRepo } from "$lib/TaskRepo.svelte";
    import TimeLogger from "$lib/TimeLogger.svelte";
    import { onDestroy, onMount } from "svelte";
    
    const taskRepo = setTaskRepoContext( new TaskRepo() );
    const taskController = setTaskControllerContext( new TaskController( taskRepo ) );

    onMount(()=>{
        taskController.start();
    })

    onDestroy(() =>{
        taskController.stop();
    })
</script>

<h1>Time Log</h1>

<TimeLogger/>

<TaskList/>
