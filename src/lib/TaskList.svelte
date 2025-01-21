<script lang="ts">
    import Task from "./Task.svelte";
    import { slide } from "svelte/transition";
    import { type TTask } from "./Models";
        
    let { tasks } : { tasks: TTask[] } = $props();

</script>

{#each tasks as task, index (task.id)}
<div transition:slide={{duration:200}}>
    <Task taskId={task.id}/>
</div>
{/each}
