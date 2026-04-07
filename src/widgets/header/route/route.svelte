<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		href?: string;
		children: Snippet;
	}

	let { class: className = '', href = '', children }: Props = $props();
</script>

<li>
	<a class={className} {href}>{@render children()}</a>
</li>
