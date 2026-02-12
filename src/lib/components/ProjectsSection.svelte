<script lang="ts">
	import MonitorFramedImage from './MonitorFramedImage.svelte';

	/**
	 * Spotlite Studios
	 * Renvintory
	 * Sincerely, Selfcare
	 * KC Fairway Bodyworks
	 * KirasCarsKC
	 * DreamCaptureCo
	 * skill-progress
	 * workos-convex-sveltekit
	 * keeper
	 * This developer portfolio
	 */
	const projects = [
		{
			name: 'Spotlite Studios',
			description:
				'A web development agency helping Kansas City small businesses establish and grow a strong online presence.',
			url: 'https://spotlitestudios.com/',
			image: '/img/spotlite-1280x720.png'
		},
		{
			name: 'Renvintory',
			description: 'A web application for managing inventory and sales for a small business.',
			url: 'https://renvintory.com/',
			image: '/img/renvintory-1280x720.png'
		},
		{
			name: 'Sincerely, Selfcare',
			description:
				'A website for a mobile massage therapy service with a Blog and CMS for blog posts.',
			url: 'https://sincerelyselfcare.life/',
			image: '/img/selfcare-1280x720.png'
		},
		{
			name: 'KC Fairway Bodywork',
			description:
				'A website for a mobile massage therapy service with a Blog and CMS for blog posts.',
			url: 'https://kcfairwaybodyworks.com/',
			image: '/img/fairway-1280x720.png'
		},
		{
			name: 'KirasCarsKC',
			description:
				'A website for a mobile automotive detailing business with booking form and subscriptions.',
			url: 'https://kirascarskc.com/',
			image: '/img/kirascars-1280x720.png'
		},
		{
			name: 'DreamCaptureCo',
			description: 'A website for a local photography business.',
			url: 'https://dreamcapture.co/',
			image: '/img/dreamcapture-1280x720.png'
		},
		{
			name: 'skill-progress',
			description: 'A microservice for showcasing technological skill levels.',
			url: 'https://github.com/slimnate/skill-progress',
			image: '/img/skill-progress-1280x720.png'
		},
		{
			name: 'workos-convex-sveltekit',
			description:
				'A library for integrating WorkOS AuthKit and Convex user storage with SvelteKit.',
			url: 'https://github.com/slimnate/workos-convex-sveltekit',
			image: '/img/workos-convex-sveltekit-1280x720.png'
		},
		{
			name: 'keeper',
			description: 'An image culling tool built with React and Electron.',
			url: 'https://github.com/slimnate/keeper',
			image: '/img/keeper-1280x720.png'
		},
		{
			name: 'This developer portfolio',
			description: 'A portfolio website for a software engineer.',
			url: 'https://github.com/slimnate/site-portfolio',
			image: '/img/portfolio-1280x720.png'
		}
	];
</script>

<h2
	class="mt-24 text-center text-4xl font-bold text-midnight-400 drop-shadow-md drop-shadow-midnight-900"
>
	My Projects
</h2>

<div class="grid grid-cols-2 gap-4 pt-8">
	{#each projects as project}
		<div
			class="relative mt-8 flex flex-col items-center justify-evenly gap-2 rounded-3xl border-2 border-platinum border-t-transparent bg-midnight-500 p-4 pt-8"
		>
			<div
				class="absolute -top-4 left-8 text-center text-3xl font-bold text-platinum drop-shadow-xl drop-shadow-midnight-900"
			>
				{project.name}
			</div>
			<MonitorFramedImage src={project.image} alt={project.name} />
			<p>{project.description}</p>
			<a href={project.url} target="_blank">View Project</a>
		</div>
	{/each}
</div>
