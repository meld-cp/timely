export class LocalStorageController{

    private bucket:string;

    constructor( bucket:string ){
        this.bucket = bucket;
    }

    private encode<T>( value:T) : string {
        return JSON.stringify(value);
    }

    private dencode<T>( data:string ) : T | null {
        return JSON.parse(data) as T;
    }

    private buildKey( id:string ): string {
        return [this.bucket,id].join("$");
    }

    set<T>( id:string, value: T){
        const key = this.buildKey(id);
        const data = this.encode(value);
        localStorage.setItem( key, data );
    }

    get<T>(id:string ):T | null{
        const key = this.buildKey(id);
        const data = localStorage.getItem( key );
        if (data === null){
            return null;
        }
        return this.dencode<T>(data)
    }

    remove(id:string){
        const key = this.buildKey(id);
        localStorage.removeItem( key );
    }
}