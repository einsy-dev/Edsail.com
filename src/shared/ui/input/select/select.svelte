<script lang="ts">
	import { clickOutside } from '$shared/actions/clickOutside';
	import type { InputI } from '../input';

	let { value = $bindable(), multiple = false, data }: InputI['select'] = $props();

	let active = $state(false);

	function defCallback(v: any) {
		if (multiple) {
			if (!Array.isArray(value)) value = [];
			value.push(v);
			return;
		}
		value = v;
	}
</script>

<div
	class="relative select-none cursor-pointer *:bg-white *:px-4 *:py-1"
	use:clickOutside
	onclick_outside={() => (active = false)}
>
	<div role="none" class="" onclick={() => (active = !active)}>{value}</div>
	<div class="absolute left-0 right-0 flex flex-col" hidden={!active}>
		{#each data as opt}
			<div
				onmousedown={(e) => {
					e.preventDefault();
					(opt.callback || defCallback)(opt.value);
				}}
				role="none"
				class="text-nowrap text-sm"
			>
				{opt.title}
			</div>
		{/each}
	</div>
</div>
