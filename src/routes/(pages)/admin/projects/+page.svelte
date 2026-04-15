<script lang="ts">
	import { Project } from '$axios/project';
	import { Button } from '$shared/ui';
	import { sidebarState } from '$widgets/sidebar/sidebar';
	import type { ProjectSchemaI } from '$zod';
	import { Menu } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let data: ProjectSchemaI[] = $state([]);

	onMount(() => {
		sidebarState.update((state) => ({ ...state, children: [menu] }));

		(async () => {
			data = await Project.getAll();
		})();

		return () => {
			sidebarState.update((state) => ({ ...state, children: [] }));
		};
	});
</script>

{#snippet menu()}
	<div class="">
		<ul>
			<li>
				<a href="./projects/create" class="flex flex-1 rounded-lg py-2">Create</a>
			</li>
		</ul>
	</div>
{/snippet}

<div class="flex flex-col gap-2">
	{#each data as project}
		<a href="projects/edit/{project.slug}">
			<div class="card p-0! flex flex-1 rounded-xl overflow-hidden">
				<div class="max-h-50 aspect-square">
					<img
						src={project.icon || 'https://placehold.co/400'}
						onerror={(e) => e.currentTarget.setAttribute('src', 'https://placehold.co/400')}
						class="object-cover"
						alt=""
					/>
				</div>
				<div class="p-4 h-full">
					<div class="underline">{project.title}</div>
					<div class=""></div>
				</div>
				<div class="p-2 ml-auto flex items-center">
					<Button
						onclick={(e) => {
							e.preventDefault();
							console.log('click');
						}}
						class="p-1"
					>
						<Menu class="icon-3" />
					</Button>
				</div>
			</div>
		</a>
	{/each}
</div>
