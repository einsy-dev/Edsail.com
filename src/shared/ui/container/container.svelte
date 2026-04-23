<script lang="ts">
	import Auth from './auth/auth.svelte';
	import Main from './main/main.svelte';
	import type { Snippet } from 'svelte';

	let { children, main, auth }: { children: Snippet; main?: boolean; auth?: boolean } = $props();
</script>

{#if main}
	<Main>{@render children()}</Main>
{:else if auth}
	<Auth>{@render children()}</Auth>
{:else}
	{@render children()}
{/if}
