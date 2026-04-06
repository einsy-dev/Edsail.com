<script lang="ts">
	import { page } from '$app/state';
	import { Button, Input } from '$shared/ui';

	let value = $state({ email: '', name: '', password: '' });

	function handleForm() {
		fetch(`/api/auth/${page.params.type}`, {
			method: 'POST',
			body: JSON.stringify(value),
			headers: { 'Content-Type': 'application/json' }
		})
			.then((res) => res.json())
			.then((res) => console.log(JSON.parse(res.message)[0]))
			.catch((err) => err);
	}
</script>

<div class="flex flex-1 items-center justify-center">
	<div class="flex flex-col items-center gap-10 glass px-8 py-4 bg-card rounded-xl">
		<div class="">
			{page.params.type == 'login' ? 'Login' : 'Registration'}
		</div>
		<form action="" onsubmit={() => {}} class="flex flex-col gap-4">
			<Input label="Username" type="username" bind:value={value.name} />
			<Input label="Email" type="email" placeholder="example@gmail.com" bind:value={value.email} />
			<Input label="Password" type="password" bind:value={value.password} />
			<Button onclick={handleForm}>{page.params.type == 'login' ? 'Login' : 'Register'}</Button>
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
