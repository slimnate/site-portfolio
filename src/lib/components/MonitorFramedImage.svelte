<script lang="ts">
	let { src, alt }: { src: string; alt: string } = $props();
</script>

<div class="monitor-frame">
	<img src="/img/monitor.svg" alt="" class="monitor-bezel" aria-hidden="true" />
	<img {src} {alt} class="monitor-screen-content" />
</div>

<style>
	.monitor-frame {
		position: relative;
		width: 100%;
		aspect-ratio: 1380 / 1000;
	}

	.monitor-screen-content {
		position: absolute;
		/* Screen area in SVG viewBox (0 0 1380 1000): x=50 y=50 w=1280 h=720 */
		left: 3.62%;
		top: 5%;
		width: 92.75%;
		height: 72%;
		object-fit: cover;
	}

	.monitor-bezel {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		pointer-events: none;
	}
</style>
