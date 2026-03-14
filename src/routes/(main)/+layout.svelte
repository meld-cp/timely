<svelte:head>
	<link rel="stylesheet" href="{base}/pico-main/css/pico.min.css">
	<link rel="stylesheet" href="{base}/pico-main/css/pico.colors.min.css">
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
		}
	</style>
</svelte:head>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { appController } from '$lib/services/Singletons';
	import { pbService } from '$lib/services/Singletons';

	let { children } = $props();

	let initialized = $state(false);

	const menuItems: { label: string, url: string }[] = [
		{ label: "Time Log", url: "/timelog/" },
		{ label: "Invoice Builder", url: "/invoices/" },
		{ label: "Settings", url: "/admin/settings/" },
		{ label: "Data Management", url: "/admin/backup/" },
	];

	let menuOpen = $state(false);

	function onMenuItemClick() {
		menuOpen = false;
	}

	async function onSignOut() {
		pbService.logout();
		goto('/login/');
	}

	onMount(async () => {
		if (!pbService.pb.authStore.isValid) {
			goto('/login/');
			return;
		}
		if (!pbService.isInitialized) {
			const ok = await pbService.initialize();
			if (!ok) {
				goto('/login/');
				return;
			}
			await appController.initialize();
		}
		initialized = true;
	});
</script>

{#if initialized}
<nav class="container">
	<ul>
		<li>
			<strong style="letter-spacing: 0.3rem;">
				<a class="app-name-link" href="/">[Timely]</a><br/>
				{#if appController.settings.label}
					<small><strong>{appController.settings.label}</strong></small>
				{/if}
			</strong>
		</li>
	</ul>
	<ul>
		<li>
			<button class="outline secondary" onclick={onSignOut}>Sign Out</button>
		</li>
		<li>
			<details class="dropdown" bind:open={menuOpen}>
				<summary style="width: 18ch;">Menu</summary>
				<ul>
					{#each menuItems as mi}
						<li>
							<a href="{mi.url}" onclick="{onMenuItemClick}">{mi.label}</a>
						</li>
					{/each}
				</ul>
			</details>
		</li>
	</ul>
</nav>

<div class="container" style:padding-bottom="10rem">
	{@render children()}
</div>

<footer class="footer">
	<hr>
	<section>
		Connected to PocketBase
	</section>
</footer>
{:else}
<div class="container" style="margin-top: 4rem; text-align: center;">
	<p aria-busy="true">Loading...</p>
</div>
{/if}

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
