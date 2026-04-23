<script lang="ts">
	interface ProjectI {
		id: string;
		slug: string;
		icon?: string;
		title: string;
		description: string;
	}

	let {
		project,
		oncontextmenu
	}: {
		project: ProjectI;
		oncontextmenu: (e: MouseEvent, project: ProjectI) => void;
	} = $props();
</script>

<a
	href="projects/edit/{project.slug}"
	oncontextmenu={(e) => {
		oncontextmenu(e, project);
	}}
>
	<div class="card p-0! flex flex-1 rounded-xl overflow-hidden">
		<div class="max-h-50 aspect-square">
			<img
				src={"/" + project.icon || 'https://placehold.co/400'}
				onerror={(e) => e.currentTarget.setAttribute('src', 'https://placehold.co/400')}
				class="object-cover"
				alt=""
			/>
		</div>
		<div class="p-4 h-full">
			<div class="underline text-lg">{project.title}</div>
			<div class="">{project.description}</div>
		</div>
	</div>
</a>
