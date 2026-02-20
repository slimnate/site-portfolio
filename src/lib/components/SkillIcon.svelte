<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import type { SkillIconProps } from './SkillIcon.types';

	let { skill, level, imageUrl, size, classes, style, startColor, endColor, name }: SkillIconProps =
		$props();

	function levelToString(level: number): string {
		return level === 1
			? 'Beginner'
			: level === 2
				? 'Intermediate'
				: level === 3
					? 'Advanced'
					: level === 4
						? 'Expert'
						: 'Master';
	}

	const progressUrl = $derived.by(() => {
		const url = new URL('https://skill-progress.netlify.app/.netlify/functions/progress');

		url.searchParams.set('skill', skill);

		if (level) {
			url.searchParams.set('level', level.toString());
		}

		if (imageUrl) {
			url.searchParams.set('imageUrl', imageUrl);
		}

		if (size) {
			url.searchParams.set('size', size.toString());
		}

		if (style) {
			url.searchParams.set('style', style);
		}

		if (startColor) {
			url.searchParams.set('startColor', startColor);
		}

		if (endColor) {
			url.searchParams.set('endColor', endColor);
		}

		return url.toString();
	});

	const titleText = $derived(`${name ? name : skill} ${level ? `- ${levelToString(level)}` : ''}`);
	const levelFactor = $derived(level ? level / 5 : 3);

	let iconEl: HTMLImageElement | null = null;
	let idleTween: gsap.core.Tween | null = null;
	let isLoading = $state(true);
	let hasError = $state(false);

	$effect(() => {
		progressUrl;
		isLoading = true;
		hasError = false;
	});

	function handleImageLoaded(): void {
		isLoading = false;
	}

	function handleImageError(): void {
		isLoading = false;
		hasError = true;
	}

	function handleEnter(): void {
		if (!iconEl || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return;
		}

		idleTween?.pause();

		gsap.to(iconEl, {
			y: -5,
			scale: 1.08 + levelFactor * 0.03,
			rotateZ: 2.5,
			duration: 0.24,
			ease: 'back.out(2.2)',
			overwrite: 'auto'
		});
	}

	function handleLeave(): void {
		if (!iconEl || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return;
		}

		gsap.to(iconEl, {
			y: -2 - levelFactor * 0.8,
			scale: 1,
			rotateZ: 0,
			duration: 0.28,
			ease: 'power2.out',
			overwrite: 'auto',
			onComplete: () => {
				idleTween?.play();
			}
		});
	}

	onMount(() => {
		if (!iconEl || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return;
		}

		idleTween = gsap.to(iconEl, {
			y: -2 - levelFactor * 0.8,
			scale: 1.008 + levelFactor * 0.01,
			duration: 2.4 - levelFactor * 0.4,
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut'
		});

		return () => {
			idleTween?.kill();
			if (iconEl) {
				gsap.killTweensOf(iconEl);
			}
		};
	});
</script>

<div
	class="skill-icon-container relative"
	onmouseenter={handleEnter}
	onmouseleave={handleLeave}
	aria-label={titleText}
	role="img"
>
	{#if isLoading}
		<div class="spinner-wrap" aria-hidden="true">
			<svg class="spinner" viewBox="0 0 40 40">
				<circle class="spinner-track" cx="20" cy="20" r="16" />
				<circle class="spinner-head" cx="20" cy="20" r="16" />
			</svg>
		</div>
	{/if}

	<img
		bind:this={iconEl}
		src={progressUrl}
		alt={titleText}
		title={titleText}
		loading="lazy"
		decoding="async"
		onload={handleImageLoaded}
		onerror={handleImageError}
		class={`${classes} skill-icon-clean ${isLoading ? 'opacity-0' : 'opacity-100'}`}
	/>

	{#if hasError}
		<div class="image-fallback" aria-hidden="true">!</div>
	{/if}
</div>

<style>
	.spinner-wrap {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
		pointer-events: none;
		z-index: 1;
	}

	.spinner {
		width: 1.25rem;
		height: 1.25rem;
		animation: spin 0.9s linear infinite;
	}

	.spinner-track {
		fill: none;
		stroke: var(--color-midnight-400);
		stroke-width: 3;
	}

	.spinner-head {
		fill: none;
		stroke: var(--color-platinum);
		stroke-width: 3;
		stroke-linecap: round;
		stroke-dasharray: 46 120;
	}

	.image-fallback {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
		font-weight: 700;
		opacity: 0.82;
	}

	.skill-icon-clean {
		transition:
			opacity 180ms ease,
			filter 180ms ease;
		will-change: transform, filter;
	}

	.skill-icon-container::after {
		content: '';
		position: absolute;
		/* background-color: red; */
		width: 100%;
		height: 20%;
		top: 100%;
		left: 0;
		background: radial-gradient(ellipse at center, black 0%, transparent 70%);
	}

	.skill-icon-container:hover::after {
		transform: scale(1.2);
		transition: transform 180ms ease;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.spinner {
			animation: none;
		}

		.skill-icon-clean {
			transition: none;
		}

		.skill-icon-clean:hover {
			transform: none;
			filter: none;
		}
	}
</style>
