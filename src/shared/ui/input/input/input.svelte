<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { value = $bindable(), placeholder = '', type = 'text' }: HTMLInputAttributes = $props();
</script>

<input class="outline-0 border-0 px-1 w-full" {type} {placeholder} bind:value />
