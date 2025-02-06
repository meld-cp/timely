<script lang="ts">
	import Duration from "./Duration.svelte";
	
	import { type TaskActionModel } from "$lib/models/TaskActionModel";
	import { TaskState } from "$lib/models/TaskState";
	
	import type { TaskViewModel } from "$lib/view-models/TaskViewModel.svelte";
    import type { ITaskController } from "$lib/ITaskController";
    import { Icons } from "$lib/models/Icons";
    
	let {
		vm,
		taskController,
	}:{
		vm:TaskViewModel,
		taskController:ITaskController,
	} = $props();

	const isReadOnly = vm.state == "Archived";

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
					taskController.pauseTask(task);
					break;  
				case TaskState.Paused:
				taskController.startTask( task );
					break;
				case TaskState.Stopped:
					taskController.duplicateAndStartTask( task );
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
					taskController.stopTask( task );
					break;
				case TaskState.Paused:
					taskController.stopTask( task );
					break;
				case TaskState.Stopped:
					taskController.startTask( task );   
					break;
			}
		}
	};

	function increaseDuration( inc: boolean, small:boolean ) : void{
		let amount = small ? 1 : 15;
		taskController.increaseDuration( vm, inc ? amount : -amount );
	}

	function saveTask(){
		taskController.saveTask(vm);
	}

</script>


<article class="c-task" class:s-running="{vm.state == TaskState.Running}">
	<div class="c-task-fields">
		<input
			class="date"
			name="task-date"
			type="date"
			title="Date"
			bind:value={vm.date}
			oninput="{saveTask}"
			readonly={isReadOnly}
		/>
		<input
			class="name"
			name="task-name"
			type="text"
			title="Description"
			placeholder="Description"
			bind:value={vm.name}
			oninput="{saveTask}"
			readonly={isReadOnly}
		/>
		<div class="c-task-fields-row-2">
			<details>
				<summary>Other</summary>
				{#if vm.invoiceRefId.length>0}
				<span style="flex: content;" class="inv" title="Invoice">Attached to Invoice Id: {vm.invoiceRefId}</span>
				{/if}
				<div style="display: flex; flex-direction: row; gap:1rem; flex-wrap: wrap;">
					<input
						style="flex: 10;"
						class="tags"
						name="task-tags"
						type="text"
						placeholder="Tags"
						title="Tags"
						bind:value={vm.tagsAsText}
						oninput="{()=>taskController?.saveTask(vm)}"
						readonly={isReadOnly}
					/>
					{#if !isReadOnly}
					<button
						style="flex: content;"
						onclick="{() => taskController.archiveTask(vm)}"
					>Archive</button>
					
					<button
						style="flex: content;"
						class="secondary"
						onclick="{() => taskController.deleteTask(vm)}"
					>Delete</button>
					{/if}
				</div>		
			</details>
			<div style="flex: 2;"></div>
		</div>
	</div>
	<div class="c-task-duration">
		<Duration
			durationSeconds={vm.duration}
			affectiveDurationHours={vm.affectiveDurationHours}
			onIncreaseDuration={ isReadOnly ? undefined : increaseDuration}
			
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
		--pico-form-element-spacing-vertical: 0.25rem;
		--pico-form-element-spacing-horizontal: 0.25rem;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap-reverse;
		/* align-items: flex-start; */
		gap: 0.5rem;
		padding: 0.5rem;
		overflow: hidden;
		border: 2px solid var(--pico-muted-border-color);
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
		color: var(--pico-color);
		border: 2px solid var(--pico-primary-border);
	}

	.c-task-fields input{
		margin-bottom: 0rem;
	}
	.c-task-fields input[name=task-date]{
		flex: 1;
	}
	
	.c-task-fields input[name=task-name]{
		flex: 10;
		min-width: 20ch;
	}

	/* Light color scheme (Default) */
	/* Can be forced with data-theme="light" */
	:root[data-theme="light"],
	:root:not([data-theme="dark"]) {
		.s-running{
			background-color: var(--pico-color-green-100);
		}
	}
	/* Dark color scheme (Auto) */
	/* Automatically enabled if user has Dark mode enabled */
	@media only screen and (prefers-color-scheme: dark) {
		:root:not([data-theme]) {
			.s-running{
				background-color: var(--pico-color-green-600);
			}
		}
	}

	/* Dark color scheme (Forced) */
	/* Enabled if forced with data-theme="dark" */
	:root[data-theme="dark"] {
		.s-running{
			background-color: var(--pico-color-green-600);
		}
	}

</style>