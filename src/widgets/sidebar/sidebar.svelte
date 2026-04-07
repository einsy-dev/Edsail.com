<script lang="ts">
	import Desktop from './desktop/desktop.svelte';
	import Mobile from './mobile/mobile.svelte';

	let props = $props();
	let innerWidth = $state(0);
</script>

<svelte:window bind:innerWidth />

{#if innerWidth <= 768}
	<Mobile {...props} />
{:else}
	<Desktop {...props} />
{/if}
