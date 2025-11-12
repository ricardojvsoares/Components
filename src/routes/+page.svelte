<script lang="ts">
	import {
		Button,
		IconButton,
		Icon,
		TextInput,
		Form,
		Pattern,
		Toggle,
		Dropdown,
		Loading,
		Checkbox,
		Radio,
		Hamburger,
		Slide,
		toaster
	} from '$lib/components';
	import Toast from '$lib/components/Toast.svelte';

	const variants = ['primary', 'secondary', 'ghost'] as const;
	const sizes = ['sm', 'md', 'lg'] as const;

	let inputValue = $state('');
	let inputChecked = $state(false);
	let dropdownValue = $state('');
	let hamburgerOpen = $state(false);
	let slideValue = $state(50); // numeric value 0-100 for demo
	let toastCount = $state(0);

	function pushToast() {
		toaster.push(inputValue || 'Empty message', {
			type: dropdownValue as 'info' | 'success' | 'error'
		});
		toastCount++;
	}
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
					<IconButton ariaLabel="settings" size="md">
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
					<IconButton
						href="https://www.youtube.com/"
						target="_blank"
						ariaLabel="YouTube"
						size="md"
						theme="danger"
					>
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M8 5v14l11-7-11-7z" />
						</svg>
					</IconButton>
					<IconButton ariaLabel="search" size="sm">
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							><circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="1.2" /><path
								d="M21 21l-4.35-4.35"
								stroke="currentColor"
								stroke-width="1.2"
								stroke-linecap="round"
							/></svg
						>
					</IconButton>
				</div>
			</div>
		</div>

		<div class="demo-card">
			<h2>Dropdown</h2>
			<div class="example">
				<div class="chip">bind:value</div>
				<div class="row">
					<Dropdown
						items={[
							{ label: 'One', value: '1' },
							{ label: 'Two', value: '2' },
							{ label: 'Three', value: '3' }
						]}
						bind:value={dropdownValue}
						placeholder="Choose..."
					/>
				</div>
			</div>
			<div class="row muted">Value: {dropdownValue || 'none'}</div>
		</div>

		<div class="demo-card">
			<h2>Loading</h2>
			<div class="example">
				<div class="chip">size="md"</div>
				<div class="row single">
					<Loading size="md" />
				</div>
				<div class="chip">size="lg" label="Loading..."</div>
				<div class="row single">
					<Loading size="lg" label="Loading..." />
				</div>
			</div>
		</div>

		<div class="demo-card">
			<h2>Checkbox</h2>
			<div class="example">
				<div class="chip">bind:checked</div>
				<div class="row single">
					<Checkbox bind:checked={inputChecked} label="Accept terms" />
				</div>
			</div>
		</div>

		<div class="demo-card">
			<h2>Radio</h2>
			<div class="example">
				<div class="chip">bind:selected</div>
				<div class="stacked-example" style="gap: 0.5rem;">
					<Radio name="group1" value="a" bind:selected={dropdownValue} label="Option A" />
					<Radio name="group1" value="b" bind:selected={dropdownValue} label="Option B" />
				</div>
			</div>
			<div class="row muted">Value: {dropdownValue || 'none'}</div>
		</div>

		<div class="demo-card">
			<h2>Hamburger</h2>
			<div class="example">
				<div class="chip">bind:open</div>
				<div class="row single">
					<Hamburger bind:open={hamburgerOpen} size="md" />
				</div>
				<div class="row muted">Open: {String(hamburgerOpen)}</div>
			</div>
		</div>

		<div class="demo-card">
			<h2>Slide (value example)</h2>
			<div class="example">
				<div class="chip">bind:value (0-100)</div>
				<div class="row single">
					<Slide bind:value={slideValue} direction="horizontal">
						<div style="padding: 1rem; border: 1px dashed var(--border-color); border-radius: 6px;">
							Slide content at {slideValue}% width
						</div>
					</Slide>
				</div>
				<div class="row">
					<label style="display:flex;align-items:center;gap:0.5rem; width: 100%">
						Value:
						<input type="range" min="0" max="100" bind:value={slideValue} style="width: 100%" />
						<span class="muted" style="min-width: 2rem;">{slideValue}</span>
					</label>
				</div>
			</div>
		</div>

		<div class="demo-card">
			<h2>Toast</h2>
			<div class="example">
				<div class="chip">programmatic</div>
				<div class="stacked-example">
					<TextInput placeholder="Toast message" bind:value={inputValue} />
					<Dropdown
						items={[
							{ label: 'info', value: 'info' },
							{ label: 'success', value: 'success' },
							{ label: 'error', value: 'error' }
						]}
						bind:value={dropdownValue}
						placeholder="type"
					/>
					<Button onclick={pushToast}>Push toast</Button>
				</div>
			</div>
		</div>

		<Toast />

		<div class="demo-card">
			<h2>Icon</h2>
			<div class="example">
				<div class="chip">name / size</div>
				<div class="row">
					<Icon name="check" size="lg" />
					<Icon name="close" size="md" />
					<Icon size="sm" />
				</div>
			</div>
		</div>

		<div class="demo-card">
			<h2>Form</h2>
			<div class="example">
				<div class="chip">on:submit</div>
				<div class="stacked-example">
					<Form onSubmit={(data: unknown) => console.log('form submit', data)}>
						<TextInput name="fullName" placeholder="Full name" />
						<TextInput name="email" placeholder="Email" />
						<Button type="submit">Submit</Button>
					</Form>
				</div>
			</div>
		</div>

		<div class="demo-card">
			<h2>Pattern</h2>
			<div class="example">
				<div class="chip">decorative</div>
				<div class="row single">
					<Pattern />
				</div>
				<div class="row single">
					<Pattern variant="grid" size="lg" color="rgba(255, 0, 0, 0.1)" />
				</div>
				<div class="row single">
					<Pattern variant="stripes" size="sm" color="#0000FF" class="h-48 rounded-full" />
				</div>
			</div>
		</div>

		<div class="demo-card">
			<h2>Text input</h2>
			<div class="example">
				<div class="chip">bind:value</div>
				<div class="row">
					<TextInput placeholder="Type something" bind:value={inputValue} />
				</div>
			</div>
			<div class="row muted">Value: {inputValue || 'none'}</div>
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
			<div class="example">
				<div class="row">
					<label style="display:flex;align-items:center;gap:0.5rem">
						Interactive:
						<Toggle bind:checked={inputChecked} />
					</label>
				</div>
			</div>
			<div class="row muted">Value: {String(inputChecked)}</div>
		</div>
	</section>
