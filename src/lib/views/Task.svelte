<script lang="ts">
	import Duration from "./Duration.svelte";
	
	import { type TaskActionModel } from "$lib/models/TaskActionModel";
	import { TaskState } from "$lib/models/TaskState";
	import { Icons } from "$lib/models/Icons";
	import type { TaskViewModel } from "../view-models/ViewModels.svelte";
	
	let {
		vm,
		onPauseTask,
		onStartTask,
		onStopTask,
		onDuplicateAndStartTask,
		onIncreaseDuration,
		onDeleteTask
	}:{
		vm:TaskViewModel,
		onPauseTask:(task:TaskViewModel)=>void,
		onStartTask:(task:TaskViewModel)=>void,
		onStopTask:(task:TaskViewModel)=>void,
		onDuplicateAndStartTask:(task:TaskViewModel)=>void,
		onIncreaseDuration:(task:TaskViewModel, mins:number )=>void,
		onDeleteTask:(task:TaskViewModel)=>void,
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


<article class="c-task" class:s-running="{vm.state == TaskState.Running}">
	<div class="c-task-fields">
		<input class="date" name="task-date" type="date" title="Date" bind:value={vm.date}/>
		<input class="name" name="task-name" type="text" title="Description" bind:value={vm.name} />
		<div class="c-task-fields-row-2">
			<details>
				<summary>Other</summary>
				<button onclick="{() => onDeleteTask(vm)}">Delete</button>
			</details>
			<div style="flex: 100;">
				
			</div>
		</div>
	</div>
	<div class="c-task-duration">
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
</article>


<style>
	.c-task{
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 0.5rem;
		padding: 0.5rem;
		overflow: hidden;
		border: 2px solid hsl(0, 0%, 80%);
	}

	.c-task-fields{
		display: flex;
		flex-wrap: wrap;
		flex:100;
		gap: 0.5rem;
	}
	.c-task-fields-row-2{
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.c-task-fields-row-2 details{
		margin-bottom: 0;
		font-size: 80%;
		flex: content;

		summary{
			margin-bottom: 0.3rem;
		}
		button{
			font-size: 80%;
		}
	}

	.c-task-duration{
		flex: 1;
	}

	.s-running{
		background-color: hsl(100, 50%, 60%);
		border: 2px solid hsl(0, 0%, 30%);
	}

	.c-task-fields input{
		margin-bottom: 0rem;
	}
	.c-task-fields input[name=task-date]{
		flex: 1;
		background-color: antiquewhite;
	}
	
	.c-task-fields input[name=task-name]{
		flex: 10;
		min-width: 20ch;
	}

</style>