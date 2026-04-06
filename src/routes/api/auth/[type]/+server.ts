import { UserLoginSchema } from '$zod/user.js';
import { json } from '@sveltejs/kit';

export async function POST({ request, params }) {
	const body = await request.json();
	try {
		UserLoginSchema.parse(body);
	} catch (err) {
		return json(err);
	}
	console.log(params, body);
	return json({ status: 201 }, { status: 201 });
}
