<script lang="ts">
    import { KV_STORE_APP_ID } from "$lib/constants";
    import { KvStorBackupService } from "$lib/services/backup-services/KvStorBackupService";
    import { KvStorClient } from "$lib/services/kvstor-client";
    import { appController } from "$lib/services/Singletons";
    import Icon from "$lib/views/Icon.svelte";
    import { faTrash } from "@fortawesome/free-solid-svg-icons";
    import { fade } from "svelte/transition";

	let cloudSettingsData:{ key:string, value:string }[] = $state( [] );
	let cloudTaskData:{ key:string, value:string }[] = $state( [] );
	let cloudInvoiceData:{ key:string, value:string }[] = $state( [] );
	
	const settings = appController.settings;

	const kv = (
		settings.cloudSyncHost
		&& settings.cloudSyncUserId
	) ? new KvStorClient(
		settings.cloudSyncHost, 
		settings.cloudSyncUserId, 
		KV_STORE_APP_ID
	) : undefined;

    async function onFetchCloudData() {
		if (!kv){
			return;
		}

		cloudSettingsData = await kv.getItemList( KvStorBackupService.BUCKET_ID_SETTINGS )
		cloudTaskData = await kv.getItemList( KvStorBackupService.BUCKET_ID_TASKS )
		cloudInvoiceData = await kv.getItemList( KvStorBackupService.BUCKET_ID_INVOICES) 
        
    }

</script>

{#snippet dataTableDetails(
	bucketId:string,
	header:string,
	data:{ key:string, value:string }[]
)}
<article>
	<details open>
		<summary>{header}</summary>
		<table>
			<thead>
				<tr>
					<th>Key</th>
					<th>Value</th>
				</tr>
			</thead>
		
			<tbody>
				{#each data as item, index(item.key) }
				<tr out:fade>
					<td style="vertical-align: top;"><pre>{item.key}</pre></td>
					<td style:overflow-wrap="anywhere"><code>{item.value}</code></td>
				</tr>
					{/each}
			</tbody>
		</table>
	</details>
</article>
{/snippet}

<h2>Data</h2>

<section style:font-size="80%">
	<section>
		<button onclick="{onFetchCloudData}">Fetch Cloud Data</button>
	</section>
	{@render dataTableDetails( KvStorBackupService.BUCKET_ID_SETTINGS, 'Settings Data', cloudSettingsData )}
	{@render dataTableDetails( KvStorBackupService.BUCKET_ID_TASKS, 'Task Data', cloudTaskData )}
	{@render dataTableDetails(KvStorBackupService.BUCKET_ID_INVOICES, 'Invoice Data', cloudInvoiceData )}
</section>



