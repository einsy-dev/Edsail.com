import { $authHost } from '..';

class User {
	#host = $authHost;

	async getStudents({ search_string = '' } = {}) {
		const data = await this.#host
			.get('/student', { params: { search_string } })
			.then(({ data: { records } }) => [records, null])
			.catch(() => [null, 'Не удалось получить студентов']);
		return data;
	}
}

export default new User();
