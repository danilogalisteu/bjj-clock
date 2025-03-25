<script lang="ts">
	import { onMount } from 'svelte';
	import { formatTimeHHMMSS, formatTimeYYMMDD } from '$lib/datetime';

	let time = $state(new Date());

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<time datetime={time.toISOString()}>
	<div class="time">{formatTimeHHMMSS(time)}</div>
	<div class="date">{formatTimeYYMMDD(time)}</div>
</time>

<style>
	time {
		display: block;
		font-family: Arial;
		margin-bottom: 0.2em;
	}
	.time {
		font-size: 4em;
	}
	.date {
		font-size: 3em;
	}
</style>
