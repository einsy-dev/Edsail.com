import prisma from '$prisma';
import type { One } from '$shared/types/route';
import type { ProjectCreateSchemaI, ProjectSchemaI } from '$lib/zod';
import { parseRequest } from './parseRequest';

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
}

export default new ProjectService();
