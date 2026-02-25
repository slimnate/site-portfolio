<script lang="ts">
	import { blogPosts } from '$lib/data/blog-posts';
	import BlogCard from '$lib/components/BlogCard.svelte';
</script>

<h2
	class="mt-24 text-center text-4xl font-bold text-midnight-400 drop-shadow-md drop-shadow-midnight-900"
>
	Featured Blog Posts
</h2>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
	{#each blogPosts as post}
		<BlogCard {post} />
	{/each}
</div>
