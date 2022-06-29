/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

// deno run --allow-net=:8000 src/ssr-render-no-hydration/index.tsx

import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

function App() {
  return (
    <html>
      <head>
        <title>Hello from JSX</title>
      </head>
      <body>
        <h1>Hello world</h1>
        <button onClick={() => console.log("clicked")}>Click me</button>
      </body>
    </html>
  );
}

function handler(req) {
  const html = renderSSR(<App />);

  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
}

serve(handler);
