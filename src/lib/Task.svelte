<script lang="ts">
    import Duration from "./Duration.svelte";
    import { Icons, type TaskActionModel, TaskState } from "./Models";
    import type { TaskViewModel } from "./ViewModels.svelte";
    
    let {
        vm,
        onPauseTask,
        onStartTask,
        onStopTask,
        onDuplicateAndStartTask,
        onIncreaseDuration,
    }:{
        vm:TaskViewModel,
        onPauseTask:(task:TaskViewModel)=>void,
        onStartTask:(task:TaskViewModel)=>void,
        onStopTask:(task:TaskViewModel)=>void,
        onDuplicateAndStartTask:(task:TaskViewModel)=>void,
        onIncreaseDuration:(task:TaskViewModel, mins:number )=>void,
    } = $props();

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
                    onPauseTask(task);
                    break;  
                case TaskState.Paused:
                    onStartTask( task );
                    break;
                case TaskState.Stopped:
                    onDuplicateAndStartTask( task );
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
                    onStopTask( task );
                    break;
                case TaskState.Paused:
                    onStopTask( task );
                    break;
                case TaskState.Stopped:
                    onStartTask( task );   
                    break;
            }
        }
    };

    function increaseDuration( inc: boolean, small:boolean ) : void{
        let amount = small ? 1 : 15;
        onIncreaseDuration( vm, inc ? amount : -amount );
    }

</script>


<article class:running="{vm.state == TaskState.Running}">
    <div class="row1">
        <input id="date" type="date" title="Date" bind:value={vm.date}/>
        <input id="name" type="text" title="Description" bind:value={vm.name} />
        <Duration
            durationSeconds={vm.duration}
            affectiveDurationHours={vm.affectiveDurationHours}
            onIncreaseDuration={increaseDuration}

            icon1={taskAction1.icon(vm)}
            onAction1Click={() => taskAction1.execute(vm)}
            action1Hint={taskAction1.hint(vm)}
            
            icon2={taskAction2.icon(vm)}
            onAction2Click={() => taskAction2.execute(vm)}
            action2Hint={taskAction2.hint(vm)}
        />
    </div>
    <!-- <div class="row2">
        <span id="id">{vm.duration}</span>
    </div> -->
</article>


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