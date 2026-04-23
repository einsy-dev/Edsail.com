<script lang="ts">
	import { goto } from '$app/navigation';
	import { Project } from '$axios/project';
	import { sidebarState } from '$widgets/sidebar/sidebar';
	import { onMount } from 'svelte';

	onMount(() => {
		sidebarState.update((state) => {
			state.blocks[1] = [
				{
					title: 'Create',
					callback: async () => {
						await Project.create({ title: 'New project', slug: 'new-project', icon: '' }).then(
							(res) => {
								goto('./projects/' + res.id);
							}
						);
					}
				}
			];
			return state;
		});

		return () => {
			sidebarState.update((state) => ({ ...state, blocks: [], children: [] }));
		};
	});
</script>
