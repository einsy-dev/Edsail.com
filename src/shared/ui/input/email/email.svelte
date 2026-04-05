<script lang="ts">
	import Input from '../input/input.svelte';
	import { AtSign } from '@lucide/svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { value = $bindable(), placeholder = '' }: HTMLInputAttributes = $props();
</script>

<div class="flex items-center justify-center">
	<AtSign class="icon" />
	<Input {placeholder} type="email" bind:value />
</div>
