import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
	plugins: [svelte()],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/lib/index.ts'),
			name: 'components',
			formats: ['es', 'cjs'],
			fileName: (format) => `components.${format}.js`
		},
		rollupOptions: {
			external: ['svelte'],
			output: {
				globals: {
					svelte: 'svelte'
				}
			}
		}
	}
});
