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
			duration: 1,
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

	function headerCycle() {
		// Set text content of headers after first render so they don't show up for a split second on first load.
		fullStackEl!.textContent = fullStackDeveloperText;
		svelteKitEl!.textContent = svelteKitText;
		spotliteStudiosEl!.textContent = spotliteStudiosText;

		let splitFullStackDeveloperText = SplitText.create(fullStackEl, { type: 'chars, words' });
		let splitSvelteKitText = SplitText.create(svelteKitEl, { type: 'chars, words' });
		let splitSpotliteStudiosText = SplitText.create(spotliteStudiosEl, { type: 'chars, words' });

		let timeline = gsap.timeline({
			delay: 1
		});

		const fromOptions = {
			opacity: 0,
			duration: 1,
			stagger: 0.015
		};

		const toOptions = {
			opacity: 0,
			duration: 1,
			stagger: 0.015,
			delay: 1
		};

		timeline.from(splitFullStackDeveloperText.chars, fromOptions);
		timeline.to(splitFullStackDeveloperText.chars, toOptions);

		timeline.from(splitSvelteKitText.chars, fromOptions);
		timeline.to(splitSvelteKitText.chars, toOptions);

		timeline.from(splitSpotliteStudiosText.chars, fromOptions);
		timeline.to(splitSpotliteStudiosText.chars, toOptions);

		timeline.repeat(-1);
		timeline.play();
	}

	onMount(() => {
		// nameFlyIn();
		nameScramble();

		headerCycle();
	});
</script>

<div class="flex h-[50vh] flex-col justify-center">
	<h1
		class="text-5xl font-bold text-midnight-500 drop-shadow-md drop-shadow-midnight-900 sm:text-6xl"
		bind:this={nameEl}
	>
		Nathan Hoyt
	</h1>

	<div class="relative">
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
		I'm a software engineer with a passion for building web applications that are both functional
		and beautiful. I specialize in in SvelteKit, Tailwind, Node, and TypeScript, and am the founder
		of <BounceLink href="https://spotlitestudios.com" classes="whitespace-nowrap"
			>Spotlite Studios</BounceLink
		>
	</p>
</div>
