import type { Snippet } from 'svelte';
import { writable } from 'svelte/store';

type TocStateData = {
	title: string;
	path: string;
	items?: Omit<TocStateData, 'items'>[];
};

export type TocStateT = {
	data: TocStateData[];
	children?: Snippet | Snippet[];
};
export const tocState = writable<TocStateT>({
	data: []
});
