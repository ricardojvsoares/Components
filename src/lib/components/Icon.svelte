<script lang="ts">
	/**
	 * Icon component
	 * Props:
	 * - name?: string (semantic name, optional)
	 * - size?: 'sm' | 'md' | 'lg' | number
	 * - ariaLabel?: string
	 */
	import icons from './icons';

	let { name = 'default', size = 'md', ariaLabel = '' } = $props();

	const sizeMap: Record<string, number> = { sm: 12, md: 16, lg: 20 };
	const px = typeof size === 'number' ? size : (sizeMap[size] ?? sizeMap.md);
	const content = icons[name] ?? icons['default'];
</script>

<svg
	class="icon"
	width={px}
	height={px}
	viewBox="0 0 24 24"
	fill="currentColor"
	role={ariaLabel ? 'img' : 'presentation'}
	aria-label={ariaLabel || undefined}
	xmlns="http://www.w3.org/2000/svg"
>
	{@html content}
</svg>

<style>
	.icon {
		display: inline-block;
		vertical-align: middle;
	}
</style>
