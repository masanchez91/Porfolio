/* empty css                                  */
import { a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BYPr7G_j.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dth8npRg.mjs';
import { $ as $$SectionContainer } from '../chunks/SectionContainer_C3_hk2Tp.mjs';
import { g as getCollection } from '../chunks/_astro_content_RLJ52SLZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const featuredPost = sortedPosts[0];
  const recentPosts = sortedPosts.slice(1);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - The Holy Code | Desarrollo, Tecnolog\xEDa y Creatividad", "description": "Explora art\xEDculos sobre desarrollo indie, MVPs, tecnolog\xEDa y la filosof\xEDa detr\xE1s de The Holy Code. Reflexiones y aprendizajes de un desarrollador apasionado." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 md:py-24" }, { "default": async ($$result3) => renderTemplate`  <div class="max-w-4xl mx-auto text-center mb-16"> <h1 class="font-heading text-4xl md:text-5xl font-bold text-holy-text-primary mb-6">
Blog de The Holy Code
</h1> <p class="text-xl text-holy-neutral leading-relaxed max-w-2xl mx-auto">
Reflexiones sobre desarrollo, tecnología y creatividad. 
          Comparto experiencias, aprendizajes y la filosofía detrás de cada línea de código.
</p> </div>  ${featuredPost && renderTemplate`<section class="mb-16"> <h2 class="font-heading text-2xl font-semibold text-holy-text-primary mb-8">
Artículo Destacado
</h2> <article class="bg-holy-dark-secondary/30 backdrop-blur-sm rounded-2xl p-8 border border-holy-action/20 hover:border-holy-action/40 transition-all duration-300"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="space-y-6"> <div class="flex flex-wrap gap-2"> ${featuredPost.data.tags.map((tag) => renderTemplate`<span class="px-3 py-1 bg-holy-action/20 text-holy-action rounded-full text-sm">
#${tag} </span>`)} </div> <h3 class="font-heading text-2xl font-bold text-holy-text-primary"> <a${addAttribute(`/blog/${featuredPost.slug}`, "href")} class="hover:text-holy-action transition-colors"> ${featuredPost.data.title} </a> </h3> <p class="text-holy-neutral leading-relaxed"> ${featuredPost.data.description} </p> <div class="flex items-center gap-4 text-sm text-holy-text-secondary"> <span>${featuredPost.data.author}</span> <span>•</span> <time${addAttribute(featuredPost.data.pubDate.toISOString(), "datetime")}> ${featuredPost.data.pubDate.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> </div> <a${addAttribute(`/blog/${featuredPost.slug}`, "href")} class="inline-flex items-center gap-2 px-6 py-3 bg-holy-action hover:bg-holy-action/90 text-holy-text-primary rounded-full font-semibold transition-all duration-300 hover:scale-105">
Leer artículo
<span class="transform transition-transform group-hover:translate-x-1">→</span> </a> </div> ${featuredPost.data.heroImage && renderTemplate`<div class="order-first md:order-last"> <img${addAttribute(featuredPost.data.heroImage, "src")}${addAttribute(featuredPost.data.title, "alt")} class="w-full h-64 object-cover rounded-xl shadow-lg"> </div>`} </div> </article> </section>`} ${recentPosts.length > 0 && renderTemplate`<section> <h2 class="font-heading text-2xl font-semibold text-holy-text-primary mb-8">
Artículos Recientes
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${recentPosts.map((post) => renderTemplate`<article class="group bg-holy-dark-secondary/20 backdrop-blur-sm rounded-2xl p-6 border border-holy-neutral/20 hover:border-holy-action/30 transition-all duration-300 hover:shadow-lg hover:shadow-holy-action/10"> ${post.data.heroImage && renderTemplate`<img${addAttribute(post.data.heroImage, "src")}${addAttribute(post.data.title, "alt")} class="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">`} <div class="space-y-4"> <div class="flex flex-wrap gap-2"> ${post.data.tags.slice(0, 2).map((tag) => renderTemplate`<span class="px-2 py-1 bg-holy-action/20 text-holy-action rounded-full text-xs">
#${tag} </span>`)} </div> <h3 class="font-heading text-xl font-semibold text-holy-text-primary group-hover:text-holy-action transition-colors"> <a${addAttribute(`/blog/${post.slug}`, "href")}> ${post.data.title} </a> </h3> <p class="text-holy-neutral text-sm leading-relaxed"> ${post.data.description} </p> <div class="flex items-center justify-between text-xs text-holy-text-secondary pt-2 border-t border-holy-neutral/10"> <span>${post.data.author}</span> <time${addAttribute(post.data.pubDate.toISOString(), "datetime")}> ${post.data.pubDate.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time> </div> </div> </article>`)} </div> </section>`} <section class="mt-16 text-center"> <div class="bg-holy-dark-secondary/30 backdrop-blur-sm rounded-2xl p-8 border border-holy-action/20 max-w-2xl mx-auto"> <h3 class="font-heading text-2xl font-semibold text-holy-text-primary mb-4">
¿Quieres más contenido como este?
</h3> <p class="text-holy-neutral mb-6">
Comparte tus preguntas, ideas o temas que te gustaría que cubra. 
            La mejor inspiración viene de la conversación.
</p> <a href="mailto:mauro.sanchez.simental@gmail.com?subject=Sugerencia para el blog" class="inline-flex items-center gap-2 px-6 py-3 bg-holy-action hover:bg-holy-action/90 text-holy-text-primary rounded-full font-semibold transition-all duration-300 hover:scale-105">
Enviar sugerencia
<span>✨</span> </a> </div> </section> ` })} </main> ` })}`;
}, "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
