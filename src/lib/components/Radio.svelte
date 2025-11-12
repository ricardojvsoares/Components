<script lang="ts">
	let { selected = $bindable(''), value = '', name = '', label = '', disabled = false } = $props();
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
	<div class="dot" aria-hidden="true">
		<div class="inner-dot"></div>
	</div>

	{#if label}
		<span class="label">{label}</span>
	{/if}
</label>

<style>
	.radio {
		display: inline-flex;
		gap: 0.5rem;
		align-items: center;
		cursor: pointer;
	}

	.dot {
		width: 18px;
		height: 18px;
		border-radius: 999px;
		border: 1px solid rgba(0, 0, 0, 0.12);
		box-sizing: border-box;
		background: var(--card-bg, #fff);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: all 100ms ease-out;
	}

	.inner-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: linear-gradient(180deg, #3b82f6, #2563eb);
		/* Hide by default */
		transform: scale(0);
		opacity: 0;
		transition: all 100ms ease-out;
	}

	.visually-hidden-input:checked + .dot {
		border-color: #3b82f6;
	}
	.visually-hidden-input:checked + .dot .inner-dot {
		transform: scale(1);
		opacity: 1;
	}

	.visually-hidden-input:focus-visible + .dot {
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.4);
	}

	.visually-hidden-input:disabled + .dot {
		opacity: 0.6;
		background: rgba(0, 0, 0, 0.05);
	}
	.visually-hidden-input:disabled ~ .label {
		opacity: 0.6;
	}

	.radio:has(.visually-hidden-input:disabled) {
		cursor: not-allowed;
	}

	.label {
		user-select: none;
	}

	.visually-hidden-input {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
