# HTTP Server up and running
The http server is a layer over the most basic tcp server.
We will create an http-server the same way we would create a basic TCP server.

## How to
* To launch the example run:
  `deno run --allow-net=:8000 src/03-http-server/index.ts`
  This will open the http server accepting connections on port 8000 and returning back some data.
  In this case the server should return the user agent data received in the incomming message.

* To test that the server is up and accepting connections, just: 
  `curl localhost:8000`

* Additionally you can open a browser and navigate to `localhost:8000` 
  You should see on your browser screen the user-agent data related to your browser.
