<script lang="ts">
	import ButtonGradientHover from '$lib/components/ButtonGradientHover.svelte';
	import BounceText from '$lib/components/BounceText.svelte';
</script>

<div class="relative z-10 mx-auto w-full">
	<div class="flex items-center justify-center p-12">
		<ButtonGradientHover
			classes="w-40 rounded-l-full border-2 border-r border-midnight-400 py-2 pr-2 pl-4 text-center text-xl group hover:border-midnight-200 transition-border-color duration-300 backdrop-blur-[2px]"
			gradientColor="var(--color-midnight-500)"
			href="/"
		>
			<BounceText classes="">Portfolio</BounceText>
		</ButtonGradientHover>

		<ButtonGradientHover
			classes="w-40 rounded-r-full border-2 border-l border-midnight-400 py-2 pr-4 pl-2 text-center text-xl group hover:border-midnight-200 transition-border-color duration-300 backdrop-blur-[2px]"
			gradientColor="var(--color-midnight-500)"
			href="/resume"
		>
			<BounceText>Resumé</BounceText>
		</ButtonGradientHover>
	</div>
</div>
