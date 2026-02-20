<script lang="ts">
	import SkillIcon from '$lib/components/SkillIcon.svelte';
	import type { SkillIconProps } from '$lib/components/SkillIcon.types';
	import Atom from '$lib/components/Atom.svelte';

	type SkillSectionProps = {
		title: string;
		skills: SkillIconProps[];
	};

	let { title, skills = [] }: SkillSectionProps = $props();
</script>

<div
	class="skill-card-clean group relative mt-8 flex items-center justify-evenly gap-2 rounded-3xl border-2 border-platinum bg-midnight-500 p-8 pt-8 transition-all duration-300 hover:border-t-transparent hover:shadow-lg hover:shadow-midnight-900/40"
>
	<div
		class="absolute top-3 left-8 text-xl font-bold text-platinum drop-shadow-xl drop-shadow-midnight-900 transition-all duration-300 group-hover:-top-4 sm:text-2xl md:text-3xl"
	>
		{title}
	</div>

	<div
		class="z-20 flex flex-wrap items-center justify-center gap-2 pt-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 md:max-w-xl"
	>
		{#each skills as skill}
			<SkillIcon {...skill} classes="h-12 w-12 md:h-16 md:w-16" />
		{/each}
	</div>

	<div
		class="absolute -top-1 -right-1 bg-radial from-platinum to-transparent to-75% opacity-50 transition-all duration-300 group-hover:-top-10 group-hover:right-2 group-hover:scale-105 group-hover:opacity-80"
	>
		<Atom
			electronCount={skills.length}
			nucleusSize={10}
			electronSize={7}
			nucleusFill="var(--color-midnight-400)"
			electronFill="var(--color-midnight-700)"
			orbitalStroke="var(--color-platinum)"
			classes="h-20 w-20"
		/>
	</div>
</div>

<style>
	.skill-card-clean {
		will-change: transform;
	}
</style>
