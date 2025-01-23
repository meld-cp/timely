<svelte:head>
	<link rel="stylesheet" href="/pico-main/css/pico.css">
	<link rel="stylesheet" href="/pico-main/css/pico.colors.min.css">
	<style>
		:root {
			--pico-form-element-spacing-vertical: 0.25rem;
			--pico-form-element-spacing-horizontal: 0.25rem;
		}
	</style>
</svelte:head>

<script>
	let { children } = $props();
</script>

<nav class="container">
	<ul>
		<!-- <li><strong>Acme Corp</strong></li> -->
		<li><a href="/">Home</a></li>
		<li><a href="/timelog/">Time Log</a></li>
		<li><a href="/invoices/">Invoice Builder</a></li>
	</ul>
	<ul>
		<li><a href="/settings/">Settings</a></li>
		<li><a href="/admin/roadmap">Roadmap</a></li>
	</ul>
</nav>
<div class="container">
	{@render children()}
</div>

