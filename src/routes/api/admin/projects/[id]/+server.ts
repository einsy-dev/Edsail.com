import { ProjectSchema, type ProjectSchemaI } from '$lib/zod';
import ProjectService from '$services/project';
import { json } from '@sveltejs/kit';

export async function PUT({ request, params }) {
	const body = await ProjectService.request(request);

	const data: ProjectSchemaI = ProjectSchema.parse(body);

	const res = await ProjectService.update({ slug: params.id }, data);
	return json(res, { status: 200 });
}

export async function GET({ request, params }) {
	const res = await ProjectService.get({ id: params.id });
	return json(res, { status: 200 });
}

export async function DELETE({ request, params }) {
	return json({});
}
