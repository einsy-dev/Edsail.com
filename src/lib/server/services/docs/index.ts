import type { DocsCreateSchemaI, DocsSchemaI } from '$lib/zod';
import prisma from '$prisma';
import { parseRequest } from '$utils/server';

class DocsService {
	request = parseRequest;

	create(projectId: string, data: DocsCreateSchemaI) {
		return prisma.project.update({
			where: { id: projectId },
			data: { docs: { create: data.docs } }
		});
	}

	get(id: string) {
		return prisma.project.findFirst({ where: { id } });
	}

	update(id: string, data: DocsSchemaI) {
		return prisma.docs.update({ where: { id }, data });
	}

	delete(id: string) {
		return prisma.docs.delete({ where: { id } });
	}
}

export default new DocsService();
