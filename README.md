# Info for Deno topic

These are a few examples about how Deno works.

They implement common server solutions mostly in vanilla style.  
They increase difficulty adding features or solving more elaborated problems.  
Each example has is own Readme.md inside the folder. Please refer to that file for further details.

# What is Deno?

Deno is the natural evolution of Node, developed by the creator of Node Ryan Dahl.
Like Node, Deno is a javascript runtime based on the V8 engine from chrome.
It shares the same ecosystem but with a few great advantages over Node.

- **Typescript** it sses Typescript by default. (no more type errors on runtime)
- **Rust** Written in Rust. (Optimiced Multi threading, new event-loop, optimized Garbage Collection, memory heap allocation...)
- **Dependencies** Does not use centralized package repository (bye bye NPM https://deno.land/x) 
- **Isomorphism** I mean real Isomorphism (remember document is not defined in node?)
- **Modules** Native modules (we dont need require() anymore )
- **Security** Secure by default ( we must allow scripts to use the resources, like net access, filesystem...)

# Deno also includes

- Bundler
- Executable Bundler app to binary (not fully optimiced ATM)
- Linter
- Testing API
- Source mapping
- Cheap JSX
- Integration with IDEs and command line through Language server
  https://deno.land/manual/language_server/overview


# Installation

To install Deno just

```bash
curl -fsSL https://deno.land/x/install/install.sh | sudo DENO_INSTALL=/usr/local sh
```


# Integrate it with your IDE

Deno has an eye on productivity, that means it includes an easy way to integrate the process with IDEs and CI tools.
through language serve.

For example if you want to use Linter an Typescript in your VSCODE project, just install the extension and add.

```json
{
  "deno.config": ".tsconfig.json",
  "deno.enable": true,
  "deno.lint": true,
  "deno.unstable": true
}
```

**it also has integrations for VIM and oter IDEs**


# Use the Bundler
deno bundle [URL] will output a single JavaScript file for consumption in Deno, which includes all dependencies of the specified input. For example:

```bash
deno bundle https://deno.land/std@0.145.0/examples/colors.ts colors.bundle.js
```
will output

```bash
Bundle https://deno.land/std@0.145.0/examples/colors.ts
Download https://deno.land/std@0.145.0/examples/colors.ts
Download https://deno.land/std@0.145.0/fmt/colors.ts
Emit "colors.bundle.js" (9.83KB)
```

**If you omit the out file, the bundle will be sent to stdout.**


# Use the generated Bundle

The bundle can just be run as any other module in Deno would:

```bash
deno run colors.bundle.js
```
The output is a self contained ES Module, where any exports from the main module supplied on the command line will be available.

For example, if the main module looked something like this:

```ts
export { foo } from "./foo.js";

export const bar = "bar";
```

It could be imported like this:
```ts
import { bar, foo } from "./lib.bundle.js";
```

# Bundling for the Web
The output of deno bundle is intended for consumption in Deno and not for use in a web browser or other runtimes. That said, depending on the input it may work in other environments.

**If you wish to bundle for the web, we recommend other solutions such as esbuild.**
