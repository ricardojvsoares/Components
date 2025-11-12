Contributing guidelines

- Always add a demo page or story for any new component under `src/routes/components-demo`.
- Add unit tests in `src/lib/components/__tests__/` using Vitest + @testing-library/svelte.
- Run formatter before committing:
  - `pnpm run format` (or `npm run format` if using npm)
- Commit messages should be focused and small (e.g., `feat: add IconButton`, `test: add IconButton tests`).

Pre-commit hooks

- We recommend setting up husky + lint-staged to run `npm run format` and tests before commit. (I can add the config but will not install husky without your permission.)
