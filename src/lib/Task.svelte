<script lang="ts">
    import Duration from "./Duration.svelte";
    import { getTaskControllerContext } from "./TaskController.svelte";
    import { getTaskRepoContext } from "./TaskRepo.svelte";
    
    let {
        taskId,
    }:{
        taskId:string,
    } = $props();

    const taskRepo = getTaskRepoContext();
    const taskController = getTaskControllerContext();

    const task = $derived( taskRepo.getTask( taskId ) );

    // $effect(()=>{
    //     if(task){
    //         taskRepo.store.saveTask(task);
    //     }
    // })


    const iconFirstAction = $derived.by( () =>{
        if (!task){
            return;
        }
        if (!task.active){
            return "⏫";
        }
        if (task.paused){
            return "▶️";
        }
        return "⏸️";
    } );

    function increaseDuration( inc: boolean) : void{
        taskController.incrementTaskDuration( taskId, inc ? 15 : -15 );
    }

</script>

{#if task}
<article class="{task.paused ? "paused" : "running"}">
    <div class="row1">
        <input id="date" type="date" title="Date" bind:value={task.date} onchange="{() => taskRepo.markAsChanged(task)}"/>
        <input id="name" type="text" title="Discription" bind:value={task.name} oninput="{() => taskRepo.markAsChanged(task)}" />
        <Duration
            durationSeconds={task.duration}
            affectiveDurationHours={task.affectiveDurationHours}
            onIncreaseDuration={increaseDuration}

            icon1={iconFirstAction}
            onAction1Click={
                taskController.canPauseOrResume(taskId)
                ? () => taskController.togglePaused(taskId)
                : () => taskController.activateAndStartCopy(taskId)
            }
            action1Hint={
                taskController.canPauseOrResume(taskId)
                ? ( task.paused ? "Resume" : "Pause" )
                : "Activate a Copy"
            }
            
            icon2={ task.active ? "⏹️" : "▶️"}
            onAction2Click={
                task.active
                ? () => taskController.deactivateTask(taskId)
                : () => taskController.activateAndStart(taskId)
            }
            action2Hint={
                task.active
                ? "Stop"
                : "Resume"
            }
        />
    </div>
    <!-- <div class="row2">
        <span id="id">{task.id}</span>
    </div> -->
</article>
{/if}

<style>
    article{
        padding: 0.4em;
    }
    .running{
        background-color: hsl(100, 50%, 60%);
    }
    .row1{
        display: flex;
        flex-wrap: wrap;
        gap: 0.4em;
        align-items: center;
        justify-content: end;
    }
    input{
        margin-bottom: 0em;
    }
    #date{
        flex: 1;
    }
    #name{
        flex: 10;
        min-width: 20ch;
    }
    /* #id{
        font-size: 0.6em;
        color: hsl(0, 0%, 60%);
    } */
</style>