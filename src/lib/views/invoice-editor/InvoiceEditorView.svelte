<script lang="ts">
	
	import { FormatNumber } from "$lib/services/formatters/FormatNumber";
	import type { InvoiceViewModel } from "$lib/view-models/ViewModels.svelte";
	import InvoiceEditorLineView from "./InvoiceEditorLineView.svelte";

	let {
		vm,
		onPreviewInvoice,
		onBuildInvoice,
	}:{
		vm:InvoiceViewModel,
		onPreviewInvoice:(vm:InvoiceViewModel)=>void,
		onBuildInvoice:(vm:InvoiceViewModel)=>void,
	} = $props();


</script>

<article id="working-invoice-container" >
	<header>Working Invoice</header>
	<fieldset class="row">
		<input name="inv-num" type="text" title="Invoice Number" placeholder="Invoice Number" bind:value="{vm.number}"/>
		<input name="inv-date" type="date" title="Invoice Date" bind:value="{vm.date}"/>
		<input name="inv-order" type="text" title="Order #" placeholder="Order #" bind:value="{vm.orderRef}"/>
		<div style="flex: 99 1 auto"></div>
	</fieldset>
	<label>
		Issue to
		<textarea
			name="inv-issue-to"
			title="Address of the company or person being issued to"
			bind:value={vm.issueToAsText}
			spellcheck="true"
		></textarea>
	</label>

	<section>
		<button onclick="{() => vm.addLine()}">Add Line</button>
		<button class="secondary" onclick="{() => vm.sortLines()}">Sort Lines</button>
	</section>

	<table id="working-inv-lines" class="striped">
		<thead>
			<tr>
				<th>Line No.</th>
				<th style="width: 100%;">Description</th>
				<th>Quantity</th>
				<th>Units</th>
				<th>Unit Cost</th>
				<th>Total</th>
			</tr>
		</thead>
		<tbody>
			{#each vm.lines as line}
			<InvoiceEditorLineView
				vm={line}
				currencyCode={vm.currencyCode}
			/>
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
		<textarea name="inv-footnote" bind:value={vm.footnoteAsText} spellcheck="true"></textarea>
	</label>

	<footer>
		<button class="secondary" onclick="{() => onPreviewInvoice(vm)}">Preview</button>
		<button onclick="{() => onBuildInvoice(vm)}">Build</button>
	</footer>

</article>

<style>
   
	#working-invoice-container{
		flex: 8;
		height: fit-content;
		
		--pico-form-element-spacing-vertical: 0.25rem;
		--pico-form-element-spacing-horizontal: 0.25rem;
		

		.row{
			display: flex;
			gap: 0.5rem;
			justify-content: space-between;
		}
		
		input[name=inv-num]{
			flex: 1 1 10ch;
		}

		input[name=inv-date]{
			flex: 1 1 10ch;
		}
		input[name=inv-order]{
			flex: 1 1 12ch;
		}
	}
		#working-invoice-container input{
			margin-bottom: 0;
		}
		#working-invoice-container button{
			font-size: small;
		}

		#working-inv-lines{

			margin: 0;
			
			th{
				font-size: 80%;
				white-space: nowrap;
				padding: 0.1rem 0.3rem;
			}
		}

</style>