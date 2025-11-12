## Components (src/lib/components)

This folder contains a small set of Svelte components and utilities used across the design system. The README below documents the public API (props/events/slots) and short usage examples for each component exported from `src/lib/components/index.ts`.

### Importing

All components are exported from the `src/lib/components` barrel. Example:

```svelte
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
		Toast,
		toaster
	} from '$lib/components';
</script>
```

---

### Button

Props

- `variant?: 'primary' | 'secondary' | 'ghost'` — visual variant (default: `primary`).
- `size?: 'sm' | 'md' | 'lg'` — size variant (default: `md`).
- `disabled?: boolean` — disables interaction.
- `loading?: boolean` — shows a small spinner.
- `type?: 'button' | 'submit' | 'reset'` — native button type (default: `button`).
- `ariaLabel?: string` — accessible label.

Slots / children

- The component accepts arbitrary children (label/content) and optional `icon` render function or child to show an icon.

Example

```svelte
<Button variant="primary" on:click={() => console.log('clicked')}>Save</Button>
<Button variant="ghost" loading>Loading</Button>
```

---

### IconButton

Props

- `href?: string` — if present the component renders an anchor (`<a>`) instead of a `<button>`.
- `target?: string` — anchor target (e.g. `_blank`).
- `size?: 'sm' | 'md' | 'lg'` — visual size (default: `md`).
- `theme?: string` — extra CSS class for theming.
- `ariaLabel?: string` — accessible label (recommended when icon-only).
- `disabled?: boolean` — disables interaction.

Slots

- The component renders the provided children inside the button — typically an icon component or SVG.

Example

```svelte
<IconButton ariaLabel="Close" on:click={handleClose}>
	<svg ... />
</IconButton>

<IconButton href="https://example.com" target="_blank" ariaLabel="Open site">
	<svg ... />
</IconButton>
```

---

### TextInput

Props / Bindings

- `value` — bindable (use `bind:value`) for the input value.
- `placeholder?: string` — placeholder text.
- `disabled?: boolean` — disables the input.

Example

```svelte
<script lang="ts">
	let name = '';
</script>

<TextInput bind:value={name} placeholder="Full name" />
```

---

### Checkbox

Props / Bindings

- `checked` — bindable boolean state (`bind:checked`).
- `label?: string` — optional label text.
- `disabled?: boolean` — disables interaction.

Behavior

- Clicking toggles `checked`. Keyboard support for Space/Enter is implemented.

Example

```svelte
<script lang="ts">
	let subscribed = false;
</script>

<Checkbox bind:checked={subscribed} label="Subscribe to newsletter" />
```

---

### Toggle

Props / Bindings

- `checked` — bindable boolean (`bind:checked`).
- `disabled?: boolean` — disables interaction.
- `size?: 'sm' | 'md' | 'lg'` — size (default `md`).

Events

- Dispatches a `change` CustomEvent with `{ detail: { checked } }` when toggled for non-bind consumers.

Example

```svelte
<script lang="ts">
	let dark = false;
</script>

<Toggle bind:checked={dark} />
```

---

### Dropdown

Props / Bindings

- `items: { label: string; value: string | number; disabled?: boolean }[]` — options list.
- `value` — bindable selected value (`bind:value`).
- `placeholder?: string` — placeholder when no value selected.
- `disabled?: boolean` — disables the control.

Behavior

- Keyboard navigation (ArrowUp/ArrowDown/Enter/Escape) supported while open.

Example

```svelte
<script lang="ts">
	let color = '';
	const options = [
		{ label: 'Red', value: 'red' },
		{ label: 'Green', value: 'green' },
		{ label: 'Blue', value: 'blue' }
	];
</script>

<Dropdown bind:value={color} {items} placeholder="Choose color" />
```

---

### Loading

Props

- `size?: 'sm' | 'md' | 'lg'` — spinner size (default `md`).
- `label?: string` — accessible label for assistive technologies.

Example

```svelte
<Loading size="lg" label="Loading data" />
```

---

### Radio

Props / Bindings

- `selected` — bindable group value (`bind:selected`).
- `value` — the value of this radio.
- `name?: string` — radio group name.
- `label?: string` — optional label text.
- `disabled?: boolean` — disables the radio.

Behavior

- Clicking or keyboard (Space/Enter) sets `selected` to `value`.

Example

```svelte
<script lang="ts">
	let choice = '';
</script>

<Radio bind:selected={choice} value="a" label="Option A" />
<Radio bind:selected={choice} value="b" label="Option B" />
```

---

### Toast + toaster

Utilities

- `toaster.push(message: string, opts?: { type?: 'info' | 'success' | 'error', timeout?: number })` — push a toast.

Component

- `Toast` renders a toast container reflecting the state of the `toasts` store. Import and place it near the top-level of your app once.

Example

```svelte
<script lang="ts">
	import { toaster, Toast } from '$lib/components';

	function notify() {
		toaster.push('Saved!', { type: 'success' });
	}
</script>

<Toast />
<Button on:click={notify}>Save</Button>
```

---

Notes & small assumptions

- This documentation was generated from the component sources in this folder. The components follow Svelte 5 runes-style props (e.g. `$props()`, `$bindable`) — usage examples use idiomatic Svelte binding syntax where applicable.
- If you want this README copied to the repository root or transformed into a site-friendly format (MDX, Storybook stories), tell me and I can add that.

---

If you want I can:

- generate Storybook stories for these components,
- create a docs site section (VitePress / Storybook), or
- add more examples showing theming and accessibility patterns.

---

### Icon

Props

- `name?: string` — semantic icon name (e.g. `check`, `close`) — provides a small set of built-in glyphs.
- `size?: 'sm' | 'md' | 'lg' | number` — icon size in pixels or named sizes (default: `md`).
- `ariaLabel?: string` — accessible label (if present role is `img`).

Example

```svelte
<Icon name="check" size="lg" ariaLabel="Success" />
<Icon name="close" />
```

---

### Form

Props & Events

- `onSubmit?: (data) => void` — optional callback prop invoked with a key/value object from form inputs on submit.
- Emits a `submit` CustomEvent with `detail` containing the collected form data.
- `class?: string` — extra CSS classes applied to the form wrapper.

Usage

```svelte
<Form on:submit={(e) => console.log(e.detail)}>
	<TextInput name="fullName" placeholder="Full name" />
	<Button type="submit">Submit</Button>
</Form>
```

---

### Pattern

Props

- `variant?: 'dots' | 'grid' | 'stripes'` — visual pattern variant (default `dots`).
- `size?: 'sm' | 'md' | 'lg'` — pattern height variant.
- `class?: string` — extra classes.

Example

```svelte
<Pattern variant="grid" size="md" />
```
