<script lang="ts">
	import { Sidebar } from '$widgets';

	let { children } = $props();
</script>

<div class="gap-4 flex flex-1">
	<Sidebar />
	<!-- <div class="scrollbar-hide"> -->
	{@render children()}
	<!-- </div> -->
</div>
