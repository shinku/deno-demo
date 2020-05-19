

 const run = ()=>{
     let _process = Deno.run({
        cmd: ["deno", "run","--allow-net","--allow-read","index.ts"],
        cwd:"app",
        env:{"env":"development"},
        stdout: "piped",
     });
     return _process;
 }
 let _porcess = run();
const watcher = Deno.watchFs("./app");
for await (const event of watcher) {
     // { kind: "create", paths: [ "/foo.txt" ] }
     console.log('kill proceess');
     _porcess.close();
     console.log('restart');
     _porcess= run();
}
