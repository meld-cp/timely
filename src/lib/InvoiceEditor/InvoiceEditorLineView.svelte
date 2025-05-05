<script lang="ts">
    import { NumberFormat } from "$lib/utils";
    import type { InvoiceLineViewModel } from "$lib/ViewModels.svelte";

    let {
        vm,
        currencyCode,
    }:{
        vm:InvoiceLineViewModel,
        currencyCode:string
    } = $props();

</script>
<tr id="c-line">
    <td><input type="number" bind:value="{vm.number}" /></td>
    <td><input type="text" bind:value="{vm.description}"/></td>
    <td><input type="number" step="0.25" bind:value="{vm.quantity}"/></td>
    <td><input type="text" bind:value="{vm.units}"/></td>
    <td><input type="number" bind:value="{vm.unitCost}"/></td>
    <td style="text-align: right;">{NumberFormat.currency( vm.total, currencyCode )}</td>
</tr>

<style>
    #c-line input{
        margin-bottom: 0;
        
    }
</style>