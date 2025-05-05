<script lang="ts">
	
	import { FormatNumber } from "$lib/services/formatters/FormatNumber";
	import type { InvoiceLineViewModel } from "$lib/view-models/ViewModels.svelte";

	let {
		vm,
		currencyCode,
	}:{
		vm:InvoiceLineViewModel,
		currencyCode:string
	} = $props();

</script>
<tr class="c-line">
	<td><input name="line-num" type="number" min="1" bind:value="{vm.number}"/></td>
	<td><input name="line-desc" type="text" bind:value="{vm.description}" spellcheck="true"/></td>
	<td><input name="line-qty" type="number" step="0.25" bind:value="{vm.quantity}"/></td>
	<td><input name="line-units" type="text" bind:value="{vm.units}"/></td>
	<td><input name="line-unit-cost" type="number" bind:value="{vm.unitCost}"/></td>
	<td style="text-align: right;">{FormatNumber.currency( vm.total, currencyCode )}</td>
</tr>

<style>
	.c-line td{
		padding: 0rem 0.3rem;
		border-left: 1px solid hsl(0, 0%, 80%);
		border-right: 1px solid hsl(0, 0%, 80%);
	}
	.c-line {
		font-size: 80%;
		input{
			font-size: 100%;
			margin-bottom: 0;
			height: fit-content;
			border: none;
			border-radius: unset;
			background-color: transparent;
		}
	}
	input[name=line-num]{
		text-align: center;
	}
	input[name=line-qty],
	input[name=line-unit-cost]{
		text-align: right;
	}
</style>