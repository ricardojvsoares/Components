Publishing this package

1. Prepare package.json

- Set "private": false
- Add a proper "name" (e.g., @your-scope/components)
- Add "repository", "author", "license" fields
- Add "files": ["dist", "README.md"]
- Optionally add "types" pointing to generated types

2. Build

- Run: pnpm run build:lib
- Confirm `dist/` contains `components.es.js` and `components.cjs.js`

3. Publish

- Login: npm login
- Publish: npm publish --access public

4. Optional: generate docs

- Use sveld (if installed) or commit simple markdown docs under `docs/`

Notes

- This repo prefers pnpm. Run `pnpm install` to install deps.
- Keep `svelte` as a peerDependency in your published package if you expect consumers to provide it.
