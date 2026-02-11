<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import SkillSection from '$lib/components/SkillSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
</script>

<main class="z-1 mx-auto flex h-full max-w-5xl flex-col justify-center px-16 pr-24">
	<Hero />

	<!-- <p class="text-lg">
		I'm a software engineer with a passion for building web applications that are both functional
		and beautiful. I'm the founder of Spotlite Studios, a web development agency helping Kansas City
		small businesses establish and grow a strong online presence. I specialize in SvelteKit,
		TailwindCSS, and Typescript, but have experience in many other technologies.
	</p> -->

	<SkillSection />

	<!-- Projects -->
	<ProjectsSection />

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
