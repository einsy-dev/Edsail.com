<script lang="ts">
	import { Cross } from '@lucide/svelte';

	let { src, onDelete }: { src: string; onDelete?: () => void } = $props();
</script>

<div class="relative rounded-xl overflow-hidden">
	<img {src} alt="" class="max-h-50 object-contain" />
	{#if onDelete}
		<div class="absolute top-0 right-0 p-2">
			<Cross class="icon stroke-white  cursor-pointer" onclick={onDelete} />
		</div>
	{/if}
</div>
