<script lang="ts">
	import MonitorFramedImage from './MonitorFramedImage.svelte';
	import SkillIcon from './SkillIcon.svelte';
	import BounceLink from './BounceLink.svelte';

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
			image: '/img/spotlite-1280x720.png',
			skills: ['svelte', 'tailwind', 'ts', 'convex', 'workos', 'netlify'],
			links: [
				{
					type: 'website',
					url: 'https://spotlitestudios.com/',
					label: 'Website'
				},
				{
					type: 'github',
					url: 'https://github.com/slimnate/spotlite-studios',
					label: 'Source Code'
				}
			]
		},
		{
			name: 'Renvintory',
			description: 'A web application for managing inventory and sales for a small business.',
			url: 'https://renvintory.com/',
			image: '/img/renvintory-1280x720.png',
			skills: ['svelte', 'tailwind', 'ts', 'convex', 'netlify'],
			links: [
				{
					type: 'website',
					url: 'https://renvintory.netlify.app/',
					label: 'Website'
				},
				{
					type: 'github',
					url: 'https://github.com/slimnate/renvintory',
					label: 'Source Code'
				}
			]
		},
		{
			name: 'Sincerely, Selfcare',
			description:
				'A website for a mobile massage therapy service with a Blog and CMS for blog posts.',
			url: 'https://sincerelyselfcare.life/',
			image: '/img/selfcare-1280x720.png',
			skills: ['svelte', 'tailwind', 'ts', 'convex', 'workos', 'netlify'],
			links: [
				{
					type: 'website',
					url: 'https://sincerelyselfcare.life/',
					label: 'Website'
				},
				{
					type: 'github',
					url: 'https://github.com/slimnate/sincerely-selfcare',
					label: 'Source Code'
				}
			]
		},
		{
			name: 'KC Fairway Bodywork',
			description:
				'A website for a mobile massage therapy service with a Blog and CMS for blog posts.',
			url: 'https://kcfairwaybodywork.com/',
			image: '/img/fairway-1280x720.png',
			skills: ['svelte', 'tailwind', 'ts', 'convex', 'workos', 'netlify'],
			links: [
				{
					type: 'website',
					url: 'https://kcfairwaybodywork.com/',
					label: 'Website'
				},
				{
					type: 'github',
					url: 'https://github.com/slimnate/kc-fairway-bodywork',
					label: 'Source Code'
				}
			]
		},
		{
			name: 'KirasCarsKC',
			description:
				'A website for a mobile automotive detailing business with booking form and subscriptions.',
			url: 'https://kirascarskc.com/',
			image: '/img/kirascars-1280x720.png',
			skills: ['svelte', 'tailwind', 'ts', 'convex', 'netlify'],
			links: [
				{
					type: 'website',
					url: 'https://kirascarskc.com/',
					label: 'Website'
				},
				{
					type: 'github',
					url: 'https://github.com/slimnate/site-kirascars',
					label: 'Source Code'
				}
			]
		},
		{
			name: 'DreamCaptureCo',
			description: 'A website for a local photography business.',
			url: 'https://dreamcapture.co/',
			image: '/img/dreamcapture-1280x720.png',
			skills: ['svelte', 'tailwind', 'ts', 'netlify'],
			links: [
				{
					type: 'website',
					url: 'https://dreamcapture.co/',
					label: 'Website'
				},
				{
					type: 'github',
					url: 'https://github.com/slimnate/dreamcaptureco',
					label: 'Source Code'
				}
			]
		},
		{
			name: 'skill-progress',
			description: 'A microservice for showcasing technological skill levels.',
			url: 'https://github.com/slimnate/skill-progress',
			image: '/img/skill-progress-1280x720.png',
			skills: ['svelte', 'tailwind', 'ts', 'netlify', 'express'],
			links: [
				{
					type: 'github',
					url: 'https://github.com/slimnate/skill-progress',
					label: 'Source Code'
				},
				{
					type: 'blog',
					url: 'https://slimnate.net/software/2026/02/02/skill-progress',
					label: 'Blog Post'
				},
				{
					type: 'npm',
					url: 'https://www.npmjs.com/package/skill-progress',
					label: 'NPM'
				}
			]
		},
		{
			name: 'workos-convex-sveltekit',
			description:
				'A library for integrating WorkOS AuthKit and Convex user storage with SvelteKit.',
			url: 'https://github.com/slimnate/workos-convex-sveltekit',
			image: '/img/workos-convex-sveltekit-1280x720.png',
			skills: ['svelte', 'tailwind', 'ts', 'workos', 'convex', 'netlify'],
			links: [
				{
					type: 'github',
					url: 'https://github.com/slimnate/workos-convex-sveltekit',
					label: 'Source Code'
				},
				{
					type: 'npm',
					url: 'https://www.npmjs.com/package/workos-convex-sveltekit',
					label: 'NPM'
				}
			]
		},
		{
			name: 'Keeper',
			description: 'An image culling tool built with React and Electron.',
			url: 'https://github.com/slimnate/keeper',
			image: '/img/keeper-1280x720.png',
			skills: ['react', 'electron', 'ts'],
			links: [
				{
					type: 'github',
					url: 'https://github.com/slimnate/keeper',
					label: 'Source Code'
				},
				{
					type: 'blog',
					url: 'https://slimnate.net/software/2022/10/01/keeper',
					label: 'Blog Post'
				}
			]
		},
		{
			name: 'This Portfolio',
			description: 'A portfolio website for a software engineer.',
			url: 'https://github.com/slimnate/site-portfolio',
			image: '/img/portfolio-1280x720.png',
			skills: ['svelte', 'tailwind', 'ts', 'netlify'],
			links: [
				{
					type: 'github',
					url: 'https://github.com/slimnate/site-portfolio',
					label: 'Source Code'
				}
			]
		}
	];
