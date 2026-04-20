import type { Snippet } from 'svelte';
import { writable } from 'svelte/store';

export type MenuItemI = {
	value: string;
	callback: (value: string) => void;
	subMenu?: Omit<MenuItemI, 'subMenu'>;
};

export type MenuIconI = { icon: Snippet; callback: () => void };

export type MenuI = { active: boolean; list?: MenuItemI[]; icons?: MenuIconI[] };

export const defaultMenu = { active: false, list: [], icons: [] };

export const menu = writable<MenuI>({ ...defaultMenu });
