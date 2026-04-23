import { handleFile } from '$server/utils';

export async function parseRequest(request: Request) {
	const formData = await request.formData();
	const body = Object.fromEntries(formData) as any;

	const imageFiles = formData.getAll('images') as (File | string)[];
	const iconFile = formData.get('icon') as File | string;

	const [imagePaths, iconPath] = await Promise.all([
		Promise.all(imageFiles.map((f) => (f instanceof File ? handleFile(body.id || 'new', f) : f))),
		iconFile instanceof File ? handleFile(body.id || 'new', iconFile) : iconFile
	]);

	body.images = imagePaths;
	body.icon = iconPath;

	return body;
}
