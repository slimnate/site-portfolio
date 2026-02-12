<script lang="ts">
	import SkillIcon from '$lib/components/SkillIcon.svelte';
	import type { SkillIconProps } from '$lib/components/SkillIcon.types';

	type SkillSectionProps = {
		title: string;
		skills: SkillIconProps[];
	};

	let { title, skills = [] }: SkillSectionProps = $props();
</script>

<div
	class="group relative mt-8 flex items-center justify-evenly gap-2 rounded-3xl border-2 border-platinum bg-midnight-500 p-8 pt-8 transition-all duration-500 hover:border-t-transparent"
>
	<div
		class="absolute top-3 left-8 text-center text-3xl font-bold text-platinum drop-shadow-xl drop-shadow-midnight-900 transition-all duration-500 group-hover:-top-4"
	>
		{title}
	</div>

	<div class="flex flex-wrap items-center justify-center gap-2 pt-8">
		{#each skills as skill}
			<SkillIcon {...skill} classes="w-16" />
		{/each}
	</div>
</div>
