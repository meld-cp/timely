<script lang="ts">
    import { invoiceController } from "$lib/InvoiceController.svelte";
    import InvoiceEditorView from "$lib/InvoiceEditor/InvoiceEditorView.svelte";
    import { settingsController } from "$lib/SettingsController.svelte";
    import { taskController } from "$lib/TaskController.svelte";
    import { type TaskModel, TaskState } from "$lib/Models";
    import { onMount } from "svelte";
    import { InvoiceLineViewModel, InvoiceViewModel } from "$lib/ViewModels.svelte";

    let wiNextLineNumber = $state(1);

    let workingInvoice = $state( new InvoiceViewModel() );

    let uninvoicedTasks:TaskModel[] = $state([]);
    onMount(()=>{
        const settings = settingsController.read();
        workingInvoice.number = `${settings.nextInvoiceNumber}`;
        workingInvoice.footnoteAsText = settings.defaultInvoiceFooter ?? "";
        uninvoicedTasks = taskController.fetchTasksByState([ TaskState.Stopped ]);
    })

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
        invoiceController.save(inv.getModel());
        window.open( `/invoice/${inv.id}`, )
    }

    function allUninvoicedTimeHasBeenAddedToWorkingInvoice() : boolean{
        for (const task of uninvoicedTasks) {
            if (workingInvoice.containsExtRefId( task.id )){
                return false;
            }
        }
        return true;
    }

    function selectAllUninvoicedTime( select: boolean ){
        for (const task of taskController.fetchTasksByState([ TaskState.Stopped ])) {
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

            <label>
                <input id="untagged-select-all" type="checkbox" bind:checked={
                    () => allUninvoicedTimeHasBeenAddedToWorkingInvoice(),
                    (checked) => selectAllUninvoicedTime(checked)
                }/>
                Select All
            </label>
            <hr/>
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