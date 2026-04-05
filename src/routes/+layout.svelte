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
<Header class="h-[6vh]" />
<div class="h-[93vh] mt-[6vh] scroll-hide">
	<div class="container">
		{@render children()}
	</div>
</div>
