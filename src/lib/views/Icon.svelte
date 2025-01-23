<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
  	import { faThumbsUp, type IconDefinition } from '@fortawesome/free-solid-svg-icons'
	let{
		icon
	}:{
		icon?:IconDefinition
	} = $props();
</script>

{#if icon}
<FontAwesomeIcon icon={icon} />
{/if}