<script lang="ts">
    import { NumberFormat } from "$lib/utils";
    import type { InvoiceLineViewModel } from "$lib/ViewModels.svelte";

    let {
        vm
    }:{
        vm:InvoiceLineViewModel
    } = $props();

    //let lineTotal = $derived(invoiceController.calcLineTotal( quantity, unitCost ));

</script>
<tr>
    <td><input type="number" bind:value="{vm.number}" /></td>
    <td><input type="text" bind:value="{vm.description}"/></td>
    <td><input type="number" step="0.25" bind:value="{vm.quantity}"/></td>
    <td><input type="text" bind:value="{vm.units}"/></td>
    <td><input type="number" bind:value="{vm.unitCost}"/></td>
    <td>{NumberFormat.currency( vm.total, "NZD" )}</td>
</tr>
