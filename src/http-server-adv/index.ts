import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { emit } from "https://deno.land/x/emit/mod.ts";
import Router, {CallbackHandlerType} from './router.ts';

const jsBundlePath = "my-file.ts";

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SERVER is serving javascript</title>
    <script type="module" src="${jsBundlePath}"></script>
</head>
<body>
    <div id="root">
    </div>
</body>
</html>`;


const getIndex:CallbackHandlerType = async (
  req: Request,
  params:Record<string, string>
  ) : Promise<Response> => {
    return await new Response(
      html, {
        headers: {
          "content-type": "text/html",
        },
      }
    );
};

const getBundleFile = async (
  req: Request,
  params:Record<string, string>
) : Promise<Response> => {
  const url = new URL("my-file.ts", import.meta.url);
  const result = await emit(url.pathname);

  return await new Response(
    result[url.href],
    {
      headers: {
        "content-type": "application/javascript",
      },
    }
  );
}

const router=new Router();
router.add('GET', '/', getIndex);
router.add('GET', `/${jsBundlePath}`, getBundleFile);

async function reqHandler(req: Request) {
  return await router.route(req);
}

serve(reqHandler, { port: 8000 });