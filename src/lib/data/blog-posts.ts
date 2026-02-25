import type { BlogPost } from '$lib/components/BlogCard.types';

export const blogPosts: BlogPost[] = [
	{
		title: 'skill-progress - Show skill proficiency with a progress bar',
		description:
			'Overview of building a TypeScript microservice that composes skill icons with configurable SVG progress bars for README and web use.',
		url: 'https://slimnate.net/software/2026/02/02/skill-progress',
		imageUrl: '/img/skill-progress-1280x720.png'
	},
	{
		title: 'Keeper - image culling tool',
		description:
			'Overview of building an Electron and React desktop app for quickly reviewing large photo sets and exporting selected keepers.',
		url: 'https://slimnate.net/software/2022/10/02/keeper',
		imageUrl: '/img/keeper-1280x720.png'
	},
	{
		title: 'eipc-api - Electron IPC API generator',
		description:
			'Covers a Node.js library that reduces Electron IPC boilerplate by generating namespaced handlers and renderer invokers. Created as part of the Keeper project.',
		url: 'https://slimnate.net/software/2022/10/13/ipc-api'
	},
	{
		title: 'Snake Tank Humidity Controller',
		description:
			'Documents a custom-built reptile habitat controller with automated humidity, lighting schedules, networked monitoring, and mobile control. Incorporates a custom designed PCB, 3D printed parts, embedded firmware, and a mobile app.',
		url: 'https://slimnate.net/projects/2021/04/14/snake-tank-humidity-controller'
	},
	{
		title: 'Custom styled alert cards with SCSS',
		description:
			'Shows how I created reusable SCSS mixins for context-aware card styles with custom colors and inline SVG icons that I can use in my blog posts.',
		url: 'https://slimnate.net/software/2023/09/07/css-cards'
	},
	{
		title: '2022 Advent of Code solutions - TypeScript',
		description:
			'Walks through Advent of Code solutions and tooling, including a challenge runner, helper utilities, and TypeScript build setup.',
		url: 'https://slimnate.net/software/2023/08/28/aoc'
	}
];
