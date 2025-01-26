<script lang="ts">
    import { faMinus, faPlus, type IconDefinition } from "@fortawesome/free-solid-svg-icons";
    import Icon from "./Icon.svelte";

	let {
		durationSeconds,
		affectiveDurationHours,
		onIncreaseDuration,
		icon1, onAction1Click, action1Hint,
		icon2, onAction2Click, action2Hint,
	} : {
		durationSeconds: number,
		affectiveDurationHours: number,
		onIncreaseDuration?: ( inc:boolean, alt:boolean ) => void,
		icon1?: IconDefinition, onAction1Click?: () => void, action1Hint?:string,
		icon2?: IconDefinition, onAction2Click?: () => void, action2Hint?:string,
	} = $props();

	let formattedDurationHMS = $derived.by( () =>{
		// h m s
		const wholeHours = Math.floor( Math.abs(durationSeconds) / 60 / 60 )
		const wholeMins = Math.floor( Math.abs( durationSeconds / 60 ) )
		const partMins = Math.abs( wholeMins % 60 )
		const partSecs = Math.abs( durationSeconds % 60 );
		
		const parts:string[] = [
			wholeHours.toFixed(0) + 'h',
			partMins.toFixed(0) + 'm',
			partSecs.toFixed(0) + 's'
		]
		
		const sign = durationSeconds < 0 ? "-" : "";
		return sign + parts.join(" ");
	} );

</script>

<div class="c-main">
	{#if onIncreaseDuration}
	<div class="c-buttons">
		{#if onIncreaseDuration}
			<button class="outline" title="Add Time" onclick="{(ev) => onIncreaseDuration( true, ev.ctrlKey )}"><Icon icon={faPlus}/></button>
			<button class="outline" title="Remove Time" onclick="{(ev) => onIncreaseDuration( false, ev.ctrlKey )}"><Icon icon={faMinus}/></button>
		{/if}
	</div>
	{/if}
	<div class="affective">{affectiveDurationHours?.toFixed(2)}</div>
	<div class="counter">{formattedDurationHMS}</div>
	{#if icon1 || onAction1Click || icon2 || onAction2Click }
	<div class="c-buttons">
		{#if onAction1Click && icon1}
		<button class="outline" title="{action1Hint}" onclick="{() => onAction1Click()}"><Icon icon={icon1}/></button>
		{:else if icon1}
		<div class="icon"><Icon icon={icon1}/></div>
		{/if}
		{#if onAction2Click && icon2}
		<button class="outline secondary" title="{action2Hint}" onclick="{() => onAction2Click()}"><Icon icon={icon2}/></button>
		{:else if icon2}
		<div class="icon secondary"><Icon icon={icon2}/></div>
		{/if}
	</div>
	{/if}
</div>

<style>
	.c-main{
		background-color: var(--pico-form-element-background-color);
		border: var(--pico-border-width) solid var(--pico-form-element-border-color);
		border-radius: var(--pico-border-radius);
		
		padding: 0.5rem;
		
		display: flex;
		justify-content: space-between;

		width: fit-content;
		flex: 1;
		gap: 0.5rem;

		.c-buttons{
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
		
		button{
			font-size: 80%;
			padding: 0em;
			width: 1.5rem;
			height: 1.5rem;
		}

		.affective{
			text-wrap-mode: nowrap;
			font-size: 200%;
			width: 5ch;
			text-align: center;
		}
		.counter{
			align-self: center;
			width: 3ch;
			text-align: right;
			line-height: 1.1rem;
			font-family: monospace;
		}
	}
</style>
