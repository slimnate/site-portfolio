<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import SkillSection from '$lib/components/SkillSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import BlogSection from '$lib/components/BlogSection.svelte';
	import ConnectSection from '$lib/components/ConnectSection.svelte';
</script>

<main class="z-1 mx-auto flex h-full max-w-7xl flex-col justify-center px-12 lg:px-32">
	<div class="pr-8">
		<Hero />

		<!-- <p class="text-lg">
		I'm a software engineer with a passion for building web applications that are both functional
		and beautiful. I'm the founder of Spotlite Studios, a web development agency helping Kansas City
		small businesses establish and grow a strong online presence. I specialize in SvelteKit,
		TailwindCSS, and Typescript, but have experience in many other technologies.
	</p> -->

		<SkillSection />

		<ProjectsSection />

		<BlogSection />

		<ConnectSection />
	</div>
</main>
