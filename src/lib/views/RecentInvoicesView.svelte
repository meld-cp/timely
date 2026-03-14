<script lang="ts">
	import type { InvoiceViewModel } from "$lib/view-models/InvoiceViewModel.svelte";
	import { FormatNumber } from "$lib/services/formatters/FormatNumber";
	import { appController } from "$lib/services/Singletons";

	interface Props {
		invoices: InvoiceViewModel[];
		onView: (id: string) => void;
		onEdit?: (id: string) => void;
		pageSize?: number;
	}

	let { invoices, onView, onEdit, pageSize }: Props = $props();

	let page = $state(0);

	// Reset to first page when invoices list changes
	$effect(() => { invoices; page = 0; });

	let totalPages = $derived(pageSize ? Math.ceil(invoices.length / pageSize) : 1);
	let displayed = $derived(pageSize ? invoices.slice(page * pageSize, (page + 1) * pageSize) : invoices);
</script>

{#if invoices.length === 0}
	<p style="color: var(--pico-muted-color);">No invoices yet.</p>
{:else}
	<table>
		<thead>
			<tr>
				<th>Invoice</th>
				<th>Date</th>
				<th>Client</th>
				<th class="num">Total</th>
				{#if onEdit}<th></th>{/if}
			</tr>
		</thead>
		<tbody>
			{#each displayed as inv}
			<tr>
				<td>
					<a href="##" onclick={(ev) => { ev.preventDefault(); onView(inv.id); }}>#{inv.number}</a>
				</td>
				<td>{inv.date}</td>
				<td>{inv.issueToLines[0] ?? '—'}</td>
				<td class="num">{FormatNumber.currency(inv.grandTotal, inv.currencyCode || 'USD', appController.settings.localeCode)}</td>
				{#if onEdit}
				<td><a href="##" onclick={(ev) => { ev.preventDefault(); onEdit!(inv.id); }}>Edit</a></td>
				{/if}
			</tr>
			{/each}
		</tbody>
	</table>
	{#if totalPages > 1}
	<div class="pagination">
		<button class="outline secondary" disabled={page === 0} onclick={() => page--}>← Prev</button>
		<span>{page + 1} / {totalPages}</span>
		<button class="outline secondary" disabled={page >= totalPages - 1} onclick={() => page++}>Next →</button>
	</div>
	{/if}
{/if}

<style>
	table {
		width: 100%;
		margin-bottom: 0.75rem;
	}
	td {
		padding: 0.25rem 0.5rem 0.25rem 0;
		vertical-align: middle;
	}
	.num {
		text-align: right;
		white-space: nowrap;
	}
	.pagination {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.875rem;
	}
	.pagination button {
		padding: 0.2em 0.75em;
		margin: 0;
		font-size: 0.875rem;
	}
</style>
