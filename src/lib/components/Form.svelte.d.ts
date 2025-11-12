import type { SvelteComponentTyped, SvelteHTMLElements } from 'svelte';

type FormDataMap = Record<string, FormDataEntryValue>;

type NativeFormProps = SvelteHTMLElements['form'];

export interface FormProps extends Omit<NativeFormProps, 'onsubmit'> {
	onSubmit?: (data: FormDataMap) => void;
}

export default class Form extends SvelteComponentTyped<
	FormProps,
	{
		submit: CustomEvent<FormDataMap>;
	},
	{
		default: Record<string, unknown>;
	}
> {}
