import { serve } from "https://deno.land/std@0.140.0/http/server.ts";


// deno-lint-ignore no-explicit-any
function handler(req:any) {
  const url = new URL(req.url);
  const searchParams = Array.from(Object(url.searchParams).entries()).join('\n');
  const headers = Array.from(Object(req.headers).entries()).join('<br>');

  const html =`
    <html>
      <head>
        <title>Hello from http server</title>
      </head>
      <body>
        <h1>Hello world from http server</h1>
        <h2>List of request params:</h2>
        <ul>
          <li>Method: ${req.method}</li>
          <li>Path: ${url.pathname}</li>
          <li>Query parameters: ${searchParams}</li>
          <li>Headers: ${headers}</li>
        </ul>
      </body>
    </html>`;

    return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
}

serve(handler);