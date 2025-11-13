<script lang="ts">
	import {
		Button,
		IconButton,
		Modal,
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

	// --- State for controls ---
	let inputValue = $state('');
	let inputChecked = $state(false);
	let radioValue = $state('a');
	let dropdownValue = $state('');
	let hamburgerOpen = $state(false);
	let slideValue = $state(50);
	let toastMessage = $state('');
	let toastType = $state('info');
	let demoModalOpen = $state(false);

	function iconClick(e?: Event, name = 'icon') {
		toaster.push(`${name} clicked`);
	}
</script>

<main class="demo-root">
	<header class="demo-header">
		<div>
			<h1>Components demo</h1>
			<p class="muted">Svelte 5 - Component Demo Page</p>
		</div>
	</header>

	<section class="demo-grid">
		<!-- === Buttons === -->
		<div class="demo-card demo-card--col-2">
			<h2>Buttons</h2>
			<!-- Variants x Sizes -->
			{#each variants as v}
				<div class="example">
					<div class="chip">variant="{v}"</div>
					<div class="row">
						{#each sizes as s}
							<Button variant={v} size={s}>{s}</Button>
						{/each}
					</div>
				</div>
			{/each}

			<!-- With Icons -->
			<div class="example">
				<div class="chip">With Icon</div>
				<div class="row">
					<Button size="sm">
						<Icon name="check" size="sm" />
						Small
					</Button>
					<Button size="md">
						<Icon name="check" size="md" />
						Medium
					</Button>
					<Button size="lg">
						<Icon name="check" size="lg" />
						Large
					</Button>
				</div>
			</div>

			<!-- States -->
			<div class="example">
				<div class="chip">States</div>
				<div class="row">
					<Button loading={true}>Loading...</Button>
					<Button disabled={true}>Disabled</Button>
					<Button variant="secondary" loading={true}>Loading...</Button>
					<Button variant="secondary" disabled={true}>Disabled</Button>
					<Button variant="ghost" loading={true}>Loading...</Button>
					<Button variant="ghost" disabled={true}>Disabled</Button>
				</div>
			</div>
		</div>

		<!-- === Icon Buttons === -->
		<div class="demo-card">
			<h2>Modal</h2>
			<div class="example">
				<div class="chip">Open modal</div>
				<div class="row">
					<Button onclick={() => (demoModalOpen = true)}>Open Modal</Button>
				</div>
			</div>

			<Modal bind:open={demoModalOpen} title="Demo modal">
				<p>This is a demo modal opened from the demo page.</p>
			</Modal>

			<h2>Icon Button</h2>
			<div class="example">
				<div class="chip">Sizes & Variants</div>
				<div class="row">
					<IconButton ariaLabel="Settings" size="sm" onclick={(e) => iconClick(e, 'settings-sm')}>
						<Icon name="settings" />
					</IconButton>
					<IconButton ariaLabel="Settings" size="md" onclick={(e) => iconClick(e, 'settings-md')}>
						<Icon name="settings" />
					</IconButton>
					<IconButton ariaLabel="Settings" size="lg" onclick={(e) => iconClick(e, 'settings-lg')}>
						<Icon name="settings" />
					</IconButton>
				</div>
			</div>
			<div class="example">
				<div class="chip">States</div>
				<div class="row">
					<IconButton ariaLabel="Disabled" size="md" disabled={true}>
						<Icon name="settings" />
					</IconButton>
					<IconButton href="https://www.google.com/" target="_blank" ariaLabel="Link" size="md">
						<Icon name="link" />
					</IconButton>
					<IconButton
						href="/youtube"
						target="_blank"
						ariaLabel="Go to YouTube"
						size="md"
						theme="youtube"
					>
						<Icon name="youtube" />
					</IconButton>
				</div>
			</div>
		</div>

		<!-- === Text Input === -->
		<div class="demo-card">
			<h2>Text Input</h2>
			<div class="example">
				<div class="chip">Interactive</div>
				<div class="row">
					<TextInput placeholder="Type something..." bind:value={inputValue} />
				</div>
				<div class="row muted small">Value: {inputValue || 'none'}</div>
			</div>
			<div class="example">
				<div class="chip">disabled={true}</div>
				<div class="row">
					<TextInput placeholder="Can't type" value="Disabled" disabled={true} />
				</div>
			</div>
		</div>

		<!-- === Dropdown === -->
		<div class="demo-card">
			<h2>Dropdown</h2>
			<div class="example">
				<div class="chip">Interactive</div>
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
				<div class="row muted small">Value: {dropdownValue || 'none'}</div>
			</div>
			<div class="example">
				<div class="chip">disabled={true}</div>
				<div class="row">
					<Dropdown
						items={[{ label: 'One', value: '1' }]}
						value="1"
						placeholder="Choose..."
						disabled={true}
					/>
				</div>
			</div>
		</div>

		<!-- === Toggles === -->
		<div class="demo-card">
			<h2>Toggle</h2>
			<div class="example">
				<div class="chip">Sizes</div>
				<div class="row">
					<Toggle size="sm" />
					<Toggle size="md" />
					<Toggle size="lg" />
				</div>
			</div>
			<div class="example">
				<div class="chip">Interactive</div>
				<div class="row">
					<label class="interactive-label">
						Interactive:
						<Toggle bind:checked={inputChecked} />
					</label>
				</div>
				<div class="row muted small">Value: {String(inputChecked)}</div>
			</div>
			<div class="example">
				<div class="chip">disabled={true}</div>
				<div class="row">
					<Toggle size="md" checked={false} disabled={true} />
					<Toggle size="md" checked={true} disabled={true} />
				</div>
			</div>
		</div>

		<!-- === Checkbox === -->
		<div class="demo-card">
			<h2>Checkbox</h2>
			<div class="example">
				<div class="chip">Interactive</div>
				<div class="row single">
					<Checkbox bind:checked={inputChecked} label="Accept terms" />
				</div>
			</div>
			<div class="example">
				<div class="chip">disabled={true}</div>
				<div class="stacked-example" style="gap: 0.5rem">
					<Checkbox checked={false} disabled={true} label="Disabled off" />
					<Checkbox checked={true} disabled={true} label="Disabled on" />
				</div>
			</div>
		</div>

		<!-- === Radio === -->
		<div class="demo-card">
			<h2>Radio</h2>
			<div class="example">
				<div class="chip">Interactive</div>
				<div class="stacked-example" style="gap: 0.5rem">
					<Radio name="group1" value="a" bind:selected={radioValue} label="Option A" />
					<Radio name="group1" value="b" bind:selected={radioValue} label="Option B" />
				</div>
				<div class="row muted small">Value: {radioValue || 'none'}</div>
			</div>
			<div class="example">
				<div class="chip">disabled={true}</div>
				<div class="stacked-example" style="gap: 0.5rem">
					<Radio name="group2" value="c" selected="c" disabled={true} label="Disabled on" />
					<Radio name="group2" value="d" selected="c" disabled={true} label="Disabled off" />
				</div>
			</div>
		</div>

		<!-- === Loading === -->
		<div class="demo-card">
			<h2>Loading</h2>
			<div class="example">
				<div class="chip">Sizes</div>
				<div class="row single">
					<Loading size="sm" />
					<Loading size="md" />
					<Loading size="lg" />
				</div>
			</div>
			<div class="example">
				<div class="chip">With Label</div>
				<div class="row single">
					<Loading size="md" label="Loading..." />
				</div>
			</div>
		</div>

		<!-- === Hamburger === -->
		<div class="demo-card">
			<h2>Hamburger</h2>
			<div class="example">
				<div class="chip">Sizes (Interactive)</div>
				<div class="row single">
					<Hamburger size="sm" />
					<Hamburger bind:open={hamburgerOpen} size="md" />
					<Hamburger size="lg" />
				</div>
				<div class="row muted small">MD Open: {String(hamburgerOpen)}</div>
			</div>
		</div>

		<!-- === Form === -->
		<div class="demo-card">
			<h2>Form</h2>
			<div class="example">
				<div class="chip">Standard</div>
				<div class="stacked-example">
					<Form on:submit={(e) => console.log('form submit', e.detail)}>
						<TextInput name="fullName" placeholder="Full name" />
						<TextInput name="email" placeholder="Email" type="email" />
						<Button type="submit">Submit</Button>
					</Form>
				</div>
			</div>
			<div class="example">
				<div class="chip">Disabled</div>
				<div class="stacked-example">
					<Form>
						<TextInput name="fullName" placeholder="Full name" disabled={true} />
						<TextInput name="email" placeholder="Email" type="email" disabled={true} />
						<Button type="submit" disabled={true}>Submit</Button>
					</Form>
				</div>
			</div>
		</div>

		<!-- === Toast === -->
		<div class="demo-card">
			<h2>Toast</h2>
			<div class="example">
				<div class="chip">Programmatic</div>
				<div class="stacked-example">
					<TextInput placeholder="Toast message" bind:value={toastMessage} />
					<Dropdown
						items={[
							{ label: 'info', value: 'info' },
							{ label: 'success', value: 'success' },
							{ label: 'error', value: 'error' }
						]}
						bind:value={toastType}
						placeholder="type"
					/>
					<Button
						onclick={() =>
							toaster.push(toastMessage || 'Empty message', {
								type: toastType as 'info' | 'success' | 'error'
							})}
					>
						Push toast
					</Button>
				</div>
			</div>
		</div>

		<!-- === Icon === -->
		<div class="demo-card">
			<h2>Icon</h2>
			<div class="example">
				<div class="chip">name / size</div>
				<div class="row">
					<Icon name="check" size="lg" />
					<Icon name="close" size="md" />
					<Icon name="settings" size="sm" />
					<Icon name="link" />
					<Icon name="default" size="lg" />
				</div>
			</div>
		</div>

		<!-- === Slide === -->
		<div class="demo-card">
			<h2>Slider (Volume Dial)</h2>
			<div class="example">
				<div class="chip">Custom <code>Slider</code> component</div>
				<div class="row single" style="padding: 1rem 0;">
					<Slide bind:value={slideValue} min={0} max={100} />
				</div>

				<div class="chip">Native <code>input type="range"</code></div>
				<div class="row">
					<label class="interactive-label" style="width: 100%">
						Value:
						<input type="range" min="0" max="100" bind:value={slideValue} style="width: 100%" />
						<span class="muted" style="min-width: 3rem">{slideValue}</span>
					</label>
				</div>
			</div>
		</div>

		<div class="demo-card">
			<h2>Slider (Vertical)</h2>
			<div class="example">
				<div
					class="row single"
					style="display: flex; gap: 2rem; align-items: center; min-height: 250px;"
				>
					<Slide bind:value={slideValue} direction="vertical" />

					<label class="interactive-label" style="width: 100%">
						Value:
						<input type="range" min="0" max="100" bind:value={slideValue} style="width: 100%" />
						<span class="muted" style="min-width: 3rem">{slideValue}</span>
					</label>
				</div>
			</div>
		</div>

		<!-- === Pattern === -->
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
					<Pattern variant="stripes" size="sm" color="#0000FF" />
				</div>
			</div>
		</div>
	</section>

	<Toast />
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
		/* Allow cards to span columns */
		grid-column: span 1;
	}

	.demo-card--col-2 {
		grid-column: span 1;
	}
	/* At wider breakpoints, allow col-2 to span */
	@media (min-width: 960px) {
		.demo-card--col-2 {
			grid-column: span 2;
		}
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
	.muted.small {
		font-size: 0.8rem;
		margin-top: 0.5rem;
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
	.row > :global(.dropdown) {
		flex-grow: 1;
		min-width: 150px;
	}

	/* Helper for interactive labels */
	.interactive-label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
	}
	:global(.icon-btn.youtube) {
		background-color: #ff0000;
		color: #ffffff; /* This makes the icon inside white */
		border-color: #ff0000;
	}

	:global(.icon-btn.youtube:hover) {
		background-color: #e60000; /* A slightly darker red on hover */
		border-color: #e60000;
	}

	:global(.icon-btn.youtube:active) {
		background-color: #cc0000; /* An even darker red when clicked */
		border-color: #cc0000;
	}
</style>
