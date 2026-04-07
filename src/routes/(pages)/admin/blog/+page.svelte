<script lang="ts">
	import { HTMLInput } from '$widgets';
	import { Card } from '$widgets/admin';

	let value = $state('');
</script>

<div class="flex-scroll flex-col justify-between overflow-y-scroll scroll-hide">
	<HTMLInput bind:value />
	<div class="bg-card glass">
		<ul>
			<li></li>
		</ul>
	</div>
</div>

<!-- <div class="grid grid-cols-3 gap-4">
	{#each articles as article}<Card
			image={article.image}
			title={article.title}
			description={article.description}
		/>{/each}
</div> -->

<!-- // const articles = [
	// 	{
	// 		image: '/logo.png',
	// 		title: 'How to make website functional',
	// 		description: 'Lorem ipsum fefwefw fwe fewf ewf ewfew fe'
	// 	},
	// 	{
	// 		image: '/logo.png',
	// 		title: 'How to make website functional',
	// 		description: 'Lorem ipsum fefwefw fwe fewf ewf ewfew fe'
	// 	},
	// 	{
	// 		image: '/logo.png',
	// 		title: 'How to make website functional',
	// 		description: 'Lorem ipsum fefwefw fwe fewf ewf ewfew fe'
	// 	},
	// 	{
	// 		image: '/logo.png',
	// 		title: 'How to make website functional',
	// 		description: 'Lorem ipsum fefwefw fwe fewf ewf ewfew fe'
	// 	}
	// ]; -->
