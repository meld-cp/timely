export class KvStorClient {
	constructor(
		public remote: string,
		public userId: string,
		public appId: string,
	) {}

	private buildItemUrl( bucketId: string, key: string ):URL {
		return new URL(`${this.remote}/${this.userId}/${this.appId}/${bucketId}/${key}`);
	}

	private buildListUrl( bucketId: string ):URL {
		return new URL(`${this.remote}/${this.userId}/${this.appId}/${bucketId}/`);
	}

	public async getItemList( bucketId: string ):Promise<{ key:string, value:string }[]> {
		const url = this.buildListUrl( bucketId);
		//console.debug(url);
		const res = await fetch(url);
		const json = await res.json();
		
		
		return json as { key:string, value:string }[];
	}

	public async getItem( bucketId: string, key: string ):Promise<string> {
		const url = this.buildItemUrl( bucketId, key );
		const res = await fetch(url);
		return await res.text();
	}

	public async setItem( bucketId: string, key: string, value: string ):Promise<void> {
		const url = this.buildItemUrl( bucketId, key);
		const _ = await fetch(url, {
			method: "POST",
			body: value,
		});
	}

	public async delItem( bucketId: string, key: string ):Promise<void> {
		const url = this.buildItemUrl( bucketId, key );
		const _ = await fetch(url,{ method: "DELETE" });
	}
}