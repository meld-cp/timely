<script lang="ts">
	
	import { FormatNumber } from "$lib/services/formatters/FormatNumber";
	import type { InvoiceViewModel } from "$lib/view-models/ViewModels.svelte";
	import InvoiceEditorLineView from "./InvoiceEditorLineView.svelte";


	let {
		vm = $bindable(),
		onSaveInvoice
	}:{
		vm:InvoiceViewModel,
		onSaveInvoice:(vm:InvoiceViewModel)=>void
	} = $props();



	// function buildInvoice():InvoiceModel{
	//     const inv = new InvoiceModel();
	//     inv.number = invoiceNumber;
	//     inv.date = invoiceDate;
	//     inv.issueToLines = issueTo.split("\n");
	//     inv.lines = lines.map( vm=>vm.model );
	//     inv.footerLines = footnote.split("\n");
	//     return inv;
	// }
</script>

<article id="working-invoice-container" >
	<header>Working Invoice</header>
	<fieldset class="grid">
		<input name="inv-num" type="text" title="Invoice Number" placeholder="Invoice Number" bind:value="{vm.number}"/>
		<input name="inv-date" type="date" title="Invoice Date" bind:value="{vm.date}"/>
	</fieldset>
	<label>
		Issue to
		<textarea name="inv-issue-to" bind:value={vm.issueToAsText}></textarea>
	</label>


	<nav>
		<ul>
			<li>
				<button onclick="{() => vm.addLine()}">Add Line</button>
			</li>
			<li>
				<button class="secondary" onclick="{() => vm.sortLines()}">Sort Lines</button>
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
			{#each vm.lines as line}
			<InvoiceEditorLineView vm={line} currencyCode={vm.currencyCode} />
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th colspan="3" rowspan="3" style="vertical-align: top;">
					
				</th>
				<th colspan="2" style="text-align: right;">Subtotal:</th>
				<th style="text-align: right;">{FormatNumber.currency( vm.subtotal, vm.currencyCode )}</th>
			</tr>
			<tr>
				<th colspan="2" style="text-align: right;">GST:</th>
				<th style="text-align: right;">{FormatNumber.currency( vm.taxTotal, vm.currencyCode )}</th>
			</tr>
			<tr>
				<th colspan="2" style="text-align: right;">Grand Total:</th>
				<th style="text-align: right;">{FormatNumber.currency( vm.grandTotal, vm.currencyCode )}</th>
			</tr>
		</tfoot>
	</table>
	
	<label>
		Footnote
		<textarea name="inv-footnote" bind:value={vm.footnoteAsText}></textarea>
	</label>

	<footer>
		<button onclick="{() => onSaveInvoice(vm)}">Save</button>
	</footer>

</article>

<style>
   
	#working-invoice-container{
		flex: 8;
		height: fit-content;
		min-width: 800px;
	}
		#working-invoice-container nav li{
			padding-top: 0;
			padding-bottom: 0;
		}
		#working-invoice-container input{
			margin-bottom: 0;
		}
		#working-invoice-container button{
			font-size: small;
		}

</style>