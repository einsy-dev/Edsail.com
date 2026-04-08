<script lang="ts">
	import { sidebarState } from '$widgets/sidebar/sidebar';
	import { onMount } from 'svelte';

	onMount(() => {
		sidebarState.update((state) => ({ ...state, children: [menu] }));
		return () => {
			sidebarState.update((state) => ({ ...state, children: [] }));
		};
	});
</script>

{#snippet menu()}
	<div class="">
		<ul>
			<li>
				<a href="./projects/create" class="flex flex-1 rounded-lg py-2">Create</a>
			</li>
		</ul>
	</div>
{/snippet}

<div class="">Page</div>
