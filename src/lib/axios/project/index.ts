import { $authHost } from '$axios';

class Project {
	#host = $authHost;

	async createProject(payload: { [key: string]: any }) {
		const formData = new FormData();

		for (let key in payload) {
			formData.append(key, payload[key]);
		}

		formData.forEach((value, key) => {
			console.log(`${key}:`, value);
		});

		let data = await this.#host.post('admin/projects', formData);
	}
}

export default new Project();
