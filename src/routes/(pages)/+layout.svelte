<script lang="ts">
	import { Sidebar, Toc } from '$widgets';

	let { children } = $props();
</script>

<div class="container h-fit grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-2">
	<Sidebar class="md:order-1" />
	<Toc class="card md:order-3 " />
	<div class="card md:order-2">
	fefe
		{@render children()}
	</div>
</div>
