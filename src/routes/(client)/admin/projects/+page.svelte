<script lang="ts">
	import type { ProjectSchemaI } from '$lib/zod';
	import { genMenu, Sidebar } from '$widgets/admin/projects';
	import Card from '$widgets/admin/projects/card/card.svelte';
	import { menu } from '$widgets/menu/menu';

	let { data }: { data: { projects: ProjectSchemaI[] } } = $props();

</script>

<div class="flex flex-col gap-2">
	{#each data.projects as project}
		<Card
			{project}
			oncontextmenu={(e, project) => {
				e.preventDefault();

				menu.update((state) => {
					state.active = true;
					state.list = genMenu(project.id, project.slug);
					return state;
				});
			}}
		/>
	{/each}
	<Sidebar />
</div>
