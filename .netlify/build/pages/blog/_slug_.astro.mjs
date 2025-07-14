/* empty css                                     */
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute, r as renderSlot } from '../../chunks/astro/server_BYPr7G_j.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_RLJ52SLZ.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Dth8npRg.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://holy-code.com/");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { post } = Astro2.props;
  const { title, description, pubDate, updatedDate, heroImage, tags, author } = post.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4 py-8 max-w-4xl mx-auto" data-astro-cid-bvzihdzo> <!-- Breadcrumb --> <nav class="mb-8" data-astro-cid-bvzihdzo> <ol class="flex items-center space-x-2 text-sm text-holy-neutral" data-astro-cid-bvzihdzo> <li data-astro-cid-bvzihdzo><a href="/" class="hover:text-holy-action transition-colors" data-astro-cid-bvzihdzo>Inicio</a></li> <li data-astro-cid-bvzihdzo>/</li> <li data-astro-cid-bvzihdzo><a href="/blog" class="hover:text-holy-action transition-colors" data-astro-cid-bvzihdzo>Blog</a></li> <li data-astro-cid-bvzihdzo>/</li> <li class="text-holy-text-primary" data-astro-cid-bvzihdzo>${title}</li> </ol> </nav> <!-- Hero Section --> <header class="mb-12" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`<img${addAttribute(heroImage, "src")}${addAttribute(title, "alt")} class="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 shadow-xl" data-astro-cid-bvzihdzo>`} <div class="space-y-4" data-astro-cid-bvzihdzo> <h1 class="font-heading text-4xl md:text-5xl font-bold text-holy-text-primary leading-tight" data-astro-cid-bvzihdzo> ${title} </h1> <p class="text-xl text-holy-neutral leading-relaxed" data-astro-cid-bvzihdzo> ${description} </p> <div class="flex flex-wrap items-center gap-4 text-sm text-holy-text-secondary" data-astro-cid-bvzihdzo> <div class="flex items-center gap-2" data-astro-cid-bvzihdzo> <span class="w-2 h-2 bg-holy-action rounded-full" data-astro-cid-bvzihdzo></span> <span data-astro-cid-bvzihdzo>Por ${author}</span> </div> <div class="flex items-center gap-2" data-astro-cid-bvzihdzo> <span class="w-2 h-2 bg-holy-action rounded-full" data-astro-cid-bvzihdzo></span> <time${addAttribute(pubDate.toISOString(), "datetime")} data-astro-cid-bvzihdzo> ${pubDate.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> </div> ${updatedDate && renderTemplate`<div class="flex items-center gap-2" data-astro-cid-bvzihdzo> <span class="w-2 h-2 bg-holy-action rounded-full" data-astro-cid-bvzihdzo></span> <span data-astro-cid-bvzihdzo>Actualizado el ${updatedDate.toLocaleDateString("es-ES")}</span> </div>`} </div> ${tags && tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-4" data-astro-cid-bvzihdzo> ${tags.map((tag) => renderTemplate`<span class="px-3 py-1 bg-holy-dark-secondary/50 text-holy-action rounded-full text-sm border border-holy-action/20" data-astro-cid-bvzihdzo>
#${tag} </span>`)} </div>`} </div> </header> <!-- Content --> <article class="prose prose-lg prose-invert max-w-none" data-astro-cid-bvzihdzo> ${renderSlot($$result2, $$slots["default"])} </article> <!-- Footer --> <footer class="mt-16 pt-8 border-t border-holy-neutral/20" data-astro-cid-bvzihdzo> <div class="bg-holy-dark-secondary/30 backdrop-blur-sm rounded-2xl p-6 border border-holy-action/20" data-astro-cid-bvzihdzo> <h3 class="font-heading text-xl font-semibold text-holy-text-primary mb-4" data-astro-cid-bvzihdzo>
¿Te gustó este artículo?
</h3> <p class="text-holy-neutral mb-6" data-astro-cid-bvzihdzo>
Comparte tu feedback, haz preguntas o cuéntanos sobre tu experiencia. 
          En The Holy Code nos encanta la conversación sobre desarrollo y tecnología.
</p> <div class="flex flex-wrap gap-4" data-astro-cid-bvzihdzo> <a href="mailto:mauro.sanchez.simental@gmail.com?subject=Comentario sobre: {title}" class="inline-flex items-center gap-2 px-4 py-2 bg-holy-action hover:bg-holy-action/90 text-holy-text-primary rounded-full font-semibold transition-all duration-300 hover:scale-105" data-astro-cid-bvzihdzo>
Enviar comentario
</a> <a href="https://linkedin.com/in/mesanchez91" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-holy-dark-secondary hover:bg-holy-dark-secondary/80 text-holy-text-primary rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-holy-neutral/20" data-astro-cid-bvzihdzo>
Conectar en LinkedIn
</a> </div> </div> </footer> </main> ` })} `;
}, "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://holy-code.com/");
async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "post": post }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
