<script>
	import Clock from '$lib/Clock.svelte';
	import Timer from '$lib/Timer.svelte';
</script>

<main>
	<h1>BJJ Clock</h1>
	<Clock />
	<Timer />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: var(--accent);
		text-transform: uppercase;
		font-size: 6em;
		margin: 0;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	/* global.css simulated here */
	:global(:root) {
		--black: #333;
		--base: white;
		--base-light: #f4f4f4;
		--base-dark: #ddd;

		--white: white;
		--accent: orangered;
		--accent-light: #ff4500d6;
		--accent-dark: #e83f00;
	}

	:global(html, body) {
		position: relative;
		width: 100%;
		height: 100%;
	}

	:global(body) {
		color: var(--black);
		margin: 0;
		padding: 8px;
		box-sizing: border-box;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
			'Helvetica Neue', sans-serif;
		font-weight: 300;
	}

	:global(a) {
		color: rgb(0, 100, 200);
		text-decoration: none;
	}

	:global(input, button, select, textarea) {
		font-family: inherit;
		font-size: 1.5em;
		font-weight: inherit;
		padding: 0.4em;
		margin: 0 0 0.5em 0;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: 2px;
	}

	:global(input:disabled) {
		color: #ccc;
	}

	:global(input[type='range']) {
		height: 0;
	}

	:global(button) {
		background-color: var(--base);
		border-color: var(--black);
		color: var(--black);
		font-size: 1.5em;
		font-weight: inherit;
		outline: none;
		text-transform: uppercase;
		transition:
			background-color 0.2s,
			color 0.2s,
			border-color 0.2s,
			opacity 0.2s;
	}

	:global(button:disabled) {
		opacity: 0.5;
	}

	:global(button:focus),
	:global(button:not(:disabled):hover) {
		background-color: var(--base-light);
	}

	:global(button:not(:disabled):active) {
		background-color: var(--base-dark);
	}

	:global(button.primary) {
		background-color: var(--accent);
		border-color: var(--accent);
		color: var(--white);
	}

	:global(button.primary:not(:disabled):hover) {
		background-color: var(--accent-light);
		border-color: var(--accent-light);
	}

	:global(button.primary:not(:disabled):active) {
		background-color: var(--accent-dark);
		border-color: var(--accent-dark);
	}
</style>
