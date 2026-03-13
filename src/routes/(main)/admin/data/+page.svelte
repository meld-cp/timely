<script lang="ts">
	import { pbService } from "$lib/services/Singletons";

	let pbUrl = $derived(pbService.pb.baseURL);
</script>

<h2>Data</h2>

<section>
	<article>
		<p>Data is stored in PocketBase.</p>
		<p>
			Server: <code>{pbUrl}</code>
		</p>
		<p>
			<a href="{pbUrl}/_/" target="_blank" rel="noopener">Open PocketBase Admin Panel</a>
		</p>
	</article>
</section>
