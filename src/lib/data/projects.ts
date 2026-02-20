import type { Project } from '$lib/components/ProjectCard.types';

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
export const projects: Project[] = [
	{
		name: 'Spotlite Studios',
		description:
			'My web development agency - helping Kansas City small businesses establish and grow their online presence.',
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
		description: 'A library for integrating WorkOS AuthKit and Convex user storage with SvelteKit.',
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
