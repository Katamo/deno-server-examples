// router.ts
export type CallbackHandlerType = (
  request: Request,
  params:Record<string, string>
) => Promise<Response>;

export type Route = {
  pattern: URLPattern;
  handler: CallbackHandlerType;
}

export default class Router {
  #routes:Record<string, Array<Route>> = {
    'GET': [],
    'POST': [],
  }
  
  add(method: string, pathname:string, handler: CallbackHandlerType) {
    this.#routes[method].push({pattern: new URLPattern({pathname}), handler});
  }
  
  async route(req: Request):Promise<Response> {
    for(const route of this.#routes[req.method]) {
      if(route.pattern.test(req.url)) {
        const routePattern = route.pattern.exec(req.url);
        if (!routePattern) return new Response(null, {status:404});

        const params=routePattern?.pathname.groups;
        return await route['handler'](req, params);
      }
    }
    return new Response(null, {status:404});
  }
}