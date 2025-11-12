<script lang="ts">
	import { Button } from '$lib/components';

	let {
		open = $bindable(false),
		title = '',
		children = () => null,
		titleSlot = undefined,
		footerSlot = undefined
	} = $props();

	let dialog = $state<HTMLDialogElement | undefined>(undefined);

	/**
	 * svelte/internal is used here for a simple animation-out.
	 * In a real app, you might use svelte-motion or a custom transition.
	 */
	function modalAnimation(node: HTMLElement) {
		const keyframe = [
			{ transform: 'scale(0.95)', opacity: 0 },
			{ transform: 'scale(1)', opacity: 1 }
		];
		node.animate(keyframe, {
			duration: 150,
			easing: 'cubic-bezier(0.2, 0.9, 0.3, 1)'
		});

		// Return a destroy function for outro animation
		return {
			destroy() {
				const outKeyframe = [
					{ transform: 'scale(1)', opacity: 1 },
					{ transform: 'scale(0.95)', opacity: 0 }
				];
				node.animate(outKeyframe, {
					duration: 100,
					easing: 'ease-out'
				});
			}
		};
	}

	$effect(() => {
		if (open && dialog) {
			dialog.showModal();
			document.body.classList.add('modal-open');
		} else if (!open && dialog) {
			dialog.close();
			document.body.classList.remove('modal-open');
		}
	});

	function handleClose() {
		open = false;
		document.body.classList.remove('modal-open');
	}

	function handleBackdropClick(e: MouseEvent) {
		if (!dialog) return;
		const rect = dialog.getBoundingClientRect();
		// Check if the click was *outside* the dialog's bounds
		if (
			e.clientX < rect.left ||
			e.clientX > rect.right ||
			e.clientY < rect.top ||
			e.clientY > rect.bottom
		) {
			handleClose();
		}
	}
</script>

<!--
  The <dialog> element is the core of the modal.
  It's bound to the 'dialog' variable.
-->
{#if open}
	<dialog
		bind:this={dialog}
		class="modal-box"
		onclose={handleClose}
		onclick={handleBackdropClick}
		aria-labelledby="modal-title"
		aria-modal="true"
	>
		<header class="modal-header">
			{#if titleSlot}
				{@render titleSlot()}
			{:else}
				<h2 id="modal-title" class="modal-title">{title}</h2>
			{/if}
			<Button onclick={handleClose}>Close</Button>
		</header>
		<div class="modal-content">
			{@render children()}
		</div>
		{#if footerSlot}
			<footer class="modal-footer">
				{@render footerSlot()}
			</footer>
		{/if}
	</dialog>
{/if}

<style>
	:global(body.modal-open) {
		overflow: hidden;
	}

	.modal-box {
		background: var(--card-bg, #fff);
		border: 1px solid var(--border-color, rgba(0, 0, 0, 0.1));
		border-radius: 12px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
		padding: 0;
		width: 100%;
		max-width: 500px;
		color: var(--fg, #212529);
	}

	/* The backdrop behind the modal */
	.modal-box::backdrop {
		background: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(4px);
		animation: fadeIn 200ms ease-out forwards;
	}

	.modal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem 1.5rem;
		border-bottom: 1px solid var(--border-color, rgba(0, 0, 0, 0.1));
	}

	.modal-title {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0;
	}

	.modal-content {
		padding: 1.5rem;
		line-height: 1.6;
	}

	.modal-footer {
		padding: 1rem 1.5rem;
		border-top: 1px solid var(--border-color, rgba(0, 0, 0, 0.1));
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
		background: var(--bg, #f8f9fa);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
