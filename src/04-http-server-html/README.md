# Deno HTTP Server
Deno has some helper libraries to manage an http server in a more efficient way. 
This example uses it, it builds a basic http server, that awaits for http connections returning an html page with useful info about the request. 

## How to

* To launch the example run:
  `deno run --allow-net=:8000 src/04http-server-html/index.ts`
  This will open the http server accepting connections on port 8000

* To check the server is up and accepting requests just open your browser and navigate to `http://localhost:8000`
  It will show an HTML page with the contents returned from the server conn.

* Additionally you can add some URL vars to see the results in the page.
  `http://localhost:8000?myvar=hello` 
  The page will show now the variables in the query parameters row.

## Test POST connection
The example is meant to create and test HTTP/GET connections. Anyway the exaple will work also for HTTP/POST connections. 
To test it, just type in your terminal:
`curl -d "param1=value1&param2=value2" -X POST http://localhost:8000`
The results will show the `Method: POST` in their response.
