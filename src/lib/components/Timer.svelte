<script lang="ts">
	import Pause from '@lucide/svelte/icons/pause';
	import Play from '@lucide/svelte/icons/play';
	import TimerReset from '@lucide/svelte/icons/timer-reset';
	import { formatSecondsHHMMSS, formatSecondsMS } from '$lib/datetime.js';

	const fightAudio = new Audio('bell-x1.mp3');
	const warnAudio = new Audio('gavel-x3.mp3');
	const restAudio = new Audio('bell-x3.mp3');

	const State = {
		idle: 'bg-base-100',
		fight: 'bg-green-400',
		fightPause: 'bg-green-200',
		warn: 'bg-yellow-400',
		warnPause: 'bg-yellow-200',
		rest: 'bg-red-400',
		restPause: 'bg-red-200'
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
					warnAudio.play();
				}
				break;
			case State.warn:
				remainingTime -= deltaTime;
				if (remainingTime <= 0) {
					remainingTime = restTime;
					currentState = State.rest;
					restAudio.play();
				}
				break;
			case State.rest:
				remainingTime -= deltaTime;
				if (remainingTime <= 0) {
					remainingTime = roundTime;
					roundNumber += 1;
					currentState = State.fight;
					fightAudio.play();
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
				fightAudio.play();
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
		fightAudio.load();
		warnAudio.load();
		restAudio.load();
	}
</script>

<div class="card p-2 shadow-sm">
	<strong>Round {roundNumber}</strong>
	<div class="card-body text-center {currentState}">
		<time>
			{formatSecondsHHMMSS(remainingTime)}<span class="timems"
				>{formatSecondsMS(remainingTime)}</span
			>
		</time>
	</div>
	<div class="card-body gap-4 text-center">
		<div class="join join-horizontal">
			<button class="btn btn-soft btn-success join-item">{formatSecondsHHMMSS(roundTime)}</button>
			<button class="btn btn-soft btn-warning join-item">{formatSecondsHHMMSS(warnTime)}</button>
			<button class="btn btn-soft btn-error join-item">{formatSecondsHHMMSS(restTime)}</button>
		</div>
		<div class="flex justify-evenly">
			<button class="btn btn-square" onclick={playPause}>
				{#if !isRunning}
					<Play />
				{:else}
					<Pause />
				{/if}
			</button>
			<button class="btn btn-square" onclick={resetFight} disabled={isRunning}
				><TimerReset /></button
			>
		</div>
	</div>
</div>

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
