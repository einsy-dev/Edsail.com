<script lang="ts">
	import { Sidebar, Toc } from '$widgets';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="container grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-2">
	<Sidebar class="md:order-1" />
	<div class="md:order-2">
		{@render children()}
	</div>
	<Toc class="md:order-3 " />
</div>
