<script lang="ts">
	import Input from '../input/input.svelte';
	import { User } from '@lucide/svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { value = $bindable(), placeholder = '' }: HTMLInputAttributes = $props();
</script>

<div class="flex items-center justify-center">
	<User class="icon" />
	<Input type="text" {placeholder} bind:value />
</div>
