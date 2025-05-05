<script lang="ts">
    
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
        icon1?:string, onAction1Click?: () => void, action1Hint?:string,
        icon2?:string, onAction2Click?: () => void, action2Hint?:string,
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

<div class="comp-container">
    {#if onIncreaseDuration}
    <div class="button-container">
        <button class="outline" data-tooltip="Add Time" onclick="{(ev) => onIncreaseDuration( true, ev.ctrlKey )}">+</button>
        <button class="outline" data-tooltip="Remove Time" data-placement="bottom" onclick="{(ev) => onIncreaseDuration( false, ev.ctrlKey )}">-</button>
    </div>
    {/if}
    <div class="affective">{affectiveDurationHours?.toFixed(2)}</div>
    <div class="counter" style="text-align: right; line-height: 1.4em; font-family: monospace;">{formattedDurationHMS}</div>
    {#if icon1 || onAction1Click || icon2 || onAction2Click }
    <div class="button-container">
        {#if onAction1Click}
        <button class="outline" data-tooltip="{action1Hint}" onclick="{() => onAction1Click()}">{icon1}</button>
        {:else if icon1}
        <div class="icon">{icon1}</div>
        {/if}
        {#if onAction2Click}
        <button class="outline secondary" data-tooltip="{action2Hint}" data-placement="bottom" onclick="{() => onAction2Click()}">{icon2}</button>
        {:else if icon2}
        <div class="icon">{icon2}</div>
        {/if}
    </div>
    {/if}
</div>

<style>
    .comp-container{
        flex: 1;
        background-color: hsl(0, 0%, 99%);
        padding: 0.4em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1em;
        border: 1px solid var(--border-color);
        border-radius: 0.2em;
    }
    .affective{
        text-wrap-mode: nowrap;
        font-size: xx-large
    }
    .counter{
        font-size: small;
        /* rotate: -90deg; */
    }
    .button-container{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 0.2em;
    }
    button{
        font-size: small;
        padding: 0em;
        width: 2em;
        height: 2em;
    }
</style>