import { ProjectService } from '$services';
import { ProjectCreateSchema, type ProjectCreateSchemaI } from '$lib/zod';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	try {
		const body = await ProjectService.request(request);

		const data: ProjectCreateSchemaI = ProjectCreateSchema.parse(body);
		let res = await ProjectService.create(data);

		return json(res, { status: 200 });
	} catch (err: any) {
		const message =
			err.meta?.driverAdapterError?.cause?.originalMessage ||
			err.message ||
			'An unexpected error occurred';

		return json({ message }, { status: 400 });
	}
}
