<script lang="ts">
    import { FormatDate } from "$lib/services/formatters/FormatDate";
    import { FormatNumber } from "$lib/services/formatters/FormatNumber";
	import { settingsController } from "$lib/services/Singletons";
    import { Utils } from "$lib/services/Utils";

	let settings = $state(settingsController.read());

	let eInputInvoiceLogoFile:HTMLInputElement;

	let localeExamples = $derived( [
		`Date: ${FormatDate.toLocalDate(new Date(), settings.localeCode )}`,
		`Numbers: ${FormatNumber.decimalPlaces( 1234567.89, 2, settings.localeCode )}`,
	] );

	// $inspect(settings);

	function onSettingsChanged(){
		saveSettings();
	}

	function saveSettings(){
		settingsController.write(settings);
	}

	async function onInvoiceLogoFileSelected(){
		if ( eInputInvoiceLogoFile && eInputInvoiceLogoFile.files && eInputInvoiceLogoFile.files.length > 0 ){
			const dataurl = await Utils.convertFileToDataURL( eInputInvoiceLogoFile.files[0] );
			settings.logoData = dataurl;
			saveSettings();
		}
	}

</script>

<h2>Settings</h2>

<section>
	
	<article>
		<details open>
			<summary>General Settings</summary>
			<label>
				Locale
				<select name="locale" bind:value={settings.localeCode}  onchange="{onSettingsChanged}">
					<option value="" selected={""==( settings.localeCode ?? "")}></option>
					<option value="en-NZ" selected={"en-NZ"==settings.localeCode}>New Zealand</option>
					<option value="en-DE" selected={"en-DE"==settings.localeCode}>Deutsch</option>
					<option value="en-US" selected={"en-US"==settings.localeCode}>US</option>
				</select>
				<small>
					Examples:
					{#each localeExamples as example}
						<span style:padding="0 0.5rem">{example}</span>
					{/each}
				</small>
			</label>
		</details>
	</article>
	
	<article>
		<details open>
			<summary>Invoice Settings</summary>
			<label>
				Your Address
				<textarea
					name="address"
					bind:value={settings.address}
					oninput="{onSettingsChanged}"
					autocomplete="address-line1"
				></textarea>
			</label>
			<label>
				Invoice Header Lines
				<textarea
					name="inv-header"
					bind:value={settings.invoiceHeader} oninput="{onSettingsChanged}"
				></textarea>
			</label>

			<label>
				Your Logo
				<div style="display: flex; align-items: center; gap: 1rem;">
					<img src={settings.logoData} alt="" style:height="6rem"/>
					<input
						bind:this={eInputInvoiceLogoFile}
						name="inv-logo-file"
						type="file"
						accept=".png, .jpg, .jpeg, .svg"
						onchange="{onInvoiceLogoFileSelected}"
					>
				</div>
			</label>

			<label>
				Next Invoice Number
				<input
					name="next-inv-num"
					type="number"
					min="1"
					bind:value={settings.nextInvoiceNumber} oninput="{onSettingsChanged}"
				/>
			</label>
			<label>
				Default Invoice Footer Lines
				<textarea
					name="default-inv-footnote"
					bind:value={settings.defaultInvoiceFooter} oninput="{onSettingsChanged}"
				></textarea>
			</label>
		</details>
	</article>
</section>

<style>
	textarea{
		height: 10rem;
	}
</style>