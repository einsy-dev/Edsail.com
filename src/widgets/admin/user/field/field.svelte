<script lang="ts">
	let { label = '', value = '' } = $props();
</script>

<div class="h-full flex flex-col">
	<span class="text-sm -mb-2">
		{label}:
	</span>
	<div class="px-4">{value}</div>
</div>
