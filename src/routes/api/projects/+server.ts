import { ProjectService } from '$services';
import { json } from '@sveltejs/kit';

export async function GET({ request }) {
	const res = await ProjectService.getAll();

	return json(res, { status: 200 });
}
