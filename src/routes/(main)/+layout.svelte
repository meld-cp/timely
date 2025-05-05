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

<script lang="ts">
    import { goto } from '$app/navigation';
    import { BackupService } from '$lib/services/BackupAndRestore';
    import Icon from '$lib/views/Icon.svelte';
    import { faBars } from '@fortawesome/free-solid-svg-icons';
    import { preventDefault } from 'svelte/legacy';

	let { children } = $props();

	const memuItems:{ label:string, url:string }[] = [
		{ label:"Time Log", url:"/timelog/" },
		{ label:"Invoice Builder", url:"/invoices/" },
		{ label:"Settings", url:"/admin/settings/" },
		{ label:"Backup & Restore", url:"/admin/backup/" },
		{ label:"Roadmap", url:"/admin/roadmap/" },
	]
	

	let elMenu:HTMLElement|undefined = $state();

	function onMenuItemClick(){
		elMenu?.attributes.removeNamedItem("open")
	}

	const backupSvr = new BackupService();
</script>

<nav class="container">
	<ul>
		<li>
			<strong style="letter-spacing: 0.3rem;">
				[Timley]
			</strong> 
		</li>
	</ul>
	<ul>
		<li><button class="outline" onclick={() => backupSvr.downloadBackupFile()}>Backup</button></li>
		<li>
			<details class="dropdown" bind:this={elMenu}>
				<summary style="width: 18ch;">Menu</summary>
				<ul>
					{#each memuItems as mi}
						<li><a href="{mi.url}" onclick="{onMenuItemClick}">{mi.label}</a></li>
					{/each}

				</ul>
			</details>
		</li>
	</ul>
  </nav>

<!-- <nav class="container">
	<ul>
		<li>
			<strong style="letter-spacing: 0.1rem;">
				[Timley]
			</strong>
		</li>
	</ul>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/timelog/">Time Log</a></li>
		<li><a href="/invoices/">Invoice Builder</a></li>
	</ul>
	<ul>
		<li><button onclick={() => backupSvr.downloadBackupFile()}>Backup</button></li>
		<li>
			<details class="dropdown">
				<ul>
					<li><a href="/admin/settings/">Settings</a></li>
					<li><a href="/admin/backup">Backup &amp; Restore</a></li>
					<li><a href="/admin/roadmap">Roadmap</a></li>
				</ul>
			</details>
		</li>
	</ul>
	<Icon icon={faBars}/>
</nav> -->
<div class="container">
	{@render children()}
</div>

