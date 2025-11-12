<script lang="ts">
	// Svelte 5 runes Toggle component
	/**
	 * @prop {boolean} checked - bindable checked state
	 * @prop {boolean} disabled - whether the toggle is disabled
	 * @prop {'sm'|'md'|'lg'} size - visual size variant
	 */
	let { checked = $bindable(false), disabled = false, size = 'md' } = $props();

	const handleClick = (e: MouseEvent) => {
		if (disabled) return;
		checked = !checked;
		// dispatch change for non-bind consumers
		const ev = new CustomEvent('change', { detail: { checked } });
		dispatchEvent(ev);
	};

	const handleKey = (e: KeyboardEvent) => {
		if (disabled) return;
		if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
			e.preventDefault();
			handleClick(e as any as MouseEvent);
		}
	};
</script>

<div
	role="switch"
	class="toggle {disabled ? 'disabled' : ''} toggle--{size}"
	aria-checked={checked}
	aria-disabled={disabled}
	tabindex={disabled ? -1 : 0}
	onclick={handleClick}
	onkeydown={handleKey}
>
	<div class="toggle__track">
		<div class="toggle__thumb" aria-hidden="true"></div>
	</div>
</div>

<style>
	.toggle {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
	}
	.toggle.disabled {
		opacity: 0.55;
		cursor: not-allowed;
	}

	/* size helpers via CSS variables */
	.toggle--sm {
		--track-w: 36px;
		--track-h: 20px;
		--thumb: 16px;
		--thumb-move: 16px;
	}
	.toggle--md {
		--track-w: 44px;
		--track-h: 24px;
		--thumb: 20px;
		--thumb-move: 20px;
	}
	.toggle--lg {
		--track-w: 56px;
		--track-h: 32px;
		--thumb: 28px;
		--thumb-move: 28px;
	}

	.toggle__track {
		width: var(--track-w);
		height: var(--track-h);
		background: var(--track-bg, #e9eef8);
		border-radius: 999px;
		padding: calc((var(--track-h) - var(--thumb)) / 2);
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		transition:
			background 180ms ease,
			box-shadow 180ms ease;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
	}

	.toggle__thumb {
		width: var(--thumb);
		height: var(--thumb);
		background: linear-gradient(180deg, #fff, #f3f6fb);
		border-radius: 50%;
		box-shadow: 0 4px 8px rgba(12, 18, 31, 0.12);
		transform: translateX(0);
		transition:
			transform 220ms cubic-bezier(0.2, 0.9, 0.3, 1),
			box-shadow 180ms ease;
	}

	.toggle[aria-checked='true'] .toggle__track {
		--track-bg: linear-gradient(180deg, #3b82f6, #2563eb);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
	}
	.toggle[aria-checked='true'] .toggle__thumb {
		transform: translateX(var(--thumb-move));
		box-shadow: 0 6px 12px rgba(37, 99, 235, 0.28);
	}

	/* small accessibility focus styles */
	.toggle:focus-visible {
		outline: 3px solid rgba(59, 130, 246, 0.18);
		outline-offset: 4px;
	}
</style>
