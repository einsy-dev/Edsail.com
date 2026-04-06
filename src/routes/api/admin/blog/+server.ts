import { json } from '@sveltejs/kit';

export async function GET() {
	return json({ message: 'Hello from the server!' });
}

export async function POST({ request }) {
	const { name } = await request.json();
	return json({ greeting: `Hello, ${name}!` }, { status: 201 });
}
