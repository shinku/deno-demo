# deno-demo
denodemo with static

这是用deno 1.0 架设的一个静态站点。

编写了static 中间件处理静态资源的访问和缓存。

HOW TO RUN
```
deno run --allow-net --allow-read index.ts
```
开发阶段可以使用以下命令，起到热重启的功能
```shell
deno run --allow-net --allow-read --allow-run launch.ts
```
只需将你需要被访问的所有静态资源放置在 /static/ 目录下即可通过 ```HOST/{filepath}的方式去访问即可```
