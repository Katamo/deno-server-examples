# Server Side Render (SSR) use REACT
This example is similiar to SSR without hydration. This time we will use React to build a component and inject it to the server response.
The example will create an App component, transform it in a string with ReactDOMServer library and then append it to an HTML formated response.

Additionally we will cover the use of a `deps.ts` file to avoid add complete URLS on each call to imports.
The file will simpe creqate an alias for every imported URL block. Check it out!

## How to

* To launch the example run:
  `deno run --allow-net=:8000 src/ssr-react/index.tsx`

Notice this time again, the code generated is not hydrated in client, just the response is passed as a string.