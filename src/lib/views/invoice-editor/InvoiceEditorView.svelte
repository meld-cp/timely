<script lang="ts">
	
	import { FormatNumber } from "$lib/services/formatters/FormatNumber";
	import type { InvoiceLineViewModel, InvoiceViewModel } from "$lib/view-models/ViewModels.svelte";
	import InvoiceEditorLineView from "./InvoiceEditorLineView.svelte";

	let {
		vm,
		onChange,
		onAddLine,
		onRemoveLine,
		onSortLines,
		onPreviewInvoice,
		onBuildInvoice,
		onResetInvoice,
	}:{
		vm:InvoiceViewModel,
		onChange:()=>void,
		onAddLine:()=>void,
		onRemoveLine:( line:InvoiceLineViewModel )=>void,
		onSortLines:()=>void,
		onPreviewInvoice:()=>void,
		onBuildInvoice:()=>void,
		onResetInvoice:()=>void
	} = $props();

	

</script>

<article id="working-invoice-container" >
	<header>Working Invoice</header>
	<fieldset class="row">
		<input name="inv-num" type="text" title="Invoice Number" placeholder="Invoice Number" bind:value="{vm.number}" onchange="{onChange}"/>
		<input name="inv-date" type="date" title="Invoice Date" bind:value="{vm.date}" onchange="{onChange}"/>
		<input name="inv-order" type="text" title="Order #" placeholder="Order #" bind:value="{vm.orderRef}" onchange="{onChange}"/>
		<div style="flex: 99 1 auto"></div>
	</fieldset>
	<label>
		Header Lines
		<textarea
			name="inv-header"
			title="Header lines for the invoice"
			bind:value={vm.headerLinesAsText}
			spellcheck="true"
			onchange="{onChange}"
			placeholder="Header lines for the invoice"
		></textarea>
	</label>
	<label>
		Issue to
		<textarea
			name="inv-issue-to"
			title="Address of the company or person being issued to"
			bind:value={vm.issueToAsText}
			spellcheck="true"
			onchange="{onChange}"
			placeholder="Who will receive the invoice?"
		></textarea>
	</label>

	<section>
		<button onclick="{onAddLine}">Add Line</button>
		<button class="secondary" onclick="{onSortLines}">Sort Lines</button>
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
				<th></th>
			</tr>
		</thead>
		<tbody>
			{#each vm.lines as line}
			<InvoiceEditorLineView
				currencyCode={vm.currencyCode}
				vm={line}
				onRemoveLine={() => onRemoveLine(line)}
				onChange={onChange}
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
		<textarea
			name="inv-footnote"
			bind:value={vm.footnoteAsText}
			spellcheck="true"
			onchange="{onChange}"
			placeholder="Optional Footnote"
		></textarea>
	</label>

	<footer style="display: flex; justify-content: space-between;">
		<button class="secondary" onclick="{onPreviewInvoice}">Preview</button>
		<button onclick="{onBuildInvoice}">Build</button>
		<button class="secondary" onclick="{onResetInvoice}">Reset</button>
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