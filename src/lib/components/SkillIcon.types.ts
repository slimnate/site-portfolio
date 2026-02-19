type Level = 1 | 2 | 3 | 4 | 5;
type SkillIconProps = {
	skill: string;
	level?: Level;
	imageUrl?: string;
	size?: number;
	style?: string;
	classes?: string;
	startColor?: string;
	endColor?: string;
	name?: string;
};

export type { Level, SkillIconProps };
