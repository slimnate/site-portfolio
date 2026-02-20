<script lang="ts">
	import BounceLink from '$lib/components/BounceLink.svelte';
	import SkillIcon from '$lib/components/SkillIcon.svelte';
	import MonitorFramedImage from '$lib/components/MonitorFramedImage.svelte';
	import type { Project } from '$lib/components/ProjectCard.types';

	let { project }: { project: Project } = $props();
</script>

<!-- card -->
<div
	class="group relative mt-8 flex flex-col items-center justify-evenly gap-2 rounded-3xl border-2 border-platinum bg-midnight-500 p-4 pt-10 hover:border-t-transparent md:flex-row md:pt-12"
>
	<div
		class="absolute top-2 left-8 text-left text-xl font-bold text-platinum drop-shadow-xl drop-shadow-midnight-900 transition-all duration-300 group-hover:-top-4 group-hover:text-2xl lg:text-2xl"
	>
		{project.name}
	</div>

	<!-- skills -->
	<div
		class="relative flex flex-col gap-2 pt-4 transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-110 md:absolute md:top-2 md:right-8 md:group-hover:-top-4 md:group-hover:right-12"
	>
		<div class="flex gap-2">
			{#each project.skills as skill}
				<SkillIcon {skill} classes="h-8 w-8 sm:h-10 sm:w-10" />
			{/each}
		</div>
	</div>

	<!-- image -->
	<MonitorFramedImage
		src={project.image}
		alt={project.name}
		containerClasses="basis-1/2 max-w-96 group-hover:scale-105 transition-all duration-500"
	/>

	<!-- content -->
	<div class="flex h-full w-full basis-1/2 flex-col justify-between self-start pt-4 pb-2">
		<!-- description -->
		<p class="text-md pb-6 md:pt-4">{project.description}</p>

		<!-- links -->
		<div class="flex justify-end gap-6 pr-4">
			{#each project.links as link}
				{#if link.type === 'website'}
					<!-- website icon-->
					<a
						href={link.url}
						target="_blank"
						title="Website"
						class="text-platinum opacity-50 transition-all duration-500 group-hover:opacity-100"
					>
						<svg
							width="800px"
							height="800px"
							viewBox="0 0 16 16"
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8 transition-all duration-200 hover:scale-125 hover:rotate-12"
						>
							<title>Website</title>
							<path
								fill="currentColor"
								d="M16 7.38A7.82 7.82 0 0 0 8 .5a7.82 7.82 0 0 0-8 6.88v1.24a7.82 7.82 0 0 0 8 6.88 7.82 7.82 0 0 0 8-6.88V7.38zm-1.25 0h-3a11.34 11.34 0 0 0-.43-2.54 7.6 7.6 0 0 0 1.75-1 6 6 0 0 1 1.65 3.54zm-9.18 0a9.69 9.69 0 0 1 .37-2.14A8.43 8.43 0 0 0 8 5.5a8.49 8.49 0 0 0 2.09-.26 10.2 10.2 0 0 1 .37 2.14zm4.92 1.24a9.59 9.59 0 0 1-.37 2.14 8.53 8.53 0 0 0-4.18 0 9.69 9.69 0 0 1-.37-2.14zm.4-5A11.82 11.82 0 0 0 10 2a6.89 6.89 0 0 1 2 1 6.57 6.57 0 0 1-1.14.66zm-2.6-1.86a10 10 0 0 1 1.38 2.3A7.63 7.63 0 0 1 8 4.25a7.56 7.56 0 0 1-1.67-.19 9.82 9.82 0 0 1 1.38-2.3h.58zm-3.15 1.9A6.57 6.57 0 0 1 4 3a6.89 6.89 0 0 1 2-1 10.38 10.38 0 0 0-.86 1.66zM3 3.83a7.6 7.6 0 0 0 1.75 1 11 11 0 0 0-.43 2.54h-3A6 6 0 0 1 3 3.83zM1.28 8.62h3a11 11 0 0 0 .43 2.54 7.6 7.6 0 0 0-1.75 1 6 6 0 0 1-1.68-3.54zm3.86 3.72A10.38 10.38 0 0 0 6 14a6.89 6.89 0 0 1-2-1 6.57 6.57 0 0 1 1.14-.66zm2.57 1.9a9.82 9.82 0 0 1-1.38-2.3 7.43 7.43 0 0 1 3.34 0 9.76 9.76 0 0 1-1.38 2.3h-.58zm3.15-1.9a6.57 6.57 0 0 1 1.19.66 7.24 7.24 0 0 1-2 1 11.48 11.48 0 0 0 .81-1.66zm2.14-.17a7.6 7.6 0 0 0-1.75-1 10.8 10.8 0 0 0 .43-2.54h3A6 6 0 0 1 13 12.17z"
							/>
						</svg>
					</a>
				{:else if link.type === 'github'}
					<a
						href={link.url}
						target="_blank"
						title="Source Code"
						class="text-platinum opacity-50 transition-all duration-500 group-hover:opacity-100"
					>
						<svg
							class="h-8 w-8 transition-all duration-200 hover:scale-125 hover:rotate-12"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				{:else if link.type === 'blog'}
					<a
						href={link.url}
						target="_blank"
						class="text-platinum opacity-50 transition-all duration-500 group-hover:opacity-100"
						><svg
							class="h-8 w-8 transition-all duration-200 hover:scale-125 hover:rotate-12"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							xml:space="preserve"
							fill="currentColor"
						>
							<title>Blog</title>
							<path
								d="M421.073,221.719c-0.578,11.719-9.469,26.188-23.797,40.094v183.25c-0.016,4.719-1.875,8.719-5.016,11.844
                            c-3.156,3.063-7.25,4.875-12.063,4.906H81.558c-4.781-0.031-8.891-1.844-12.047-4.906c-3.141-3.125-4.984-7.125-5-11.844V152.219
                            c0.016-4.703,1.859-8.719,5-11.844c3.156-3.063,7.266-4.875,12.047-4.906h158.609c12.828-16.844,27.781-34.094,44.719-49.906
                            c0.078-0.094,0.141-0.188,0.219-0.281H81.558c-18.75-0.016-35.984,7.531-48.25,19.594c-12.328,12.063-20.016,28.938-20,47.344
                            v292.844c-0.016,18.406,7.672,35.313,20,47.344C45.573,504.469,62.808,512,81.558,512h298.641c18.781,0,36.016-7.531,48.281-19.594
                            c12.297-12.031,20-28.938,19.984-47.344V203.469c0,0-0.125-0.156-0.328-0.313C440.37,209.813,431.323,216.156,421.073,221.719z"
							/>
							<path
								d="M498.058,0c0,0-15.688,23.438-118.156,58.109C275.417,93.469,211.104,237.313,211.104,237.313
                            c-15.484,29.469-76.688,151.906-76.688,151.906c-16.859,31.625,14.031,50.313,32.156,17.656
                            c34.734-62.688,57.156-119.969,109.969-121.594c77.047-2.375,129.734-69.656,113.156-66.531c-21.813,9.5-69.906,0.719-41.578-3.656
                            c68-5.453,109.906-56.563,96.25-60.031c-24.109,9.281-46.594,0.469-51-2.188C513.386,138.281,498.058,0,498.058,0z"
							/>
						</svg></a
					>
				{:else if link.type === 'npm'}
					<a
						href={link.url}
						target="_blank"
						class="text-platinum opacity-50 transition-all duration-500 group-hover:opacity-100"
						><svg
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8 transition-all duration-200 hover:scale-125 hover:rotate-12"
							fill="currentColor"
							><title>{link.label}</title><path
								d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
							/></svg
						>
					</a>
				{:else}
					<BounceLink
						href={link.url}
						classes="text-right text-midnight-300 drop-shadow-md drop-shadow-midnight-900"
					>
						{link.label}
					</BounceLink>
				{/if}
			{/each}
		</div>
	</div>
</div>
