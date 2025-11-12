<script lang="ts">
	let { selected = $bindable(''), value = '', name = '', label = '', disabled = false } = $props();

	function pick() {
		if (disabled) return;
		selected = value as any;
	}

	function onKey(e: KeyboardEvent) {
		if (disabled) return;
		if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
			e.preventDefault();
			pick();
		}
	}
</script>

<label class="radio">
	<input
		type="radio"
		class="visually-hidden-input"
		bind:group={selected}
		{value}
		{name}
		{disabled}
	/>
	<div
		role="radio"
		aria-checked={selected === value}
		aria-disabled={disabled}
		tabindex={disabled ? -1 : 0}
		class="dot {selected === value ? 'selected' : ''} {disabled ? 'disabled' : ''}"
		onclick={pick}
		onkeydown={onKey}
	></div>
	{#if label}
		<span class="label">{label}</span>
	{/if}
</label>

<style>
	.radio {
		display: inline-flex;
		gap: 0.5rem;
		align-items: center;
	}
	.dot {
		width: 18px;
		height: 18px;
		border-radius: 999px;
		border: 1px solid rgba(0, 0, 0, 0.12);
		display: inline-block;
		cursor: pointer;
		box-sizing: border-box;
	}
	.dot.selected {
		background: linear-gradient(180deg, #3b82f6, #2563eb);
		border-color: transparent;
	}
	.dot.disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
	.label {
		user-select: none;
	}
</style>
