<script lang="ts">
	import { Button } from '$shared/ui';
	import Field from './field/field.svelte';
	import { Menu } from '@lucide/svelte';

	let { user } = $props();
</script>

<div class="bg-card glass rounded-xl px-4 py-2 gap-4 flex items-center justify-between">
	<div class="flex grow gap-4">
		<div class="">
			<img src={user.image} alt="User profile" class="h-10 w-10" />
		</div>
		<div class="grid grid-cols-5 gap-2 items-end w-fit">
			<Field label="Username" value={user.username} />
			<Field label="Email" value={user.email} />
			<Field label="Password" value={user.password} />
			<Field label="Role" value={user.role} />
			<Field label="Status" value={user.status} />
		</div>
	</div>
	<div class="">
		<Button class="p-2 rounded-full bg-transparent!">
			<Menu class="icon-1" />
		</Button>
	</div>
</div>
