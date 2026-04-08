import { writable } from 'svelte/store';

export type TocStateT = {
	title: string;
	path: string;
	items?: Omit<TocStateT, 'items'>[];
};
export const tocState = writable<TocStateT[]>([]);
