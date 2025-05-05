export class KvStorClient {
	
	private remoteUrl: URL;
	private userAndAppPathSegments: string[];
	
	constructor(
		remote: string,
		userId: string,
		appId: string,
	) {
		const url = URL.parse(remote);
		if (!url) {
			throw new Error(`Invalid remote URL: ${remote}`);
		}
		this.userAndAppPathSegments = [userId,appId];
		this.remoteUrl = url;
	}

	private buildFullRemoteUrl( paths:string[] ):URL {
		const url = new URL(this.remoteUrl);
		url.pathname = paths.join("/");
		return url;
	}

	private buildListUrl( bucketId: string ):URL {
		return this.buildFullRemoteUrl([...this.userAndAppPathSegments, bucketId]);
	}

	private buildItemUrl( bucketId: string, key: string ):URL {
		return this.buildFullRemoteUrl([...this.userAndAppPathSegments, bucketId, key]);
	}

	public async getItemList( bucketId: string ):Promise<{ key:string, value:string }[]> {
		const url = this.buildListUrl( bucketId);
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