<script lang="ts">
	import Project from '$axios/project';
	import { Button, Input } from '$shared/ui';
	import { debounce } from '$shared/utils';
	import { tocState } from '$widgets/toc/toc';
	import { onMount } from 'svelte';

	onMount(() => {
		tocState.update((state) => {
			state.children = test;
			return state;
		});
	});

	let data = $state({
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
		policies: '',
		projectGroup: ''
	});

	const cb = debounce(() => {
		Project.createProject(data);
	}, 100);
</script>

{#snippet test()}
	<div class="">Test</div>
{/snippet}

<div class="flex flex-col items-center">
	<div class="flex flex-col">
		<div class="flex">
			<div class=" aspect-square w-1/10">
				<Input type="file" class="" bind:value={data.icon}>
					<img
						src={data.icon ? URL.createObjectURL(data.icon as File) : 'https://placehold.co/400'}
						alt="project"
					/>
				</Input>
			</div>
			<div class="flex flex-1 flex-col">
				<div class="flex justify-between">
					<div class="">
						<Input bind:value={data.title} placeholder="Title" />
					</div>
					<div class=""><Input bind:value={data.slug} placeholder="Slug" /></div>
				</div>
				<div class=""><Input bind:value={data.description} placeholder="Description" /></div>
			</div>
		</div>
		<div class="min-h-[50vh]">
			<Input type="html" bind:value={data.content} placeholder="Content" />
		</div>
	</div>

	<Input type="file" class="w-full " bind:value={data.images} multiple>
		<div class="min-h-10 cursor-pointer flex flex-wrap gap-2">
			{#if data.images.length}
				{#each data.images as url}
					<div class="">
						<img src={URL.createObjectURL(url)} alt="" class="max-h-50 object-contain" />
					</div>
				{/each}
			{:else}
				<div class="">
					<img src="https://placehold.co/800x600" alt="" class="max-h-50 object-contain" />
				</div>
			{/if}
		</div>
	</Input>
	<Button onclick={cb} class="px-4 py-2 rounded-lg text-lg">Save</Button>
</div>
