# Server Side Render JSX - (SSR) with no hydration

This example covers the REACT rendering on server without hydration on client.

The app will render an <App> component before sending it to the client as a response.
The code related to the component will not be delivered to client, for example events and callbacks attached to a button.

## How to

* To launch the example run:
  `deno run --allow-net=:8000 src/06-ssr-jsx-no-hydration/index.jsx`

* Then navigate to `http://localhost:8000`
