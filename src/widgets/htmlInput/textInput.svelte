<script lang="ts">
	import { Button } from '$shared/ui';
	import Header from './header/header.svelte';

	let { input = $bindable(), value = $bindable('<p>Highlight this and click H1</p>') } = $props();

	function handleText() {
		value = input.innerHTML;
	}
</script>

<div class="glass rounded-xl bg-card flex flex-col flex-1 p-4">
	<Header />

	<div bind:this={input} class=" p-4 border-none outline-none prose prose-slate" contenteditable>
		{@html value}
	</div>
	<div class="">
		<Button class="" onclick={handleText}>Save Article</Button>
	</div>
</div>
