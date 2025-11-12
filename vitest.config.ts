import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const sveltePlugin = svelte({ hot: !!process.env.VITEST ? false : true });

export default defineConfig({
	plugins: [sveltePlugin],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './vitest.setup.ts',
		include: ['src/**/*.spec.{js,ts}', 'src/**/*.test.{js,ts}']
	}
});
