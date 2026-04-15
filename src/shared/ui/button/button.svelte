<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let {
		class: className = '',
		onclick = () => undefined,
		children
	}: Partial<HTMLButtonAttributes> = $props();
</script>

<button class="rounded cursor-pointer hover:scale-105 {className}" {onclick}>
	{@render children?.()}
</button>
