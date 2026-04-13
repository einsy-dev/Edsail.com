<script lang="ts">
	import { tocState, type TocStateT } from './toc';

	let { class: className = '' } = $props();

	let state: TocStateT | undefined = $state();

	tocState.subscribe((data) => {
		state = data;
	});
</script>

<aside class="p-2 h-fit {className}">
	{#if state?.data.length}
		<h2 class="text-center font-bold">Table of contents</h2>
		<div class="">
			<ul>
				{#each state.data as route}
					<li class="">
						<a href={route.path}>{route.title}</a>
						{#if route.items?.length}
							<ul>
								{#each route.items as item}
									<li class="ps-4">
										<a href={item.path}>{item.title}</a>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
		
	{#if Array.isArray(state?.children)}
		{#each state.children as children}
			{@render children()}
		{/each}
	{:else}
		{@render state?.children?.()}
	{/if}
</aside>
