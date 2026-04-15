class IDB {
	private dbName = 'IDB';
	private storeName = 'IDB';
	private version = 1;

	// Initialize and return the database instance
	private async getDB(): Promise<IDBDatabase> {
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(this.dbName, this.version);

			request.onupgradeneeded = (event) => {
				const db = (event.target as IDBOpenDBRequest).result;
				if (!db.objectStoreNames.contains(this.storeName)) {
					db.createObjectStore(this.storeName, { keyPath: 'id' });
				}
			};

			request.onsuccess = () => resolve(request.result);
			request.onerror = () => reject(request.error);
		});
	}

	async saveRecord(id: string, data: any) {
		const db = await this.getDB();

		// Transactions must be created at the time of the operation
		const transaction = db.transaction(this.storeName, 'readwrite');
		const store = transaction.objectStore(this.storeName);

		// Ensure the ID is part of the object if it's the keyPath
		const record = { ...data, id };
		store.put(record);

		return new Promise((resolve, reject) => {
			transaction.oncomplete = () => resolve(true);
			transaction.onerror = () => reject(transaction.error);

			// Optional: Close connection when done to prevent blocking updates
			transaction.oncomplete = () => {
				db.close();
				resolve(true);
			};
		});
	}

	async getRecord(id: string): Promise<any> {
		const db = await this.getDB();
		const transaction = db.transaction(this.storeName, 'readonly');
		const store = transaction.objectStore(this.storeName);
		const request = store.get(id);

		return new Promise((resolve, reject) => {
			request.onsuccess = () => resolve(request.result);
			request.onerror = () => reject(request.error);
		});
	}

	async deleteRecort(id: string): Promise<any> {
		const db = await this.getDB();
		const transaction = db.transaction(this.storeName, 'readwrite');
		const store = transaction.objectStore(this.storeName);
		const request = store.delete(id);

		return new Promise((resolve, reject) => {
			request.onsuccess = () => resolve(request.result);
			request.onerror = () => reject(request.error);
		});
	}
}

export default new IDB();
