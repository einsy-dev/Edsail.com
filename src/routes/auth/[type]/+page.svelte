<script lang="ts">
	import { Button, Input } from '$shared/ui';
</script>

<div class="flex flex-1 items-center justify-center">
	<form
		action=""
		on:submit|preventDefault={() => {}}
		class="flex flex-col glass rounded p-4 "
	>
		<Input label="Email" placeholder="example@gmail.com" />
		<Input label="Password" type="password" />
		<Button />
	</form>
</div>
