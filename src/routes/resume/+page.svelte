<script lang="ts">
	import ButtonGradientHover from '$lib/components/ButtonGradientHover.svelte';
	import ButtonGradientBackground from '$lib/components/ButtonGradientBackground.svelte';
	import ButtonGradientBackgroundDistance from '$lib/components/ButtonGradientBackgroundDistance.svelte';
	import Atom from '$lib/components/Atom.svelte';
</script>

<div class="z-1 flex flex-col gap-4">
	<ButtonGradientHover
		background="var(--color-midnight-300)"
		gradientColor="var(--color-midnight-100)"
	>
		<span>Portfolio</span>
	</ButtonGradientHover>

	<ButtonGradientBackground>
		<span>Hover me</span>
	</ButtonGradientBackground>

	<ButtonGradientBackgroundDistance>
		<span>Hover me</span>
	</ButtonGradientBackgroundDistance>

	<Atom />
</div>
