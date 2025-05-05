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

	function handleClick(ev:Event){
		ev.preventDefault();
		if( onClick ){
			onClick();
		}
	}


</script>

{#if onClick}
<!-- svelte-ignore a11y_invalid_attribute -->
<a href="" onclick="{handleClick}">
	<FontAwesomeIcon icon={icon} />
</a>
{:else}
<FontAwesomeIcon icon={icon} />
{/if}