<script lang="ts">
	import { Container } from '$shared';

	let { children } = $props();
</script>

<Container main>
	{@render children()}
</Container>
