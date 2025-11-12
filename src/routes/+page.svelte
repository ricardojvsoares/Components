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
				<div class="row single">
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
				</div>
				<div class="row single">
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
				</div>
				<div class="row single">
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
				<div class="row single">
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
			<div class="row muted">Value: {dropdownValue}</div>
		</div>

		<div class="demo-card">
			<h2>Loading</h2>
			<div class="example">
				<div class="chip">size="md"</div>
				<div class="row single">
					<Loading size="md" />
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
				<div class="row single">
					<Radio name="group1" value="a" bind:selected={dropdownValue} label="Option A" />
				</div>
				<div class="row single">
					<Radio name="group1" value="b" bind:selected={dropdownValue} label="Option B" />
				</div>
			</div>
			<div class="row muted">Value: {dropdownValue}</div>
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
						<div>Slide content at {slideValue}% width</div>
					</Slide>
				</div>
				<div class="row">
					<label style="display:flex;align-items:center;gap:0.5rem"
						>Value:
						<input type="range" min="0" max="100" bind:value={slideValue} />
						<span class="muted">{slideValue}</span>
					</label>
				</div>
			</div>
		</div>

		<div class="demo-card">
			<h2>Toast</h2>
			<div class="example">
				<div class="chip">programmatic</div>
				<div class="row single">
					<TextInput placeholder="Toast message" bind:value={inputValue} />
				</div>
				<div class="row single">
					<Dropdown
						items={[
							{ label: 'info', value: 'info' },
							{ label: 'success', value: 'success' },
							{ label: 'error', value: 'error' }
						]}
						bind:value={dropdownValue}
						placeholder="type"
					/>
				</div>
				<div class="row single">
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
				<div class="row single">
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
		border-color: rgba(0, 0, 0, 1);
		box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02);
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
		background: rgba(0, 0, 0, 0.04);
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
