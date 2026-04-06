<script lang="ts">
	import { page } from '$app/state';
	import { Button, Input } from '$shared/ui';

	let value = $state({ email: '', username: '', password: '' });
</script>

<div class="flex flex-1 items-center justify-center">
	<div class="flex flex-col items-center gap-10 glass px-8 py-4 bg-card rounded-xl">
		<div class="">
			{page.params.type == 'login' ? 'Login' : 'Registration'}
		</div>
		<form action="" onsubmit={() => {}} class="flex flex-col gap-4">
			<Input label="Username" type="username" bind:value={value.username} />
			<Input label="Email" type="email" placeholder="example@gmail.com" bind:value={value.email} />
			<Input label="Password" type="password" bind:value={value.password} />
			<Button>{page.params.type == 'login' ? 'Login' : 'Register'}</Button>
		</form>
		<div class="">
			{#if page.params.type == 'login'}
				Or <a href="./register">sign up</a>
			{:else}
				Or <a href="./login">sign in</a>
			{/if}
		</div>
	</div>
</div>
