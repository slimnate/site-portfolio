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
		name: 'skill-progress',
		description:
			'Publically hosted microservice that generates a progress bar to show experience levels in various technologies.',
		url: 'https://github.com/slimnate/skill-progress',
		image: '/img/skill-progress-1280x720.png',
		skills: ['ts', 'express', 'netlify', 'railway', 'npm', 'svg'],
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
		name: 'Sincerely, Selfcare',
		description:
			'Website for a local mobile massage therapy service with a Blog and CMS for blog posts.',
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
		name: 'Renvintory',
		description:
			'Web application designed to track inventory and sales for bars at the Kansas City Renaissance Festival.',
		url: 'https://renvintory.netlify.app/',
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
		name: 'workos-convex-sveltekit',
		description:
			'NodeJS package that integrates WorkOS and Convex in a SvelteKit app. WorkOS AuthKit is used for authentication, and Convex is used for user storage. It provides role based authorization in the SvelteKit app.',
		url: 'https://github.com/slimnate/workos-convex-sveltekit',
		image: '/img/workos-convex-sveltekit-1280x720.png',
		skills: ['workos', 'convex', 'svelte', 'ts', 'nodejs'],
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
		description:
			'Image culling tool to help photographers sort through images from a photoshoot, built with React and Electron.',
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
		name: 'KC Fairway Bodywork',
		description:
			'Website for a local mobile massage therapy service with a Blog and CMS for blog posts.',
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
			'Website for a local mobile automotive detailing business with booking form and subscriptions.',
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
		description: 'Website for a local photography business.',
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
		name: 'This Portfolio',
		description:
			'The site you are on right now, my software engineering portfolio and electronic resume website.',
		url: 'https://nathanhoyt.dev',
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
