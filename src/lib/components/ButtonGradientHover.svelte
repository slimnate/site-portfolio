<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { goto } from '$app/navigation';

	let btn = $state<HTMLElement | null>(null);

	onMount(() => {
		if (btn) {
			btn.addEventListener('mousemove', (e: MouseEvent) => {
				if (e.target instanceof HTMLElement) {
					let rect = btn?.getBoundingClientRect();
					let x = e.clientX - (rect?.left ?? 0);
					let y = e.clientY - (rect?.top ?? 0);
					btn?.style.setProperty('--x', `${x}px`);
					btn?.style.setProperty('--y', `${y}px`);
				}
			});
		}
	});

	let hoveredValue = $state(false);
	setContext('hovered', {
		get value() {
			return hoveredValue;
		},
		set value(v: boolean) {
			hoveredValue = v;
		}
	});

	let {
		children,
		href,
		onClick,
		classes = '',
		background = 'transparent',
		gradientColor = 'var(--color-midnight-200)',
		gradientSize = '200px',
		gradientDuration = '0.2s'
	}: {
		children: any;
		href?: string;
		onClick?: () => void;
		classes?: string;
		background?: string;
		gradientColor?: string;
		gradientSize?: string;
		gradientDuration?: string;
	} = $props();
</script>

<div>
	<button
		class="mouse-cursor-gradient-tracking {classes}"
		style="--background-color: {background}; --gradient-color: {gradientColor}; --gradient-size: {gradientSize}; --gradient-duration: {gradientDuration}"
		bind:this={btn}
		onmouseenter={() => {
			hoveredValue = true;
		}}
		onmouseleave={() => {
			hoveredValue = false;
		}}
		onclick={() => {
			if (href) {
				goto(href);
			} else if (onClick) {
				onClick();
			}
		}}
	>
		{@render children()}
	</button>
</div>

<style>
	.mouse-cursor-gradient-tracking {
		z-index: 1;
		position: relative;
		padding: 0.5rem 1rem;
		font-size: 1.2rem;
		background: var(--background-color);
		cursor: pointer;
		overflow: hidden;
	}

	.mouse-cursor-gradient-tracking::before {
		z-index: -1;
		--size: 0;
		content: '';
		position: absolute;
		left: var(--x);
		top: var(--y);
		width: var(--size);
		height: var(--size);
		background: radial-gradient(
			circle closest-side,
			var(--gradient-color),
			var(--background-color)
		);
		transform: translate(-50%, -50%);
		transition:
			width var(--gradient-duration) ease,
			height var(--gradient-duration) ease;
	}

	.mouse-cursor-gradient-tracking:hover::before {
		--size: var(--gradient-size);
	}
</style>
