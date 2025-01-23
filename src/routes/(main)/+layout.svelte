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
    import { BackupService } from '$lib/services/BackupAndRestore';

	let { children } = $props();

	const backupSvr = new BackupService();
</script>

<nav class="container">
	<ul>
		<li>
			<strong style="letter-spacing: 0.3rem;">
				[Timley]
			</strong>
		</li>
		<li><a href="/">Home</a></li>
		<li><a href="/timelog/">Time Log</a></li>
		<li><a href="/invoices/">Invoice Builder</a></li>
	</ul>
	<ul>
		<li><button onclick={() => backupSvr.downloadBackupFile()}>Backup</button></li>
		<li>
			<details class="dropdown">
				<summary>Admin</summary>
				<ul>
					<li><a href="/admin/settings/">Settings</a></li>
					<li><a href="/admin/backup">Backup &amp; Restore</a></li>
					<li><a href="/admin/roadmap">Roadmap</a></li>
				</ul>
			</details>
		</li>
	</ul>
</nav>
<div class="container">
	{@render children()}
</div>