</main>

<style>
	/* 1. Global Styles & CSS Variables */
	:global(body) {
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		/* Light theme defaults */
		--bg: #f8f9fa;
		--fg: #212529;
		--border-color: rgba(0, 0, 0, 0.1);
		--card-bg: #ffffff;
		--muted-fg: #6b7280;
		--chip-bg: rgba(0, 0, 0, 0.05);
		--chip-fg: #111827;

		background-color: var(--bg);
		color: var(--fg);
		transition:
			background-color 0.2s,
			color 0.2s;
		margin: 0; /* Ensure no default margin */
	}

	/* Dark theme overrides */
	:global([data-theme='dark']) {
		--bg: #0f172a;
		--fg: #e2e8f0;
		--border-color: rgba(255, 255, 255, 0.1);
		--card-bg: #1e293b;
		--muted-fg: #94a3b8;
		--chip-bg: rgba(255, 255, 255, 0.08);
		--chip-fg: #e2e8f0;
	}

	/* 2. Layout & Root */
	.demo-root {
		padding: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.demo-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 2rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--border-color);
	}
	.demo-header h1 {
		margin: 0;
	}

	.demo-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	/* 3. Card Styling */
	.demo-card {
		background: var(--card-bg);
		border: 1px solid var(--border-color);
		padding: 1.5rem;
		border-radius: 12px;
		box-shadow:
			0 2px 4px rgba(0, 0, 0, 0.02),
			0 5px 10px rgba(0, 0, 0, 0.03);
		transition:
			transform 0.2s,
			box-shadow 0.2s,
			border-color 0.2s;
	}

	.demo-card:hover {
		transform: translateY(-2px);
		box-shadow:
			0 4px 8px rgba(0, 0, 0, 0.03),
			0 8px 16px rgba(0, 0, 0, 0.05);
	}

	.demo-card h2 {
		margin: 0 0 1rem 0;
		font-size: 1.1rem;
		font-weight: 600;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--border-color);
	}

	/* 4. Example & Row Styling */
	.example {
		display: block;
		margin: 0;
		padding: 1rem 0;
	}

	.example:not(:last-child) {
		border-bottom: 1px dashed var(--border-color);
	}

	.example:first-child {
		padding-top: 0;
	}
	.example:last-child {
		padding-bottom: 0;
	}

	.chip {
		display: inline-block;
		font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
		font-size: 0.75rem;
		padding: 0.25rem 0.6rem;
		border-radius: 999px;
		background: var(--chip-bg);
		color: var(--chip-fg);
		margin-bottom: 0.75rem;
	}

	.row {
		margin: 0.5rem 0;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	/* 5. Utility Classes */
	.muted {
		color: var(--muted-fg);
		font-size: 0.9rem;
	}

	/* Helper for stacked controls like in Toast and Form */
	.stacked-example {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-top: 0.5rem;
	}

	/* Make form inputs stack */
	.stacked-example :global(form) {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	/* Ensure inputs and dropdowns in rows or stacks can grow */
	.row > :global(input[type='text']),
	.row > :global(.dropdown-wrapper) {
		flex-grow: 1;
	}
</style>
