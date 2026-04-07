<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { headerHeight } from '$shared/store';
	import { Header, Background, Sidebar, Toc } from '$widgets';
	import './layout.css';

	let { children } = $props();
	let margin: number = $state(0);
	headerHeight.subscribe((h) => (margin = h));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Background />
<Header />
<div class="flex-scroll py-2" style:margin-top="{margin}px">
	{@render children()}
</div>
