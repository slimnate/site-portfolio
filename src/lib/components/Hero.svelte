<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

	import BounceLink from '$lib/components/BounceLink.svelte';

	gsap.registerPlugin(ScrambleTextPlugin);

	let nameEl = $state<HTMLHeadingElement | null>(null);
	let fullStackEl = $state<HTMLHeadingElement | null>(null);
	let svelteKitEl = $state<HTMLHeadingElement | null>(null);
	let spotliteStudiosEl = $state<HTMLHeadingElement | null>(null);

	const fullStackDeveloperText = 'Full-Stack Developer';
	const svelteKitText = 'SvelteKit Specialist';
	const spotliteStudiosText = 'Founder - Spotlite Studios';

	function nameScramble() {
		gsap.to(nameEl, {
			duration: 2,
			scrambleText: 'Nathan Hoyt'
		});
	}

	function nameFlyIn() {
		gsap.fromTo(
			nameEl,
			{
				opacity: 0,
				y: -100,
				scale: 0.5,
				x: -600
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'bounce',
				scale: 1,
				x: 0
			}
		);
	}

	onMount(() => {
		// nameFlyIn();
		nameScramble();

		let timeline = gsap.timeline({
			delay: 2
		});

		fullStackEl!.textContent = fullStackDeveloperText;
		svelteKitEl!.textContent = svelteKitText;
		spotliteStudiosEl!.textContent = spotliteStudiosText;

		let splitFullStackDeveloperText = SplitText.create(fullStackEl, { type: 'chars' });
		let splitSvelteKitText = SplitText.create(svelteKitEl, { type: 'chars' });
		let splitSpotliteStudiosText = SplitText.create(spotliteStudiosEl, { type: 'chars' });

		timeline.from(splitFullStackDeveloperText.chars, {
			opacity: 0,
			duration: 1,
			stagger: 0.015
		});
		timeline.to(splitFullStackDeveloperText.chars, {
			opacity: 0,
			duration: 1,
			stagger: 0.015,
			delay: 1
		});

		timeline.from(splitSvelteKitText.chars, {
			opacity: 0,
			duration: 1,
			stagger: 0.015
		});
		timeline.to(splitSvelteKitText.chars, {
			opacity: 0,
			duration: 1,
			stagger: 0.015,
			delay: 1
		});

		timeline.from(splitSpotliteStudiosText.chars, {
			opacity: 0,
			duration: 1,
			stagger: 0.015
		});
		timeline.to(splitSpotliteStudiosText.chars, {
			opacity: 0,
			duration: 1,
			stagger: 0.015,
			delay: 1
		});

		timeline.repeat(-1);
		timeline.play();
	});
</script>

<h1
	class="text-6xl font-bold text-midnight-500 drop-shadow-md drop-shadow-midnight-900"
	bind:this={nameEl}
>
	Nathan Hoyt
</h1>

<div class="relative h-24">
	<div
		class="opactity-0 absolute my-6 text-3xl font-bold text-platinum drop-shadow-md drop-shadow-midnight-900"
		bind:this={fullStackEl}
	></div>
	<div
		class="opactity-0 absolute my-6 text-3xl font-bold text-platinum drop-shadow-md drop-shadow-midnight-900"
		bind:this={svelteKitEl}
	></div>
	<div
		class="opactity-0 my-6 text-3xl font-bold text-platinum drop-shadow-md drop-shadow-midnight-900"
		bind:this={spotliteStudiosEl}
	></div>
</div>

<p class="text-lg drop-shadow-md drop-shadow-midnight-900">
	I'm a software engineer with a passion for building web applications that are both functional and
	beautiful. I'm the founder of <BounceLink href="https://spotlitestudios.com"
		>Spotlite Studios</BounceLink
	>, specializing in SvelteKit, Tailwind, Node, and TypeScript.
</p>
