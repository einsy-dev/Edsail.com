import type { ProjectSchemaI } from '$lib/zod';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	let data: ProjectSchemaI[] = await fetch('/api/projects').then((res) => res.json());
	return { projects: data };
};
