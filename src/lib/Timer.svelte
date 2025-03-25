<script lang="ts">
	import { formatTimeMMSS, formatTimeMS } from '$lib/datetime.js';

	const State = {
		idle: 'idle',
		fight: 'fight',
		fightPause: 'fightPause',
		warn: 'warn',
		warnPause: 'warnPause',
		rest: 'rest',
		restPause: 'restPause'
	};

	let roundTime = 10;
	let warnTime = 5;
	let restTime = 5;
	let roundNumber = $state(1);
	let deltaTime = 0.1;
	let remainingTime = $state(roundTime);
	let currentState = $state(State.idle);
	let interval: number;
	let isRunning = $derived(
		currentState === State.fight || currentState === State.warn || currentState === State.rest
	);

	function timerInterval() {
		switch (currentState) {
			case State.fight:
				remainingTime -= deltaTime;
				if (remainingTime <= warnTime) {
					currentState = State.warn;
				}
				break;
			case State.warn:
				remainingTime -= deltaTime;
				if (remainingTime <= 0) {
					remainingTime = restTime;
					currentState = State.rest;
				}
				break;
			case State.rest:
				remainingTime -= deltaTime;
				if (remainingTime <= 0) {
					remainingTime = roundTime;
					roundNumber += 1;
					currentState = State.fight;
				}
				break;
			case State.idle:
				break;
			case State.fightPause:
				break;
			case State.warnPause:
				break;
			case State.restPause:
				break;
			default:
				break;
		}
	}

	function playPause() {
		switch (currentState) {
			case State.idle:
				interval = setInterval(timerInterval, 1000 * deltaTime);
				currentState = State.fight;
				break;
			case State.fight:
				currentState = State.fightPause;
				break;
			case State.fightPause:
				currentState = State.fight;
				break;
			case State.warn:
				currentState = State.warnPause;
				break;
			case State.warnPause:
				currentState = State.warn;
				break;
			case State.rest:
				currentState = State.restPause;
				break;
			case State.restPause:
				currentState = State.rest;
				break;
			default:
				break;
		}
	}

	function resetFight() {
		clearInterval(interval);
		currentState = State.idle;
		remainingTime = roundTime;
		roundNumber = 1;
	}
</script>

<section>
	Round {roundNumber}
	<time>
		{formatTimeMMSS(remainingTime)}<span class="timems">{formatTimeMS(remainingTime)}</span>
	</time>
	<footer>
		<button class="primary" onclick={playPause}>
			{#if !isRunning}
				Start
			{:else}
				Pause
			{/if}
		</button>
		<button onclick={resetFight} disabled={isRunning}>Reset</button>
	</footer>
</section>

<style>
	time {
		display: block;
		font-size: 5em;
		margin-bottom: 0.2em;
	}
	.timems {
		font-size: 0.5em;
		color: gray;
	}
</style>
