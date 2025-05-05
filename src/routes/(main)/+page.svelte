<script lang="ts">
    import { KvStorClient } from "$lib/services/kvstor-client";

	let textToPush = $state("test me");
	let textGot = $state("");
   
	const kv = new KvStorClient(
		"https://kvstor-sjc6k1v4a3kk.deno.dev",
		"test-user",
		"test-app",
		"test-bucket"
	);

	async function kvPush() {
		await kv.setItem("test", textToPush);
	}

	async function kvGet() {
		textGot = await kv.getItem("test");
	}


</script>

<h2>Home</h2>

<section>
	<article>
		<input type="text" bind:value={textToPush}>
		<button onclick="{kvPush}">KV Push</button>
	</article>

	<article>
		<button onclick="{kvGet}">KV Get</button>
		<input type="text" readonly bind:value={textGot}>
	</article>	
</section>


