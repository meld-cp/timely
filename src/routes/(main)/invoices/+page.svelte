<script lang="ts">
	import InvoiceEditorView from "$lib/views/invoice-editor/InvoiceEditorView.svelte";
	
	import { type TaskModel } from "$lib/models/TaskModel";
	import { TaskState } from "$lib/models/TaskState";
	import { onMount } from "svelte";
	import { InvoiceLineViewModel, InvoiceViewModel, TaskViewModel } from "$lib/view-models/ViewModels.svelte";
	import { invRepo, settingsController, taskRepo } from "$lib/services/Singletons";

	let wiNextLineNumber = $state(1);

	let workingInvoice = $state( new InvoiceViewModel() );

	let uninvoicedTasks:TaskViewModel[] = $state([]);
	onMount(()=>{
		const settings = settingsController.read();
		workingInvoice.number = `${settings.nextInvoiceNumber}`;
		workingInvoice.footnoteAsText = settings.defaultInvoiceFooter ?? "";
		uninvoicedTasks = getUninvoicedTasks();
	})

	function getUninvoicedTasks(): TaskViewModel[]{
		return taskRepo.getAll().filter( t=>t.state == TaskState.Stopped).map(t=> new TaskViewModel(t) );
	}

	function buildTimeLogInvoiceLine( timeLog: TaskModel ): InvoiceLineViewModel {
		const newLine =  new InvoiceLineViewModel()
		newLine.number = wiNextLineNumber++;
		newLine.extRefId = timeLog.id;
		newLine.description = `${timeLog.date} - ${timeLog.name}`;
		newLine.units = "hr";
		newLine.quantity = timeLog.affectiveDurationHours;
		newLine.unitCost = 200; //TODO: to model
		return newLine;
	}
   
	function saveWorkingInvoice( inv: InvoiceViewModel ) : void{
		invRepo.set( inv.id, inv.getModel());
		window.open( `/invoice/${inv.id}`, )
	}

	function allUninvoicedTimeHasBeenAddedToWorkingInvoice() : boolean{

		if (uninvoicedTasks.length == 0){
			return false;
		}
		for (const task of uninvoicedTasks) {
			if (!workingInvoice.containsExtRefId( task.id )){
				return false;
			}
		}
		return true;
		
	}

	function selectAllUninvoicedTime( select: boolean ){
		for (const task of uninvoicedTasks) {
			if (select){
				workingInvoice.addLine( buildTimeLogInvoiceLine(task ) );
			}else{
				workingInvoice.removeLineWithExtRefId( task.id );
			}
		}
	}

</script>

<h1>Invoice Builder</h1>

<div id="container">

	<section id="row1">
		<InvoiceEditorView bind:vm={workingInvoice} onSaveInvoice={saveWorkingInvoice}/>

		<article id="uninvoiced-time-container">
			<header>Uninvoiced Time</header>

			{#if uninvoicedTasks.length != 0}
				{#if uninvoicedTasks.length > 1}
					<label>
						<input id="untagged-select-all" type="checkbox" bind:checked={
							() => allUninvoicedTimeHasBeenAddedToWorkingInvoice(),
							(checked) => selectAllUninvoicedTime(checked)
						}/>
						Select All
					</label>
					<hr/>
				{/if}
				{#each uninvoicedTasks as task }
				<div>
					<label>
						<input id="{task.id}" type="checkbox" bind:checked={
							() => workingInvoice.containsExtRefId( task.id ),
							(checked) =>{
								if (checked){
									workingInvoice.addLine( buildTimeLogInvoiceLine(task ) );
								}else{
									workingInvoice.removeLineWithExtRefId( task.id );
								}
							} 
						}/>
						[{task.date}, {task.affectiveDurationHours.toFixed(2)} hrs] {task.name}
					</label>
				</div>
				{/each}
			{:else}
				<p><i>All time has been account for.</i></p>
			{/if}
			<footer></footer>
			
		</article>
	</section>
			
	<section id="row2">
		<article>
			<details>
				<summary>Closed Invoices</summary>
				...
			</details>
		</article>
	</section>
</div>



<style>
	#row1{
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		font-size: medium;
	}
	
	#uninvoiced-time-container{
		flex: 4;
		height: fit-content;
		min-width: 200px;
	}

</style>