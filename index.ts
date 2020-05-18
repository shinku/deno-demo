//import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {oak} from './lib/index.ts';
import { index } from "./controllers/index.ts";
import _static from "./utils/static.ts";
//console.log({static});
const { Application, Router } = oak;
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