const serverTCP = Deno.listen({ port: 8000 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8000/`);

for await (const connection of serverTCP) {
  serveHttp(connection);
}

async function serveHttp(conn: Deno.Conn) {
  // This "upgrades" a network connection into an HTTP connection.
  const httpConn = Deno.serveHttp(conn);
  // Each request sent over the HTTP connection will be yielded as an async
  // iterator from the HTTP connection.
  for await (const requestEvent of httpConn) {
    // The native HTTP server uses the web standard `Request` and `Response`
    // objects.
    const body = `Your user-agent is:\n\n${
      requestEvent.request.headers.get("user-agent") ?? "Unknown"
    }`;
    // The requestEvent's `.respondWith()` method is how we send the response
    // back to the client.
    requestEvent.respondWith(
      new Response(body, {
        status: 200,
      }),
    );
  }
}