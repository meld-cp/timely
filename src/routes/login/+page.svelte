<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	import { onMount } from 'svelte';
	import { pbService } from '$lib/services/Singletons';
	import { appController } from '$lib/services/Singletons';
	import { PB_URL_KEY, PB_EMAIL_KEY } from '$lib/StorageKeys';

	let url = $state('');
	let email = $state('');
	let password = $state('');
	let loading = $state(false);
	let error = $state('');

	onMount(async () => {
		url = localStorage.getItem(PB_URL_KEY) ?? '';
		email = localStorage.getItem(PB_EMAIL_KEY) ?? '';

		if (pbService.pb.authStore.isValid) {
			loading = true;
			const ok = await pbService.initialize();
			if (ok) {
				await appController.initialize();
				goto(resolve('/timelog/'));
				return;
			}
			loading = false;
		}
	});

	async function onSubmit(e: Event) {
		e.preventDefault();
		loading = true;
		error = '';
		try {
			await pbService.login(url.trim(), email.trim(), password);
			await appController.initialize();
			goto(resolve('/timelog/'));
		} catch (e) {
			error = e instanceof Error ? e.message : 'Login failed';
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href={resolve('/pico-main/css/pico.min.css')}>
	<link rel="stylesheet" href={resolve('/pico-main/css/pico.colors.min.css')}>
</svelte:head>

<main class="container" style="max-width: 400px; margin-top: 4rem;">
	<article>
		<header>
			<strong style="letter-spacing: 0.3rem; font-size: 1.5rem;">[Timely]</strong>
		</header>

		{#if loading}
			<p aria-busy="true">Connecting...</p>
		{:else}
			<form onsubmit={onSubmit}>
				<label>
					PocketBase Server URL
					<input
						name="url"
						type="url"
						placeholder="https://your-pb-server.com"
						bind:value={url}
						required
					/>
				</label>
				<label>
					Email
					<input
						name="email"
						type="email"
						placeholder="you@example.com"
						bind:value={email}
						autocomplete="username"
						required
					/>
				</label>
				<label>
					Password
					<input
						name="password"
						type="password"
						bind:value={password}
						autocomplete="current-password"
						required
					/>
				</label>

				{#if error}
					<p style="color: var(--pico-color-red-500);">{error}</p>
				{/if}

				<button type="submit">Sign In</button>
			</form>
		{/if}
	</article>
</main>
