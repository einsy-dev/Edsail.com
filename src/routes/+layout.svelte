<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { Header, Background } from '../widgets';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Background />
<Header />
<div class="container flex-col">
	{@render children()}
</div>
