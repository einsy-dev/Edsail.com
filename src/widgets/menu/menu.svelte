<script lang="ts">
	import { clickOutside } from '$actions/clickOutside';
	import { rootScroll } from '$actions/rootScroll';
	import { Button } from '$shared';
	import { defaultMenu, menu, type MenuI } from './menu';

	let state: MenuI = $state(defaultMenu);

	menu.subscribe((menuState) => {
		state = menuState;
	});

	const mouse = { x: 0, y: 0 };
</script>

<svelte:window
	onmousemove={(e) => {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	}}
	use:rootScroll
	onroot_scroll={() => {
		menu.set({ ...defaultMenu });
	}}
/>

{#if state.active}
	<div
		class="absolute z-50 card bg-blue-500/20!"
		use:clickOutside
		onclick_outside={() => {
			menu.set({ ...defaultMenu });
		}}
		oncontext_outside={(e) => {
			menu.set({ ...defaultMenu });
		}}
		style:top="{mouse.y}px"
		style:left="{mouse.x}px"
	>
		<ul class="pe-6">
			{#each state.list as opt}
				<li>
					<Button
						onclick={() => {
							opt.callback(opt.value);
							menu.set({ ...defaultMenu });
						}}>{opt.value}</Button
					>
				</li>
			{/each}
		</ul>
	</div>
{/if}
