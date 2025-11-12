Publishing this package

1. Prepare package.json

- Set "private": false
- Add a proper "name" (e.g., @your-scope/components)
- Add "repository", "author", "license" fields
- Add "files": ["dist", "README.md"]
- Optionally add "types" pointing to generated types

````markdown
Publishing this package

1. Prepare package.json

- Set "private": false (only if you plan to publish to npm)
- Add a proper "name" (e.g., @your-scope/components)
- Add "repository", "author", "license" fields
- Add "files": ["dist", "README.md"] (for npm publishing)
- Optionally add "types" pointing to generated types

Note: you can skip publishing and let consumers install directly from GitHub (see README). Install from GitHub with:

```bash
pnpm add github:ricardojvsoares/Components
# or
npm install github:ricardojvsoares/Components
```
````

2. Build

- Run: pnpm run build:lib
- Confirm `dist/` contains `components.es.js` and `components.cjs.js`

3. Publish (optional)

- Login: npm login
- Publish: npm publish --access public

4. Optional: generate docs

- Use sveld (if installed) or commit simple markdown docs under `docs/`

Notes

- This repo prefers pnpm. Run `pnpm install` to install deps.
- Keep `svelte` as a peerDependency in your published package if you expect consumers to provide it.

```

```
