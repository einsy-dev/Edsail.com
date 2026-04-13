<script lang="ts">
	import { portalState } from './portal';
	import type { Snippet } from 'svelte';

	let { id } = $props();
	let children: Snippet | undefined = $state();

	portalState.subscribe((state) => {
		if (state[id]) {
			children = state[id];
		}
	});
</script>

{@render children?.()}
