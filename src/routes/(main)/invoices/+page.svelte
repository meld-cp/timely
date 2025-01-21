<script lang="ts">
    import { invoiceController } from "$lib/InvoiceController.svelte";
    import InvoiceEditorView from "$lib/InvoiceEditor/InvoiceEditorView.svelte";
    import { settingsController } from "$lib/SettingsController.svelte";
    import { taskController } from "$lib/TaskController.svelte";
    import { type InvoiceLineModel,  type InvoiceModel, type TTask, TaskState } from "$lib/Models";
    import { DateFormat, NumberFormat } from "$lib/utils";
    import { onMount } from "svelte";
    import { InvoiceLineViewModel, InvoiceViewModel } from "$lib/ViewModels.svelte";

    let wiNextLineNumber = $state(1);

    let workingInvoice = $state( new InvoiceViewModel() );

    // let wiNumber: string = $state("");
    // let wiDate: string = $state( DateFormat.toInputDateValue( new Date() ));
    
    // let wiIssueTo:string = $state("");
    
    // let wiLines: InvoiceLineViewModel[] = $state([]);
    // let wiFootnote:string = $state("");
    
    $inspect(workingInvoice)

    let uninvoicedTasks:TTask[] = $state([]);
    onMount(()=>{
        const settings = settingsController.read();
        workingInvoice.number = `${settings.nextInvoiceNumber}`;
        workingInvoice.footnoteAsText = settings.defaultInvoiceFooter ?? "";
        uninvoicedTasks = taskController.fetchTasksByState([ TaskState.Stopped ]);
    })

    function buildTimeLogInvoiceLine( timeLog: TTask ): InvoiceLineViewModel {
        const newLine =  new InvoiceLineViewModel()
        newLine.number = wiNextLineNumber++;
        newLine.extRefId = timeLog.id;
        newLine.description = `${timeLog.date} - ${timeLog.name}`;
        newLine.units = "hr";
        newLine.quantity = timeLog.affectiveDurationHours;
        newLine.unitCost = 200; //TODO: to model
        return newLine;
    }

    // function addBlankLineToWorkingInvoice(){
    //     const line = new InvoiceLineModel();
    //     line.number = wiNextLineNumber;

    //     wiNextLineNumber++;

    //     wiLines.push( new InvoiceLineViewModel( line ) );
    // }

    // function sortWorkingInvoiceLines(){

    // }
    
    function saveWorkingInvoice( inv: InvoiceViewModel ) : void{
        invoiceController.save(inv.getModel());
        //workingInvoice = invoiceController.workingInvoice;
        window.open( `/invoice/${inv.id}`, )
    }

    function allUninvoicedTimeHasBeenAddedToWorkingInvoice() : boolean{
        // todo: check each ref id
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