import type { SidebarRoute } from '$widgets/sidebar/sidebar';

const routes: SidebarRoute[] = [
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

export const headerRoutes: SidebarRoute[] = routes.map(({ title, path }) => ({ title, path }));

export function getRoutes(url: string): SidebarRoute[] {
	return routes.find((route) => url.includes(route.path))?.items || [];
}
