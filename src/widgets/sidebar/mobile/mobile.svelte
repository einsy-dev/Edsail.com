<script lang="ts">
	import { clickOutside } from '$actions/clickOutside';
	import { headerHeight } from '$widgets/header/header';
	import { sidebarState, type SidebarStateT } from '../sidebar';

	let sidebar: SidebarStateT = $state({ active: false, items: [] });
	sidebarState.subscribe((state) => (sidebar = state));

	let headerH = $state(0);
	headerHeight.subscribe((h) => (headerH = h));

	function toggleSidebar() {
		sidebarState.update((state) => ({ ...state, active: false }));
	}
</script>

<aside
	class="fixed right-0 bottom-0 z-50 py-2 transition-all"
	class:translate-x-full={!sidebar?.active}
	class:translate-x-0={sidebar?.active}
	style:top="{headerH}px"
>
	<div class="p-2! card h-full" use:clickOutside onclick_outside={toggleSidebar}>
		<ul class="flex flex-col gap-2 h-full overflow-scroll scroll-hide">
			{#each sidebar?.items as route}
				<li>
					<a href={route.path} class="flex items-center gap-2 ps-2 pe-25 py-2 rounded">
						<div class="">
							{route.title}
						</div>
					</a>
					{#if route.items?.length}
						<ul>
							{#each route.items as item}
								<li>
									<a href={item.path} class="flex items-center gap-2 ps-2 pe-25 py-2 rounded">
										<div class="">
											{item.title}
										</div>
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</aside>
