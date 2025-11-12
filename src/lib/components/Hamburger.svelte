<script lang="ts">
	let { open = $bindable(false), size = 'md', ariaLabel = 'toggle menu' } = $props();

	function toggle() {
		open = !open;
	}
</script>

<button
	class="hamburger hamburger--{size}"
	aria-pressed={open}
	aria-label={ariaLabel}
	onclick={toggle}
>
	<span class="bar bar1" aria-hidden="true"></span>
	<span class="bar bar2" aria-hidden="true"></span>
	<span class="bar bar3" aria-hidden="true"></span>
</button>

<style>
	.hamburger {
		display: inline-grid;
		place-items: center;
		padding: 0.5rem;
		border-radius: 8px;
		background: transparent;
		border: none;
		cursor: pointer;
		min-width: 44px;
		min-height: 44px;
		box-sizing: border-box;
		transition: background 150ms ease;
	}
	.hamburger:hover {
		background: rgba(0, 0, 0, 0.05);
	}

	.hamburger .bar {
		display: block;
		grid-area: 1 / -1;
		width: 28px;
		height: 3px;
		background: currentColor;
		border-radius: 3px;
		transition:
			transform 300ms cubic-bezier(0.2, 0.9, 0.3, 1),
			opacity 300ms ease;
		transform-origin: center;
	}

	.hamburger--sm {
		--bar-translate: 6px;
	}
	.hamburger--sm .bar {
		width: 20px;
		height: 2px;
	}

	.hamburger--md {
		--bar-translate: 8px;
	}
	.hamburger--md .bar {
		width: 28px;
		height: 3px;
	}

	.hamburger--lg {
		--bar-translate: 10px;
	}
	.hamburger--lg .bar {
		width: 34px;
		height: 4px;
	}

	.hamburger .bar1 {
		transform: translateY(calc(var(--bar-translate, 8px) * -1));
	}
	.hamburger .bar2 {
		opacity: 1;
	}
	.hamburger .bar3 {
		transform: translateY(var(--bar-translate, 8px));
	}

	.hamburger[aria-pressed='true'] .bar1 {
		transform: translateY(0) rotate(45deg);
	}
	.hamburger[aria-pressed='true'] .bar2 {
		opacity: 0;
	}
	.hamburger[aria-pressed='true'] .bar3 {
		transform: translateY(0) rotate(-45deg);
	}
</style>
