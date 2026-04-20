<script lang="ts">
	import { headerRoutes } from '$lib/router';
	import { Button } from '$shared';
	import { sidebarState } from '$widgets/sidebar/sidebar';
	import { headerHeight } from './header';
	import Logo from './logo/logo.svelte';
	import Route from './route/route.svelte';
	import User from './user/user.svelte';
	import { Menu } from '@lucide/svelte';

	let { class: className = '' }: { class?: string } = $props();

	let clientHeight = $state(0);

	$effect(() => {
		headerHeight.set(clientHeight);
	});

	let innerWidth = $state(0);
</script>

<svelte:window bind:innerWidth />
<header class="fixed inset-0 h-fit z-50 glass bg-card {className}" bind:clientHeight>
	<div class="container py-1">
		<div class=" flex flex-row justify-between">
			<Logo />
			<div class="flex items-center justify-center">
				{#if innerWidth <= 768}
					<Button
						onclick={() => {
							sidebarState.update((s) => ({ ...s, active: !s.active }));
						}}
					>
						<Menu class="icon-2" />
					</Button>
				{:else}
					<div class="flex gap-2 items-center">
						<nav>
							<ul class="flex gap-4 justify-center">
								{#each headerRoutes as route}
									<Route href={route.path}>{route.title}</Route>
								{/each}
							</ul>
						</nav>
						<User />
					</div>
				{/if}
			</div>
		</div>
	</div>
</header>
