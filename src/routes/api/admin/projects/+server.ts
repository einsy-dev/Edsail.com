import prisma from '$prisma';
import { ProjectCreateSchema, ProjectSchema } from '$zod/project.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	let body = await request.formData();
	console.log(body);
	// let data = ProjectCreateSchema.parse(body);

	// const res = await prisma.project.create({ data });
	// console.log(res);
	return json(body);
}
