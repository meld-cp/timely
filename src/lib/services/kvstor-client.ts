export class KvStorClient {
	constructor(
		public remote: string,
		public userId: string,
		public appId: string,
		public bucketId: string
	) {}

	private buildUrl( key: string ):URL {
		return new URL(`${this.remote}/${this.userId}/${this.appId}/${this.bucketId}/${key}`);
	}

	public async getItem( key: string ):Promise<string> {
		const url = this.buildUrl(key);
		const res = await fetch(url,{
			mode: "no-cors"
		});
		return await res.text();
	}

	public async setItem( key: string, value: string ):Promise<void> {
		const url = this.buildUrl(key);
		const res = await fetch(url, {
			method: "PUT",
			body: value,
			// mode: "no-cors"
		});
	}
}