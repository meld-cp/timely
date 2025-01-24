<script lang="ts">
	import InvoiceEditorView from "$lib/views/invoice-editor/InvoiceEditorView.svelte";
	import { type TaskModel } from "$lib/models/TaskModel";
	import { TaskState } from "$lib/models/TaskState";
	import { onMount } from "svelte";
	import { InvoiceLineViewModel, InvoiceViewModel, TaskViewModel } from "$lib/view-models/ViewModels.svelte";
	import { invRepo, settingsController, taskRepo } from "$lib/services/Singletons";
    import { FormatDate } from "$lib/services/formatters/FormatDate";
	
	const draftInvoiceId = "draft";

	let workingInvoice:InvoiceViewModel = $state( buildNewDraftInvoice() );
	let uninvoicedTasks:TaskViewModel[] = $state([]);
	let scratchPad:string = $state("");

	let closedInvoices:InvoiceViewModel[] = $state([]);
	
	onMount(()=>{
		scratchPad = settingsController.getScratchPad("page-invoice-builder");
		
		uninvoicedTasks = fetchUninvoicedTasks();
		closedInvoices = fetchInvoices();
	})
    
	function fetchInvoices(): InvoiceViewModel[] {
		// fetch all invoices and sort by date desc and then number desc
        return invRepo
			.getAll()
			.filter( i=>i.id != draftInvoiceId)
			.map( m => new InvoiceViewModel(m) )
			.sort( (a,b) => {
				// sort by date desc
				const aSort1 = new Date( a.date ).valueOf();
				const bSort1 = new Date( b.date ).valueOf();
				if (aSort1 > bSort1) return -1;
				if (aSort1 < bSort1) return 1;
				
				// if the dates are equal sort by number desc
				const bSort2 = b.number;
				const aSort2 = a.number;
				if (aSort2 > bSort2) return -1;
				if (aSort2 < bSort2) return 1;
				
				// if the numbers are equal sort by id
				if (a.id > b.id) return 1;
				if (a.id < b.id) return -1;
				
				return 0;

			})
		;
    }

	function buildNewDraftInvoice() : InvoiceViewModel{
		const settings = settingsController.read();

		const result = new InvoiceViewModel();
		result.id = draftInvoiceId;

		result.currencyCode = settings.defaultInvoiceCurrencyCode;
		result.number = `${settings.nextInvoiceNumber}`;
		result.footnoteAsText = settings.defaultInvoiceFooter ?? "";

		return result;
	}

	function saveScratchPad(){
		settingsController.setScratchPad("page-invoice-builder", scratchPad);
	}

	function fetchUninvoicedTasks(): TaskViewModel[]{
		return taskRepo.getAll().filter( t=> t.invoiceRefId.length == 0 && t.state == TaskState.Stopped).map(m=> new TaskViewModel(m) );
	}

	function buildTimeLogInvoiceLine( timeLog: TaskModel ): InvoiceLineViewModel {
		const newLine =  new InvoiceLineViewModel()
		newLine.extRefId = timeLog.id;
		newLine.description = `${timeLog.date} - ${timeLog.name}`;
		newLine.units = "hr";
		newLine.quantity = timeLog.affectiveDurationHours;
		newLine.unitCost = 200; //TODO: to model
		return newLine;
	}
   
	function onPreviewInvoice() {
		// save preview invoice
		invRepo.set( workingInvoice.id, workingInvoice.getModel() );
		viewInvoice( workingInvoice.id);
	}

	/**
	 * Builds invoice from workingInvoice and saves it to the repo
	 */
	function onBuildInvoice() : void{

		const model = workingInvoice.getModel();

		// give the working invoice a unique id
		model.id = crypto.randomUUID();

		// save
		invRepo.set( model.id, model);

		//tag all tasks in invoice lines with invoice number
		const attachedTaskIds = workingInvoice.lines.map( l=>l.extRefId ).filter( id=>id && id.length > 0);
		const attachedTasks = uninvoicedTasks.filter( t=> attachedTaskIds.includes( t.id ));
		for (const task of attachedTasks) {
			task.invoiceRefId = workingInvoice.id;
			taskRepo.set( task.id, task.getModel() );
		}

		settingsController.incrementNextInvoiceNumber();
		closedInvoices = fetchInvoices();
		
		uninvoicedTasks = fetchUninvoicedTasks();
		workingInvoice = buildNewDraftInvoice();

		viewInvoice( model.id );
	}
	
	function viewInvoice( id: string ){
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

<h2>Invoice Builder</h2>

<div id="container">

	<section id="row1">
		<InvoiceEditorView vm={workingInvoice} {onBuildInvoice} {onPreviewInvoice}/>

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
					<p><i>All time has been accounted for.</i></p>
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