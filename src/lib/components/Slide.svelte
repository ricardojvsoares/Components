<script lang="ts">
	// Slide - simple panel that can be sized by `size` or driven by a bindable `value` (0-100)
	let {
		open = $bindable(false),
		direction = 'horizontal' as 'horizontal' | 'vertical',
		size = '100%',
		value = $bindable<number | null>(null),
		children
	} = $props();

	// compute style inline in markup to stay compatible with runes
</script>

<div class="slide slide--{direction}" aria-hidden={!open} style="--size: {size}">
	<div
		class="slide__panel"
		style={value != null
			? direction === 'horizontal'
				? `width: ${value}%`
				: `height: ${value}%`
			: undefined}
	>
		{@render children()}
	</div>
</div>

<style>
	.slide {
		overflow: hidden;
		display: block;
	}
	.slide--horizontal {
		width: var(--size, 100%);
		transition: width 220ms ease;
	}
	.slide--vertical {
		height: var(--size, 100%);
		transition: height 220ms ease;
	}
	.slide__panel {
		padding: 0.5rem;
	}
	:global(.slide[aria-hidden='true']) {
		display: none;
	}
</style>
