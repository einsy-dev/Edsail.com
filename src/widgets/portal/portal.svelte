<script lang="ts">
	import { portalState } from './portal';
	import type { Snippet } from 'svelte';

	let children: Snippet | undefined = $state();

	portalState.subscribe((state) => {});
</script>

{@render children?.()}
