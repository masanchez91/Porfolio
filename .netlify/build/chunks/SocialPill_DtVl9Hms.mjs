import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate } from './astro/server_BYPr7G_j.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://holy-code.com/");
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialPill;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="inline-flex items-center justify-center gap-2 px-4 py-2 text-holy-text-primary bg-holy-action hover:bg-holy-action/90 transition-all duration-300 border border-holy-action rounded-full text-button font-semibold hover:scale-105 hover:shadow-lg hover:shadow-holy-action/25"${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/components/SocialPill.astro", void 0);

export { $$SocialPill as $ };
