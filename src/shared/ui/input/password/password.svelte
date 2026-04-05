<script lang="ts">
	import Input from '../input/input.svelte';
	import { Eye, EyeClosed, LockKeyhole } from '@lucide/svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { value = $bindable(), placeholder = '' }: HTMLInputAttributes = $props();

	let hidden = $state(true);
</script>

<div class="flex items-center justify-center">
	<LockKeyhole class="icon" />
	<Input type={hidden ? 'password' : 'text'} {placeholder} bind:value />
	<button class="" onclick={() => (hidden = !hidden)}>
		{#if hidden}
			<EyeClosed class="icon"/>
		{:else}
			<Eye class="icon"/>
		{/if}
	</button>
</div>
