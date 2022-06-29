// @deno-types="https://denopkg.com/soremwar/deno_types/react/v16.13.1/react.d.ts"
// import React from "https://jspm.dev/react@17.0.2";

// @deno-types="https://denopkg.com/soremwar/deno_types/react-dom/v16.13.1/server.d.ts"
//import ReactDOMServer from "https://jspm.dev/react-dom@17.0.2/server";
// @deno-types="https://denopkg.com/soremwar/deno_types/react-dom/v16.13.1/react-dom.d.ts"
// import ReactDOM from "https://jspm.dev/react-dom@17.0.2";
// import imageURLBuilder from "https://cdn.skypack.dev/@sanity/image-url@0.140.22";
// export {
//   BrowserRouter,
//   StaticRouter,
//   Link,
//   Route,
//   Switch,
// } from "https://cdn.skypack.dev/react-router-dom";
// export { React, ReactDOM, ReactDOMServer, imageURLBuilder };



import React from "https://esm.sh/react@next";
import ReactDOMServer from "https://esm.sh/react-dom@next/server";
import ReactDOM from "https://esm.sh/react-dom@next";
export {
  BrowserRouter,
  StaticRouter,
  Link,
  Route,
  Switch,
} from "https://esm.sh/react-router-dom@next";

export {
  Application,
  Router
} from 'https://deno.land/x/oak@v7.3.0/mod.ts';

export { React, ReactDOM, ReactDOMServer };