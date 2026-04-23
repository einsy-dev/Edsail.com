<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Project } from '$axios/project';
	import { Button } from '$shared';
	import { debounce } from '$utils';
	import IDB from '$utils/database';
	import type { ProjectFormI } from '$widgets/admin/projects/form/form';
	import Form from '$widgets/admin/projects/form/form.svelte';
	import { tocState } from '$widgets/toc/toc';
	import { onMount } from 'svelte';

	let data: ProjectFormI = $state<ProjectFormI>({
		title: '',
		description: '',
		content: '',
		slug: '',
		keywords: [],
		category: [],
		images: [],
		icon: undefined,
		files: [],
		docs: [],
		policies: [],
		projectGroup: ''
	});

	onMount(async () => {
		tocState.update((state) => {
			return state;
		});
	});

	const cb = debounce(() => {
		Project.update(page.params.id!, $state.snapshot(data));
	}, 100);
</script>

<div class="flex flex-col items-center">
	<Form bind:value={data} />
	<Button onclick={cb} class="px-4 py-2 rounded-lg text-lg">Save</Button>
</div>
