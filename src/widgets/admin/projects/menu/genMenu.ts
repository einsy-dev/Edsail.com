import { goto } from '$app/navigation';
import { Project } from '$axios/project';
import type { MenuItemI } from '$widgets/menu/menu';

export function genMenu(id: string, slug: string): MenuItemI[] {
	return [
		{
			value: 'View',
			callback: () => {
				goto(`/projects/${slug}`);
			}
		},
		{
			value: 'Edit',
			callback: () => {
				goto(`projects/edit/${slug}`);
			}
		},
		{
			value: 'Hide',
			callback: () => {}
		},
		{
			value: 'Delete',
			callback: async () => {
				if (!id) return;
				return Project.delete(id);
			}
		}
	];
}
