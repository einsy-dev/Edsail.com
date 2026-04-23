import type { ProjectCreateSchemaI, ProjectSchemaI } from '$lib/zod';
import prisma from '$server/prisma';
import type { One } from '$types';
import { parseRequest } from '$server/utils';

class ProjectService {
	request = parseRequest;

	create(data: ProjectCreateSchemaI) {
		return prisma.project.create({ data });
	}

	get(params: Partial<Pick<ProjectSchemaI, 'id' | 'slug'>>) {
		return prisma.project.findFirst({ where: params });
	}

	getAll() {
		return prisma.project.findMany();
	}

	update(params: One<Pick<ProjectSchemaI, 'id' | 'slug'>>, data: ProjectSchemaI) {
		return prisma.project.update({ where: params, data });
	}

	delete(params: One<Pick<ProjectSchemaI, 'id' | 'slug'>>) {
		return prisma.project.delete({ where: params });
	}
}

export default new ProjectService();
