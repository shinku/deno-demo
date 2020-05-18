import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { index } from "./controllers/index.ts";
import _static from "./utils/static.ts";
//console.log({static});
const books = new Map<string, any>();


const router = new Router();

router
  .get("/", (context) => {
    context.response.body = "Hello shin!";
  })
  const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
app.use(_static);
app.listen({ port: 8000 }).then(_res=>{
  console.log({_res});
});