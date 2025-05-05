<script lang="ts">
	import { page } from '$app/state';
	import { FormatNumber } from "$lib/services/formatters/FormatNumber";
	import { onMount } from 'svelte';
	import { InvoiceViewModel } from '$lib/view-models/ViewModels.svelte';
	import { invRepo, settingsController } from '$lib/services/Singletons';
    	
	const settings = settingsController.read();

	let logoSrc :string|undefined = $state(settings.logoData);
	
	let inv: InvoiceViewModel | null = $state( null );
	
	onMount(()=>{
		const m = invRepo.get(page.params.id);
		if (m){
			inv = new InvoiceViewModel(m);
		}
	})

</script>

{#if inv}
<div id="c-inv">

	<section id="c-header" class="row">
		<div id="c-logo">
			<img src="{logoSrc}" alt="" />
		</div>

		<div id="c-address">
			{#each (settings.address ?? "")?.split("\n") as line }
				{line}<br/>
			{/each}
		</div>

		<section id="c-title" class="col">
			<!-- title and tax no -->
			<header>Tax Invoice</header>
			{#each (settings.invoiceHeader ?? "")?.split("\n") as line }
				<div>{line}</div>
			{/each}
		</section>
	</section>

	<section id="c-inv-detail" class="row">
		<section id="c-issue-to">
			<!-- to -->
			<header>Invoice To:</header>
			<div>
				{#each inv.issueToLines as line }
				{line}<br/>
				{/each}
			</div>
		</section>

		<section>
			<table>
				<tbody>
					<tr>
						<th class="tar">Date:</th>
						<td>{inv.date}</td>
					</tr>
					<tr>
						<th class="tar">Invoice #:</th>
						<td>{inv.number}</td>
					</tr>
					{#if inv.orderRef.length>0}
						<tr>
							<th class="tar">Order #:</th>
							<td>{inv.orderRef}</td>
						</tr>
					{/if}
				</tbody>
			</table>
		</section>
			
	</section>

	<section id="c-lines" class="row">
		<!-- lines -->
		<table>
			<thead>
				<tr>
					<th class="tal">Description</th>
					<th class="tar" style="width: 2cm;">Quantity</th>
					<th class="tac" style="width: 2cm;">Unit</th>
					<th class="tar" style="width: 2cm;">Unit Price</th>
					<th class="tar" style="width: 2cm; white-space: nowrap;">Amount ({inv.currencyCode})</th>
				</tr>
			</thead>
			<tbody>
				{#each inv.lines as line}
				<tr>
					<td class="tal">{line.description}</td>
					<td class="tar">{line.quantity}</td>
					<td class="tac">{line.units}</td>
					<td class="tar">{FormatNumber.currency( line.unitCost, inv.currencyCode, settings.localeCode )}</td>
					<td class="tar">{FormatNumber.currency( line.total, inv.currencyCode, settings.localeCode )}</td>
				</tr>
				{/each}
			</tbody>
			<tfoot>
				<tr>
					<th class="tar" colspan="4">Subtotal:</th>
					<th class="tar">{FormatNumber.currency( inv.subtotal, inv.currencyCode, settings.localeCode )}</th>
				</tr>
				<tr>
					<th class="tar" colspan="4">GST:</th>
					<th class="tar">{FormatNumber.currency( inv.taxTotal, inv.currencyCode, settings.localeCode )}</th>
				</tr>
				<tr>
					<th class="tar" colspan="4">Grand Total:</th>
					<th class="tar">{FormatNumber.currency( inv.grandTotal, inv.currencyCode, settings.localeCode )}</th>
				</tr>
			</tfoot>
		</table>
	</section>

	<section id="footer" class="row">
		<!-- footer -->
		{#each inv.footerLines as line }
			{line}<br/>
		{/each}
	</section>

</div>

{:else}
	Invoice with id '{page.params.id}' not found
{/if}

<style>

	header{
		font-weight: bold;
	}

	table{
		border-collapse: collapse;
	}
	thead {
		border-bottom: 1px solid black;
	}
	tfoot {
		border-top: 1px solid black;
	}
	th, td{
		padding: 0.1cm;
	}
	
	#c-inv{
		margin: 0;
		font-size: 0.4cm;
		font-family: Arial, Helvetica, sans-serif
	}
	
	#c-logo{
		height: 3cm;
		flex-shrink: 0;
	}
		#c-logo img{
			width: 100%;
			height: 100%;
		}    
	#c-address{
		justify-self: left;
		flex-grow: 1;
	}
	
	#c-title{
		flex-grow: 1;
		gap: 0;
		align-self: flex-start;
		text-align: right;
	}

	#c-title header{
		font-size: 1cm;
	}

	#c-lines{

		td, th{
			padding: 0.3rem 0.5rem;
		}
		table{
			width: 100%;
		}
		
	}
	

	.tal{
		text-align: left;
	}

	.tac{
		text-align: center;
	}

	.tar{
		text-align: right;
	}
	
	
	/* Layout */
	.row{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1cm;
		gap: 1cm;
	}
	.col{
		display: flex;
		flex-direction: column;
		gap: 1cm;
	}
</style>