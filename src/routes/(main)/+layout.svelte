<svelte:head>
	<link rel="stylesheet" href="/pico-main/css/pico.css">
	<link rel="stylesheet" href="/pico-main/css/pico.colors.min.css">
	<style>
		:root {
			/* --pico-form-element-spacing-vertical: 0.25rem;
			--pico-form-element-spacing-horizontal: 0.25rem; */
		}
	</style>
</svelte:head>

<script lang="ts">
    import { BackupService } from '$lib/services/BackupAndRestore';
    
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
				<a class="app-name-link" href="/">[Timley]</a>
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

<div class="container">
	{@render children()}
</div>

<style>
	.app-name-link:hover{
		text-decoration: none;
	}
</style>