<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';

	import SkillSection from '$lib/components/SkillSection.svelte';
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

<main class="z-1 mx-auto flex h-full max-w-5xl flex-col justify-center px-16">
	<Hero />

	<!-- <p class="text-lg">
		I'm a software engineer with a passion for building web applications that are both functional
		and beautiful. I'm the founder of Spotlite Studios, a web development agency helping Kansas City
		small businesses establish and grow a strong online presence. I specialize in SvelteKit,
		TailwindCSS, and Typescript, but have experience in many other technologies.
	</p> -->

	<p class="text-lg">Scroll down to learn more about me and my work!</p>

	<!-- Skills -->
	<h2
		class="mt-24 text-center text-4xl font-bold text-midnight-400 drop-shadow-md drop-shadow-midnight-900"
	>
		My Skills
	</h2>

	<SkillSection title="Languages" skills={languageSkills} />
	<SkillSection title="Frameworks & Libraries" skills={frameworkSkills} />
	<SkillSection title="Backend & Databases" skills={backendSkills} />
	<SkillSection title="Cloud & Hosting" skills={cloudSkills} />
	<SkillSection title="Build & DevOps" skills={devOpsSkills} />
	<SkillSection title="Development Tools" skills={toolsSkills} />
	<SkillSection title="Systems" skills={systemsSkills} />

	<!-- Projects -->
	<h2
		class="mt-24 text-center text-4xl font-bold text-midnight-400 drop-shadow-md drop-shadow-midnight-900"
	>
		My Projects
	</h2>

	<!-- Quick Stats -->
	<h2
		class="mt-24 text-center text-4xl font-bold text-midnight-400 drop-shadow-md drop-shadow-midnight-900"
	>
		Quick Stats
	</h2>

	<!-- Let's Connect -->
	<h2
		class="mt-24 text-center text-4xl font-bold text-midnight-400 drop-shadow-md drop-shadow-midnight-900"
	>
		Let's Connect
	</h2>
</main>
