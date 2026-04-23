<script lang="ts">
	import { sidebarState } from '$widgets/sidebar/sidebar';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		sidebarState.update((state) => {
			state.blocks[1] = [{ title: 'Docs', path: 'docs' }];
			return state;
		});
	});
</script>

{@render children?.()}
