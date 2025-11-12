<script lang="ts">
	let {
		value = $bindable(0),
		min = 0,
		max = 100,
		step = 1,
		direction = 'horizontal' as 'horizontal' | 'vertical'
	} = $props();

	let isDragging = $state(false);
	let sliderEl = $state<HTMLDivElement | null>(null);

	const percent = $derived(
		max - min === 0 ? 0 : ((value - min) / (max - min)) * 100
	);

	const fillStyle = $derived(
		direction === 'horizontal' ? `width: ${percent}%` : `height: ${percent}%`
	);

	const thumbStyle = $derived(
		direction === 'horizontal' ? `left: ${percent}%` : `bottom: ${percent}%`
	);

	function updateValueFromEvent(event: PointerEvent) {
		if (!sliderEl) return;

		const rect = sliderEl.getBoundingClientRect();
		let percentRaw = 0;

		if (direction === 'horizontal') {
			const pos = event.clientX - rect.left;
			percentRaw = pos / rect.width;
		} else {
			const pos = event.clientY - rect.top;
			percentRaw = (rect.height - pos) / rect.height;
		}

		const percentClamped = Math.max(0, Math.min(1, percentRaw));

		const range = max - min;
		const rawValue = percentClamped * range + min;

		const steppedValue = Math.round(rawValue / step) * step;

		value = Math.max(min, Math.min(max, steppedValue));
	}

	function onPointerDown(event: PointerEvent) {
		isDragging = true;
		(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
		updateValueFromEvent(event);
	}

	function onPointerMove(event: PointerEvent) {
		if (!isDragging) return;
		updateValueFromEvent(event);
	}

	function onPointerUp(event: PointerEvent) {
		isDragging = false;
		(event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId);
	}
</script>

<div
	class="slider slider--{direction}"
	bind:this={sliderEl}
	onpointerdown={onPointerDown}
	onpointermove={onPointerMove}
	onpointerup={onPointerUp}
>
	<div class="slider__track">
		<div class="slider__fill" style={fillStyle}></div>
		<div class="slider__thumb" style={thumbStyle}></div>
	</div>
</div>

<style>
	.slider {
		display: inline-block;
		user-select: none;
		touch-action: none;
		padding: 0.5rem;
		box-sizing: content-box;
	}

	.slider__track {
		position: relative;
		background: #333;
		border-radius: 99px;
		cursor: pointer;
	}

	.slider__fill {
		position: absolute;
		background: var(--accent-color, #007bff);
		border-radius: 99px;
	}

	.slider__thumb {
		position: absolute;
		width: 16px;
		height: 16px;
		background: white;
		border-radius: 50%;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
	}

	.slider--horizontal {
		width: 200px;
	}
	.slider--horizontal .slider__track {
		width: 100%;
		height: 6px;
	}
	.slider--horizontal .slider__fill {
		top: 0;
		left: 0;
		height: 100%;
	}
	.slider--horizontal .slider__thumb {
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.slider--vertical {
		height: 200px;
	}
	.slider--vertical .slider__track {
		width: 6px;
		height: 100%;
	}
	.slider--vertical .slider__fill {
		bottom: 0;
		left: 0;
		width: 100%;
	}
	.slider--vertical .slider__thumb {
		left: 50%;
		transform: translate(-50%, 50%);
	}
</style>
