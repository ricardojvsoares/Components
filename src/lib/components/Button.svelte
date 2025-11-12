<script lang="ts">
	/**
	 * Reusable button component with mac-inspired glassy styles.
	 * @prop variant - 'primary' | 'secondary' | 'ghost'
	 * @prop size - 'sm' | 'md' | 'lg'
	 * @prop disabled - disables the button
	 * @prop loading - shows a spinner
	 * @prop type - button|submit|reset
	 * @prop ariaLabel - accessible label
	 */
	type Props = {
		variant?: 'primary' | 'secondary' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		loading?: boolean;
		type?: 'button' | 'submit' | 'reset';
		ariaLabel?: string;
	};

	let {
		variant = 'primary',
		size = 'md',
		disabled = false,
		loading = false,
		type = 'button',
		ariaLabel,
		children,
		icon,
		onclick
	}: Props & { children?: any; icon?: any; onclick?: (e?: Event) => void } = $props();

	const variantClass = $derived.by(() => {
		switch (variant) {
			case 'secondary':
				return 'btn--secondary';
			case 'ghost':
				return 'btn--ghost';
			default:
				return 'btn--primary';
		}
	});

	const sizeClass = $derived.by(() => {
		switch (size) {
			case 'sm':
				return 'btn--sm';
			case 'lg':
				return 'btn--lg';
			default:
				return 'btn--md';
		}
	});

	function handleClick(event: MouseEvent) {
		if (disabled || loading) event.preventDefault();
		if (onclick && typeof onclick === 'function') onclick(event);
	}
</script>

<button
	class="btn {variantClass} {sizeClass}"
	{type}
	{disabled}
	aria-label={ariaLabel}
	onclick={handleClick}
>
	<span class="btn__glass" aria-hidden="true"></span>

	{#if loading}
		<span class="btn__spinner" aria-hidden="true"></span>
	{/if}

	<span class="btn__content">
		{#if icon}
			{@render icon()}
		{/if}

		{#if children}
			{@render children()}
		{/if}
	</span>
</button>

<style>
	:global(:root) {
		--btn-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
		--btn-primary-bg: linear-gradient(#f5f7fa, #e9eef7);
		--btn-primary-border: rgba(0, 0, 0, 0.08);
		--btn-secondary-bg: linear-gradient(#ffffff, #f5f6f7);
		--btn-ghost-bg: transparent;
		--btn-shadow: 0 1px 0 rgba(255, 255, 255, 0.6) inset, 0 1px 0 rgba(0, 0, 0, 0.04);
	}

	.btn {
		font-family: var(--btn-font);
		-webkit-font-smoothing: antialiased;
		border-radius: 8px;
		border: 1px solid var(--btn-primary-border);
		padding: 0.4rem 0.9rem;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
		user-select: none;
		position: relative;
		overflow: hidden;
		background: var(--btn-primary-bg);
		box-shadow: var(--btn-shadow);
		color: #0b1220;
		transition:
			transform 120ms ease,
			box-shadow 120ms ease;
	}

	.btn:active {
		transform: translateY(1px);
	}
	.btn[disabled] {
		opacity: 0.5;
		cursor: not-allowed;
		transform: none;
	}

	.btn__glass {
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.06));
		mix-blend-mode: screen;
		opacity: 0.9;
	}

	.btn__content {
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		z-index: 1;
		font-weight: 600;
	}

	.btn__spinner {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		border: 2px solid rgba(0, 0, 0, 0.12);
		border-top-color: rgba(0, 0, 0, 0.5);
		animation: spin 700ms linear infinite;
		margin-right: 0.4rem;
		z-index: 2;
		display: inline-block;
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.btn--primary {
		background: var(--btn-primary-bg);
	}
	.btn--secondary {
		background: var(--btn-secondary-bg);
	}
	.btn--ghost {
		background: var(--btn-ghost-bg);
		border-color: transparent;
		box-shadow: none;
	}

	.btn--sm {
		padding: 0.2rem 0.6rem;
		border-radius: 7px;
		font-size: 0.85rem;
	}
	.btn--md {
		padding: 0.4rem 0.9rem;
		border-radius: 8px;
		font-size: 0.95rem;
	}
	.btn--lg {
		padding: 0.6rem 1.1rem;
		border-radius: 10px;
		font-size: 1.05rem;
	}

	::slotted([slot='icon']) {
		width: 1em;
		height: 1em;
		display: inline-block;
	}
</style>
