<script lang="ts">
	import { sidebarStore, type SidebarState } from '$shared/store';

	let sidebar: SidebarState | undefined = $state();
	sidebarStore.subscribe((state) => (sidebar = state));
</script>

<aside class="card p-2 h-fit">
	<ul class="flex flex-col gap-2 h-full overflow-scroll scroll-hide">
		{#each sidebar?.menu as route}
			<li>
				<a href={route.path} class="flex items-center gap-2 p-2 rounded">
					<div class="">
						<route.icon class="icon" />
					</div>
					<span>
						{route.title}
					</span>
				</a>
			</li>
		{/each}
	</ul>
</aside>
