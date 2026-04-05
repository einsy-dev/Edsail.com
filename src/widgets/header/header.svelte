<script lang="ts">
	import { UserRound } from "@lucide/svelte";

	const routes = [
		{ title: 'Blog', path: '/blog' },
		{ title: 'Partfolio', path: '/partfolio' },
		{ title: 'Contacts', path: '/contacts' },
		{ title: 'Prices', path: '/prices' },
		{ title: 'Services', path: '/services' }
	];
</script>

<header class="flex grow justify-center backdrop-blur-xs border-white/20">
	<div class="max-w-225 flex grow items-center justify-between">
		<div class="">
			<a href="/" class="flex gap-2 items-center justify-center">
				<img src="/250x250.png" alt="edsail logo" class="w-10 h-10" />
				<span>Edsail</span>
			</a>
		</div>
		<nav>
			<div class="">
				<ul class="flex gap-4">
					{#each routes as route}
						<li>
							<a href={route.path}>{route.title}</a>
						</li>
					{/each}
				</ul>
			</div>
		</nav>
		<div class="">
			<UserRound />
		</div>
	</div>
</header>
