<script lang="ts">
	import TaskList from "$lib/views/TaskList.svelte";
	import TimeLogger from "$lib/views/TimeLogger.svelte";
	import { onDestroy, onMount } from "svelte";
	import { TimeLogPageViewModel } from "$lib/view-models/TimeLogPageViewModel.svelte";
    import VisibilityDetector from "$lib/views/VisibilityDetector.svelte";
		
	let vm = $state(new TimeLogPageViewModel())

	onMount(()=>{
		vm.start()
	})

	onDestroy(() =>{
		vm.stop()
	})

	function onPageVisibilityChanged(visible: boolean) {
		console.debug("onPageVisibilityChanged", visible);
		if (visible) {
			vm.refreshAndCatchUpRunningTaskDurations();
		}
	}

</script>

<VisibilityDetector {onPageVisibilityChanged} />

<h2>Time Log</h2>

<TimeLogger onStartTask={(name)=>vm.startNewTask(name)} previousTasksList={vm.previouslyUsedTasks}/>

<section>
	<summary>In Progress ({vm.tasksRunning.length})</summary>
	<TaskList
		taskController={vm}
		tasks={vm.tasksRunning}
	/>
</section>

<section>
	<summary>Paused ({vm.tasksPaused.length})</summary>
	<TaskList
		taskController={vm}
		tasks={vm.tasksPaused}
	/>
</section>

<section>
	<details>
		<summary>Stopped ({vm.tasksStopped.length})</summary>
		<TaskList
			taskController={vm}
			tasks={vm.tasksStopped}
		/>
	</details>
</section>


<section>
	<details>
		<summary>Archived ({vm.tasksArchived.length})</summary>
		<TaskList
			taskController={vm}
			tasks={vm.tasksArchived}
		/>
	</details>
</section>