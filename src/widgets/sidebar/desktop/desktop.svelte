<script lang="ts">
	import { sidebarState, type SidebarStateT } from '../sidebar';

	let { class: className } = $props();

	let sidebar: SidebarStateT = $state({ active: false, items: [] });
	sidebarState.subscribe((state) => (sidebar = state));
</script>

<aside class="h-fit flex flex-col gap-2 {className}">
	{#if sidebar.children?.length || sidebar.items.length}
		<div class="card p-2">
			<ul class="flex flex-col">
				{#each sidebar?.items as route}
					<li>
						<a href={route.path} class="flex py-2 items-center rounded">
							<span>
								{route.title}
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	{#if sidebar.children?.length}
		{#each sidebar.children as children}
			<div class="card p-2">
				{@render children()}
			</div>
		{/each}
	{/if}
</aside>
