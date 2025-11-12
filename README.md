# Component Library

This repository contains a small Svelte 5 component library.

````markdown
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

## Package / GitHub install

This repo can be installed directly from GitHub without publishing to the npm registry. The repository root contains a `package.json` that limits files to `src/lib` so consumers only download component sources.

Install directly from GitHub (replace with your username/repo if different):

```bash
# pnpm
pnpm add github:ricardojvsoares/Components

# npm
npm install github:ricardojvsoares/Components
```
````

Importing

After installing the package from GitHub, import the Svelte files directly from the package path. Because this repo ships `src/lib` files, an import looks like:

```svelte
<script>
	import { Button } from 'rjcomponents/ui';
</script>

<Button>Click me</Button>
```

If you'd like nicer top-level paths (for example `rjcomponents/Button`), I can update `package.json` `exports` to map those names to the correct files.

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

## Publish notes

If you later want to publish a packaged artifact to npm, the `PUBLISHING.md` file includes steps. For local or private usage, installing from GitHub is a lightweight alternative.

## CI / Auto-publish

Add a GitHub Actions workflow to build & publish on new tag pushes. Use an `NPM_AUTH_TOKEN` secret to authenticate.

## Next steps I can do for you

- Update `package.json` `exports` for nicer import paths (recommended).
- Add `tsconfig.build.json` and a `build:types` script to emit declaration files.
- Inspect and, if needed, update `vite.lib.config.ts` to produce ESM + CJS outputs and a clean `dist/` layout.
- Add a GitHub Actions workflow to publish on tag.

Tell me which of those you want me to apply and I will proceed.

```

```
