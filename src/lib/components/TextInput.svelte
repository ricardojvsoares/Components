<script lang="ts">
	/**
	 * TextInput — single-line text input with subtle glass effect
	 * @prop {string} value - the input's value (bindable)
	 * @prop {string} placeholder - placeholder text
	 * @prop {boolean} disabled - whether the input is disabled
	 * @prop {string} name - input name attribute (for forms)
	 * @prop {string} type - input type (default: text)
	 */
	let {
		value = $bindable(''),
		placeholder = '',
		disabled = false,
		name = '',
		type = 'text'
	} = $props();
</script>

<div class="input-wrap">
	<input class="text-input" {placeholder} {disabled} bind:value {name} {type} />
	<span class="text-input__glass" aria-hidden="true"></span>
</div>

<style>
	.input-wrap {
		position: relative;
		display: inline-block;
		width: 100%;
	}
	.text-input {
		padding: 0.5rem 0.75rem;
		border-radius: 8px;
		border: 1px solid var(--border-color, rgba(0, 0, 0, 0.1));
		background: var(--card-bg, #fff);
		width: 100%;
		box-sizing: border-box;
		line-height: 1.5;
		font-size: 0.9rem;
		color: var(--fg, #212529);
	}
	.text-input:disabled {
		opacity: 0.6;
		background: rgba(0, 0, 0, 0.02);
		cursor: not-allowed;
	}
	.text-input:focus,
	.text-input:focus-visible {
		outline: 3px solid rgba(59, 130, 246, 0.18);
		outline-offset: 2px;
		border-color: rgba(59, 130, 246, 0.7);
	}

	.text-input__glass {
		position: absolute;
		inset: 0;
		pointer-events: none;
		border-radius: 8px;
		background: linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.06));
	}
</style>
