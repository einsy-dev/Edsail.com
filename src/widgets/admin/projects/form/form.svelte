<script lang="ts">
	import { Input } from '$shared/ui';
	import type { ProjectFormI } from './form';
	import Icon from './icon/icon.svelte';
	import Images from './images/images.svelte';

	let { value = $bindable() }: { value: ProjectFormI } = $props();
</script>

<div class="flex flex-col items-center">
	<div class="flex flex-col">
		<div class="flex">
			<div class=" aspect-square w-1/10">
				<Icon bind:value={value.icon} />
			</div>

			<div class="flex flex-1 flex-col">
				<div class="flex justify-between">
					<div class="">
						<Input bind:value={value.title} placeholder="Title" />
					</div>
					<div class=""><Input bind:value={value.slug} placeholder="Slug" /></div>
				</div>
				<div class=""><Input bind:value={value.description} placeholder="Description" /></div>
			</div>
		</div>

		<div class="min-h-[50vh]">
			<Input type="html" bind:value={value.content} />
		</div>
	</div>

	<Images bind:value={value.images} />
</div>
