import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_BYPr7G_j.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/","cacheDir":"file:///C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/node_modules/.astro/","outDir":"file:///C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/dist/","srcDir":"file:///C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/","publicDir":"file:///C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/public/","buildClientDir":"file:///C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/dist/","buildServerDir":"file:///C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"components/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/components","isIndex":false,"type":"page","pattern":"^\\/components\\/?$","segments":[[{"content":"components","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/components.astro","pathname":"/components","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://holy-code.com/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/pages/components.astro",{"propagation":"none","containsHead":true}],["C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/components@_@astro":"pages/components.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CG1pHvvt.mjs","C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/node_modules/.pnpm/unstorage@1.16.0_@netlify+blobs@8.2.0/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:\\Users\\USER\\Documents\\Projects\\TheHolyCode\\porfolio\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\USER\\Documents\\Projects\\TheHolyCode\\porfolio\\.astro\\content-modules.mjs":"chunks/content-modules_DCE9k-oc.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CFv8U_0m.mjs","C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/node_modules/.pnpm/astro@5.11.0_@netlify+blobs_25fce5163f37b45de7688e6dab0f80da/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BkIABWUQ.mjs","C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/content/blog/el-arte-del-desarrollo-indie.mdx?astroPropagatedAssets":"chunks/el-arte-del-desarrollo-indie_6raWxNs5.mjs","C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/content/blog/mvp-vs-producto-completo.mdx?astroPropagatedAssets":"chunks/mvp-vs-producto-completo_V_nUuY4Y.mjs","C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/content/blog/transformando-ideas-en-productos-digitales.mdx?astroPropagatedAssets":"chunks/transformando-ideas-en-productos-digitales_Cow1-WoL.mjs","C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/content/blog/el-arte-del-desarrollo-indie.mdx":"chunks/el-arte-del-desarrollo-indie_BicdeK5M.mjs","C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/content/blog/mvp-vs-producto-completo.mdx":"chunks/mvp-vs-producto-completo_D-AkV87Q.mjs","C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/content/blog/transformando-ideas-en-productos-digitales.mdx":"chunks/transformando-ideas-en-productos-digitales_BvMsGZG2.mjs","C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BXBDewwT.js","C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/node_modules/.pnpm/astro@5.11.0_@netlify+blobs_25fce5163f37b45de7688e6dab0f80da/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/components/Header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const a=document.querySelectorAll(\"section\"),n=document.querySelectorAll(\"header nav a\"),c=t=>{t.forEach(s=>{s.isIntersecting&&n.forEach(e=>{e.getAttribute(\"aria-label\")==s.target.id?(e.classList.add(\"text-holy-action\"),e.classList.remove(\"text-holy-neutral\")):(e.classList.remove(\"text-holy-action\"),e.classList.add(\"text-holy-neutral\"))})})},o=new IntersectionObserver(c,{root:null,rootMargin:\"0px\",threshold:.3});a.forEach(t=>{o.observe(t)}),document.onvisibilitychange=()=>{document.visibilityState===\"hidden\"&&o.disconnect()}});"]],"assets":["/_astro/poppins-latin-400-normal.cpxAROuN.woff2","/_astro/poppins-devanagari-400-normal.CJDn6rn8.woff2","/_astro/poppins-latin-700-normal.Qrb0O0WB.woff2","/_astro/poppins-latin-ext-400-normal.by3JarPu.woff2","/_astro/poppins-latin-ext-600-normal.CAhIAdZj.woff2","/_astro/poppins-devanagari-600-normal.STEjXBNN.woff2","/_astro/inter-cyrillic-ext-600-normal.CaqZN2hq.woff2","/_astro/poppins-latin-600-normal.zEkxB9Mr.woff2","/_astro/inter-cyrillic-600-normal.BGBWG807.woff2","/_astro/poppins-latin-ext-700-normal.cby-RkWa.woff2","/_astro/inter-greek-ext-600-normal.Cnui8OiR.woff2","/_astro/poppins-devanagari-700-normal.O-jipLrW.woff2","/_astro/inter-latin-ext-600-normal.D2bJ5OIk.woff2","/_astro/inter-vietnamese-600-normal.Cc8MFFhd.woff2","/_astro/inter-latin-600-normal.LgqL8muc.woff2","/_astro/inter-cyrillic-ext-400-normal.Dc4VJyIJ.woff2","/_astro/inter-greek-600-normal.Dhlb-90d.woff2","/_astro/inter-cyrillic-400-normal.BLGc9T1a.woff2","/_astro/inter-vietnamese-400-normal.DMkecbls.woff2","/_astro/inter-greek-400-normal.DxZsaF_h.woff2","/_astro/inter-latin-ext-400-normal.C1nco2VV.woff2","/_astro/inter-greek-ext-400-normal.Bput3-QP.woff2","/_astro/inter-latin-400-normal.C38fXH4l.woff2","/_astro/poppins-latin-700-normal.BVuQR_eA.woff","/_astro/poppins-latin-400-normal.BOb3E3N0.woff","/_astro/poppins-devanagari-400-normal.CqVvlrh5.woff","/_astro/poppins-latin-ext-400-normal.DaBSavcJ.woff","/_astro/poppins-latin-ext-600-normal.Df5ffKXP.woff","/_astro/poppins-devanagari-600-normal.ClASKHrr.woff","/_astro/inter-cyrillic-ext-600-normal.t7rHAwBu.woff","/_astro/inter-cyrillic-600-normal.vZ-N8GHY.woff","/_astro/poppins-latin-600-normal.BJdTmd5m.woff","/_astro/poppins-latin-ext-700-normal.DctTR6Tg.woff","/_astro/inter-greek-ext-600-normal.CCFnzSpK.woff","/_astro/inter-latin-ext-600-normal.CIVaiw4L.woff","/_astro/inter-latin-600-normal.CiBQ2DWP.woff","/_astro/poppins-devanagari-700-normal.fHs-vx92.woff","/_astro/inter-vietnamese-600-normal.BuLX-rYi.woff","/_astro/inter-cyrillic-ext-400-normal.BE2fNs0E.woff","/_astro/inter-vietnamese-400-normal.Bbgyi5SW.woff","/_astro/inter-greek-400-normal.C3I71FoW.woff","/_astro/inter-greek-600-normal.BVGIV3oK.woff","/_astro/inter-latin-ext-400-normal.77YHD8bZ.woff","/_astro/inter-greek-ext-400-normal.XIH6-K3k.woff","/_astro/inter-latin-400-normal.CyCys3Eg.woff","/_astro/inter-cyrillic-400-normal.alAqRL36.woff","/_astro/_slug_.BhNZWe9E.css","/_astro/_slug_.PpFLOvHH.css","/favicon.svg","/holycode.webp","/me.webp","/porfolio.webp","/projects/kondominios.webp","/projects/mealmeat.webp","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/404.html","/blog/index.html","/components/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"qh7o2n9kAgbMMGERjB6qbb90DDavSzBnjyfwIiSJ3GU=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\USER\\Documents\\Projects\\TheHolyCode\\porfolio\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
