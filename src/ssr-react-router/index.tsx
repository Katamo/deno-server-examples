import {
  React,
  ReactDOMServer,
  Router,
} from "./deps.ts";



const app = Router()
  .get("/", (req, res) => {
    const html = ReactDOMServer.renderToString(
      <h1>Helllo world</h1>
    );
    res.status(200).send(`<!DOCTYPE html>${html}`);
  }).route();

for await (const req of server) {
  app(req, req.respond);
}

// const App = () => (
//   <div>this is APP Component</div>
// );

// const result = ReactDOMServer.renderToString(App());

// import { serve } from "https://deno.land/std@0.140.0/http/server.ts";


// function handler(req:any) {
//   const html =`
//     <html>
//       <head>
//         <title>Hello from http server</title>
//       </head>
//       <body>
//         ${result}
//       </body>
//     </html>`;

//     return new Response(html, {
//     headers: {
//       "content-type": "text/html",
//     },
//   });
// }

// serve(handler);
