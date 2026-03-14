<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
	import { type IconDefinition } from '@fortawesome/free-solid-svg-icons'
	let{
		icon,
		onClick,
	}:{
		icon:IconDefinition,
		onClick?:() => void
	} = $props();
</script>

{#if onClick}
<button class="icon-btn" onclick={onClick}>
	<FontAwesomeIcon icon={icon} />
</button>
{:else}
<FontAwesomeIcon icon={icon} />
{/if}

<style>
	.icon-btn {
		all: unset;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
	}
</style>
