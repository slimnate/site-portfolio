type Project = {
	name: string;
	description: string;
	url: string;
	image: string;
	skills: string[];
	links: { label: string; url: string; type: 'website' | 'github' | 'blog' | 'npm' }[];
};

export type { Project };
