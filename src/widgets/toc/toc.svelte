<script lang="ts">
	import { tocStore, type TocState } from '$shared/store';

	let { class: className = '' } = $props();

	let routes: TocState | undefined = $state();

	tocStore.subscribe((data) => {
		routes = data;
	});
</script>

<aside class="p-2 h-fit {className}">
	<h2 class="text-center font-bold">Table of contents</h2>
	<div class="">
		<ul>
			{#each routes as route}
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
</aside>
