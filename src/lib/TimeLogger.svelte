<script lang="ts">
    import { taskController } from "./TaskController.svelte";
    
    let taskName = $state("");

    function startTask( ev: SubmitEvent) : void {
        ev.preventDefault();
        taskController.addNewTaskAndStart(taskName);
        taskName = "";
    }

</script>


<form onsubmit="{startTask}">
    <fieldset role="group">
        <input id="taskname" type="text" bind:value="{taskName}" placeholder="Whatcha doin?" autocorrect="on" autocomplete="on"/>
        <input type="submit" value="Start"/>
    </fieldset>
</form>

<style>
    fieldset{
        display: flex;
    }
    input[type=submit]{
        flex-basis: content;
        margin-left: 0.5em;
    }
</style>