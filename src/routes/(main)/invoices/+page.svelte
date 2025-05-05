<script lang="ts">
	import InvoiceEditorView from "$lib/views/invoice-editor/InvoiceEditorView.svelte";
	import { type TaskModel } from "$lib/models/TaskModel";
	import { TaskState } from "$lib/models/TaskState";
	import { onMount } from "svelte";
	import { InvoiceLineViewModel, InvoiceViewModel, TaskViewModel } from "$lib/view-models/ViewModels.svelte";
	import { invRepo, settingsController, taskRepo } from "$lib/services/Singletons";
    import { FormatDate } from "$lib/services/formatters/FormatDate";
    
	let wiNextLineNumber = $state(1);
	let workingInvoice = $state( new InvoiceViewModel() );
	let uninvoicedTasks:TaskViewModel[] = $state([]);
	let scratchPad:string = $state("");

	let closedInvoices:InvoiceViewModel[] = $state([]);
	
	onMount(()=>{
		resetWorkingInvoice();
		
		scratchPad = settingsController.getScratchPad("page-invoice-builder");
		
		uninvoicedTasks = fetchUninvoicedTasks();
		closedInvoices = fetchInvoices();
	})
    
	function fetchInvoices(): InvoiceViewModel[] {
        return invRepo.getAll().map( m=> new InvoiceViewModel(m) );
    }

	function resetWorkingInvoice(){
		const settings = settingsController.read();
		workingInvoice = new InvoiceViewModel();
		workingInvoice.number = `${settings.nextInvoiceNumber}`;
		workingInvoice.footnoteAsText = settings.defaultInvoiceFooter ?? "";
	}

	function saveScratchPad(){
		settingsController.setScratchPad("page-invoice-builder", scratchPad);
	}

	function fetchUninvoicedTasks(): TaskViewModel[]{
		return taskRepo.getAll().filter( t=> t.invoiceRefId.length == 0 && t.state == TaskState.Stopped).map(m=> new TaskViewModel(m) );
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

		//TODO: tag all tasks in invoice lines with invoice number
		const attachedTaskIds = workingInvoice.lines.map( l=>l.extRefId ).filter( id=>id && id.length > 0);
		const attachedTasks = uninvoicedTasks.filter( t=> attachedTaskIds.includes( t.id ));
		for (const task of attachedTasks) {
			task.invoiceRefId = workingInvoice.id;
			taskRepo.set( task.id, task.getModel() );
		}


		settingsController.modify(settings =>{
			settings.nextInvoiceNumber++;
		});
		closedInvoices = fetchInvoices();
		
		uninvoicedTasks = fetchUninvoicedTasks();
		resetWorkingInvoice();

		viewInvoice( inv.id );
	}
	
	function viewInvoice( id: string ){
		//window.open( `/view-invoice?id=${id}`, `inv-${id}` );
		window.open( `/view-invoice/${id}`, `inv-${id}` );
	}

	function allUninvoicedTimeHaveBeenAddedToWorkingInvoice() : boolean{

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

		<div class="c-col-2">
		
			<article class="time-list">
				<header>Uninvoiced Time</header>

				{#if uninvoicedTasks.length != 0}
					{#if uninvoicedTasks.length > 1}
						<label>
							<input id="untagged-select-all" type="checkbox" bind:checked={
								() => allUninvoicedTimeHaveBeenAddedToWorkingInvoice(),
								(checked) => selectAllUninvoicedTime(checked)
							}/>
							Select All
						</label>
						<hr/>
					{/if}
					{#each uninvoicedTasks as task }
					<div class="c-task-line">
						<label>
							<input name="task-line" type="checkbox" bind:checked={
								() => workingInvoice.containsExtRefId( task.id ),
								(checked) =>{
									if (checked){
										workingInvoice.addLine( buildTimeLogInvoiceLine(task ) );
									}else{
										workingInvoice.removeLineWithExtRefId( task.id );
									}
								} 
							}/>
							{FormatDate.toLocalDatefromString( task.date, "en-NZ" )} ({task.affectiveDurationHours.toFixed(2)} hrs) - {task.name}
						</label>
					</div>
					{/each}
				{:else}
					<p><i>All time has been account for.</i></p>
				{/if}
				
			</article>

			<article class="scratch-pad">
				<header>Scratch Pad</header>
				<textarea name="scratch-pad" bind:value={scratchPad} oninput={(ev) => saveScratchPad() }></textarea>
			</article>

		</div>
	</section>
			
	<section id="row2">
		<article>
			<details>
				<summary>Closed Invoices ({closedInvoices.length})</summary>
				{#each closedInvoices as inv}
				<article>
					{inv.number}
					<a href="##" onclick="{(ev) => { ev.preventDefault(); viewInvoice(inv.id);}}">View</a>
				</article>
				{/each}
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
	
	.c-col-2{
		display: flex;
		flex-direction: column;
		flex: 4;
		min-width: 200px;
		height: max-content;
	}

	.time-list{
		flex: 2;
		overflow-y: auto;
		
		.c-task-line{
			font-size: 80%;
		}
	}

	.scratch-pad{
		flex: 2;
		overflow-y: auto;

		textarea{
			font-size: 80%;
			height: 13rem;
			margin: 0;
			box-sizing: border-box;
		}
	}

</style>