<script lang="ts">
	import type { SidebarBlock } from '$widgets/sidebar/sidebar';

	let { block }: { block: SidebarBlock } = $props();
</script>

<div class="card p-2">
	<ul class="flex flex-col">
		{#each block as route}
			<li>
				<a
					href={route.path || ''}
					class="flex py-2 items-center rounded"
					onclick={(e) => {
						if (route.callback) {
							e.preventDefault();
							route.callback();
						}
					}}
				>
					<span>
						{route.title}
					</span>
				</a>
			</li>
		{/each}
	</ul>
</div>
