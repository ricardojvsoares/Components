<script lang="ts">
	import { Button, IconButton, TextInput, Toggle, Dropdown } from '$lib/components';

	const variants = ['primary', 'secondary', 'ghost'] as const;
	const sizes = ['sm', 'md', 'lg'] as const;

	let inputValue = $state('');
	let inputChecked = $state(false);
	let dropdownValue = $state('');
</script>

<main class="demo-root">
	<header class="demo-header">
		<div>
			<h1>Components demo</h1>
			<p class="muted">Svelte 5 - demo page</p>
		</div>
	</header>

	<section class="demo-grid">
		<div class="demo-card">
			<h2>Variants</h2>
			{#each variants as v}
				<div class="example">
					<div class="chip">variant="{v}"</div>
					<div class="row">
						<Button variant={v as 'primary' | 'secondary' | 'ghost'}>{v} button</Button>
					</div>
				</div>
			{/each}
		</div>

		<div class="demo-card">
			<h2>Sizes</h2>
			{#each sizes as s}
				<div class="example">
					<div class="chip">size="{s}"</div>
					<div class="row">
						<Button size={s as 'sm' | 'md' | 'lg'}>{s} size</Button>
					</div>
				</div>
			{/each}
		</div>

		<div class="demo-card">
			<h2>Loading / Disabled</h2>
			<div class="example">
				<div class="chip">loading={true}</div>
				<div class="row">
					<Button loading={true}>Loading</Button>
				</div>
			</div>
			<div class="example">
				<div class="chip">disabled={true}</div>
				<div class="row">
					<Button disabled={true}>Disabled</Button>
				</div>
			</div>
		</div>

		<div class="demo-card">
			<h2>Icon button</h2>
			<div class="example">
				<div class="chip">ariaLabel="settings"</div>
				<div class="row">
					<IconButton ariaLabel="settings">
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z"
							stroke="currentColor"
							stroke-width="1.2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 2.27 17.9l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82L4.27 6.6A2 2 0 1 1 7.1 3.77l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V2a2 2 0 1 1 4 0v.09c0 .58.38 1.08 1 1.51h.03a1.65 1.65 0 0 0 1.82-.33l.06-.06A2 2 0 1 1 20.73 6.1l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.58 0 1.08.38 1.51 1h.09a2 2 0 1 1 0 4h-.09c-.43.62-.93 1-1.51 1z"
							stroke="currentColor"
							stroke-width="1"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</IconButton>
				</div>
			</div>
		</div>

		<div class="demo-card">
			<h2>Dropdown</h2>
			<div class="example">
				<div class="chip">bind:value</div>
				<div class="row">
					<Dropdown items={[{label:'One', value:'1'},{label:'Two', value:'2'},{label:'Three', value:'3'}]} bind:value={dropdownValue} placeholder="Choose..." />
				</div>
			</div>
			<div class="row muted">Value: {dropdownValue}</div>
		</div>

		<div class="demo-card">
			<h2>Text input</h2>
			<div class="example">
				<div class="chip">bind:value</div>
				<div class="row">
					<TextInput placeholder="Type something" bind:value={inputValue} />
				</div>
			</div>
			<div class="row muted">Value: {inputValue}</div>
		</div>

		<div class="demo-card">
			<h2>Toggle</h2>
			<div class="example">
				<div class="chip">size="md"</div>
				<div class="row">
					<Toggle />
				</div>
			</div>
			<div class="example">
				<div class="chip">size="sm"</div>
				<div class="row">
					<Toggle size="sm" />
				</div>
			</div>
			<div class="example">
				<div class="chip">size="lg"</div>
				<div class="row">
					<Toggle size="lg" />
				</div>
			</div>
			<div class="row">
				<label style="display:flex;align-items:center;gap:0.5rem">
					Interactive:
					<Toggle bind:checked={inputChecked} />
				</label>
			</div>
			<div class="row muted">Value: {String(inputChecked)}</div>
		</div>
	</section>
</main>

<style>
	.demo-root {
		padding: 1rem;
		max-width: 1100px;
		margin: 0 auto;
	}
	.demo-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	.demo-header h1 {
		margin: 0;
	}
	.muted {
		color: #6b7280;
	}
	.demo-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
	}
	.demo-card {
		background: var(--card-bg, #fff);
		border: 1px solid rgba(0, 0, 0, 0.06);
		padding: 1rem 1.25rem;
		border-radius: 10px;
		box-shadow: 0 1px 0 rgba(0,0,0,0.02);
	}

	.demo-card h2 {
		margin: 0 0 0.5rem 0;
		font-size: 1.05rem;
	}

	.example {
		display: block;
		margin: 0.5rem 0;
	}

	.chip {
		display: inline-block;
		font-size: 0.78rem;
		padding: 0.18rem 0.45rem;
		border-radius: 999px;
		background: rgba(0,0,0,0.04);
		color: #111827;
		margin-bottom: 0.45rem;
	}
	.row {
		margin: 0.5rem 0;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	/* dark theme vars */
	:global([data-theme='dark']) {
		--card-bg: #0b1220;
		--muted: #9aa4b2;
	}
	:global([data-theme='dark']) .demo-card {
		border-color: rgba(255, 255, 255, 0.04);
	}
</style>
