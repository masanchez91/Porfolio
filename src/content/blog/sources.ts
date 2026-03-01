import type { Locale } from "@/i18n/site";

type SourceItem = {
  label: string;
  url: string;
};

const SOURCES: Record<Locale, Record<string, SourceItem[]>> = {
  es: {
    "about-mauro": [
      { label: "Perfil de Mauro en LinkedIn", url: "https://www.linkedin.com/in/mesanchez91/" },
      { label: "Repositorio público en GitHub", url: "https://github.com/masanchez91" },
    ],
    qantus: [
      { label: "Sitio oficial de Qantus", url: "https://www.qantus.io/" },
      { label: "Panorama CPQ y quoting B2B (referencia de mercado)", url: "https://valorx.com/resources/blog/cpq-statistics/" },
    ],
    wavi: [
      { label: "Sitio oficial de Wavi", url: "https://wavi.holy-code.com/" },
      { label: "Penetración de WhatsApp en LATAM (Statista)", url: "https://www.statista.com/statistics/1323702/whatsapp-penetration-latin-american-countries/" },
    ],
    malu: [
      { label: "Sitio oficial de Malu", url: "https://malu.holy-code.com/" },
      { label: "Outlook LATAM de software de property management", url: "https://www.grandviewresearch.com/horizon/outlook/property-management-software-market/latin-america" },
    ],
    mealmate: [
      { label: "Sitio oficial de MealMate+", url: "https://mealmeatplus.holy-code.com/" },
    ],
    rablo: [
      { label: "Sitio oficial de Rablo", url: "https://www.rablo.io/" },
      { label: "CompuSoluciones", url: "https://www.compusoluciones.com/" },
      { label: "McKinsey: potencial económico de GenAI", url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" },
    ],
    "run-territory": [
      { label: "Roadmap original de Run Territory", url: "https://holy-code.com/es/blog/run-territory-roadmap-2026/" },
    ],
    "kobro-lessons": [
      { label: "Publicaciones de Kobro", url: "https://www.linkedin.com/company/kobro/posts/?feedView=all" },
      { label: "Comunicado de adquisición por Moonflow", url: "https://www.moonflow.ai/blog/moonflow-adquiere-kobro" },
    ],
    "kobro-moonflow": [
      { label: "Comunicado oficial Moonflow adquiere Kobro", url: "https://www.moonflow.ai/blog/moonflow-adquiere-kobro" },
      { label: "CompuSoluciones (contexto corporativo)", url: "https://www.compusoluciones.com/" },
    ],
  },
  en: {
    "about-mauro": [
      { label: "Mauro's LinkedIn profile", url: "https://www.linkedin.com/in/mesanchez91/" },
      { label: "Public GitHub profile", url: "https://github.com/masanchez91" },
    ],
    qantus: [
      { label: "Qantus official site", url: "https://www.qantus.io/" },
      { label: "B2B CPQ and quoting market context", url: "https://valorx.com/resources/blog/cpq-statistics/" },
    ],
    wavi: [
      { label: "Wavi official site", url: "https://wavi.holy-code.com/" },
      { label: "WhatsApp penetration in LATAM (Statista)", url: "https://www.statista.com/statistics/1323702/whatsapp-penetration-latin-american-countries/" },
    ],
    malu: [
      { label: "Malu official site", url: "https://malu.holy-code.com/" },
      { label: "LATAM property management software outlook", url: "https://www.grandviewresearch.com/horizon/outlook/property-management-software-market/latin-america" },
    ],
    mealmate: [
      { label: "MealMate+ official site", url: "https://mealmeatplus.holy-code.com/" },
    ],
    rablo: [
      { label: "Rablo official site", url: "https://www.rablo.io/" },
      { label: "CompuSoluciones", url: "https://www.compusoluciones.com/" },
      { label: "McKinsey: economic potential of GenAI", url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" },
    ],
    "run-territory": [
      { label: "Original Run Territory roadmap post", url: "https://holy-code.com/en/blog/run-territory-roadmap-2026/" },
    ],
    "kobro-lessons": [
      { label: "Kobro public updates", url: "https://www.linkedin.com/company/kobro/posts/?feedView=all" },
      { label: "Moonflow acquisition announcement", url: "https://www.moonflow.ai/blog/moonflow-adquiere-kobro" },
    ],
    "kobro-moonflow": [
      { label: "Official Moonflow acquires Kobro announcement", url: "https://www.moonflow.ai/blog/moonflow-adquiere-kobro" },
      { label: "CompuSoluciones corporate context", url: "https://www.compusoluciones.com/" },
    ],
  },
};

export function getArticleSources(locale: Locale, translationKey: string): SourceItem[] {
  return SOURCES[locale]?.[translationKey] ?? [];
}
