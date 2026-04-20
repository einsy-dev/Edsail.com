<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { Header, Background } from '$widgets';
	import { headerHeight } from '$widgets/header/header';
	import Menu from '$widgets/menu/menu.svelte';
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
<Menu />
<div class="py-2 flex flex-1">
	<div class="flex-scroll" style:margin-top="{margin}px">
		{@render children()}
	</div>
</div>
