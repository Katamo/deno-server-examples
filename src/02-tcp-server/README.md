# Basic TCP Server up and running

This example will explain how to raise the most basic TCP server, which also accepts incomming messages.

## How to

* To launch the example run:
  `deno run --allow-net=:8000 src/02-tcp-server/index.ts`
  This will open the tcp server accepting connections on port 8000

* To send incoming data to TCP server, just open terminal
  `echo "hola from terminal" | nc localhost 8000`
  The server will receive and process the buffer data then showing up the result to the console.

## Additional info
[About TCP and HTTPServer](https://www.oreilly.com/library/view/http-the-definitive/1565925092/ch04s01.html)
[TCP client](https://medium.com/deno-the-complete-reference/deno-nuggets-tcp-client-c970ba83c5ff)
