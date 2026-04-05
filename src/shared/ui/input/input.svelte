<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let {
		value = $bindable(),
		placeholder = '',
		label = '',
		type = 'text'
	}: HTMLInputAttributes & { label: string } = $props();
</script>

{#if label}
	<label class="flex flex-col">
		<span>{label}</span>
		<input type="text" class="outline-0 border-0 px-1" {placeholder} />
	</label>
{:else}
	<input type="text" />
{/if}
