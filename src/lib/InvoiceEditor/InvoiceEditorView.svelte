<script lang="ts">
    import type { InvoiceLineViewModel } from "$lib/ViewModels.svelte";
    import { invoiceController } from "../InvoiceController.svelte";
    import { InvoiceModel } from "../Models";
    import InvoiceEditorLineView from "./InvoiceEditorLineView.svelte";


    let {
        invoiceNumber,
        invoiceDate,
        issueTo,
        lines = $bindable(),
        footnote,
        onAddBlankLine,
        onSortLines,
        onSaveInvoice,
    }:{
        invoiceNumber:string,
        invoiceDate:string,
        issueTo:string,
        lines:InvoiceLineViewModel[]
        footnote:string,
        onAddBlankLine: () => void
        onSortLines: () => void
        onSaveInvoice: (inv:InvoiceModel) => void
    } = $props();



    function buildInvoice():InvoiceModel{
        const inv = new InvoiceModel();
        inv.number = invoiceNumber;
        inv.date = invoiceDate;
        inv.issueToLines = issueTo.split("\n");
        inv.lines = lines.map( vm=>vm.model );
        inv.footerLines = footnote.split("\n");
        return inv;
    }
</script>

<article id="working-invoice-container" >
    <header>Working Invoice</header>
    <fieldset class="grid">
        <input type="text" title="Invoice Number" placeholder="Invoice Number" bind:value="{invoiceNumber}"/>
        <input type="date" title="Invoice Date" bind:value="{invoiceDate}"/>
    </fieldset>
    <label>
        Issue to
        <textarea bind:value={issueTo}></textarea>
    </label>


    <nav>
        <ul>
            <li>
                <button onclick="{onAddBlankLine}">Add Line</button>
            </li>
            <li>
                <button class="secondary" onclick="{onSortLines}">Sort Lines</button>
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
            {#each lines as line}
            <InvoiceEditorLineView
                vm={line}
            />
            {/each}
        </tbody>
        <tfoot>
            <tr>
                <th colspan="3" rowspan="3" style="vertical-align: top;">
                    
                </th>
                <th colspan="2" style="text-align: right;">Subtotal:</th>
                <th>{invoiceController.getSubtotal( lines )}</th>
            </tr>
            <tr>
                <th colspan="2" style="text-align: right;">GST:</th>
                <th>{invoiceController.getTaxTotal(lines)}</th>
            </tr>
            <tr>
                <th colspan="2" style="text-align: right;">Grand Total:</th>
                <th>{invoiceController.getGrandTotal(lines)}</th>
            </tr>
        </tfoot>
    </table>
    
    <label>
        Footnote
        <textarea bind:value={footnote}></textarea>
    </label>

    <footer>
        <button onclick="{() => onSaveInvoice(buildInvoice())}">Save</button>
    </footer>

</article>

<style>
   
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

</style>