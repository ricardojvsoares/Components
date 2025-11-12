<script lang="ts">
	let { onSubmit = undefined, class: className = '', children, ...rest } = $props();

	type FormDataMap = Record<string, FormDataEntryValue>;

	function handleSubmit(e: Event) {
		if (!e.isTrusted) {
			return;
		}

		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		const data: FormDataMap = Object.fromEntries(new FormData(form).entries());

		if (onSubmit) {
			onSubmit(data);
		}

		form.dispatchEvent(
			new CustomEvent('submit', {
				detail: data,
				bubbles: true,
				composed: true
			})
		);
	}
</script>

<form class="s-form {className}" onsubmit={handleSubmit} {...rest}>
	{@render children()}
</form>

<style>
	.s-form {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
</style>
