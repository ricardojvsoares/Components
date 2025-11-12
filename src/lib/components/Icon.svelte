<script lang="ts">
	/**
	 * Icon component
	 * Props:
	 * - name?: string (semantic name, optional)
	 * - size?: 'sm' | 'md' | 'lg' | number
	 * - ariaLabel?: string
	 */
	let { name = '', size = 'md', ariaLabel = '' } = $props();

	const sizeMap: Record<string, number> = { sm: 12, md: 16, lg: 20 };
	const px = typeof size === 'number' ? size : (sizeMap[size] ?? sizeMap.md);
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
	{#if name === 'check'}
		<path
			d="M20 6L9 17l-5-5"
			stroke="currentColor"
			stroke-width="2"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	{:else if name === 'close'}
		<path
			d="M6 6l12 12M6 18L18 6"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	{:else}
		<!-- default square placeholder icon -->
		<rect x="4" y="4" width="16" height="16" rx="3" />
	{/if}
</svg>

<style>
	.icon {
		display: inline-block;
		vertical-align: middle;
	}
</style>
