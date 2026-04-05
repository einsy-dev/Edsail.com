<script lang="ts">
	const articles = [
		{
			image: '/logo.png',
			title: 'How to make website functional',
			description: 'Lorem ipsum fefwefw fwe fewf ewf ewfew fe'
		},
		{
			image: '/logo.png',
			title: 'How to make website functional',
			description: 'Lorem ipsum fefwefw fwe fewf ewf ewfew fe'
		},
		{
			image: '/logo.png',
			title: 'How to make website functional',
			description: 'Lorem ipsum fefwefw fwe fewf ewf ewfew fe'
		},
		{
			image: '/logo.png',
			title: 'How to make website functional',
			description: 'Lorem ipsum fefwefw fwe fewf ewf ewfew fe'
		}
	];
</script>

<div class=" min-h-0">
	<div class="grid grid-cols-3 gap-4">
		{#each articles as article}
			<div class="flex flex-col gap-2 glass bg-card rounded-xl">
				<div class=" flex justify-center">
					<img src={article.image} alt={article.title} class="h-full" />
				</div>
				<div class="p-2">
					<div class="">
						<h2 class="underline">{article.title}</h2>
					</div>
					<div class="">
						<p>{article.description}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
