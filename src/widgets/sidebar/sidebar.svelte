<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { getRoutes } from '$lib/router';
	import Desktop from './desktop/desktop.svelte';
	import Mobile from './mobile/mobile.svelte';
	import { sidebarState } from './sidebar';

	let props = $props();
	let innerWidth = $state(0);

	afterNavigate(() => {
		sidebarState.update((state) => {
			state.blocks[0] = getRoutes(page.url.pathname);
			return state;
		});
	});
</script>

<svelte:window bind:innerWidth />

{#if innerWidth <= 768}
	<Mobile {...props} />
{:else}
	<Desktop {...props} />
{/if}
