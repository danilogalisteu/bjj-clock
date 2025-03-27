<script lang="ts">
	import { onMount } from 'svelte';
	import { formatDateHHMMSS, formatDateYYMMDD } from '$lib/datetime.js';

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

<div class="card bg-base-100 shadow-sm">
	<div class="card-body text-center">
		<time datetime={time.toISOString()}>
			<div class="time">{formatDateHHMMSS(time)}</div>
			<div class="date">{formatDateYYMMDD(time)}</div>
		</time>
	</div>
</div>

<style>
	time {
		display: block;
		margin-bottom: 0.2em;
	}
	.time {
		font-size: 4.5em;
	}
	.date {
		font-size: 3em;
	}
</style>
