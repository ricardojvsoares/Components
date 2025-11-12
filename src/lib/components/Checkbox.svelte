<script lang="ts">
	let { checked = $bindable(false), label = '', disabled = false } = $props();

	function toggle() {
		if (disabled) return;
		checked = !checked;
	}

	function onKey(e: KeyboardEvent) {
		if (disabled) return;
		if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
			e.preventDefault();
			toggle();
		}
	}
</script>

<label class="chk">
	<input type="checkbox" class="visually-hidden-input" bind:checked {disabled} />
	<div
		role="checkbox"
		class="box {checked ? 'checked' : ''} {disabled ? 'disabled' : ''}"
		tabindex={disabled ? -1 : 0}
		aria-checked={checked}
		aria-disabled={disabled}
		onclick={toggle}
		onkeydown={onKey}
	>
		{#if checked}
			<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"
				><path
					d="M20 6L9 17l-5-5"
					stroke="currentColor"
					stroke-width="2"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				/></svg
			>
		{/if}
	</div>
	{#if label}
		<span class="label">{label}</span>
	{/if}
</label>

<style>
	.chk {
		display: inline-flex;
		gap: 0.5rem;
		align-items: center;
	}
	.box {
		width: 18px;
		height: 18px;
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0, 0.12);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: var(--card-bg, #fff);
		cursor: pointer;
	}
	.box.checked {
		background: linear-gradient(180deg, #3b82f6, #2563eb);
		color: white;
		border-color: transparent;
	}
	.box.disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
	.label {
		user-select: none;
	}
</style>
