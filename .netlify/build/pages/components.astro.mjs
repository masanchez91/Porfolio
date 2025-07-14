/* empty css                                  */
import { a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BYPr7G_j.mjs';
import 'kleur/colors';
import { $ as $$Badge, a as $$LinkedIn } from '../chunks/LinkedIn_5ihncVb_.mjs';
import { $ as $$SectionContainer } from '../chunks/SectionContainer_C3_hk2Tp.mjs';
import { $ as $$SocialPill } from '../chunks/SocialPill_DtVl9Hms.mjs';
import { $ as $$Layout } from '../chunks/Layout_Dth8npRg.mjs';
export { renderers } from '../renderers.mjs';

const $$Components = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Design System holy-code.com", "description": "El cat\xE1logo de componentes de nuestro porfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-32 flex flex-col gap-y-10" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt;Badge /&gt;</h1> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Trabajando en Kobro.io` })} </article> <article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt SocialPill /&gt;</h1> <div class="flex"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://linkedin.com/in/mesanchez91" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedInIcon", $$LinkedIn, { "class": "size-4 md:size-6" })}
LinkedIn
` })} </div> </article> ` })} ` })}`;
}, "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/pages/components.astro", void 0);

const $$file = "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/pages/components.astro";
const $$url = "/components";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Components,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
