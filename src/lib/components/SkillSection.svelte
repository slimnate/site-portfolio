<script lang="ts">
	import SkillCard from '$lib/components/SkillCard.svelte';
	import {
		languageSkills,
		frameworkSkills,
		backendSkills,
		cloudSkills,
		devOpsSkills,
		toolsSkills,
		systemsSkills
	} from '$lib/data/skills';
</script>

<section class="mx-auto max-w-7xl">
	<!-- Skills -->
	<h2
		class="mt-24 text-center text-4xl font-bold text-midnight-400 drop-shadow-md drop-shadow-midnight-900"
	>
		My Skills
	</h2>

	<SkillCard title="Languages" skills={languageSkills} />
	<SkillCard title="Frameworks & Libraries" skills={frameworkSkills} />
	<SkillCard title="Backend & Databases" skills={backendSkills} />
	<SkillCard title="Cloud & Hosting" skills={cloudSkills} />
	<SkillCard title="Build & DevOps" skills={devOpsSkills} />
	<SkillCard title="Development Tools" skills={toolsSkills} />
	<SkillCard title="Systems" skills={systemsSkills} />
</section>
