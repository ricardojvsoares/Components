<script lang="ts">
	interface DropdownItem {
		label: string;
		value: string | number;
		disabled?: boolean;
	}

	// props in runes style
	let {
		items = [] as DropdownItem[],
		value = $bindable(''),
		placeholder = 'Select...',
		disabled = false
	} = $props();

	let open = $state(false);
	let highlighted = $state<number | null>(null);

	function toggle() {
		if (disabled) return;
		open = !open;
		if (open) highlighted = 0;
	}

	function close() {
		open = false;
		highlighted = null;
	}

	function selectItem(item: DropdownItem) {
		if (item.disabled) return;
		value = item.value as any;
		close();
	}

	function onKey(e: KeyboardEvent) {
		if (!open) return;
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			highlighted = Math.min((highlighted ?? -1) + 1, items.length - 1);
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			highlighted = Math.max((highlighted ?? items.length) - 1, 0);
		} else if (e.key === 'Enter') {
			e.preventDefault();
			if (highlighted != null) selectItem(items[highlighted]);
		} else if (e.key === 'Escape') {
			close();
		}
	}
</script>

<div class="dropdown" role="listbox" aria-expanded={open} tabindex="0" onkeydown={onKey}>
	<button
		class="trigger"
		type="button"
		aria-haspopup="listbox"
		aria-disabled={disabled}
		onclick={toggle}
		{disabled}
	>
		{#if value === ''}
			<span class="placeholder">{placeholder}</span>
		{:else}
			<span class="selected"
				>{#if items.find((i) => i.value === value)}{items.find((i) => i.value === value)
						?.label}{:else}{String(value)}{/if}</span
			>
		{/if}
		<span class="caret" class:open>▾</span>
	</button>

	{#if open}
		<ul class="menu">
			{#each items as item, i}
				<li class:selected={item.value === value} class:highlighted={i === highlighted}>
					<button
						type="button"
						class="menu-item"
						disabled={item.disabled}
						onclick={() => selectItem(item)}
					>
						{item.label}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.dropdown {
		position: relative;
		display: inline-block;
		min-width: 180px;
	}
	.trigger {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 0.75rem;
		border-radius: 8px;
		border: 1px solid rgba(0, 0, 0, 0.06);
		background: var(--card-bg, #fff);
		cursor: pointer;
	}
	.trigger[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}
	.menu {
		position: absolute;
		left: 0;
		right: 0;
		margin-top: 0.35rem;
		background: var(--card-bg, #fff);
		border: 1px solid rgba(0, 0, 0, 0.06);
		border-radius: 8px;
		max-height: 240px;
		overflow: auto;
		box-shadow: 0 6px 18px rgba(9, 30, 66, 0.08);
		z-index: 10;
		padding: 0.25rem 0;
	}
	.menu li {
		list-style: none;
		padding: 0;
	}
	.menu-item {
		width: 100%;
		text-align: left;
		padding: 0.45rem 0.75rem;
		border: none;
		background: transparent;
		cursor: pointer;
	}
	.menu-item[disabled] {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.menu li:hover,
	.menu li.highlighted {
		background: rgba(0, 0, 0, 0.04);
	}
	.menu li.selected {
		font-weight: 600;
	}
	.caret {
		display: inline-block;
		transition: transform 180ms ease;
		transform-origin: center;
	}
	.caret.open {
		transform: rotate(180deg);
	}
	.placeholder {
		color: #6b7280;
	}
</style>
