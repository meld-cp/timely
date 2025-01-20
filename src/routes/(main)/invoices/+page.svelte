<script lang="ts">
    import { setTaskControllerContext, TaskController } from "$lib/TaskController.svelte";
    import { setTaskRepoContext, TaskRepo } from "$lib/TaskRepo.svelte";
    import { InvoiceModel, InvoiceLineModel, type TaskModel } from "$lib/Types.svelte";
    
    const taskRepo = setTaskRepoContext( new TaskRepo() );
    const taskController = setTaskControllerContext( new TaskController( taskRepo ) );

    function buildTimeLogInvoiceLine( timeLog: TaskModel ): InvoiceLineModel {
        const newLine =  new InvoiceLineModel()
        //newLine.number = this.lineCounter;
        newLine.id = timeLog.id;
        newLine.description = `${timeLog.date} - ${timeLog.name}`;
        newLine.units = "hr";
        newLine.quantity = timeLog.affectiveDurationHours;
        newLine.unitCost = 200; //TODO: to model
        return newLine;
    }

    const workingInvoice = new InvoiceModel();
    $inspect(workingInvoice)

    function addBlankLineToWorkingInvoice(){
        workingInvoice.addLine( new InvoiceLineModel() )
    }

    function sortWorkingInvoiceLines(){

    }
    
    function saveWorkingInvoice(){
        window.open( `/invoice/${workingInvoice.id}`, )
    }

    function allUninvoicedTimeHasBeenAddedToWorkingInvoice() : boolean{
        // todo: check each ref id
        return workingInvoice.lines.length == taskController.fetchInactiveTasks().length;
    }

    function selectAllUninvoicedTime( select: boolean ){
        for (const task of taskController.fetchInactiveTasks()) {
            if (select){
                workingInvoice.addLine( buildTimeLogInvoiceLine(task ) );
            }else{
                workingInvoice.removeLineWithId(task.id);
            }
        }
    }

</script>

<h1>Invoice Builder</h1>

<div id="container">

    <section id="row1">
        <article id="working-invoice-container" >
            <header>Working Invoice</header>
            <fieldset class="grid">
                <input type="text" title="Invoice Number" placeholder="Invoice Number" bind:value="{workingInvoice.number}"/>
                <input type="date" title="Invoice Date" bind:value="{workingInvoice.date}"/>
            </fieldset>

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
                    {#each workingInvoice.lines as line}
                    <tr>
                        <td><input type="number" bind:value={line.number}/></td>
                        <td><input type="text" bind:value={line.description}/></td>
                        <td><input type="number" step="0.25" bind:value={line.quantity}/></td>
                        <td><input type="text" bind:value={line.units}/></td>
                        <td><input type="number" bind:value={line.unitCost}/></td>
                        <td>{line.getTotal()}</td>
                    </tr>
                    {/each}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3" rowspan="3" style="vertical-align: top;">
                            
                        </th>
                        <th colspan="2" style="text-align: right;">Subtotal:</th>
                        <th>{workingInvoice.getSubtotal()}</th>
                    </tr>
                    <tr>
                        <th colspan="2" style="text-align: right;">GST:</th>
                        <th>{workingInvoice.getTaxTotal()}</th>
                    </tr>
                    <tr>
                        <th colspan="2" style="text-align: right;">Grand Total:</th>
                        <th>{workingInvoice.getGrandTotal()}</th>
                    </tr>
                </tfoot>
            </table>
            
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
            {#each taskController.fetchInactiveTasks() as task }
            <div>
                <label>
                    <input id="{task.id}" type="checkbox" bind:checked={
                        () => workingInvoice.containsLineWithId(task.id),
                        (checked) =>{
                            if (checked){
                                workingInvoice.addLine( buildTimeLogInvoiceLine(task ) );
                            }else{
                                workingInvoice.removeLineWithId(task.id);
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