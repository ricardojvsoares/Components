# Component Library

This repository contains a small Svelte 5 component library.

What's included

- A neutral, mac-inspired Button component at `src/lib/components/Button.svelte`.
- An in-app demo route at `/components-demo` to preview components during development.
- A Vite library build config (`vite.lib.config.ts`) to build distributable artifacts.
- Unit tests with Vitest and @testing-library/svelte (basic Button tests).

How to run locally

- Install with pnpm (preferred): `pnpm install`
- Dev server: `pnpm run dev`

# RJComponents

RJComponents is a small, neutral Svelte 5 component library with accessible UI primitives implemented in Svelte 5 runes.

Included components (examples): Button, Toggle, Dropdown, Checkbox, Radio, TextInput, Loading, IconButton.

## Quickstart

Recommended: pnpm.

Install and run the demo locally:

```bash
pnpm install
pnpm run dev
```

Build the distributable library:

```bash
pnpm run build:lib
```

Run tests:

```bash
pnpm test
```

## Publish as `RJComponents`

Suggested package name (scoped): `@ricardojvsoares/rjcomponents`.

Before publishing:

- Update `package.json`: set `private: false`, `name`, `version`, `description`, `repository`, and `license`.
- Add `files` that should be published (e.g., `dist`, `README.md`, `LICENSE`).
- Add `peerDependencies`: `{ "svelte": "^5" }`.
- Add a `prepare` script to build the library before publish (e.g., `pnpm build:lib && pnpm run build:types`).

Publish steps (pnpm preferred):

```bash
pnpm install
pnpm build:lib
npm login   # only once, if needed
pnpm publish --access public
```

If you want TypeScript declarations included, generate them with `tsc --emitDeclarationOnly` or a bundler plugin and put them under `dist/types`.

## Usage after publish

```bash
pnpm add @ricardojvsoares/rjcomponents
```

Example (Svelte 5 runes):

```svelte
<script lang="ts">
	import { Button, Dropdown } from '@ricardojvsoares/rjcomponents';
	let choice = $state('');
</script>

<Button variant="primary">Click me</Button>
<Dropdown items={[{ label: 'A', value: 'a' }]} bind:value={choice} />
```

## CI / Auto-publish

Add a GitHub Actions workflow to build & publish on new tag pushes. Use an `NPM_AUTH_TOKEN` secret to authenticate.

## Next steps I can do for you

- Update `package.json` to the recommended fields (name, files, exports, peerDependencies).
- Add `tsconfig.build.json` and a `build:types` script to emit declaration files.
- Inspect and, if needed, update `vite.lib.config.ts` to produce ESM + CJS outputs and a clean `dist/` layout.
- Add a GitHub Actions workflow to publish on tag.

Tell me which of those you want me to apply and I will proceed.
