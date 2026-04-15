<script lang="ts">
	import { Input } from '$shared/ui';
	import Image from './image/image.svelte';

	let { value = $bindable([]) }: { value: (string | File)[] } = $props();

	function onDelete(url: string | File) {
		value = value.filter((item) => item !== url);
	}
</script>

<div class="w-full select-none">
	<div class="min-h-10 flex flex-wrap gap-2">
		{#if value.length}
			{#each value as url}
				<Image
					src={typeof url == 'string' ? url : URL.createObjectURL(url)}
					onDelete={() => onDelete(url)}
				/>
			{/each}
		{/if}
		<Input type="file" bind:value multiple>
			<Image src="https://placehold.co/800x600" />
		</Input>
	</div>
</div>
