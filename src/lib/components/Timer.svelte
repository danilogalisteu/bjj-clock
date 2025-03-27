<script lang="ts">
	import Pause from '@lucide/svelte/icons/pause';
	import Play from '@lucide/svelte/icons/play';
	import TimerReset from '@lucide/svelte/icons/timer-reset';
	import { formatSecondsHHMMSS, formatSecondsMS, formatTimeHHMMSS } from '$lib/datetime.js';
	import TimePicker from '$lib/components/ui/time-picker.svelte';
	import { Time } from '@internationalized/date';

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

<dialog id="fight_time_selection" class="modal">
	<div class="modal-box flex-col">
		<h3 class="text-lg font-bold">Fight time</h3>
		<div class="flex items-center">
			<TimePicker bind:time={fightTime} />
		</div>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
</dialog>

<dialog id="warn_time_selection" class="modal">
	<div class="modal-box my-2">
		<h3 class="text-lg font-bold">Warning time</h3>
		<div class="flex items-center">
			<TimePicker bind:time={warnTime} />
		</div>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
</dialog>

<dialog id="rest_time_selection" class="modal">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Rest time</h3>
		<div class="flex items-center">
			<TimePicker bind:time={restTime} />
		</div>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
</dialog>

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
			<button
				onclick={() => fight_time_selection.showModal()}
				class="btn btn-soft btn-success join-item"
				disabled={!isIdle}>{formatTimeHHMMSS(fightTime)}</button
			>
			<button
				onclick={() => warn_time_selection.showModal()}
				class="btn btn-soft btn-warning join-item"
				disabled={!isIdle}>{formatTimeHHMMSS(warnTime)}</button
			>
			<button
				onclick={() => rest_time_selection.showModal()}
				class="btn btn-soft btn-error join-item"
				disabled={!isIdle}>{formatTimeHHMMSS(restTime)}</button
			>
		</div>
		<div class="flex justify-around">
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
