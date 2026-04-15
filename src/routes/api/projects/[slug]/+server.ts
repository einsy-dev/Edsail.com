import prisma from '$prisma';
import { json } from '@sveltejs/kit';

export async function GET({ request, params }) {
	try {
		let slug = params.slug;

		let res = await prisma.project.findFirst({ where: { slug } });

		return json(res, { status: 200 });
	} catch (error) {}
}