</script>

<h2
	class="mt-24 text-center text-4xl font-bold text-midnight-400 drop-shadow-md drop-shadow-midnight-900"
>
	My Projects
</h2>

<div class="grid gap-4 pt-8">
	{#each projects as project}
		<!-- card -->
		<div
			class="group relative mt-8 flex flex-col items-center justify-evenly gap-2 rounded-3xl border-2 border-platinum bg-midnight-500 p-4 pt-10 hover:border-t-transparent md:flex-row md:pt-12"
		>
			<div
				class="absolute top-2 left-8 text-left text-xl font-bold text-platinum drop-shadow-xl drop-shadow-midnight-900 transition-all duration-300 group-hover:-top-4 group-hover:text-2xl lg:text-2xl"
			>
				{project.name}
			</div>

			<!-- skills -->
			<div
				class="relative flex flex-col gap-2 pt-4 transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-110 md:absolute md:top-2 md:right-8 md:group-hover:-top-4 md:group-hover:right-12"
			>
				<div class="flex gap-2">
					{#each project.skills as skill}
						<SkillIcon {skill} classes="h-8 w-8 sm:h-10 sm:w-10" />
					{/each}
				</div>
			</div>

			<!-- image -->
			<MonitorFramedImage
				src={project.image}
				alt={project.name}
				containerClasses="basis-1/2 max-w-96 group-hover:scale-105 transition-all duration-500"
			/>

			<!-- content -->
			<div class="flex h-full w-full basis-1/2 flex-col justify-between self-start pt-6 pb-2">
				<!-- description -->
				<p class="text-md">{project.description}</p>

				<!-- links -->
				<div class="flex justify-end gap-8 pr-2">
					{#each project.links as link}
						<BounceLink
							href={link.url}
							classes="text-right text-midnight-300 drop-shadow-md drop-shadow-midnight-900"
						>
							{link.label}
						</BounceLink>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.skills-label {
	}

	.skills-label::before {
		background-image: url('/img/skill-progress-1280x720.png');
	}
</style>
