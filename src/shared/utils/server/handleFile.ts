import * as fs from 'fs';
import path from 'path';

export async function handleFile(file: File): Promise<string> {
	if (typeof file.arrayBuffer !== 'function') return '';
	const bytes = await file.arrayBuffer();
	const buffer = Buffer.from(bytes);

	const filePath = path.join('./static/test/', file.name);

	fs.writeFileSync(filePath, buffer);
	return `/test/${file.name}`;
}
