export class LocalStorageController<T>{

	constructor(
		private bucket:string,
		public options?:{ onModifiedCallback?: () => void }
	){
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

	private matchesBucketItemKey( key:string):boolean{
		return (
			key.startsWith( this.bucket + "$" )
		);
	}
	
	private setChangedTimestamp(){
		if (this.options?.onModifiedCallback != undefined){
			this.options.onModifiedCallback();
		}
	}
	
	public set( id:string, value: T ){
		const key = this.buildBucketKey(id);
		const data = this.encode(value);
		localStorage.setItem( key, data );
		this.setChangedTimestamp();
	}

	public get( id:string ):T | null{
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
			if (!this.matchesBucketItemKey(key)){
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
		this.setChangedTimestamp();
	}

	removeAll() {
		const keysToRemove = []
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			if ( key == null ){
				break;
			}
			if (!this.matchesBucketItemKey(key)){
				continue;
			}
			keysToRemove.push(key)
		}
		
		if (keysToRemove.length == 0){
			return;
		}

		for (const key of keysToRemove) {
			localStorage.removeItem( key );
		}
		
		this.setChangedTimestamp();
	}

}