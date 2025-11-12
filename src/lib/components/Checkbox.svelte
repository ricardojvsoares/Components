<script lang="ts">
	let { checked = $bindable(false), label = '', disabled = false } = $props();
</script>

<label class="chk">
	<input type="checkbox" class="visually-hidden" bind:checked {disabled} />

	<div class="box" aria-hidden="true">
		<svg class="check-icon" width="14" height="14" viewBox="0 0 24 24">
			<path
				d="M20 6L9 17l-5-5"
				stroke="currentColor"
				stroke-width="3"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
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
		cursor: pointer;
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
		transition: all 100ms ease-out;
	}

	.check-icon {
		color: white;
		transform: scale(0);
		opacity: 0;
		transition: all 100ms ease-out;
	}

	.visually-hidden:checked + .box {
		background: linear-gradient(180deg, #3b82f6, #2563eb);
		border-color: transparent;
	}
	.visually-hidden:checked + .box .check-icon {
		transform: scale(1);
		opacity: 1;
	}

	.visually-hidden:focus-visible + .box {
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.4);
		border-color: #3b82f6;
	}

	.visually-hidden:disabled + .box {
		opacity: 0.6;
	}
	.visually-hidden:disabled ~ .label {
		opacity: 0.6;
	}
	.chk:has(.visually-hidden:disabled) {
		cursor: not-allowed;
	}

	.visually-hidden {
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

	.label {
		user-select: none;
	}
</style>
