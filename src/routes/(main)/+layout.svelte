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
    import { appController } from '$lib/services/Singletons';
	
	let { children } = $props();

	const memuItems:{ label:string, url:string }[] = [
		{ label:"Time Log", url:"/timelog/" },
		{ label:"Invoice Builder", url:"/invoices/" },
		{ label:"Settings", url:"/admin/settings/" },
		{ label:"Backup & Restore", url:"/admin/backup/" },
		{ label:"Data", url:"/admin/data/" },
		{ label:"Roadmap", url:"/admin/roadmap/" },
	]
	

	let elMenu:HTMLElement|undefined = $state();

	function onMenuItemClick(){
		elMenu?.attributes.removeNamedItem("open")
	}

	let backingUpData = $state( false);

	async function onBackupData(){
		backingUpData = true;
		try{
			await appController.backupData("auto");
		}finally{
			backingUpData = false;
		}
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
		<li>
			<button
				class="outline"
				onclick="{onBackupData}"
				aria-busy="{backingUpData}"
				disabled="{backingUpData}"
			>Backup Data</button>
		</li>
		<li>
			<details class="dropdown" bind:this={elMenu}>
				<summary style="width: 18ch;">Menu</summary>
				<ul>
					{#each memuItems as mi}
						<li>
							<a href="{mi.url}" onclick="{onMenuItemClick}">{mi.label}</a>
						</li>
					{/each}

				</ul>
			</details>
		</li>
	</ul>
  </nav>

<div class="container">
	{@render children()}
</div>

<footer class="footer">
	<hr>
	<section>
		Data Version: {appController.dataModifiedTimestamp}
	</section>
</footer>

<style>
	.footer{
		z-index: -10000;
		font-size: small;
		width: 100%;
		position: fixed;
		bottom: 0;

		hr{
			margin: 0;
		}
		section{
			margin: 0;
			padding: 0.2rem 0.5rem;
		}
	}
	.app-name-link:hover{
		text-decoration: none;
	}
</style>