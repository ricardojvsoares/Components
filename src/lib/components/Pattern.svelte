<script lang="ts">
	/**
	 * Pattern — simple decorative pattern component
	 * Props:
	 * - variant?: 'dots' | 'grid' | 'stripes'
	 * - size?: 'sm' | 'md' | 'lg'
	 * - class?: string
	 */
	let { variant = 'dots', size = 'md', class: className = '' } = $props();
</script>

<div class="pattern pattern--{variant} pattern--{size} {className}" aria-hidden="true"></div>

<style>
	.pattern {
		width: 100%;
		height: 100px;
		border-radius: 8px;
	}
	.pattern--dots {
		background-image: radial-gradient(currentColor 10%, transparent 11%);
		background-size: 10px 10px;
		color: rgba(0, 0, 0, 0.06);
	}
	.pattern--grid {
		background-image:
			linear-gradient(currentColor 1px, transparent 1px),
			linear-gradient(90deg, currentColor 1px, transparent 1px);
		background-size: 20px 20px;
		color: rgba(0, 0, 0, 0.04);
	}
	.pattern--stripes {
		background-image: repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 8px);
		color: rgba(0, 0, 0, 0.04);
	}

	.pattern--sm {
		height: 60px;
	}
	.pattern--md {
		height: 100px;
	}
	.pattern--lg {
		height: 160px;
	}
</style>
