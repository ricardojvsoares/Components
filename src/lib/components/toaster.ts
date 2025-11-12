import { writable } from 'svelte/store';

export type Toast = {
	id: number;
	message: string;
	type?: 'info' | 'success' | 'error';
	timeout?: number;
};

export const toasts = writable<Toast[]>([]);
let idSeq = 1;

export const toaster = {
	push: (message: string, opts: Partial<Toast> = {}) => {
		const t: Toast = {
			id: idSeq++,
			message,
			type: opts.type || 'info',
			timeout: opts.timeout ?? 4000
		};
		toasts.update((s) => [t, ...s]);
		if (t.timeout)
			setTimeout(() => {
				toasts.update((s) => s.filter((x) => x.id !== t.id));
			}, t.timeout);
		return t.id;
	}
};
