<script lang="ts">
	import { Input } from '$shared/ui';

	let { value = $bindable() } = $props();
</script>

<Input type="file" bind:value>
	<div class="overflow-hidden rounded-xl">
		<img
			class=" object-contain"
			src={value
				? typeof value == 'string'
					? value
					: URL.createObjectURL(value as File)
				: 'https://placehold.co/400'}
			alt="project"
		/>
	</div>
</Input>
