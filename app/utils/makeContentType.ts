export default (filepath:string):string=>{
    let ext:string = filepath.substr(filepath.lastIndexOf("."));
    ext = ext.toLocaleLowerCase();

    if(ext.indexOf('.txt')>=0){
        return "text/plain"
    }
    if(ext.indexOf('.html')>=0){
        return "text/html"
    }
    if(ext.indexOf('.xml')>=0){
        return "text/xml"
    }
    if(ext.indexOf('.gif')>=0){
        return "image/gif"
    }
    if(ext.indexOf('.jpg')>=0 || ext.indexOf('.jpeg')>=0){
        return "image/jpeg"
    }
    if(ext.indexOf('.png')>=0){
        return "image/png"
    }
    if(ext.indexOf('.js')>=0){
       
        return "text/javascript"
    }
    if(ext.indexOf('.css')>=0){
        return "text/css"
    }
   
    return ext;
}