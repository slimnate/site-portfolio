import type { SkillIconProps } from '$lib/components/SkillIcon.types';

const languageSkills: SkillIconProps[] = [
	{ skill: 'js', level: 5, name: 'JavaScript' },
	{ skill: 'ts', level: 4, name: 'TypeScript' },
	{ skill: 'html', level: 5, name: 'HTML' },
	{ skill: 'css', level: 4, name: 'CSS' },
	{ skill: 'sass', level: 3, name: 'Sass' },
	{ skill: 'cs', level: 3, name: 'C#' },
	{ skill: 'java', level: 3, name: 'Java' },
	{ skill: 'cpp', level: 2, name: 'C++' },
	{ skill: 'php', level: 2, name: 'PHP' },
	{ skill: 'py', level: 2, name: 'Python' },
	{ skill: 'ruby', level: 3, name: 'Ruby' },
	{ skill: 'dart', level: 1, name: 'Dart' },
	{ skill: 'go', level: 1, name: 'Go' }
];

const frameworkSkills: SkillIconProps[] = [
	{ skill: 'svelte', level: 4, name: 'Svelte' },
	{ skill: 'react', level: 3, name: 'React' },
	{ skill: 'rails', level: 3, name: 'Ruby on Rails' },
	{ skill: 'flutter', level: 2, name: 'Flutter' },
	{ skill: 'tailwind', level: 5, name: 'Tailwind CSS' },
	{ skill: 'jquery', level: 4, name: 'jQuery' }
];

const backendSkills: SkillIconProps[] = [
	{ skill: 'nodejs', level: 5, name: 'Node.js' },
	{ skill: 'convex', level: 4, name: 'Convex' },
	{ skill: 'mongodb', level: 3, name: 'MongoDB' },
	{ skill: 'postgres', level: 3, name: 'PostgreSQL' },
	{ skill: 'mysql', level: 3, name: 'MySQL' },
	{ skill: 'sqlite', level: 3, name: 'SQLite' }
];

const cloudSkills: SkillIconProps[] = [
	{ skill: 'netlify', level: 5, name: 'Netlify' },
	{ skill: 'supabase', level: 2, name: 'Supabase' },
	{ skill: 'firebase', level: 1, name: 'Firebase' },
	{ skill: 'gcp', level: 2, name: 'Google Cloud Platform' },
	{ skill: 'aws', level: 2, name: 'AWS' }
];

const devOpsSkills: SkillIconProps[] = [
	{ skill: 'npm', level: 5, name: 'npm' },
	{ skill: 'vite', level: 4, name: 'Vite' },
	{ skill: 'gulp', level: 2, name: 'Gulp' },
	{ skill: 'jenkins', level: 1, name: 'Jenkins' },
	{ skill: 'selenium', level: 3, name: 'Selenium' },
	{ skill: 'electron', level: 3, name: 'Electron' }
];

const toolsSkills: SkillIconProps[] = [
	{ skill: 'git', level: 4, name: 'Git' },
	{ skill: 'github', level: 5, name: 'GitHub' },
	{ skill: 'bitbucket', level: 4, name: 'Bitbucket' },
	{ skill: 'neovim', level: 3, name: 'Neovim' },
	{ skill: 'vscode', level: 5, name: 'VS Code' },
	{ skill: 'visualstudio', level: 5, name: 'Visual Studio' },
	{ skill: 'postman', level: 4, name: 'Postman' },
	{ skill: 'figma', level: 2, name: 'Figma' }
];

const systemsSkills: SkillIconProps[] = [
	{ skill: 'windows', level: 5, name: 'Windows' },
	{ skill: 'arch', level: 3, name: 'Arch Linux' },
	{ skill: 'linux', level: 3, name: 'Linux' },
	{ skill: 'powershell', level: 3, name: 'PowerShell' },
	{ skill: 'bash', level: 3, name: 'Bash' }
];

export {
	languageSkills,
	frameworkSkills,
	backendSkills,
	cloudSkills,
	devOpsSkills,
	toolsSkills,
	systemsSkills
};
