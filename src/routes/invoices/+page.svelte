<script lang="ts">
    import { setTaskControllerContext, TaskController } from "$lib/TaskController.svelte";
    import { setTaskRepoContext, TaskRepo } from "$lib/TaskRepo.svelte";
    import type { TaskModel } from "$lib/Types";
    import { DateHelper } from "$lib/utils";

    const taskRepo = setTaskRepoContext( new TaskRepo() );
    const taskController = setTaskControllerContext( new TaskController( taskRepo ) );

    class Invoice{
        public number:string = $state("");
        public date:string = $state( DateHelper.toInputDateValue( new Date()) );

        public lines: InvoiceLine[] = $state([]);

        private lineCounter = 0;

        public addLine( line: InvoiceLine ){
            this.removeLineWithRef(line.refId)

            this.lineCounter++;
            
            line.number = this.lineCounter;

            this.lines.push( line );
        }

        public removeLineWithRef(id: string) {
            this.lines = this.lines.filter( l=>l.refId != id );
        }

        public containsLineWithRef(id: string) : boolean {
            return this.lines.some( l=>l.refId == id );
        }
        public getSubtotal():number {
            return 0;
        }
        
        public getTaxTotal():number {
            return 0;
        }

        public getGrandTotal():number {
            return 0;
        }
    }

    function buildTimeLogInvoiceLine( timeLog: TaskModel ): InvoiceLine {
        const newLine =  new InvoiceLine()
        //newLine.number = this.lineCounter;
        newLine.refId = timeLog.id;
        newLine.description = `${timeLog.date} - ${timeLog.name}`;
        newLine.units = "hr";
        newLine.quantity = timeLog.affectiveDurationHours;
        newLine.unitCost = 200; //TODO: to model
        return newLine;
    }

    class InvoiceLine {
        public number:number = $state(0)
        public refId = $state(crypto.randomUUID().toString())
        public description:string = $state("")
        public units:string = $state("")
        public quantity:number = $state(0)
        public unitCost:number = $state(0)

        public getTotal():number {
            return this.quantity * this.unitCost;
        }
    }

    const workingInvoice = new Invoice();
    $inspect(workingInvoice)

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
                        <button onclick="{() => workingInvoice.addLine( new InvoiceLine() )}">Add Line</button>
                    </li>
                    <li>
                        <button class="secondary">Sort Lines</button>
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
                <button>Generate Invoice</button>
            </footer>

        </article>

        <article id="uninvoiced-time-container">
            <header>Uninvoiced Time</header>

            <label>
                <input id="untagged-select-all" type="checkbox" bind:checked={
                    () => workingInvoice.lines.length == taskController.fetchInactiveTasks().length,
                    (checked) =>{
                        for (const task of taskController.fetchInactiveTasks()) {
                            if (checked){
                                workingInvoice.addLine( buildTimeLogInvoiceLine(task ) );
                            }else{
                                workingInvoice.removeLineWithRef(task.id);
                            }
                        }
                    } 
                }/>
                Select All
            </label>
            <hr/>
            {#each taskController.fetchInactiveTasks() as task }
            <div>
                <label>
                    <input id="{task.id}" type="checkbox" bind:checked={
                        () => workingInvoice.containsLineWithRef(task.id),
                        (checked) =>{
                            if (checked){
                                workingInvoice.addLine( buildTimeLogInvoiceLine(task ) );
                            }else{
                                workingInvoice.removeLineWithRef(task.id);
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