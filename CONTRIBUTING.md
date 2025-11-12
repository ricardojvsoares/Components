Contributing guidelines

- `pnpm run format` (or `npm run format` if using npm)

Pre-commit hooks

Installing from GitHub

If you want to test components from this repo in other projects without publishing to npm, you can install directly from GitHub:

```bash
pnpm add github:ricardojvsoares/Components
# or
npm install github:ricardojvsoares/Components
```

Import the Svelte files directly from the package path (the package ships `src/lib` files):

```svelte
<script>
	import Button from 'my-awesome-components/src/lib/components/Button.svelte';
</script>
```
