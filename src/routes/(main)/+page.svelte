<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { resolve } from '$app/paths';
	import { appController } from '$lib/services/Singletons';
	import { TaskState } from '$lib/models/TaskState';
	import { FormatNumber } from '$lib/services/formatters/FormatNumber';
	import type { TaskViewModel } from '$lib/view-models/TaskViewModel.svelte';
	import type { InvoiceViewModel } from '$lib/view-models/InvoiceViewModel.svelte';

	function fmtDuration(seconds: number): string {
		const h = Math.floor(Math.abs(seconds) / 3600);
		const m = Math.floor((Math.abs(seconds) % 3600) / 60);
		return `${h}h ${m}m`;
	}

	function liveDuration(task: TaskViewModel, _now: number): number {
		if (task.state === TaskState.Running && task.timeRunStarted) {
			return (_now - task.timeRunStarted) / 1000;
		}
		return task.duration;
	}

	let tasks: TaskViewModel[] = $state([]);
	let invoices: InvoiceViewModel[] = $state([]);
	let loading = $state(true);
	let now = $state(Date.now());

	let interval: ReturnType<typeof setInterval>;

	onMount(async () => {
		[tasks, invoices] = await Promise.all([
			appController.getTasks(),
			appController.getInvoices(),
		]);
		loading = false;
		interval = setInterval(() => { now = Date.now(); }, 1000);
	});

	onDestroy(() => clearInterval(interval));

	function togglePauseResume(task: TaskViewModel) {
		if (task.state === TaskState.Running) {
			task.pause();
		} else {
			task.start();
		}
		appController.saveTask(task.getModel());
	}

	const activeTasks = $derived(tasks.filter(t => t.state === TaskState.Running || t.state === TaskState.Paused));
	const uninvoicedTasks = $derived(tasks.filter(t => t.state !== TaskState.Archived && !t.invoiceRefId));
	const uninvoicedLiveHours = $derived(
		uninvoicedTasks.reduce((sum, t) => {
			const secs = liveDuration(t, now);
			const mins = secs / 60;
			const increments = Math.ceil(mins / 15);
			return sum + (increments * 15) / 60;
		}, 0)
	);
	const openInvoices = $derived(
		invoices
			.filter(inv => inv.lines.length > 0)
			.sort((a, b) => b.date.localeCompare(a.date) || parseInt(b.number) - parseInt(a.number))
	);
</script>

<h2>Dashboard</h2>

{#if loading}
	<p aria-busy="true">Loading...</p>
{:else}
	<div class="dashboard">
		<section>
			<article>
				<h3>Active Tasks</h3>
				{#if activeTasks.length === 0}
					<p style="color: var(--pico-muted-color);">No tasks currently running or paused.</p>
				{:else}
					<table>
						<tbody>
							{#each activeTasks as task}
								<tr>
									<td>
										<span class="state-dot" class:running={task.state === TaskState.Running} class:paused={task.state === TaskState.Paused}></span>
										{task.name}
									</td>
									<td class="num">{fmtDuration(liveDuration(task, now))}</td>
									<td>
										<button class="outline secondary toggle-btn" onclick={() => togglePauseResume(task)}>
											{task.state === TaskState.Running ? 'Pause' : 'Resume'}
										</button>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				{/if}
				<a href={resolve("/timelog/")}>Go to Time Log</a>
			</article>
		</section>

		<section>
			<article>
				<h3>Uninvoiced Time</h3>
				<p class="big-number">{uninvoicedLiveHours.toFixed(2)} <small>hrs</small></p>
				<p style="color: var(--pico-muted-color);">{uninvoicedTasks.length} task{uninvoicedTasks.length === 1 ? '' : 's'} not yet invoiced</p>
				{#if uninvoicedTasks.some(t => t.state === TaskState.Running)}
					<table>
						<tbody>
							{#each uninvoicedTasks.filter(t => t.state === TaskState.Running) as task}
								<tr>
									<td>
										<span class="state-dot running"></span>
										{task.name}
									</td>
									<td class="num">{fmtDuration(liveDuration(task, now))}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				{/if}
				<a href={resolve("/invoices/")}>Go to Invoice Builder</a>
			</article>
		</section>

		<section class="full-width">
			<article>
				<h3>Recent Invoices</h3>
				{#if openInvoices.length === 0}
					<p style="color: var(--pico-muted-color);">No invoices yet.</p>
				{:else}
					<table>
						<thead>
							<tr>
								<th>Invoice</th>
								<th>Date</th>
								<th>Client</th>
								<th class="num">Total</th>
							</tr>
						</thead>
						<tbody>
							{#each openInvoices.slice(0, 5) as inv}
								<tr>
									<td><a href={resolve(`/view-invoice/?id=${inv.id}`)} target="_blank" rel="noopener">#{inv.number}</a></td>
									<td>{inv.date}</td>
									<td>{inv.issueToLines[0] ?? '—'}</td>
									<td class="num">{FormatNumber.currency(inv.grandTotal, inv.currencyCode || 'USD', appController.settings.localeCode)}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				{/if}
				<a href={resolve("/invoices/")}>Go to Invoice Builder</a>
			</article>
		</section>
	</div>
{/if}

<style>
	.dashboard {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 1rem;
	}
	.dashboard .full-width {
		grid-column: 1 / -1;
	}
	.dashboard section {
		margin: 0;
	}
	h3 {
		margin-bottom: 0.75rem;
	}
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
	.big-number {
		font-size: 2rem;
		font-weight: bold;
		margin: 0.25rem 0;
	}
	.toggle-btn {
		font-size: 0.75em;
		padding: 0.1em 0.6em;
		margin: 0;
	}
	.state-dot {
		display: inline-block;
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 50%;
		margin-right: 0.4rem;
		background: var(--pico-muted-color);
	}
	.state-dot.running {
		background: var(--pico-color-green-500);
	}
	.state-dot.paused {
		background: var(--pico-color-amber-500);
	}
</style>
