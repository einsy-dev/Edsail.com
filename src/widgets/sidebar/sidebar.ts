import type { LucideProps } from '@lucide/svelte';
import type { Component, Snippet } from 'svelte';
import { writable } from 'svelte/store';

export type SidebarRoute = {
	title: string;
	path: string;
	icon?: Component<LucideProps>;
	items?: Omit<SidebarRoute, 'items'>[];
};

export type SidebarBlock = SidebarRoute[];

export interface SidebarI {
	active: boolean;
	blocks: SidebarBlock[];
	children?: Snippet[];
}

export const sidebarState = writable<SidebarI>({ active: false, blocks: [] });
