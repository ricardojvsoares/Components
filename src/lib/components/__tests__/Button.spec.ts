/// <reference types="vitest" />
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Button from '../Button.svelte';
describe('Button', () => {
	test('renders children content', () => {
		const { getByText } = render(Button, { slots: { default: 'Click me' } } as any);
		// avoid external jest-dom matcher; assert presence with a basic truthy check
		expect(getByText('Click me')).toBeTruthy();
	});

	test('shows spinner when loading', () => {
		const { container } = render(Button, {
			props: { loading: true },
			slots: { default: 'L' }
		} as any);
		expect(container.querySelector('.btn__spinner')).toBeTruthy();
	});
});
