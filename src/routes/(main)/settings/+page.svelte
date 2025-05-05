<script lang="ts">
    import { settingsController } from "$lib/SettingsController.svelte";

    const settings = settingsController.read();

    function handleSettingsChanged(){
        settingsController.write(settings)
    }

</script>

<h1>Settings</h1>

<form>
    <label>
        Logo Data
        <textarea
            bind:value={settings.logoData} oninput="{handleSettingsChanged}"
            style="font-size: small; height: 10em;"
        ></textarea>
    </label>
    <label>
        Next Invoice Number
        <input
            type="number"
            min="1"
            bind:value={settings.nextInvoiceNumber} oninput="{handleSettingsChanged}"
        />
    </label>
    <label>
        Default Invoice Footer
        <textarea
            bind:value={settings.defaultInvoiceFooter} oninput="{handleSettingsChanged}"
        ></textarea>
    </label>
</form>