<script lang="ts">
    import { invoiceController } from "$lib/InvoiceController.svelte";
    import { settingsController } from "$lib/SettingsController.svelte";
    import { taskController } from "$lib/TaskController.svelte";
    import { InvoiceLineModel, InvoiceModel, type TTask, TaskState } from "$lib/Types";
    import { DateHelper } from "$lib/utils";
    import { onMount } from "svelte";

    let wiNumber: string = $state("");
    let wiDate: string = $state( DateHelper.toInputDateValue( new Date() ));

    let wiIssueTo:string = $state("");

    let wiNextLineNumber = $state(1);
    let wiLines: InvoiceLineModel[] = $state([]);
    let wiFootnote:string = $state("");


    let uninvoicedTasks:TTask[] = $state([]);

    onMount(()=>{
        const settings = settingsController.read();
        wiNumber = `${settings.nextInvoiceNumber}`;
        wiFootnote = settings.defaultInvoiceFooter ?? "";
        uninvoicedTasks = taskController.fetchTasksByState([ TaskState.Stopped ]);
    })

    function buildTimeLogInvoiceLine( timeLog: TTask ): InvoiceLineModel {
        const newLine =  new InvoiceLineModel()
        newLine.number = wiNextLineNumber++;
        newLine.extRefId = timeLog.id;
        newLine.description = `${timeLog.date} - ${timeLog.name}`;
        newLine.units = "hr";
        newLine.quantity = timeLog.affectiveDurationHours;
        newLine.unitCost = 200; //TODO: to model
        return newLine;
    }

    function addBlankLineToWorkingInvoice(){
        const line = new InvoiceLineModel();
        line.number = wiNextLineNumber;

        wiNextLineNumber++;

        wiLines.push( line );
    }

    function sortWorkingInvoiceLines(){

    }
    
    function saveWorkingInvoice(){
        const inv = new InvoiceModel();
        inv.number = wiNumber;
        inv.date = wiDate;
        inv.issueToLines = wiIssueTo.split("\n");
        inv.lines = wiLines;
        inv.footerLines = wiFootnote.split("\n");

        invoiceController.save(inv);

        //workingInvoice = invoiceController.workingInvoice;
        window.open( `/invoice/${inv.id}`, )
    }

    function allUninvoicedTimeHasBeenAddedToWorkingInvoice() : boolean{
        // todo: check each ref id
        for (const task of uninvoicedTasks) {
            if (!invoiceController.containsExtRefId( wiLines, task.id )){
                return false;
            }
        }
        return true;
    }

    function selectAllUninvoicedTime( select: boolean ){
        for (const task of taskController.fetchTasksByState([ TaskState.Stopped ])) {
            if (select){
                wiLines.push( buildTimeLogInvoiceLine(task ) );
            }else{
                removeInvoiceLineWitnExtRefId( task.id );
            }
        }
    }

    function removeInvoiceLineWitnExtRefId( extRefId:string ){
        wiLines = wiLines.filter( l=>l.extRefId != extRefId );
    }

</script>

<h1>Invoice Builder</h1>

<div id="container">

    <section id="row1">
        <article id="working-invoice-container" >
            <header>Working Invoice</header>
            <fieldset class="grid">
                <input type="text" title="Invoice Number" placeholder="Invoice Number" bind:value="{wiNumber}"/>
                <input type="date" title="Invoice Date" bind:value="{wiDate}"/>
            </fieldset>
            <label>
                Issue to
                <textarea bind:value={wiIssueTo}></textarea>
            </label>


            <nav>
                <ul>
                    <li>
                        <button onclick="{addBlankLineToWorkingInvoice}">Add Line</button>
                    </li>
                    <li>
                        <button class="secondary" onclick="{sortWorkingInvoiceLines}">Sort Lines</button>
                    </li>
                </ul>
            </nav>

            <table id="working-inv-lines" class="striped">
                <thead>
                    <tr>
                        <th>Line No.</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Units</th>
                        <th>Unit Cost</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {#each wiLines as line}
                    <tr>
                        <td><input type="number" bind:value={line.number}/></td>
                        <td><input type="text" bind:value={line.description}/></td>
                        <td><input type="number" step="0.25" bind:value={line.quantity}/></td>
                        <td><input type="text" bind:value={line.units}/></td>
                        <td><input type="number" bind:value={line.unitCost}/></td>
                        <td>{invoiceController.getLineTotal( line )}</td>
                    </tr>
                    {/each}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3" rowspan="3" style="vertical-align: top;">
                            
                        </th>
                        <th colspan="2" style="text-align: right;">Subtotal:</th>
                        <th>{invoiceController.getSubtotal( wiLines )}</th>
                    </tr>
                    <tr>
                        <th colspan="2" style="text-align: right;">GST:</th>
                        <th>{invoiceController.getTaxTotal(wiLines)}</th>
                    </tr>
                    <tr>
                        <th colspan="2" style="text-align: right;">Grand Total:</th>
                        <th>{invoiceController.getGrandTotal(wiLines)}</th>
                    </tr>
                </tfoot>
            </table>
            
            <label>
                Footnote
                <textarea bind:value={wiFootnote}></textarea>
            </label>

            <footer>
                <button onclick="{saveWorkingInvoice}">Save</button>
            </footer>

        </article>

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
                        () => invoiceController.containsExtRefId( wiLines, task.id ),
                        (checked) =>{
                            if (checked){
                                wiLines.push( buildTimeLogInvoiceLine(task ) );
                            }else{
                                removeInvoiceLineWitnExtRefId( task.id );
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
    
    #working-invoice-container{
        flex: 8;
        height: fit-content;
        min-width: 800px;
    }
        #working-invoice-container input{
            margin: 0;
            padding: 0.2em;
            height: unset;
        }
        #working-invoice-container nav li{
            padding-top: 0;
            padding-bottom: 0;
        }
        #working-invoice-container button{
            font-size: small;
        }

    #uninvoiced-time-container{
        flex: 4;
        height: fit-content;
        min-width: 200px;
    }

</style>