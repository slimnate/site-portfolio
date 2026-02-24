<script lang="ts">
	import SkillIcon from '$lib/components/SkillIcon.svelte';
	import type { SkillIconProps } from '$lib/components/SkillIcon.types';
	import Atom from '$lib/components/Atom.svelte';

	type SkillSectionProps = {
		title: string;
		skills: SkillIconProps[];
	};

	let { title, skills = [] }: SkillSectionProps = $props();
	let titleEl = $state<HTMLDivElement | null>(null);
	let titleHeight = $derived(titleEl?.clientHeight ?? 0);
</script>

<div
	class="skill-card-clean group relative mt-8 flex flex-col justify-evenly gap-2 rounded-3xl border-2 border-platinum bg-midnight-500 p-4 pt-8 pr-8 transition-all duration-300 hover:border-t-transparent hover:shadow-lg hover:shadow-midnight-900/40 md:p-8"
>
	<div
		class="absolute top-3 left-8 mr-18 text-xl font-bold text-platinum drop-shadow-xl drop-shadow-midnight-900 transition-all duration-300 group-hover:-top-4 sm:text-2xl md:text-3xl"
		bind:this={titleEl}
	>
		{title}
	</div>

	<div
		class="z-20 flex flex-wrap items-center justify-center gap-2 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 md:max-w-xl"
		style="padding-top: {titleHeight + 4}px;"
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
			classes="h-16 w-16 md:h-20 md:w-20"
		/>
	</div>
</div>

<style>
	.skill-card-clean {
		will-change: transform;
	}
</style>
