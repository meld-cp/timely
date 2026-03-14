<script lang="ts">
	
	import { FormatNumber } from "$lib/services/formatters/FormatNumber";
	import { appController } from "$lib/services/Singletons";
	
	import type { InvoiceLineViewModel } from "$lib/view-models/InvoiceLineViewModel.svelte";
    import { faTrash } from "@fortawesome/free-solid-svg-icons";
    import Icon from "../Icon.svelte";

	let {
		currencyCode,
		vm: vmLine,
		onChange,
		onRemoveLine,
	}:{
		currencyCode:string
		vm:InvoiceLineViewModel,
		onChange:()=>void,
		onRemoveLine:()=>void,
	} = $props();


</script>
<tr class="c-line">
	<td><input name="line-num" type="number" min="1" bind:value="{vmLine.number}" onchange="{onChange}"/></td>
	<td><input name="line-desc" type="text" bind:value="{vmLine.description}" spellcheck="true" onchange="{onChange}"/></td>
	<td><input name="line-qty" type="number" step="0.25" bind:value="{vmLine.quantity}" onchange="{onChange}"/></td>
	<td><input name="line-units" type="text" bind:value="{vmLine.units}" onchange="{onChange}"/></td>
	<td><input name="line-unit-cost" type="number" bind:value="{vmLine.unitCost}" onchange="{onChange}"/></td>
	<td style="text-align: right;">{FormatNumber.currency( vmLine.total, currencyCode, appController.settings.localeCode )}</td>
	<td><Icon icon={faTrash} onClick={onRemoveLine}/></td>
</tr>

<style>
	.c-line td{
		padding: 0rem 0.3rem;
		border-left: 1px solid var(--pico-form-element-border-color);
		border-right: 1px solid var(--pico-form-element-border-color);
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