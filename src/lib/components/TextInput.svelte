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
	}
	.text-input {
		padding: 0.5rem 0.75rem;
		border-radius: 8px;
		border: 1px solid var(--btn-primary-border);
		background: var(--btn-secondary-bg);
	}
	.text-input__glass {
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.06));
	}
</style>
