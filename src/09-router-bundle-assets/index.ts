import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { emit } from "https://deno.land/x/emit@0.2.0/mod.ts";
import Router, {CallbackHandlerType} from './router.ts';

const jsBundlePath = "my-file.js";

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SERVER is serving javascript</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script type="module" src="${jsBundlePath}"></script>
</head>
<body>
    <div id="root">
      <div id="like_button_container"></div>
    </div>
</body>
</html>`;

const getIndex:CallbackHandlerType = async (
  _req: Request,
  _params:Record<string, string>
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
  _req: Request,
  _params:Record<string, string>
) : Promise<Response> => {
  const url = new URL(jsBundlePath, import.meta.url);
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

const router = new Router();
router.add('GET', '/', getIndex);
router.add('GET', `/${jsBundlePath}`, getBundleFile);

async function reqHandler(req: Request) {
  return await router.route(req);
}

serve(reqHandler);