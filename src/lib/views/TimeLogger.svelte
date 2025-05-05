<script lang="ts">
    
	let{
		onStartTask,
		previousTasksList,
	}:{
		onStartTask:( name:string ) => void,
		previousTasksList?:string[]
	} = $props()

	let taskName = $state("");

	function startTask( ev: SubmitEvent) : void {
		ev.preventDefault();
		onStartTask(taskName);
		taskName = "";
	}

</script>


<form onsubmit="{startTask}">
	<!-- svelte-ignore a11y_no_redundant_roles -->
	<fieldset role="group">
		<input
			name="task-name"
			type="text"
			bind:value="{taskName}"
			placeholder="Whatcha doin?"
			spellcheck="true"
			list="list-task-names"
		/>
		{#if previousTasksList}
		<datalist id="list-task-names" >
			{#each previousTasksList as task}
			<option value="{task}"></option>
			{/each}
		</datalist>
		{/if}
		<input type="submit" value="Start"/>
	</fieldset>
</form>

<style>
	fieldset{
		display: flex;
	}
	input[type=submit]{
		flex-basis: content;
		margin-left: 0.5em;
	}
</style>