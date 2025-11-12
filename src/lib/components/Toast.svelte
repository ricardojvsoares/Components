<script lang="ts">
	import { toasts } from './toaster';
</script>

<div class="toast-root">
	{#each $toasts as t (t.id)}
		<div class="toast toast--{t.type}">{t.message}</div>
	{/each}
</div>

<style>
	.toast-root {
		position: fixed;
		right: 1rem;
		top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		z-index: 9999;
	}
	.toast {
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
		background: #111;
		color: #fff;
		opacity: 0.95;
	}
	.toast--success {
		background: #16a34a;
	}
	.toast--error {
		background: #dc2626;
	}
	.toast--info {
		background: #2563eb;
	}
</style>
