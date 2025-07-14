/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate, e as renderComponent } from '../chunks/astro/server_BYPr7G_j.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Mail } from '../chunks/Layout_Dth8npRg.mjs';
import { $ as $$SectionContainer } from '../chunks/SectionContainer_C3_hk2Tp.mjs';
import { $ as $$SocialPill } from '../chunks/SocialPill_DtVl9Hms.mjs';
import 'clsx';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://holy-code.com/");
const $$LinkInline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinkInline;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/components/LinkInline.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - P\xE1gina no encontrada | The Holy Code", "description": "La p\xE1gina que buscas no existe. Explora nuestros servicios de desarrollo, blog o contacta con The Holy Code para transformar tu idea en realidad.", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4" data-astro-cid-zetdm5md> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 md:py-36", "data-astro-cid-zetdm5md": true }, { "default": ($$result3) => renderTemplate` <div class="max-w-4xl mx-auto text-center" data-astro-cid-zetdm5md> <!-- Error Code --> <div class="mb-8" data-astro-cid-zetdm5md> <h1 class="font-heading text-8xl md:text-9xl font-bold text-holy-action/20 mb-4" data-astro-cid-zetdm5md>
404
</h1> <div class="w-24 h-1 bg-holy-action mx-auto mb-8" data-astro-cid-zetdm5md></div> </div> <!-- Message --> <div class="space-y-6 mb-12" data-astro-cid-zetdm5md> <h2 class="font-heading text-3xl md:text-4xl font-bold text-holy-text-primary" data-astro-cid-zetdm5md>
Página no encontrada
</h2> <p class="text-xl text-holy-neutral leading-relaxed max-w-2xl mx-auto" data-astro-cid-zetdm5md>
La página que buscas no existe, fue movida o tal vez nunca existió. 
            Pero no te preocupes, en <strong class="text-holy-action" data-astro-cid-zetdm5md>The Holy Code</strong>
siempre encontramos la manera de transformar lo imposible en realidad.
</p> </div> <!-- Code block humorístico --> <div class="bg-holy-dark-secondary/50 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-holy-action/20 max-w-2xl mx-auto" data-astro-cid-zetdm5md> <div class="text-left" data-astro-cid-zetdm5md> <code class="text-holy-action text-sm" data-astro-cid-zetdm5md> <span class="text-holy-neutral" data-astro-cid-zetdm5md>if</span> (pageNotFound) ${`{`}<br data-astro-cid-zetdm5md>
&nbsp;&nbsp;<span class="text-holy-neutral" data-astro-cid-zetdm5md>return</span> <span class="text-holy-text-primary" data-astro-cid-zetdm5md>'¡Oportunidad de explorar!'</span>;<br data-astro-cid-zetdm5md> ${`}`} </code> </div> </div> <!-- Navigation Options --> <div class="space-y-8" data-astro-cid-zetdm5md> <h3 class="font-heading text-xl font-semibold text-holy-text-primary" data-astro-cid-zetdm5md>
¿Qué puedes hacer ahora?
</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-zetdm5md> <!-- Inicio --> <div class="bg-holy-dark-secondary/20 backdrop-blur-sm rounded-xl p-6 border border-holy-neutral/20 hover:border-holy-action/30 transition-all duration-300" data-astro-cid-zetdm5md> <div class="text-holy-action text-4xl mb-4" data-astro-cid-zetdm5md>🏠</div> <h4 class="font-heading text-lg font-semibold text-holy-text-primary mb-2" data-astro-cid-zetdm5md>
Ir al inicio
</h4> <p class="text-holy-neutral text-sm mb-4" data-astro-cid-zetdm5md>
Descubre quiénes somos y qué hacemos
</p> ${renderComponent($$result3, "LinkInline", $$LinkInline, { "href": "/", "data-astro-cid-zetdm5md": true }, { "default": ($$result4) => renderTemplate`
Página principal
` })} </div> <!-- Servicios --> <div class="bg-holy-dark-secondary/20 backdrop-blur-sm rounded-xl p-6 border border-holy-neutral/20 hover:border-holy-action/30 transition-all duration-300" data-astro-cid-zetdm5md> <div class="text-holy-action text-4xl mb-4" data-astro-cid-zetdm5md>⚡</div> <h4 class="font-heading text-lg font-semibold text-holy-text-primary mb-2" data-astro-cid-zetdm5md>
Nuestros servicios
</h4> <p class="text-holy-neutral text-sm mb-4" data-astro-cid-zetdm5md>
MVPs, desarrollo web, consultoría técnica
</p> ${renderComponent($$result3, "LinkInline", $$LinkInline, { "href": "/#servicios", "data-astro-cid-zetdm5md": true }, { "default": ($$result4) => renderTemplate`
Ver servicios
` })} </div> <!-- Blog --> <div class="bg-holy-dark-secondary/20 backdrop-blur-sm rounded-xl p-6 border border-holy-neutral/20 hover:border-holy-action/30 transition-all duration-300" data-astro-cid-zetdm5md> <div class="text-holy-action text-4xl mb-4" data-astro-cid-zetdm5md>📝</div> <h4 class="font-heading text-lg font-semibold text-holy-text-primary mb-2" data-astro-cid-zetdm5md>
Blog
</h4> <p class="text-holy-neutral text-sm mb-4" data-astro-cid-zetdm5md>
Reflexiones sobre desarrollo y tecnología
</p> ${renderComponent($$result3, "LinkInline", $$LinkInline, { "href": "/blog", "data-astro-cid-zetdm5md": true }, { "default": ($$result4) => renderTemplate`
Leer artículos
` })} </div> </div> </div> <!-- CTA --> <div class="mt-16 pt-8 border-t border-holy-neutral/20" data-astro-cid-zetdm5md> <div class="bg-holy-dark-secondary/30 backdrop-blur-sm rounded-2xl p-8 border border-holy-action/20" data-astro-cid-zetdm5md> <h3 class="font-heading text-2xl font-semibold text-holy-text-primary mb-4" data-astro-cid-zetdm5md>
¿Tienes una idea que quieres desarrollar?
</h3> <p class="text-holy-neutral mb-6 max-w-2xl mx-auto" data-astro-cid-zetdm5md>
No dejes que una página perdida te detenga. Cuéntanos tu proyecto 
              y transformémoslo en realidad digital.
</p> <div class="flex flex-wrap justify-center gap-4" data-astro-cid-zetdm5md> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "mailto:mauro.sanchez.simental@gmail.com", "data-astro-cid-zetdm5md": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MailIcon", $$Mail, { "class": "size-4", "data-astro-cid-zetdm5md": true })}
¿Hablamos?
` })} <a href="/#contacto" class="inline-flex items-center gap-2 px-6 py-2 bg-holy-dark-secondary hover:bg-holy-dark-secondary/80 text-holy-text-primary rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-holy-neutral/20" data-astro-cid-zetdm5md>
Formulario de contacto
</a> </div> </div> </div> </div> ` })} </main> ` })} `;
}, "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/pages/404.astro", void 0);

const $$file = "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
