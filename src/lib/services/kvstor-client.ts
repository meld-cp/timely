export class KvStorClient {
	constructor(
		public remote: string,
		public userId: string,
		public appId: string,
	) {}

	private buildUrl( bucketId: string, key: string ):URL {
		return new URL(`${this.remote}/${this.userId}/${this.appId}/${bucketId}/${key}`);
	}

	public async getItem( bucketId: string, key: string ):Promise<string> {
		const url = this.buildUrl( bucketId, key );
		const res = await fetch(url);
		return await res.text();
	}

	public async setItem( bucketId: string, key: string, value: string ):Promise<void> {
		const url = this.buildUrl( bucketId, key);
		const res = await fetch(url, {
			method: "POST",
			body: value,
		});
	}
}