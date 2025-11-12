<script lang="ts">
	/**
	 * Form component — small wrapper to standardize form spacing and submit handling
	 * Props:
	 * - onSubmit?: (data: any) => void — optional submit handler
	 * - class?: string — additional classes
	 */
	let { onSubmit = undefined, class: className = '', children } = $props();

	// simple data collection from inputs with `name` attributes
	function handleSubmit(e: Event) {
		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		const data = Object.fromEntries(new FormData(form).entries());
		if (onSubmit && typeof onSubmit === 'function') onSubmit(data);
		// dispatch a custom event too
		const ev = new CustomEvent('submit', { detail: data });
		dispatchEvent(ev);
	}
</script>

<form class="s-form {className}" onsubmit={handleSubmit}>
	{@render children()}
</form>

<style>
	.s-form {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
</style>
