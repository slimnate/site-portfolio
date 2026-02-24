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
		const url = new URL('https://skill-progress-production.up.railway.app/progress');

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
	let isHovered = $state(false);
	let isFocused = $state(false);
	const showTooltip = $derived(isHovered || isFocused);

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
		isHovered = true;

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
		isHovered = false;

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

	function handleFocus(): void {
		isFocused = true;
	}

	function handleBlur(): void {
		isFocused = false;
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

<button
	type="button"
	class="skill-icon-container relative"
	onmouseenter={handleEnter}
	onmouseleave={handleLeave}
	onfocus={handleFocus}
	onblur={handleBlur}
	aria-label={titleText}
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
		loading="lazy"
		decoding="async"
		onload={handleImageLoaded}
		onerror={handleImageError}
		class={`${classes} skill-icon-clean ${isLoading ? 'opacity-0' : 'opacity-100'}`}
	/>

	<div class="skill-tooltip-anchor" aria-hidden={!showTooltip}>
		<div
			class={`skill-tooltip-motion skill-tooltip-motion-anim-tilt-unfold ${showTooltip ? 'skill-tooltip-motion-visible' : ''}`}
		>
			<div class="skill-tooltip" role="tooltip" aria-hidden={!showTooltip}>
				{titleText}
				<span class="skill-tooltip-caret" aria-hidden="true"></span>
			</div>
		</div>
	</div>

	{#if hasError}
		<div class="image-fallback" aria-hidden="true">!</div>
	{/if}
</button>

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

	.skill-icon-container {
		display: inline-block;
		padding: 0;
		margin: 0;
		border: 0;
		background: transparent;
		color: inherit;
		font: inherit;
		line-height: 0;
		cursor: default;
	}

	.skill-tooltip-anchor {
		position: absolute;
		left: 0;
		right: 0;
		bottom: calc(100% + 0.55rem);
		display: flex;
		justify-content: center;
		pointer-events: none;
		z-index: 4;
	}

	.skill-tooltip-motion {
		width: max-content;
		transform: translateY(8px) scale(0.96);
		transform-origin: 50% 100%;
		opacity: 0;
		filter: none;
		transition:
			opacity 170ms ease,
			transform 210ms cubic-bezier(0.22, 1, 0.36, 1),
			filter 210ms ease;
		will-change: transform, opacity, filter;
	}

	.skill-tooltip {
		--tooltip-border: color-mix(in srgb, var(--color-midnight-200) 44%, var(--color-midnight-400));
		--tooltip-bg-solid: var(--color-midnight-700);
		white-space: nowrap;
		padding: 0.25rem 0.5rem;
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.2;
		color: var(--color-platinum);
		background: var(--tooltip-bg-solid);
		border: 1px solid var(--tooltip-border);
		border-radius: 0.45rem;
		box-shadow: 0 10px 22px -14px rgba(0, 0, 0, 0.75);
		backface-visibility: visible;
	}

	.skill-tooltip-caret {
		position: absolute;
		top: 100%;
		left: 50%;
		width: 0.58rem;
		height: 0.58rem;
		background: var(--tooltip-bg-solid);
		border-right: 1px solid var(--tooltip-border);
		border-bottom: 1px solid var(--tooltip-border);
		border-bottom-right-radius: 0.1rem;
		transform: translate(-50%, -42%) rotate(45deg);
		pointer-events: none;
	}

	.skill-tooltip-motion-visible {
		opacity: 1;
		transform: translateY(0) scale(1);
		filter: none;
	}

	.skill-tooltip-motion-anim-tilt-unfold:not(.skill-tooltip-motion-visible) {
		transform: translateY(14px) perspective(720px) rotateX(-42deg) rotateZ(-2deg);
		transform-origin: 50% 115%;
	}

	.skill-tooltip-motion-anim-tilt-unfold.skill-tooltip-motion-visible {
		animation: tooltip-tilt-unfold-motion 280ms cubic-bezier(0.22, 1.06, 0.3, 1) 1;
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

	.skill-icon-container:focus-visible {
		outline: 2px solid var(--color-midnight-200);
		outline-offset: 0.18rem;
		border-radius: 0.35rem;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes tooltip-tilt-unfold-motion {
		0% {
			opacity: 0;
			transform: translateY(14px) perspective(720px) rotateY(-42deg) rotateZ(-50deg);
		}

		70% {
			opacity: 1;
			transform: translateY(-1px) perspective(720px) rotateX(7deg) rotateZ(0.5deg);
		}

		100% {
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.spinner {
			animation: none;
		}

		.skill-icon-clean {
			transition: none;
		}

		.skill-tooltip-motion {
			transition: none;
			transform: translateY(0);
			filter: none;
		}

		.skill-tooltip-motion.skill-tooltip-motion-visible {
			animation: none;
		}

		.skill-icon-clean:hover {
			transform: none;
			filter: none;
		}
	}
</style>
