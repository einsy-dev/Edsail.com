<script lang="ts">
	import Email from './email/email.svelte';
	import { default as DefInput } from './input/input.svelte';
	import Label from './label/label.svelte';
	import Password from './password/password.svelte';
	import Username from './username/username.svelte';
	import type { Component } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	let {
		value = $bindable(),
		placeholder = '',
		label = '',
		type = 'text'
	}: HTMLInputAttributes & {
		label: string;
		type: HTMLInputAttributes['type'] | 'username';
	} = $props();

	let InputComponent = $derived(switchInput(type));

	function switchInput(type: HTMLInputAttributes['type']): Component<any> {
		switch (type) {
			case 'password':
				return Password;
			case 'email':
				return Email;
			case 'username':
				return Username;
			default:
				return DefInput;
		}
	}
</script>

<Label title={label}>
	<InputComponent bind:value {placeholder} {type} />
</Label>
