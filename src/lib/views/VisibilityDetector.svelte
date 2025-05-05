<script lang="ts">
    import { onDestroy, onMount } from "svelte";

	onMount(() => {
		document.addEventListener( "visibilitychange", handleVisibilityChange );
	});

	onDestroy(() => {
		document.removeEventListener( "visibilitychange", handleVisibilityChange );
	});

	let {
		onPageVisibilityChanged
	}:{
		onPageVisibilityChanged:( visible:boolean ) => void
	} = $props();

	function handleVisibilityChange() {
		onPageVisibilityChanged( document.visibilityState === "visible" );
	}
</script>