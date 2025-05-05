<svelte:head>
	<link rel="stylesheet" href="/pico-main/css/pico.min.css">
	<link rel="stylesheet" href="/pico-main/css/pico.colors.min.css">
	<style>
		* {
			scrollbar-width: auto;
		}

		::-webkit-scrollbar {
			width: 0.80rem;
		}
		::-webkit-scrollbar-thumb {
			background: var(--pico-form-element-active-border-color);
		}
		
		::-webkit-scrollbar-track {
			background: var(--pico-form-element-border-color);
			/* background: var(--pico-form-element-selected-background-color); */
		}
	</style>
</svelte:head>

<script lang="ts">
   
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

	//const backupSvr = new BackupService();
</script>

<nav class="container">
	<ul>
		<li>
			<strong style="letter-spacing: 0.3rem;">
				<a class="app-name-link" href="/">[Timely]</a>
			</strong> 
		</li>
	</ul>
	<ul>
		<!-- <li><button class="outline" onclick={() => backupSvr.downloadBackupFile()}>Backup</button></li> -->
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