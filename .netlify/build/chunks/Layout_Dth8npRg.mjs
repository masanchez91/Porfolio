import { a as createComponent, m as maybeRenderHead, i as renderScript, b as addAttribute, d as renderTemplate, c as createAstro, s as spreadAttributes, e as renderComponent, r as renderSlot, j as renderHead, u as unescapeHTML } from './astro/server_BYPr7G_j.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      title: "Inicio",
      label: "inicio",
      url: "/"
    },
    {
      title: "Agencia",
      label: "agencia",
      url: "/#agencia"
    },
    {
      title: "Proyectos",
      label: "proyectos",
      url: "/#proyectos"
    },
    {
      title: "Servicios",
      label: "servicios",
      url: "/#servicios"
    },
    {
      title: "Blog",
      label: "blog",
      url: "/blog"
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "/#contacto"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2" data-astro-cid-3ef6ksr2> <nav id="header-nav" class="flex px-4 py-2 text-sm font-medium rounded-full text-holy-neutral justify-center items-center backdrop-blur-sm bg-holy-dark-secondary/80 border border-holy-neutral/20" data-astro-cid-3ef6ksr2> ${navItems.map((link) => renderTemplate`<a class="relative block px-3 py-2 transition hover:text-holy-action"${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")} data-astro-cid-3ef6ksr2> ${link.title} </a>`)} </nav> </header> ${renderScript($$result, "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="rounded-lg shadow m-4 bg-black/5 dark:bg-black/20 backdrop-blur-lg w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center"> <div class="w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between"> <span class="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">${currentYear} ©
<a href="https://holy-code.com/" class="hover:underline">Holy Code</a>. Casi
      todos los derechos reservados
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"> <li> <a href="/#sobre-mi" class="hover:underline me-4 md:me-6">Sobre mí</a> </li> <li> <a href="mailto:mauro.sanchez.simental@gmail.com" class="hover:underline">Contacto</a> </li> </ul> </div> </footer>`;
}, "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://holy-code.com/");
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-forward" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/components/icons/Mail.astro", void 0);

const $$FloatingCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed bottom-6 right-6 z-50" data-astro-cid-zmlek6oa> <a href="mailto:mauro.sanchez.simental@gmail.com" class="group flex items-center gap-3 px-6 py-4 bg-holy-action hover:bg-holy-action/90 text-holy-text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-holy-action/20 backdrop-blur-sm" aria-label="Contactar por email" data-astro-cid-zmlek6oa> ${renderComponent($$result, "MailIcon", $$Mail, { "class": "size-5 group-hover:scale-110 transition-transform", "data-astro-cid-zmlek6oa": true })} <span class="font-heading font-semibold text-button" data-astro-cid-zmlek6oa>¿Hablamos?</span> <div class="absolute inset-0 bg-holy-action/20 rounded-full animate-ping opacity-75" data-astro-cid-zmlek6oa></div> </a> </div> `;
}, "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/components/FloatingCTA.astro", void 0);

const $$Astro$1 = createAstro("https://holy-code.com/");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/node_modules/.pnpm/astro@5.11.0_@netlify+blobs_25fce5163f37b45de7688e6dab0f80da/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/node_modules/.pnpm/astro@5.11.0_@netlify+blobs_25fce5163f37b45de7688e6dab0f80da/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://holy-code.com/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  const image = new URL(Astro2.props.image ?? "/default-og-image.png", Astro2.site).href;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Canonical URL --><link rel="canonical"', '><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:type" content="website"><meta property="og:locale" content="es_ES"><meta property="og:site_name" content="The Holy Code - Agencia de Desarrollo"><!-- Additional SEO Meta Tags --><meta name="keywords" content="desarrollo web, agencia desarrollo, MVP, startup, aplicaciones web, React, Next.js, consultor\xEDa t\xE9cnica, indie developer, M\xE9xico, LATAM"><meta name="author" content="Mauro S\xE1nchez - The Holy Code"><meta name="robots" content="index, follow"><meta name="theme-color" content="#28A745"><meta name="msapplication-navbutton-color" content="#28A745"><meta name="apple-mobile-web-app-status-bar-style" content="#28A745"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:site" content="@holycode_dev"><meta name="twitter:creator" content="@maurosanchez91"><title>', "</title>", '<script type="application/ld+json">', "<\/script>", '</head> <body class="relative text-holy-text-primary bg-holy-dark-primary"> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-holy-dark-primary\n      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(22,42,63,0.8),rgba(15,31,46,0.9))]"></div> ', " ", " ", " ", "  </body> </html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), addAttribute(image, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), title, renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), unescapeHTML(JSON.stringify(
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "The Holy Code",
          "alternateName": "Holy Code",
          "url": canonicalURL.href,
          "logo": {
            "@type": "ImageObject",
            "url": new URL("/holycode.webp", Astro2.site).href,
            "caption": "The Holy Code Logo"
          },
          "description": "Agencia de desarrollo especializada en transformar ideas en productos digitales. Creamos MVPs, aplicaciones web y soluciones t\xE9cnicas innovadoras.",
          "foundingDate": "2020",
          "foundingLocation": {
            "@type": "Place",
            "name": "Zapopan, Jalisco, M\xE9xico"
          },
          "founder": {
            "@type": "Person",
            "name": "Mauro S\xE1nchez",
            "jobTitle": "Founder & Lead Developer",
            "sameAs": [
              "https://linkedin.com/in/mesanchez91",
              "https://twitch.tv/holycode"
            ]
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+52",
            "contactType": "customer service",
            "email": "mauro.sanchez.simental@gmail.com",
            "availableLanguage": ["Spanish", "English"]
          },
          "areaServed": {
            "@type": "Place",
            "name": "LATAM"
          },
          "serviceType": [
            "Web Development",
            "Mobile App Development",
            "MVP Development",
            "Technical Consulting",
            "Software Architecture"
          ],
          "sameAs": [
            "https://linkedin.com/in/mesanchez91",
            "https://github.com/masanchez91",
            "https://twitch.tv/holycode"
          ]
        },
        {
          "@type": "WebSite",
          "url": canonicalURL.href,
          "name": "The Holy Code - Agencia de Desarrollo",
          "description": description,
          "publisher": {
            "@type": "Organization",
            "name": "The Holy Code"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": canonicalURL.href + "/blog?search={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "ProfessionalService",
          "name": "The Holy Code",
          "serviceType": "Software Development Agency",
          "provider": {
            "@type": "Organization",
            "name": "The Holy Code"
          },
          "areaServed": {
            "@type": "Place",
            "name": "LATAM"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Development Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "MVP Development",
                  "description": "Minimum Viable Product development for startups"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Application Development",
                  "description": "Custom web applications with modern technologies"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Technical Consulting",
                  "description": "Architecture and technical strategy consulting"
                }
              }
            ]
          }
        }
      ]
    }
  )), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "FloatingCTA", $$FloatingCTA, {}));
}, "C:/Users/USER/Documents/Projects/TheHolyCode/porfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Mail as a };
