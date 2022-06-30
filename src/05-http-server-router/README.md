# HTTP Server with router
This examploe shows how to create and use a basic router to manage HTTP connections
The example uses a basic router class created to manage routes
It stores the routes by addin them to three different arrays based onHTTP request method GET or POST.
Thjen you can add routes the following way

`router(requestMethod, route, CallbackHandler)`
`router.add('GET', '/api/users/:userid', getUser);`

## How to 
* To launch the example run:
  `deno run --allow-net=:8000 --watch src/http-server-router/index.ts`
  This will open the http server accepting connections on port 8000
  Navigate through `http://localhost:8000/api/users/:userid` to see the results.

