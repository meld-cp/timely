export class LocalStorageController<T>{

	private bucket:string;

	constructor( bucket:string ){
		this.bucket = bucket;
	}

	private encode( value:T) : string {
		return JSON.stringify(value);
	}

	private dencode( data:string ) : T | null {
		return JSON.parse(data) as T;
	}

	private buildBucketKey( id:string ): string {
		return [this.bucket, id].join("$");
	}

	private matchesBucketKey( key:string):boolean{
		return key.startsWith( this.bucket + "$" );
	}
	
	public set( id:string, value: T ){
		const key = this.buildBucketKey(id);
		const data = this.encode(value);
		localStorage.setItem( key, data );
	}

	public get( id:string, variant?:string ):T | null{
		const key = this.buildBucketKey(id);
		return this.getWithKey(key)
	}

	public getWithKey( key:string ):T | null{
		const data = localStorage.getItem( key );
		if (data === null){
			return null;
		}
		return this.dencode(data)
	}

	public getAll():T[]{
		const result:T[] = [];

		for (let i = 0; i < localStorage.length; i++) {
			
			const key = localStorage.key(i);
			if ( key == null ){
				return result;
			}
			if (!this.matchesBucketKey(key)){
				continue;
			}
			const item = this.getWithKey( key )
			if (!item){
				continue;
			}
			result.push( item );
		}
		return result;
	}

	public remove(id:string){
		const key = this.buildBucketKey(id);
		localStorage.removeItem( key );
	}

	removeAll() {
		const keysToRemove = []
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			if ( key == null ){
				break;
			}
			if (!this.matchesBucketKey(key)){
				continue;
			}
			keysToRemove.push(key)
		}
		
		for (const key of keysToRemove) {
			localStorage.removeItem( key );
		}
	}

}