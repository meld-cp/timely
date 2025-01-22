<script lang="ts">
	import TaskList from "$lib/TaskList.svelte";
	import TimeLogger from "$lib/TimeLogger.svelte";
	import { onDestroy, onMount } from "svelte";
	import { TaskViewModel, TimeLogPageViewModel } from "$lib/ViewModels.svelte";
		
	let vm = $state(new TimeLogPageViewModel())

	onMount(()=>{
		vm.start()
	})

	onDestroy(() =>{
		vm.stop()
	})

	function onPauseTask( task:TaskViewModel ){
		vm.pauseTask( task );
	}

	function onStartTask( task:TaskViewModel ){
		vm.startTask(task);
	}
	
	function onStopTask( task:TaskViewModel ){
		vm.stopTask(task);
	}

	function onDuplicateAndStartTask( task:TaskViewModel ){
		vm.duplicateAndStartTask(task);
	}

	function onIncreaseDuration( task:TaskViewModel, mins:number ){
		vm.increaseDuration(task, mins);
	}

	function onDeleteTask( task:TaskViewModel ){
		vm.deleteTask(task);
	}

</script>

<h1>Time Log</h1>

<TimeLogger onStartTask={(name)=>vm.startNewTask(name)}/>

<section>
	<summary>In Progress ({vm.tasksRunning.length})</summary>
	<TaskList
		tasks={vm.tasksRunning}
		{onPauseTask}
		{onStartTask}
		{onStopTask}
		{onDuplicateAndStartTask}
		{onIncreaseDuration}
		{onDeleteTask}
	/>
</section>

<section>
	<summary>Paused ({vm.tasksPaused.length})</summary>
	<TaskList
		tasks={vm.tasksPaused}
		{onPauseTask}
		{onStartTask}
		{onStopTask}
		{onDuplicateAndStartTask}
		{onIncreaseDuration}
		{onDeleteTask}
	/>
</section>

<section>
	<details>
		<summary>Stopped ({vm.tasksStopped.length})</summary>
		<TaskList
			tasks={vm.tasksStopped}
			{onPauseTask}
			{onStartTask}
			{onStopTask}
			{onDuplicateAndStartTask}
			{onIncreaseDuration}
			{onDeleteTask}
		/>
	</details>
</section>


<section>
	<details>
		<summary>Archived ({vm.tasksArchived.length})</summary>
		<TaskList
			tasks={vm.tasksArchived}
			{onPauseTask}
			{onStartTask}
			{onStopTask}
			{onDuplicateAndStartTask}
			{onIncreaseDuration}
			{onDeleteTask}
		/>
	</details>
</section>