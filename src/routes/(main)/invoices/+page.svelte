<script lang="ts">
	import InvoiceEditorView from "$lib/views/invoice-editor/InvoiceEditorView.svelte";
	import { type TaskModel } from "$lib/models/TaskModel";
	import { TaskState } from "$lib/models/TaskState";
	import { onMount } from "svelte";
	
	import { InvoiceLineViewModel } from "$lib/view-models/InvoiceLineViewModel.svelte";
	import { InvoiceViewModel } from "$lib/view-models/InvoiceViewModel.svelte";
	import { TaskViewModel } from "$lib/view-models/TaskViewModel.svelte";
	import { FormatDate } from "$lib/services/formatters/FormatDate";
    import { appController } from "$lib/services/Singletons";
	
	const draftInvoiceId = "draft";

	let workingInvoice:InvoiceViewModel = $state( loadDraftInvoice());
	let uninvoicedTasks:TaskViewModel[] = $state([]);
	let scratchPad:string = $state("");

	let closedInvoices:InvoiceViewModel[] = $state([]);
	
	onMount(()=>{
		scratchPad = appController.getScratchPad("page-invoice-builder");
		
		uninvoicedTasks = fetchUninvoicedTasks();
		closedInvoices = fetchInvoices();
	})
    
	function loadDraftInvoice() : InvoiceViewModel{
		var m = appController.invRepo.get(draftInvoiceId)
		if (m){
			 return new InvoiceViewModel(m);
		}
		return buildNewDraftInvoice();
	}

	function fetchInvoices(): InvoiceViewModel[] {
		// fetch all invoices and sort by date desc and then number desc
        return appController.invRepo
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
		const settings = appController.settings;

		const result = new InvoiceViewModel();
		result.id = draftInvoiceId;

		result.headerLinesAsText = settings.defaultInvoiceHeader ?? "";

		result.currencyCode = settings.defaultInvoiceCurrencyCode;
		result.number = `${settings.nextInvoiceNumber}`;
		result.footnoteAsText = settings.defaultInvoiceFooter ?? "";

		return result;
	}

	function saveScratchPad(){
		appController.setScratchPad("page-invoice-builder", scratchPad);
	}

	function fetchUninvoicedTasks(): TaskViewModel[]{
		return appController.taskRepo.getAll().filter( t=> t.invoiceRefId.length == 0 && t.state == TaskState.Stopped).map(m=> new TaskViewModel(m) );
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
   
	function onViewDraftInvoice() {
		// save draft invoice
		saveDraftInvoice();
		// show invoice
		viewInvoice( workingInvoice.id, { wattermark: "DRAFT" } );
	}

	function saveDraftInvoice() {
		// save invoice
		appController.invRepo.set( workingInvoice.id, workingInvoice.getModel() );
	}

	/**
	 * Builds invoice from workingInvoice and saves it to the repo
	 */
	function onBuildInvoice() : void{

		const newInvModel = workingInvoice.getModel();

		// give the working invoice a unique id
		newInvModel.id = crypto.randomUUID();

		// save
		appController.invRepo.set( newInvModel.id, newInvModel);

		//tag all tasks in invoice lines with invoice number
		const attachedTaskIds = newInvModel.lines.map( l=>l.extRefId ).filter( id=>id && id.length > 0);
		const attachedTasks = uninvoicedTasks.filter( t=> attachedTaskIds.includes( t.id ));
		for (const task of attachedTasks) {
			task.invoiceRefId = newInvModel.id;
			task.state = TaskState.Archived;
			appController.taskRepo.set( task.id, task.getModel() );
		}

		appController.incrementNextInvoiceNumber();
		closedInvoices = fetchInvoices();
		
		uninvoicedTasks = fetchUninvoicedTasks();
		resetWorkingInvoice();

		viewInvoice( newInvModel.id );
	}
	
	function viewInvoice( id: string, options?:{wattermark?:string} ){
		let url = `/view-invoice/${id}`;
		if (options?.wattermark){
			url += `/${options.wattermark}`;
		}
		window.open( url, `inv-${id}` );
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

	function onDraftInvoiceAddLine(){
		workingInvoice.addLine();
		saveDraftInvoice();
	}

	function onDraftInvoiceRemoveLine( line : InvoiceLineViewModel){
		workingInvoice.removeLineWithId( line.id );
		saveDraftInvoice();
	}

	function onDraftInvoiceSortLines(){
		workingInvoice.sortAndRenumberLines();
		saveDraftInvoice();
	}

	function resetWorkingInvoice(){
		workingInvoice = buildNewDraftInvoice();
		saveDraftInvoice();
	}


</script>

<h2>Invoice Builder</h2>

<div id="container">

	<section id="row1">
		<InvoiceEditorView
			vm={workingInvoice}
			onChange={saveDraftInvoice}
			onAddLine={onDraftInvoiceAddLine}
			onRemoveLine={onDraftInvoiceRemoveLine}
			onSortLines={onDraftInvoiceSortLines}
			{onBuildInvoice}
			onPreviewInvoice={onViewDraftInvoice}
			onResetInvoice={resetWorkingInvoice}
		/>

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