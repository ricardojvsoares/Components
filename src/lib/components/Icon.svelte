<script lang="ts">
	/**
	 * Icon component
	 * Props:
	 * - name?: string (semantic name, optional)
	 * - size?: 'sm' | 'md' | 'lg' | number
	 * - ariaLabel?: string
	 * - onclick?: (event: MouseEvent | KeyboardEvent) => void
	 * - class?: string (custom class)
	 * - color?: string (CSS color value)
	 */
	import icons from './icons';

	let {
		name = 'default',
		size = 'md',
		ariaLabel = '',
		onclick = undefined,
		class: customClass = '',
		color = undefined
	} = $props();

	const sizeMap: Record<string, number> = { sm: 12, md: 16, lg: 20 };
	const px = typeof size === 'number' ? size : (sizeMap[size] ?? sizeMap.md);
	const content = icons[name] ?? icons['default'];

	const isClickable = !!onclick;

	function handleKeydown(e: KeyboardEvent) {
		if (onclick && (e.key === 'Enter' || e.key === ' ')) {
			e.preventDefault();
			onclick(e);
		}
	}
</script>

<svg
	class="icon {customClass}"
	class:clickable={isClickable}
	width={px}
	height={px}
	viewBox="0 0 24 24"
	fill="currentColor"
	style={color ? `color: ${color}` : undefined}
	role={isClickable && !ariaLabel ? 'button' : ariaLabel ? 'img' : 'presentation'}
	aria-label={ariaLabel || undefined}
	{onclick}
	onkeydown={isClickable ? handleKeydown : undefined}
	xmlns="http://www.w3.org/2000/svg"
>
	{@html content}
</svg>

<style>
	.icon {
		display: inline-block;
		vertical-align: middle;
		transition: transform 0.15s ease-out;
	}

	.icon.clickable {
		cursor: pointer;
	}

	.icon.clickable:hover {
		transform: scale(1.15);
	}

	.icon.clickable:focus-visible {
		outline: 2px solid Highlight;
		outline: 2px solid -webkit-focus-ring-color;
		outline-offset: 2px;
		border-radius: 2px;
		transform: scale(1.15);
	}
</style>
