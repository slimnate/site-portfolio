import type { SkillIconProps } from '$lib/components/SkillIcon.types';

const languageSkills: SkillIconProps[] = [
	{ skill: 'js', level: 5, name: 'JavaScript' },
	{ skill: 'ts', level: 5, name: 'TypeScript' },
	{ skill: 'html', level: 4, name: 'HTML' },
	{ skill: 'css', level: 4, name: 'CSS' },
	{ skill: 'cs', level: 3, name: 'C#' },
	{ skill: 'sass', level: 2, name: 'Sass' },
	{ skill: 'java', level: 2, name: 'Java' },
	{ skill: 'cpp', level: 2, name: 'C++' },
	{ skill: 'py', level: 3, name: 'Python' },
	{ skill: 'ruby', level: 3, name: 'Ruby' },
	{ skill: 'dart', level: 2, name: 'Dart' },
	{ skill: 'go', level: 2, name: 'Go' },
	{ skill: 'php', level: 1, name: 'PHP' }
];

const frameworkSkills: SkillIconProps[] = [
	{ skill: 'svelte', level: 4, name: 'Svelte' },
	{ skill: 'tailwind', level: 5, name: 'Tailwind CSS' },
	{ skill: 'dotnet', level: 4, name: '.NET' },
	{ skill: 'wpf', level: 4, name: 'WPF' },
	{ skill: 'react', level: 2, name: 'React' },
	{ skill: 'rails', level: 3, name: 'Ruby on Rails' },
	{ skill: 'chrome', level: 3, name: 'Chrome Extension Framework' },
	{ skill: 'flutter', level: 2, name: 'Flutter' },
	{ skill: 'jquery', level: 3, name: 'jQuery' },
	{ skill: 'bootstrap', level: 2, name: 'Bootstrap' },
	{ skill: 'socketio', level: 2, name: 'Socket.IO' },
	{ skill: 'jekyll', level: 3, name: 'Jekyll' }
];

const backendSkills: SkillIconProps[] = [
	{ skill: 'nodejs', level: 5, name: 'Node.js' },
	{ skill: 'convex', level: 3, name: 'Convex' },
	{ skill: 'mongodb', level: 3, name: 'MongoDB' },
	{ skill: 'postgres', level: 3, name: 'PostgreSQL' },
	{ skill: 'mysql', level: 3, name: 'MySQL' },
	{ skill: 'sqlite', level: 3, name: 'SQLite' }
];

const cloudSkills: SkillIconProps[] = [
	{ skill: 'netlify', level: 5, name: 'Netlify' },
	{ skill: 'railway', level: 3, name: 'Railway' },
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
	{ skill: 'vscode', level: 5, name: 'VS Code' },
	{ skill: 'cursor', level: 5, name: 'Cursor' },
	{ skill: 'visualstudio', level: 5, name: 'Visual Studio' },
	{ skill: 'neovim', level: 3, name: 'Neovim' },
	{ skill: 'github', level: 5, name: 'GitHub' },
	{ skill: 'git', level: 4, name: 'Git' },
	{ skill: 'bitbucket', level: 4, name: 'Bitbucket' },
	{ skill: 'postman', level: 4, name: 'Postman' },
	{ skill: 'figma', level: 2, name: 'Figma' },
	{ skill: 'jira', level: 4, name: 'JIRA' },
	{ skill: 'salesforce', level: 4, name: 'SalesForce' }
];

const systemsSkills: SkillIconProps[] = [
	{ skill: 'windows', level: 5, name: 'Windows' },
	{ skill: 'arch', level: 3, name: 'Arch Linux' },
	{ skill: 'linux', level: 3, name: 'Linux' },
	{ skill: 'powershell', level: 3, name: 'PowerShell' },
	{ skill: 'bash', level: 3, name: 'Bash' },
	{ skill: 'redhat', level: 2, name: 'RedHat/Fedora' }
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
