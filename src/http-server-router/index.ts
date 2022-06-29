import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import Router, {CallbackHandlerType} from './router.ts';

const getUser:CallbackHandlerType =
  async (req: Request, params:Record<string, string>):Promise<Response> => {
    return await new Response(
      `get user handler ${JSON.stringify(params,null, 4)}\n\n`
    );

  }

const router=new Router();
router.add('GET', '/api/users/:userid', getUser);

async function reqHandler(req: Request) {
  return await router.route(req);
}

serve(reqHandler, { port: 8000 });