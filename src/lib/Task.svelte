<script lang="ts">
    import Duration from "./Duration.svelte";
    import { taskController } from "./TaskController.svelte";
    import { taskRepo } from "./TaskRepo.svelte";
    import { Icons, type TaskActionModel, TaskState } from "./Types.svelte";
    
    let {
        taskId,
    }:{
        taskId:string,
    } = $props();

    let task = $derived( taskRepo.getTask( taskId ) );

    const taskAction1:TaskActionModel = {
        icon: ( task ) => {
            switch( task.state){
                case TaskState.Running:
                    return Icons.TaskPause;    
                case TaskState.Paused:
                    return Icons.TaskResume;    
                case TaskState.Stopped:
                    return Icons.TaskDuplicateAndStart;    
            }
        },
        hint: ( task ) => {
            switch( task.state){
                case TaskState.Running:
                    return "Pause";    
                case TaskState.Paused:
                    return "Resume";    
                case TaskState.Stopped:
                    return "Start a new copy";
            }
        },
        execute: ( task ) => {
            switch( task.state){
                case TaskState.Running:
                    taskController.pauseTask( task.id );
                    break;  
                case TaskState.Paused:
                    taskController.resumeTask( task.id );
                    break;
                case TaskState.Stopped:
                    taskController.activateAndStartCopy( task.id );
                    break;
            }
        }
    }

    const taskAction2:TaskActionModel = {
        icon: ( task ) => {
            switch( task.state){
                case TaskState.Running:
                    return Icons.TaskStop;
                case TaskState.Paused:
                    return Icons.TaskStop;    
                case TaskState.Stopped:
                    return Icons.TaskResume;    
            }
        },
        hint: ( task ) => {
            switch( task.state){
                case TaskState.Running:
                    return "Stop";    
                case TaskState.Paused:
                    return "Stop";    
                case TaskState.Stopped:
                    return "Start";
            }
        },
        execute: ( task ) => {
            switch( task.state){
                case TaskState.Running:
                    taskController.stopTask( task.id );    
                    break;
                case TaskState.Paused:
                    taskController.stopTask( task.id );
                    break;
                case TaskState.Stopped:
                    taskController.startTask( task.id )   
                    break;
            }
        }
    };

    function increaseDuration( inc: boolean, small:boolean ) : void{
        let amount = small ? 1 : 15;
        
        taskController.incrementTaskDuration( taskId, inc ? amount : -amount );
    }

    function handleTaskChanged(){
        if (!task){
            return;
        }
        taskRepo.markAsChanged(task)
    }

</script>

{#if task}
<article class:running="{task.state == TaskState.Running}">
    <div class="row1">
        <input id="date" type="date" title="Date" bind:value={task.date} onchange="{handleTaskChanged}"/>
        <input id="name" type="text" title="Description" bind:value={task.name} oninput="{handleTaskChanged}" />
        <Duration
            durationSeconds={task.duration}
            affectiveDurationHours={task.affectiveDurationHours}
            onIncreaseDuration={increaseDuration}

            icon1={taskAction1.icon(task)}
            onAction1Click={() => taskAction1.execute(task)}
            action1Hint={taskAction1.hint(task)}
            
            icon2={taskAction2.icon(task)}
            onAction2Click={() => taskAction2.execute(task)}
            action2Hint={taskAction2.hint(task)}
        />
    </div>
    <!-- <div class="row2">
        <span id="id">{runDuration.toFixed(2)}  {pauseDuration.toFixed(2)}</span>
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