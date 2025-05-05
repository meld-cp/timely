<script lang="ts">
    import { invoiceController } from "$lib/InvoiceController.svelte";
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
    <td><input type="number" bind:value="{vm.model.number}" /></td>
    <td><input type="text" bind:value="{vm.model.description}"/></td>
    <td><input type="number" step="0.25" bind:value="{vm.model.quantity}"/></td>
    <td><input type="text" bind:value="{vm.model.units}"/></td>
    <td><input type="number" bind:value="{vm.model.unitCost}"/></td>
    <td>{NumberFormat.currency( vm.total, "NZD" )}</td>
</tr>
