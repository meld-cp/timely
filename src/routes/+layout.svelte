<script>
	let { children } = $props();
</script>

<nav class="container">
    <ul>
        <!-- <li><strong>Acme Corp</strong></li> -->
        <li><a href="/">🏠</a></li>
    </ul>
    <ul>
        <li><a href="timelog/">Time Log</a></li>
        <li><a href="invoices/">Invoice Builder</a></li>
    </ul>
</nav>
<div class="container">
    {@render children()}
</div>