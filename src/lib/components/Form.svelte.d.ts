import { SvelteComponentTyped } from 'svelte';

export interface FormProps {
	onSubmit?: (data: unknown) => void;
	class?: string;
}

export default class Form extends SvelteComponentTyped<
	FormProps,
	{ submit: CustomEvent<unknown> },
	{ default: Record<string, unknown> }
> {}
