<script lang="ts">
	import Pause from '@lucide/svelte/icons/pause';
	import Play from '@lucide/svelte/icons/play';
	import TimerReset from '@lucide/svelte/icons/timer-reset';
	import { formatSecondsHHMMSS, formatSecondsMS, formatTimeHHMMSS } from '$lib/datetime.js';
	import { Time } from '@internationalized/date';
	import TimePicker from '$lib/components/TimePicker.svelte';

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

	let fightRef: HTMLButtonElement | null = null;
	let warnRef: HTMLButtonElement | null = null;
	let restRef: HTMLButtonElement | null = null;
	let playRef: HTMLButtonElement | null = null;
	let resetRef: HTMLButtonElement | null = null;

	let interval: number;
	let deltaTime = 0.1;
	let roundNumber = $state(1);
	let remainingTime = $state(0);
	let currentState = $state(State.idle);
	let isIdle = $derived(currentState === State.idle);
	let isRunning = $derived(
		currentState === State.fight || currentState === State.warn || currentState === State.rest
	);
	$effect(() => {
		remainingTime = fightTimeSeconds;
	});

	let fightTime = $state(new Time(0, 5, 0));
	let fightTimeSeconds = $derived(
		fightTime.hour * 3600 + fightTime.minute * 60 + fightTime.second + fightTime.millisecond / 1000
	);
	let warnTime = $state(new Time(0, 0, 10));
	let warnTimeSeconds = $derived(
		warnTime.hour * 3600 + warnTime.minute * 60 + warnTime.second + warnTime.millisecond / 1000
	);
	let restTime = $state(new Time(0, 1, 0));
	let restTimeSeconds = $derived(
		restTime.hour * 3600 + restTime.minute * 60 + restTime.second + restTime.millisecond / 1000
	);

	function timerInterval() {
		switch (currentState) {
			case State.fight:
				remainingTime -= deltaTime;
				if (remainingTime <= warnTimeSeconds) {
					currentState = State.warn;
					warnAudio.play();
				}
				break;
			case State.warn:
				remainingTime -= deltaTime;
				if (remainingTime <= 0) {
					remainingTime = restTimeSeconds;
					currentState = State.rest;
					restAudio.play();
				}
				break;
			case State.rest:
				remainingTime -= deltaTime;
				if (remainingTime <= 0) {
					remainingTime = fightTimeSeconds;
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
				remainingTime = fightTimeSeconds;
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
		remainingTime = fightTimeSeconds;
		roundNumber = 1;
		fightAudio.load();
		warnAudio.load();
		restAudio.load();
	}
</script>

<div class="card p-2 shadow-sm">
	<div class="card-body">
		<strong>Round {roundNumber}</strong>
		<div class="self-center {currentState}">
			<time class="mx-4">
				{formatSecondsHHMMSS(remainingTime)}<span class="timems"
					>{formatSecondsMS(remainingTime)}</span
				>
			</time>
		</div>
		<div class="join join-horizontal self-center">
			<TimePicker
				bind:totalTime={fightTime}
				isIdle={isIdle}
				bind:ref={fightRef}
				timeStep={5}
				btnClass='btn-success'
				onLeftFocus={() => resetRef?.focus()}
				onRightFocus={() => warnRef?.focus()}
			/>
			<TimePicker
				bind:totalTime={warnTime}
				isIdle={isIdle}
				bind:ref={warnRef}
				timeStep={5}
				btnClass='btn-warning'
				onLeftFocus={() => fightRef?.focus()}
				onRightFocus={() => restRef?.focus()}
			/>
			<TimePicker
				bind:totalTime={restTime}
				isIdle={isIdle}
				bind:ref={restRef}
				timeStep={5}
				btnClass='btn-error'
				onLeftFocus={() => warnRef?.focus()}
				onRightFocus={() => playRef?.focus()}
			/>
		</div>
		<div class="flex justify-around">
			<button
				bind:this={playRef}
				class="btn btn-square"
				onclick={playPause}
				onkeydown={(e) => {
					if (e.key === 'ArrowRight') {
						e.preventDefault();
						resetRef?.focus();
					} else if (e.key === 'ArrowLeft') {
						e.preventDefault();
						restRef?.focus();
					}
				}}
			>
				{#if !isRunning}
					<Play />
				{:else}
					<Pause />
				{/if}
			</button>
			<button
				bind:this={resetRef}
				class="btn btn-square"
				onclick={resetFight}
				disabled={isRunning}
				onkeydown={(e) => {
					if (e.key === 'ArrowRight') {
						e.preventDefault();
						fightRef?.focus();
					} else if (e.key === 'ArrowLeft') {
						e.preventDefault();
						playRef?.focus();
					}
				}}
			>
				<TimerReset />
			</button>
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
