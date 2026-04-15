<script lang="ts">
	import { page } from '$app/state';
	import { Project } from '$axios/project';
	import { onMount } from 'svelte';

	let data: any = $state({});

	onMount(async () => {
		await Project.get(page.params.name!).then((res) => {
			data = res;
		});
	});
</script>

<div class="">
	<div class="max-h-50 aspect-square rounded-xl overflow-hidden">
		<img src={data.icon} class="object-cover" alt="" />
	</div>
	{JSON.stringify(data)}
</div>
