import { render } from '@testing-library/svelte';
import Button from '../Button.svelte';

describe('Button', () => {
	test('renders children content', () => {
		const { getByText } = render(Button, { slots: { default: 'Click me' } });
		expect(getByText('Click me')).toBeInTheDocument();
	});

	test('shows spinner when loading', () => {
		const { container } = render(Button, { props: { loading: true }, slots: { default: 'L' } });
		expect(container.querySelector('.btn__spinner')).toBeTruthy();
	});
});
