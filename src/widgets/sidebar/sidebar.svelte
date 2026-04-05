<script lang="ts">
	import { Box, LayoutGrid, Newspaper, Users } from '@lucide/svelte';

	const routes = [
		{ title: 'Users', path: '/admin/users', icon: Users },
		{ title: 'Blog', path: '/admin/blog', icon: Newspaper },
		{ title: 'Projects', path: '/admin/projects', icon: LayoutGrid },
		{ title: 'Services', path: '/', icon: Box }
	];
</script>

<div class="w-fit">
	<div class="glass rounded-xl bg-card sticky top-[7vh] left-0 h-fit px-4 py-2 z-50">
		<ul class="flex flex-col gap-2">
			{#each routes as route}
				<li>
					<a href={route.path} class="flex items-center gap-2 ps-2 pe-25 py-2 rounded">
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
	</div>
</div>
