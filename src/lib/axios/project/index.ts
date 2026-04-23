import { $authHost } from '$axios';
import type { ProjectSchemaI } from '$lib/zod';

class AxiosProject {
	#host = $authHost;

	async get(slug: string) {
		let { data } = await this.#host.get('projects/' + slug);

		return data;
	}

	async getAll(): Promise<ProjectSchemaI[]> {
		let { data } = await this.#host.get('projects');

		return data;
	}

	async create(payload: { [key: string]: any }) {
		let { data } = await this.#host.post('admin/projects/create', handleForm(payload));
		return data;
	}

	async update(slug: string, payload: { [key: string]: any }) {
		let { data } = await this.#host.put('admin/projects/' + slug, handleForm(payload));
		return data;
	}

	async hide(id: string) {}

	async delete(id: string) {
		return await this.#host.delete('admin/projects/' + id);
	}
}

export const Project = new AxiosProject();

function handleForm(payload: { [key: string]: any }) {
	const formData = new FormData();

	for (let key in payload) {
		if (key == 'images') {
			payload[key].forEach((f: File | string) => f != '' && formData.append(key, f));
			continue;
		}
		formData.append(key, payload[key]);
	}
	return formData;
}
