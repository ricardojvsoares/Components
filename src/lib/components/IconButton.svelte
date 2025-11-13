<script lang="ts">
	/**
	 * IconButton - customizable icon-only button/link
	 * Props:
	 * - href?: when provided renders an anchor
	 * - size?: 'sm' | 'md' | 'lg'
	 * - theme?: string (used as a CSS class)
	 * - ariaLabel?: accessible label
	 */
	type Props = {
		href?: string;
		target?: string;
		size?: 'sm' | 'md' | 'lg';
		theme?: string;
		ariaLabel?: string;
		disabled?: boolean;
	};
	let {
		href = '',
		target = undefined,
		size = 'md',
		theme = '',
		ariaLabel = '',
		disabled = false,
		children,
		onclick
	}: Props & { children?: any; onclick?: (e?: Event) => void } = $props();

	function handleClick(e: MouseEvent) {
		if (disabled) {
			e.preventDefault();
			return;
		}

		if (onclick && typeof onclick === 'function') onclick(e);
	}
</script>

{#if href}
	<a
		class="icon-btn {theme} icon-btn--{size}"
		{href}
		{target}
		aria-label={ariaLabel}
		onclick={handleClick}
		rel={target === '_blank' ? 'noopener noreferrer' : undefined}
	>
		<span class="icon-btn__glass" aria-hidden="true"></span>
		<span class="icon-btn__content">{@render children()}</span>
	</a>
{:else}
	<button
		class="icon-btn {theme} icon-btn--{size}"
		{disabled}
		aria-label={ariaLabel}
		onclick={handleClick}
	>
		<span class="icon-btn__glass" aria-hidden="true"></span>
		<span class="icon-btn__content">{@render children()}</span>
	</button>
{/if}

<style>
	.icon-btn {
		border-radius: 9999px;
		width: 2.4rem;
		height: 2.4rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
		text-decoration: none;

		border: 1px solid rgba(0, 0, 0, 0.08);
		background: #ffffff;
		color: #333;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
		cursor: pointer;
		transition:
			transform 150ms ease,
			box-shadow 150ms ease;
	}

	.icon-btn:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
	}

	.icon-btn:active {
		transform: translateY(0);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	}

	.icon-btn[disabled] {
		background: #f0f0f0;
		color: #999;
		cursor: not-allowed;
		transform: none;
		box-shadow: none;
	}

	.icon-btn--sm {
		width: 2rem;
		height: 2rem;
	}
	.icon-btn--lg {
		width: 3rem;
		height: 3rem;
	}

	.icon-btn__content {
		z-index: 1;
		display: inline-flex;
		font-size: 1.1em;
	}
	.icon-btn--sm .icon-btn__content {
		font-size: 0.9em;
	}
	.icon-btn--lg .icon-btn__content {
		font-size: 1.4em;
	}

	.icon-btn__glass {
		position: absolute;
		inset: 0;
		pointer-events: none;
		border-radius: 9999px;
		background: linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.06));
		z-index: 0;
	}
</style>
