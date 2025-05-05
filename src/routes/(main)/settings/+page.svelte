<script lang="ts">
	import { settingsController } from "$lib/services/Singletons";

	const settings = settingsController.read();

	function handleSettingsChanged(){
		settingsController.write(settings)
	}

</script>

<h1>Settings</h1>

<form>
	<label>
		Logo Data
		<div class="grid">
			<textarea
				name="logo-data"
				bind:value={settings.logoData} oninput="{handleSettingsChanged}"
				style="font-size: small; height: 10em;"
			></textarea>
			<img src={settings.logoData} alt="" style="height: 6em;"/>
		</div>
	</label>
	<label>
		Next Invoice Number
		<input
			name="next-inv-num"
			type="number"
			min="1"
			bind:value={settings.nextInvoiceNumber} oninput="{handleSettingsChanged}"
		/>
	</label>
	<label>
		Default Invoice Footer
		<textarea
			name="default-inv-footnote"
			bind:value={settings.defaultInvoiceFooter} oninput="{handleSettingsChanged}"
		></textarea>
	</label>
</form>