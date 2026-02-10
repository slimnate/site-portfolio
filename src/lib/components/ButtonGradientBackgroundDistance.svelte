<script lang="ts">
	import { onMount, setContext } from 'svelte';

	let btn = $state<HTMLElement | null>(null);
	let btnSize = $state<{ width: number; height: number }>({ width: 0, height: 0 });
	let btnPosition = $state<{ x: number; y: number }>({ x: 0, y: 0 });
	let mousePosition = $state<{ x: number; y: number }>({ x: 0, y: 0 });
	let gradientPosition = $state<{ x: number; y: number }>({ x: 0, y: 0 });

	let hoveredValue = $state(false);
	setContext('hovered', {
		get value() {
			return hoveredValue;
		},
		set value(v: boolean) {
			hoveredValue = v;
		}
	});

	let distance = $state(0);

	let gradientSizeComputed = $state(0);
	const gradientMaxSize = 300;
	const gradientMinSize = 100;

	onMount(() => {
		document.addEventListener('mousemove', (e: MouseEvent) => {
			btnSize.width = btn?.clientWidth ?? 0;
			btnSize.height = btn?.clientHeight ?? 0;
			btnPosition.x = Math.floor(btn?.getBoundingClientRect().left ?? 0);
			btnPosition.y = Math.floor(btn?.getBoundingClientRect().top ?? 0);
			mousePosition.x = e.clientX;
			mousePosition.y = e.clientY;

			distance = Math.sqrt(
				Math.pow(mousePosition.x - btnPosition.x, 2) + Math.pow(mousePosition.y - btnPosition.y, 2)
			);

			gradientPosition.x = mousePosition.x - btnPosition.x;
			gradientPosition.y = mousePosition.y - btnPosition.y;

			gradientPosition.x = Math.max(0, Math.min(gradientPosition.x, btnSize.width));
			gradientPosition.y = Math.max(-10, Math.min(gradientPosition.y, btnSize.height + 10));
			btn?.style.setProperty('--x', `${gradientPosition.x}px`);
			btn?.style.setProperty('--y', `${gradientPosition.y}px`);

			gradientSizeComputed = Math.max(gradientMinSize, Math.min(gradientMaxSize, distance));
			btn?.style.setProperty('--size', `${gradientSizeComputed}px`);
		});
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
				window.location.href = href;
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
		position: relative;
		background: var(--background-color);
		padding: 0.5rem 1rem;
		font-size: 1.2rem;
		cursor: pointer;
		overflow: hidden;
	}

	.mouse-cursor-gradient-tracking::before {
		--size: 300px;
		content: '';
		position: absolute;
		left: var(--x);
		top: var(--y);
		width: var(--size);
		height: var(--size);
		background: radial-gradient(circle closest-side, var(--gradient-color), transparent);
		transform: translate(-50%, -50%);
		transition:
			width var(--gradient-duration) ease,
			height var(--gradient-duration) ease;
	}

	.mouse-cursor-gradient-tracking:hover::before {
		--size: var(--gradient-size);
	}
</style>
