<script lang="ts">
	import { User } from '$widgets/admin';

	const users = [
		{
			username: 'User',
			email: 'example@gmail.com',
			password: '**********',
			image: '/logo.png',
			role: 'user',
			status: 'approved'
		},
		{
			username: 'User',
			email: 'example@gmail.com',
			password: '**********',
			image: '/logo.png',
			role: 'user',
			status: 'approved'
		},
		{
			username: 'User',
			email: 'example@gmail.com',
			password: '**********',
			image: '/logo.png',
			role: 'user',
			status: 'approved'
		}
	];
</script>

<div class="flex grow flex-col gap-2">
	{#each users as user}
		<User {user} />
	{/each}
</div>
