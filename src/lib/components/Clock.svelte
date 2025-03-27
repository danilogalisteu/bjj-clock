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

<div class="card p-2 shadow-sm">
	<div class="card-body">
		<time datetime={time.toISOString()}>
			<strong class="date">{formatDateYYMMDD(time)}</strong>
			<div class="time self-center">{formatDateHHMMSS(time)}</div>
		</time>
	</div>
</div>

<style>
	time {
		display: block;
		margin-bottom: 0.2em;
	}
	.time {
		font-size: 4em;
	}
</style>
