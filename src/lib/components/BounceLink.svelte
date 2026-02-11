<script lang="ts">
	import BounceText from '$lib/components/BounceText.svelte';
	import { setContext } from 'svelte';

	let hoveredState = $state(false);
	setContext('hovered', {
		get value() {
			return hoveredState;
		},
		set value(v: boolean) {
			hoveredState = v;
		}
	});

	let {
		href,
		children,
		classes = ''
	}: { href: string; children: any; classes?: string } = $props();
</script>

<a
	{href}
	target="_blank"
	class={classes}
	onmouseenter={() => (hoveredState = true)}
	onmouseleave={() => (hoveredState = false)}
>
	<BounceText>
		{@render children()}
	</BounceText>
</a>
