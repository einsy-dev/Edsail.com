<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

	onMount(() => {
		goto("/admin/projects/")
	})
</script>

<div class="container flex-col gap-4">
	<div class="grid grid-cols-3 gap-4">
		<div class="flex flex-1">Service 1</div>
		<div class="flex flex-1">Service 2</div>
		<div class="flex flex-1">Service 3</div>
	</div>
</div>
