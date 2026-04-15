import { handleFile } from '$shared/utils/server/handleFile';

export async function parseRequest(request: Request) {
	const formData = await request.formData();
	const body = Object.fromEntries(formData) as any;

	const imageFiles = formData.getAll('images') as File[];
	const iconFile = formData.get('icon') as File;

	const [imagePaths, iconPath] = await Promise.all([
		Promise.all(imageFiles.map((f) => handleFile(f))),
		handleFile(iconFile)
	]);

	body.images = imagePaths;
	body.icon = iconPath;

	return body;
}
