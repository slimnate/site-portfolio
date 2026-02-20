<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
</script>

<h2
	class="mt-24 text-center text-4xl font-bold text-midnight-400 drop-shadow-md drop-shadow-midnight-900"
>
	My Projects
</h2>

<div class="grid gap-4 pt-8">
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</div>
