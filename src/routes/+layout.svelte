<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	import StarBackground from '$lib/components/StarBackground.svelte';
	import NavbarTop from '$lib/components/NavbarTop.svelte';
	import NavbarSide from '$lib/components/NavbarSide.svelte';

	let { children } = $props();

	const url = page.url.pathname;

	$inspect(url);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div
	class="flex min-h-screen min-w-full flex-col bg-[radial-gradient(ellipse_at_bottom,var(--color-midnight-700)_0%,var(--color-midnight-900)_100%)]"
>
	<StarBackground />
	<!-- Header buttons -->
	<NavbarTop />

	<!-- Social media side buttons-->
	<NavbarSide classes={url === '/resume' ? 'hidden' : ''} />

	<!-- Main content -->
	{@render children()}
</div>
