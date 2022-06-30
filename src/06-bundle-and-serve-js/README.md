# Bundle and serve a javascript file

Deno can launch a bundling process from any script running.
That's really useful cause you can generate files on the fly to be served via HTTPRequest.
This time we will see how to bundle and serve a javascript file.
The example will get the js file `(my-file.ts)` compile the file and serve as an asset through the http server.


## How to
* To launch the example run:
  `deno run --allow-all src/05-bundle-and-serve-js/index.ts`
  This will open the http server accepting connections on port 8000 to serve you js files built on the fly.


### Notes
Prior to Deno version 1.22 there was a method `Deno.emit` but is has been deprecated in favor of the utility emit, examples found on internet will not work if you have installed a version above 1.22.
This example uses the new utility module `emit`

(Bundle options)[https://doc.deno.land/https://deno.land/x/emit@0.0.1/mod.ts/~/BundleOptions]
(Compiler options)[https://doc.deno.land/https://deno.land/x/emit@0.0.1/mod.ts/~/CompilerOptions]