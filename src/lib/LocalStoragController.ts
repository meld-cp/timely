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

    private buildKey( id:string ): string {
        return [this.bucket,id].join("$");
    }

    set( id:string, value: T){
        const key = this.buildKey(id);
        const data = this.encode(value);
        localStorage.setItem( key, data );
    }

    get(id:string ):T | null{
        const key = this.buildKey(id);
        const data = localStorage.getItem( key );
        if (data === null){
            return null;
        }
        return this.dencode(data)
    }

    remove(id:string){
        const key = this.buildKey(id);
        localStorage.removeItem( key );
    }
}