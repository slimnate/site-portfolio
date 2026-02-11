<script lang="ts">
	import type { SkillIconProps } from './SkillIcon.types';

	let {
		skill,
		level = 5,
		imageUrl,
		size,
		style,
		startColor,
		endColor,
		name
	}: SkillIconProps = $props();

	const url = new URL(`https://skill-progress.netlify.app/.netlify/functions/progress`);

	url.searchParams.set('skill', skill);
	url.searchParams.set('level', level.toString());

	if (imageUrl) {
		url.searchParams.set('imageUrl', imageUrl);
	}

	if (size) {
		url.searchParams.set('size', size.toString());
	}

	if (style) {
		url.searchParams.set('style', style);
	}

	if (startColor) {
		url.searchParams.set('startColor', startColor);
	}

	if (endColor) {
		url.searchParams.set('endColor', endColor);
	}

	function levelToString(level: number): string {
		return level === 1
			? 'Beginner'
			: level === 2
				? 'Intermediate'
				: level === 3
					? 'Advanced'
					: level === 4
						? 'Expert'
						: 'Master';
	}

	const titleText = `${name ? name : skill} - ${levelToString(level)}`;
</script>

<img src={url.toString()} alt={titleText} title={titleText} class="w-16" />
