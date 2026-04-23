<script lang="ts">
	import { Container } from '$shared';

	let { children } = $props();
</script>

<Container auth>
	{@render children()}
</Container>
