<script>
	import { formatTimeHHMMSS } from '$lib/datetime.js';
	import { Time } from '@internationalized/date';

	let {
		totalTime = $bindable(),
		isIdle,
		timeStep = 5,
		onLeftFocus = null,
		onRightFocus = null,
		btnClass = 'btn-success',
		ref = $bindable(null)
	} = $props();

	function handleKeyDown(e) {
		if (e.key === 'Tab') return;

		e.preventDefault();

		if (e.key === 'ArrowRight') onRightFocus?.();
		if (e.key === 'ArrowLeft') onLeftFocus?.();
		if (isIdle) {
			if (e.key === 'ArrowUp') {
				totalTime = totalTime.add({ seconds: timeStep });
			} else if ((e.key === 'ArrowDown') && (totalTime.compare(new Time(0, 0)) > 0)) {
				totalTime = totalTime.subtract({ seconds: timeStep });
			}
		}
	}
</script>

<button
	bind:this={ref}
	class="btn btn-soft {btnClass} join-item"
	disabled={!isIdle}
	onkeydown={(e) => handleKeyDown(e)}
>
	{formatTimeHHMMSS(totalTime)}
</button>
