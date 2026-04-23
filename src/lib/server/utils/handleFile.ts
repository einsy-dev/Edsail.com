import * as fs from 'fs';
import path from 'path';

export async function handleFile(id: string, file: File): Promise<string> {
	if (typeof file.arrayBuffer !== 'function') return '';
	const bytes = await file.arrayBuffer();
	const buffer = Buffer.from(bytes);

	const dirPath = path.join('./static/', id);
	const filePath = path.join('./static/', id, file.name);

	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}

	fs.writeFileSync(filePath, buffer);
	return '/' + id + '/' + file.name;
}
