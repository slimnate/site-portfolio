<script lang="ts">
	import throttle from 'lodash/throttle';
	import { gsap } from 'gsap';
	import { onMount, getContext } from 'svelte';

	import { SplitText } from 'gsap/SplitText';
	gsap.registerPlugin(SplitText);

	let splitChars = $state<SplitText | null>(null);
	let spanEl = $state<HTMLSpanElement | null>(null);

	onMount(() => {
		if (spanEl) {
			splitChars = SplitText.create(spanEl, {
				type: 'chars',
				charsClass: 'bounce-text-char'
			});
		}
	});

	function bounceIn() {
		gsap.fromTo(
			splitChars?.chars as gsap.TweenTarget,
			{
				y: -5
			},
			{
				y: 0,
				duration: 0.5,
				ease: 'bounce.out',
				stagger: 0.015,
				yoyo: true
			}
		);
	}

	const hovered = getContext<{ value: boolean }>('hovered');
	$effect(() => {
		if (hovered?.value) {
			throttle(bounceIn, 500)();
		}
	});

	let { children, classes = '' }: { children: any; classes?: string } = $props();
</script>

<span class="bounce-text {classes}" role="button" tabindex="0" bind:this={spanEl}>
	{@render children()}
</span>

<style>
	.bounce-text {
		animation: bounce 1s infinite;
	}
</style>
