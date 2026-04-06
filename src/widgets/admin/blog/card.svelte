<script lang="ts">
	let { image, title, description } = $props();
</script>

<div class="flex flex-col gap-2 glass bg-card rounded-xl">
	<div class=" flex justify-center">
		<img src={image} alt={title} class="h-full" />
	</div>
	<div class="p-2">
		<div class="">
			<h2 class="underline">{title}</h2>
		</div>
		<div class="">
			<p>{description}</p>
		</div>
	</div>
</div>
