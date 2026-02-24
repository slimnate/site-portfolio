import type { BlogPost } from '$lib/components/BlogCard.types';

export const blogPosts: BlogPost[] = [
	{
		title: 'Showcase Your Proficiency Level on GitHub README With a Progress Bar',
		description:
			'Builds a TypeScript microservice that composes skill icons with configurable SVG progress bars for README and web use.',
		url: 'https://slimnate.net/software/2026/02/02/skill-progress'
	},
	{
		title: 'Keeper - The Photographers Post-Shoot Pre-Processor',
		description:
			'Explains an Electron and React desktop app for quickly reviewing large photo sets and exporting selected keepers.',
		url: 'https://slimnate.net/software/2022/10/02/keeper'
	},
	{
		title: 'eipc-api - Electron IPC API Generator',
		description:
			'Covers a Node.js library that reduces Electron IPC boilerplate by generating namespaced handlers and renderer invokers.',
		url: 'https://slimnate.net/software/2022/10/13/ipc-api'
	},
	{
		title: 'Project - Snake Tank Humidity Controller',
		description:
			'Documents an IoT reptile habitat controller with automated humidity, lighting schedules, networked monitoring, and mobile control.',
		url: 'https://slimnate.net/projects/2021/04/14/snake-tank-humidity-controller'
	},
	{
		title: 'Custom Contextually Colored Cards with SCSS',
		description:
			'Shows how to create reusable SCSS mixins for context-aware card styles with custom colors and inline SVG icons.',
		url: 'https://slimnate.net/software/2023/09/07/css-cards'
	},
	{
		title: '2022 Advent of Code solutions',
		description:
			'Walks through Advent of Code solutions and tooling, including a challenge runner, helper utilities, and TypeScript build setup.',
		url: 'https://slimnate.net/software/2023/08/28/aoc'
	}
];
