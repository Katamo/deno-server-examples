# Info for Deno topic

These are a few examples about how Deno works.

They implement common server solutions mostly in vanilla style.  
They increase difficulty adding features or solving more elaborated problems.  
Each example has is own Readme.md inside the folder. Please refer to that file for further details.

# Installation

To install Deno just

```bash
curl -fsSL https://deno.land/x/install/install.sh | sudo DENO_INSTALL=/usr/local sh
```

---

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

---

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

---

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
---

# Bundling for the Web
The output of deno bundle is intended for consumption in Deno and not for use in a web browser or other runtimes. That said, depending on the input it may work in other environments.

**If you wish to bundle for the web, we recommend other solutions such as esbuild.**

---