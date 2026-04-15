<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Project } from '$axios/project';
	import { Button } from '$shared/ui';
	import { debounce } from '$shared/utils';
	import IDB from '$shared/utils/database';
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
			// state.children = test;
			return state;
		});
		if (page.params.slug) {
			data = await Project.get(page.params.slug!);
		} else if (page.params.edit == 'create') {
			data = await IDB.getRecord(page.params.slug!);
		}
	});

	let IDBSave = debounce(async (state) => {
		await IDB.saveRecord('create', state);
	}, 500);

	let mounted = false;
	$effect(() => {
		if (page.params.edit !== 'create') return;
		let state = $state.snapshot(data);
		if (mounted) {
			IDBSave(state);
		}
		mounted = true;
	});

	const cb = debounce(() => {
		if (page.params.edit == 'create') {
			Project.create($state.snapshot(data)).then((res: any) => {
				IDB.deleteRecort('create');
				goto(`/projects/${res.slug}`);
			});
		} else if (page.params.slug!) {
			Project.update(page.params.slug, $state.snapshot(data));
		}
	}, 100);
</script>

<div class="flex flex-col items-center">
	<Form bind:value={data} />
	<Button onclick={cb} class="px-4 py-2 rounded-lg text-lg">Save</Button>
</div>
