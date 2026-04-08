<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	import { getRoutes } from '$shared/store/routes';
	import { Header, Background } from '$widgets';
	import { headerHeight } from '$widgets/header/header';
	import { sidebarState } from '$widgets/sidebar/sidebar';
	import './layout.css';

	let { children } = $props();
	let margin: number = $state(0);
	headerHeight.subscribe((h) => (margin = h));
	afterNavigate(() => {
		sidebarState.update((state) => ({
			...state,
			items: getRoutes(page.url.pathname)
		}));
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Background />
<Header />
<div class="flex-scroll py-2" style:margin-top="{margin}px">
	{@render children()}
</div>
