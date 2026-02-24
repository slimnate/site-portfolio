<script lang="ts">
	import BounceLink from '$lib/components/BounceLink.svelte';
	import type { BlogPost } from '$lib/components/BlogCard.types';
	let { post }: { post: BlogPost } = $props();
	let titleEl = $state<HTMLDivElement | null>(null);
	let titleHeight = $derived(titleEl?.clientHeight ?? 0);
</script>

<article
	class="blog-card-clean group relative mt-8 flex flex-col gap-4 rounded-3xl border-2 border-platinum bg-midnight-500 p-6 pt-12 transition-all duration-300 hover:border-t-transparent hover:shadow-lg hover:shadow-midnight-900/40"
>
	<div
		class="absolute top-3 right-16 left-6 text-left text-xl font-bold text-platinum drop-shadow-xl drop-shadow-midnight-900 transition-all duration-300 group-hover:-top-3"
		bind:this={titleEl}
	>
		{post.title}
	</div>

	<div
		class="space-y-4 transition-all duration-500 group-hover:-translate-y-1"
		style="padding-top: {titleHeight}px;"
	>
		<p class="text-sm/6 md:text-base/7">{post.description}</p>
		<div class="flex justify-end pr-1">
			<BounceLink href={post.url} classes="text-platinum/50 group-hover:text-platinum">
				Read more
				<span aria-hidden="true">-></span>
			</BounceLink>
		</div>
	</div>
</article>

<style>
	.blog-card-clean {
		will-change: transform;
	}
</style>
