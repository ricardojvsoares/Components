<script lang="ts">
	/**
	 * Pattern — simple decorative pattern component
	 * Props:
	 * - variant?: 'dots' | 'grid' | 'stripes'
	 * - size?: 'sm' | 'md' | 'lg' (Controls the scale/density of the pattern)
	 * - color?: string (Any valid CSS color string)
	 * - class?: string (For utility classes, e.g., to control height/shape)
	 */
	let {
		variant = 'dots',
		size = 'md',
		color = undefined,
		class: className = ''
	} = $props<{
		variant?: 'dots' | 'grid' | 'stripes';
		size?: 'sm' | 'md' | 'lg';
		color?: string;
		class?: string;
	}>();
</script>

{#if color}
	<div
		class="pattern pattern--{variant} pattern--{size} {className}"
		style="color: {color}"
		aria-hidden="true"
	></div>
{:else}
	<div class="pattern pattern--{variant} pattern--{size} {className}" aria-hidden="true"></div>
{/if}

<style>
	.pattern {
		width: 100%;
		height: 100px;
		border-radius: 8px;
		color: rgba(0, 0, 0, 0.06);
	}

	.pattern--dots {
		background-image: radial-gradient(currentColor 10%, transparent 11%);
		--pattern-size: 10px; /* 'md' default size */
		background-size: var(--pattern-size) var(--pattern-size);
	}
	.pattern--dots.pattern--sm {
		--pattern-size: 6px;
	}
	.pattern--dots.pattern--lg {
		--pattern-size: 16px;
	}

	.pattern--grid {
		background-image:
			linear-gradient(currentColor 1px, transparent 1px),
			linear-gradient(90deg, currentColor 1px, transparent 1px);
		--pattern-size: 20px;
		background-size: var(--pattern-size) var(--pattern-size);
	}
	.pattern--grid.pattern--sm {
		--pattern-size: 12px;
	}
	.pattern--grid.pattern--lg {
		--pattern-size: 32px;
	}

	.pattern--stripes {
		--pattern-size: 8px;
		background-image: repeating-linear-gradient(
			45deg,
			currentColor 0 1px,
			transparent 1px var(--pattern-size)
		);
	}
	.pattern--stripes.pattern--sm {
		--pattern-size: 4px;
	}
	.pattern--stripes.pattern--lg {
		--pattern-size: 12px;
	}
</style>
