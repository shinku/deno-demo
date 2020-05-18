import { StaticCache } from "./cache.ts";
import config from '../config/config.ts'
import makeContentType from "./makeContentType.ts";
export default async (context:any,next:Function)=>{
    await next();
    let {response,request} = context;
    const filenames= request.url.pathname.split('#');
    let filename:string = filenames[0];
    if(filename.lastIndexOf('/') == filename.length-1){
        //add default name
        filename+="index.html"
    }
        try{
            let contenttype =makeContentType(filename);
            if(contenttype) response.headers.set('content-Type', contenttype);
            if(StaticCache.get(filename)) {
                response.body = StaticCache.get(filename); 
                return;
            }
            let _static:string = config.static;
            try{
                const data = Deno.readFileSync(_static+filename);
                if(data.length == 0 || !data){
                    response.status = 404;
                    response.body = "file not exists";
                }else{
                    response.headers.set('isfresh', true);
                    StaticCache.set(filename,data);
                    response.body = data;
                }
            }
            catch(e){
                response.status = 404;
                response.body = "file not exists";
            }
           
        }
        catch(e){
            response.body = e.toString()
        }
        
}