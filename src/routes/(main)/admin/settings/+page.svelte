<script lang="ts">
    import { FormatDate } from "$lib/services/formatters/FormatDate";
    import { FormatNumber } from "$lib/services/formatters/FormatNumber";
    import { appController } from "$lib/services/Singletons";
    import { Utils } from "$lib/services/Utils";

	const selectableLocales = [
		{"code":"en-NZ", "name":"English (New Zealand)"},
		{"code":"en-US", "name":"English (United States)"},
		{"code":"de-DE", "name":"Deutsch"},
	]

	const selectableCurrencies = [
		{"code":"NZD", "name":"New Zealand Dollar"},
		{"code":"USD", "name":"United States Dollar"},
		{"code":"EUR", "name":"Euro"},
	]

	let eInputInvoiceLogoFile:HTMLInputElement;

	let settings = appController.settingsController.read();

	let localeExamples = $derived( [
		`Date: ${FormatDate.toLocalDate(new Date(), settings.localeCode )}`,
		`Numbers: ${FormatNumber.decimalPlaces( 123456.789, 2, settings.localeCode )}`,
	] );

	let currencyExample = $derived( FormatNumber.currency( 123456.789, settings.defaultInvoiceCurrencyCode, settings.localeCode ) );

	function onSettingsChanged(){
		saveSettings();
	}

	function saveSettings(){
		appController.settingsController.write(settings);
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
					<option value="" selected={""==settings.localeCode}></option>
					{#each selectableLocales as locale}
					<option value={locale.code} selected={locale.code==settings.localeCode}>{locale.name}</option>
					{/each}
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
			<summary>Cloud Backup Settings</summary>
			<label>
				Host
				<input
					name="cloud-host"
					type="text"
					bind:value={settings.cloudSyncHost} oninput="{onSettingsChanged}"
				/>
			</label>
			<label>
				User Token
				<input
					name="cloud-user"
					type="text"
					bind:value={settings.cloudSyncUserId} oninput="{onSettingsChanged}"
				/>
			</label>
			<!-- <label>
				Timestamp
				<input
					name="cloud-timestamp"
					type="number"
					bind:value={settings.cloudSyncTimestamp} oninput="{onSettingsChanged}"
				/>
			</label> -->
		</details>
	</article>
	<article>
		<details open>
			<summary>Invoice Settings</summary>
			<label>
				Default Currency
				<select name="currency" bind:value={settings.defaultInvoiceCurrencyCode}  onchange="{onSettingsChanged}">
					<option value="" selected={""==settings.defaultInvoiceCurrencyCode}></option>
					{#each selectableCurrencies as currency}
					<option value={currency.code} selected={currency.code==settings.defaultInvoiceCurrencyCode}>{currency.name}</option>
					{/each}
				</select>
				<small>
					Example:
					<span style:padding="0 0.5rem">{currencyExample}</span>
				</small>
			</label>
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
				Default Invoice Header Lines
				<textarea
					name="inv-header"
					bind:value={settings.defaultInvoiceHeader} oninput="{onSettingsChanged}"
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