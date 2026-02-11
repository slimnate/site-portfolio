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
	class="relative mt-8 flex items-center justify-evenly gap-2 rounded-3xl border-2 border-platinum border-t-transparent bg-midnight-500 p-4 pt-8"
>
	<div
		class="absolute -top-4 left-8 text-center text-3xl font-bold text-platinum drop-shadow-xl drop-shadow-midnight-900"
	>
		{title}
	</div>

	<div class="flex max-w-lg flex-wrap items-center justify-center gap-2">
		{#each skills as skill}
			<SkillIcon {...skill} />
		{/each}
	</div>
</div>
