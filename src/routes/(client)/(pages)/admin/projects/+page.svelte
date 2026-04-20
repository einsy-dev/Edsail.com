<script lang="ts">
	import { Project } from '$axios/project';
	import type { ProjectSchemaI } from '$lib/server/zod';
	import { genMenu, Sidebar } from '$widgets/admin/projects';
	import Card from '$widgets/admin/projects/card/card.svelte';
	import { defaultMenu, menu } from '$widgets/menu/menu';
	import { onMount, tick } from 'svelte';

	let data: ProjectSchemaI[] = $state([]);
	onMount(() => {
		(async () => {
			data = await Project.getAll();
		})();
	});
</script>

<div class="flex flex-col gap-2">
	{#each data as project}
		<Card
			{project}
			oncontextmenu={(e, project) => {
				console.log('ccs');
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
