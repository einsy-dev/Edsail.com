import { page } from '$app/state';
import type { Route } from '$shared/types/route';

const routes: Route[] = [
	{
		title: 'Admin',
		path: '/admin',
		items: [
			{
				title: 'Users',
				path: '/admin/users'
			},
			{
				title: 'Projects',
				path: '/admin/projects'
			},
			{
				title: 'Blog',
				path: '/admin/blog'
			},
			{
				title: 'Services',
				path: '/admin/services'
			}
		]
	},
	{
		title: 'Blog',
		path: '/blog'
	},
	{
		title: 'Services',
		path: '/services'
	},
	{
		title: 'Projects',
		path: '/projects'
	},
	{
		title: 'Contacts',
		path: '/contacts'
	}
];

export const headerRoutes: Route[] = routes.map(({ title, path }) => ({ title, path }));

export function getRoutes(url: string): Route[] {
	return routes.find((route) => url.includes(route.path))?.items || [];
}
