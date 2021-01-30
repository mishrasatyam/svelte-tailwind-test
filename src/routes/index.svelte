<script>
	import Counter from '$components/Counter.svelte';

</script>

<main>
	<h1 class="text-blue-400">Hello world!</h1>

	<Counter/>
	<p>Visit the <a class="text-blue-600 underline" href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
</main>

<style>
	:root {
		/* Tailwind's creator recommends against @apply.
		This is all just proof that it works in your Svelte style blocks. */
		@apply font-sans;
	}

	main {
		@apply text-center;
		@apply p-4;
		@apply mx-auto;
	}

	
	p {
		@apply max-w-xs;
		@apply my-8 mx-auto;
		@apply leading-snug;
	}

	@screen sm {
		h1 {
			@apply max-w-none;
		}

		p {
			@apply max-w-none;
		}
	}
</style>