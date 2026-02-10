<script lang="ts">
	import ButtonGradientHover from '$lib/components/ButtonGradientHover.svelte';
	import ButtonGradientBackground from '$lib/components/ButtonGradientBackground.svelte';
	import ButtonGradientBackgroundDistance from '$lib/components/ButtonGradientBackgroundDistance.svelte';
</script>

<div>
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
</div>
