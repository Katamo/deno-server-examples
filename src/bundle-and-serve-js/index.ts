import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { emit } from "https://deno.land/x/emit/mod.ts";

// compose the file path relative to the location of this file
const url = new URL("my-file.ts", import.meta.url);

const result = await emit(url.pathname);
// result is an object with the following properties:
// {
//   [url.href]: "exported-file",
// }

const myFile = result[url.href];


function handler() {
    return new Response(myFile, {
    headers: {
      "content-type": "application/javascript",
    },
  });
}

serve(handler);


