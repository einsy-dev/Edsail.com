<script lang="ts">
	import { UserRound } from '@lucide/svelte';

	let { class: className = '' } = $props();

	const routes = [
		{ title: 'Admin', path: '/admin' },
		{ title: 'Blog', path: '/blog' },
		{ title: 'Projects', path: '/projects' },
		{ title: 'Contacts', path: '/contacts' },
		{ title: 'Prices', path: '/prices' },
		{ title: 'Services', path: '/services' }
	];
</script>

<header class="fixed inset-0 z-50 glass {className} flex flex-1">
	<div class="container flex flex-row justify-between">
		<div class="flex">
			<a href="/" class=" text-lg flex gap-2 items-center justify-center">
				<img src="/250x250.png" alt="edsail logo" class="w-10 h-10" />
				<span>Edsail</span>
			</a>
		</div>
		<div class="flex gap-2 items-center">
			<nav>
				<ul class="flex gap-4 justify-center">
					{#each routes as route}
						<li>
							<a
								class="text-lg underline decoration-cyan-400 decoration-2 underline-offset-5 hover:underline-offset-2 transition-all"
								href={route.path}>{route.title}</a
							>
						</li>
					{/each}
				</ul>
			</nav>
			<div class="flex items-center">
				<a href="/auth/login" class="cursor-pointer hover:scale-105 rounded-full p-1">
					<UserRound class="w-6 h-6" />
				</a>
			</div>
		</div>
	</div>
</header>
