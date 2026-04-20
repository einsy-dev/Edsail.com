<script lang="ts">
	import { sidebarState, type SidebarI } from '../sidebar';
	import Block from './block/block.svelte';

	let { class: className } = $props();

	let sidebar: SidebarI = $state({ active: false, blocks: [] });

	sidebarState.subscribe((state) => (sidebar = state));
</script>

{#if sidebar.blocks?.length || sidebar.children}
	<aside class="h-fit flex flex-col gap-2 {className}">
		{#each sidebar.blocks as block}
			<Block {block} />
		{/each}

		{#if sidebar.children?.length}
			{#each sidebar.children as children}
				<div class="card p-2">
					{@render children()}
				</div>
			{/each}
		{/if}
	</aside>
{/if}
