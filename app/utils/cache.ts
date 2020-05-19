export class StaticCache {
    static _map :Map<string,string | ArrayBuffer > = new Map<string,string | ArrayBuffer >();
    static set(name:string,content:string | ArrayBuffer){
        StaticCache._map.set(name,content);
    }
    static get(name:string):string | ArrayBuffer | undefined {
        return  StaticCache._map.get(name);
    }
}