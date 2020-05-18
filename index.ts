//import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {oak} from './lib/index.ts';
import { index } from "./controllers/index.ts";
import _static from "./utils/static.ts";
const { Application, Router } = oak;
const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello shin 1212121!";
  })
  const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_static);
console.log('start at point :8000');
app.listen({ port: 8000 });