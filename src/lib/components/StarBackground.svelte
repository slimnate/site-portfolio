<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	function generateBoxShadows(n: number): string {
		const shadows: string[] = [];
		for (let i = 0; i < n; i++) {
			const x = Math.floor(Math.random() * 2000);
			const y = Math.floor(Math.random() * 2000);
			shadows.push(`${x}px ${y}px #FFF`);
		}
		return shadows.join(', ');
	}

	const shadowsSmall = generateBoxShadows(700);
	const shadowsMedium = generateBoxShadows(200);
	const shadowsBig = generateBoxShadows(100);

	let starsSmallEl = $state<HTMLDivElement | null>(null);
	let starsMediumEl = $state<HTMLDivElement | null>(null);
	let starsLargeEl = $state<HTMLDivElement | null>(null);

	let mousePositionX = $state(0);

	onMount(() => {
		window.addEventListener('mousemove', (event) => {
			mousePositionX = event.clientX;
		});
	});

	$effect(() => {
		const offsetX = (mousePositionX - window.innerWidth / 2) * 0.03;
		if (starsSmallEl) {
			starsSmallEl.style.translate = `${offsetX * 1.5}px`;
		}
		if (starsMediumEl) {
			starsMediumEl.style.translate = `${offsetX}px`;
		}
		if (starsLargeEl) {
			starsLargeEl.style.translate = `${offsetX * 0.5}px`;
		}
	});
</script>

<div class="stars-container">
	<div class="stars stars-small" style:--star-shadows={shadowsSmall} bind:this={starsSmallEl}></div>
	<div
		class="stars stars-medium"
		style:--star-shadows={shadowsMedium}
		bind:this={starsMediumEl}
	></div>
	<div class="stars stars-large" style:--star-shadows={shadowsBig} bind:this={starsLargeEl}></div>
</div>

<style>
	.stars-container {
		position: fixed;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
		z-index: 0;
	}

	.stars {
		background: transparent;
	}

	.stars-small {
		width: 1px;
		height: 1px;
		box-shadow: var(--star-shadows);
		animation: animStar 50s linear infinite;
	}

	.stars-small::after {
		content: ' ';
		position: absolute;
		top: 2000px;
		width: 1px;
		height: 1px;
		background: transparent;
		box-shadow: var(--star-shadows);
	}

	.stars-medium {
		width: 2px;
		height: 2px;
		box-shadow: var(--star-shadows);
		animation: animStar 100s linear infinite;
	}

	.stars-medium::after {
		content: ' ';
		position: absolute;
		top: 2000px;
		width: 2px;
		height: 2px;
		background: transparent;
		box-shadow: var(--star-shadows);
	}

	.stars-large {
		width: 3px;
		height: 3px;
		box-shadow: var(--star-shadows);
		animation: animStar 150s linear infinite;
	}

	.stars-large::after {
		content: ' ';
		position: absolute;
		top: 2000px;
		width: 3px;
		height: 3px;
		background: transparent;
		box-shadow: var(--star-shadows);
	}

	@keyframes animStar {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(-2000px);
		}
	}
</style>
