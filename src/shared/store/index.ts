import { Users, Newspaper, LayoutGrid, Box, type LucideProps } from '@lucide/svelte';
import type { Component, Snippet } from 'svelte';
import { writable } from 'svelte/store';

export type SidebarState = {
	active: boolean;
	menu: {
		title: string;
		path: string;
		items?: { title: string; path: string; icon: Component<LucideProps> }[];
	}[];
};

export const sidebarStore = writable<SidebarState>({
	active: false,
	menu: [
		{
			title: 'Admin',
			path: '/admin',
			items: [
				{ title: 'Blog', path: '/admin/blog', icon: Users },
				{ title: 'Blog', path: '/admin/blog', icon: Newspaper },
				{ title: 'Projects', path: '/admin/projects', icon: LayoutGrid },
				{ title: 'Services', path: '/admin/services', icon: Box }
			]
		},
		{
			title: 'Admin',
			path: '/admin',
			items: [
				{ title: 'Blog', path: '/admin/blog', icon: Newspaper },
				{ title: 'Projects', path: '/admin/projects', icon: LayoutGrid },
				{ title: 'Services', path: '/admin/services', icon: Box }
			]
		},
		{
			title: 'Admin',
			path: '/admin',
			items: [
				{ title: 'Blog', path: '/admin/blog', icon: Newspaper },
				{ title: 'Projects', path: '/admin/projects', icon: LayoutGrid },
				{ title: 'Services', path: '/admin/services', icon: Box }
			]
		}
	]
});

export type TocState = {
	title: string;
	path: string;
	items?: { title: string; path: string }[];
}[];

export const tocStore = writable<TocState>([
	{
		title: 'Users',
		path: '/admin/users',
		items: [
			{ title: 'Users2', path: '/admin/users' },
			{ title: 'Users3', path: '/admin/users' },
			{ title: 'Users4', path: '/admin/users' }
		]
	},
	{ title: 'Blog', path: '/admin/blog' },
	{ title: 'Projects', path: '/admin/projects' },
	{ title: 'Services', path: '/admin/services' }
]);

export const headerHeight = writable<number>();
