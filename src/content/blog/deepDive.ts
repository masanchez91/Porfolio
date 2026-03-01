import type { Locale } from "@/i18n/site";

type DeepDiveSection = {
  title: string;
  items: string[];
};

type DeepDiveContent = {
  kicker: string;
  summary: string;
  sections: DeepDiveSection[];
};

const DEEP_DIVE_BY_LOCALE: Record<Locale, Record<string, DeepDiveContent>> = {
  es: {
    "about-mauro": {
      kicker: "Detrás del enfoque",
      summary:
        "Mi forma de construir productos combina negocio, arquitectura y velocidad de ejecución. No trabajo por features sueltas: trabajo por resultados medibles.",
      sections: [
        {
          title: "Cómo tomo decisiones",
          items: [
            "Primero defino qué problema de negocio sí vale resolver.",
            "Luego priorizo el flujo crítico del usuario antes de ampliar scope.",
            "Finalmente aterrizo arquitectura con foco en evolución, no solo en entrega inicial.",
          ],
        },
        {
          title: "Principios de ejecución",
          items: [
            "Iteraciones cortas con validación real de usuarios.",
            "Menos complejidad accidental, más claridad operativa.",
            "Documentación mínima viable para mantener velocidad sin perder contexto.",
          ],
        },
        {
          title: "Estándar de calidad",
          items: [
            "Código mantenible y orientado a producto.",
            "Observabilidad y trazabilidad desde etapas tempranas.",
            "Trade-offs explícitos para alinear negocio y tecnología.",
          ],
        },
      ],
    },
    qantus: {
      kicker: "Deep dive",
      summary:
        "Qantus se diseñó como un motor comercial confiable: reducir error, acelerar cierre y estandarizar decisiones de pricing en operación real.",
      sections: [
        {
          title: "Arquitectura de solución",
          items: [
            "Modelo de reglas parametrizable por segmento y tipo de cotización.",
            "Capa de validación para detectar inconsistencias antes de emitir propuesta.",
            "Trazabilidad por versión de reglas para auditoría comercial.",
          ],
        },
        {
          title: "Decisiones clave",
          items: [
            "Priorizar precisión sobre personalizaciones tempranas.",
            "Diseñar comparativos para facilitar decisiones del equipo comercial.",
            "Estandarizar plantillas para reducir fricción de salida.",
          ],
        },
        {
          title: "Lecciones operativas",
          items: [
            "El mayor impacto vino de eliminar ambigüedad en entradas de datos.",
            "La adopción creció al reducir pasos manuales y tiempos de espera.",
            "Medir error por tramo permitió mejorar reglas de forma iterativa.",
          ],
        },
      ],
    },
    wavi: {
      kicker: "Deep dive",
      summary:
        "Wavi no es solo chatbot: es una capa comercial para WhatsApp orientada a conversión, continuidad y control de contexto conversacional.",
      sections: [
        {
          title: "Diseño de flujo",
          items: [
            "Clasificación de intención para encaminar respuestas automáticas.",
            "Rutas de escalamiento a humano cuando se detecta complejidad.",
            "Estructura de seguimiento para no perder conversaciones calientes.",
          ],
        },
        {
          title: "Trade-offs",
          items: [
            "Menos automatización ciega, más control de calidad en respuestas.",
            "Foco en preguntas frecuentes primero antes de escenarios edge.",
            "Priorizar tiempos de respuesta sobre volumen de features.",
          ],
        },
        {
          title: "Impacto en negocio",
          items: [
            "Mejor tasa de primera respuesta en horarios no laborales.",
            "Mayor continuidad en pipeline comercial.",
            "Menor desgaste operativo en equipos pequeños.",
          ],
        },
      ],
    },
    malu: {
      kicker: "Deep dive",
      summary:
        "Malu se construyó para resolver complejidad operativa en condominios: cobranza, accesos y comunicación desde un solo sistema con reglas claras.",
      sections: [
        {
          title: "Pilares de producto",
          items: [
            "Cobranza y estado financiero con visibilidad para administración.",
            "Control de acceso con validación simple y rápida.",
            "Reservas y comunicación con reglas entendibles para residentes.",
          ],
        },
        {
          title: "Decisiones de implementación",
          items: [
            "UX orientada a personal no técnico.",
            "Paneles con foco en operación diaria y no en métricas vanity.",
            "Modularidad para crecer por funcionalidad sin romper flujos existentes.",
          ],
        },
        {
          title: "Aprendizajes",
          items: [
            "En verticales tradicionales, la claridad funcional gana sobre sofisticación visual.",
            "El onboarding define gran parte de la percepción de valor.",
            "Pequeñas mejoras de flujo generan grandes ahorros operativos acumulados.",
          ],
        },
      ],
    },
    mealmate: {
      kicker: "Deep dive",
      summary:
        "MealMate+ evolucionó hacia una experiencia de hábitos consistente: personalización útil, fricción baja y señales de progreso visibles para retención.",
      sections: [
        {
          title: "Estrategia de retención",
          items: [
            "Reducir fricción de entrada para primeras sesiones.",
            "Generar micro-progreso visible para mantener constancia.",
            "Recomendaciones contextualizadas según uso real.",
          ],
        },
        {
          title: "Decisiones de producto",
          items: [
            "Evitar sobrecarga de opciones al inicio.",
            "Priorizar claridad diaria por encima de complejidad funcional.",
            "Iteración rápida sobre puntos de abandono detectados.",
          ],
        },
        {
          title: "Resultado",
          items: [
            "Mayor continuidad de uso en cohortes activas.",
            "Mejor percepción de acompañamiento digital.",
            "Base sólida para capas futuras de personalización.",
          ],
        },
      ],
    },
    rablo: {
      kicker: "Deep dive",
      summary:
        "Rablo está enfocado en procesos críticos: menos fricción en autorizaciones, más trazabilidad y decisiones operativas respaldadas por contexto.",
      sections: [
        {
          title: "Problema operativo",
          items: [
            "Aprobaciones lentas por dependencia de canales informales.",
            "Visibilidad limitada del estado de solicitudes.",
            "Dificultad para auditar decisiones históricas.",
          ],
        },
        {
          title: "Línea de solución",
          items: [
            "Estandarizar flujos de aprobación y estados de proceso.",
            "Registrar eventos clave para trazabilidad extremo a extremo.",
            "Usar IA como apoyo de priorización y clasificación, no como caja negra.",
          ],
        },
        {
          title: "Valor generado",
          items: [
            "Mayor velocidad de ciclo en decisiones internas.",
            "Mejor cumplimiento y control operativo.",
            "Más confianza entre áreas por visibilidad compartida.",
          ],
        },
      ],
    },
    "run-territory": {
      kicker: "Deep dive",
      summary:
        "Run Territory sigue una lógica de builder: lanzar rápido con criterio, validar con usuarios reales y evolucionar con datos, no suposiciones.",
      sections: [
        {
          title: "Enfoque de lanzamiento",
          items: [
            "Core flow primero, expansiones después.",
            "Hipótesis de valor medibles desde la primera versión.",
            "Feedback temprano para priorizar roadmap.",
          ],
        },
        {
          title: "Gobierno de producto",
          items: [
            "Backlog ligado a objetivos de retención/adopción.",
            "Trade-offs explícitos entre velocidad y profundidad.",
            "Iteraciones quincenales con revisión de aprendizaje.",
          ],
        },
        {
          title: "Qué se valida en Q1-Q2",
          items: [
            "Propuesta de valor percibida por usuarios iniciales.",
            "Fricción en onboarding y activación temprana.",
            "Señales de uso repetido antes de escalar distribución.",
          ],
        },
      ],
    },
    "kobro-lessons": {
      kicker: "Deep dive",
      summary:
        "Kobro fue una escuela de ejecución fintech: producto útil en operación real, arquitectura pensada para continuidad y foco total en impacto de negocio.",
      sections: [
        {
          title: "Exigencia del dominio",
          items: [
            "Procesos sensibles a tiempo y precisión operativa.",
            "Necesidad de trazabilidad confiable para decisiones.",
            "Integración de múltiples actores en un flujo único.",
          ],
        },
        {
          title: "Prácticas que funcionaron",
          items: [
            "Entrega continua con criterio de estabilidad.",
            "Priorización por fricción operativa, no por moda funcional.",
            "Alineación constante entre equipo técnico y objetivos de negocio.",
          ],
        },
        {
          title: "Lecciones transferibles",
          items: [
            "La adopción en B2B se gana con claridad de flujo.",
            "Escalar sin observabilidad termina en deuda operativa.",
            "Arquitectura y producto deben evolucionar juntos.",
          ],
        },
      ],
    },
    "kobro-moonflow": {
      kicker: "Deep dive",
      summary:
        "La adquisición de Kobro por Moonflow valida un patrón: foco de producto, ejecución disciplinada y valor operacional sostenido en el tiempo.",
      sections: [
        {
          title: "Qué suele evaluar el mercado",
          items: [
            "Problema resuelto con impacto tangible en operación.",
            "Capacidad del equipo para ejecutar consistentemente.",
            "Escalabilidad del modelo técnico y comercial.",
          ],
        },
        {
          title: "Señales fuertes",
          items: [
            "Producto útil más allá de demos o narrativa.",
            "Métricas que respaldan uso real y continuidad.",
            "Decisiones de roadmap alineadas con valor de negocio.",
          ],
        },
        {
          title: "Conclusión estratégica",
          items: [
            "Las oportunidades grandes son efecto, no objetivo aislado.",
            "La preparación técnica reduce riesgo en momentos de cambio.",
            "Consistencia de ejecución es ventaja competitiva real.",
          ],
        },
      ],
    },
  },
  en: {
    "about-mauro": {
      kicker: "Behind the approach",
      summary:
        "My way of building products combines business context, architecture, and execution speed. I do not ship random features; I ship measurable outcomes.",
      sections: [
        {
          title: "How I make decisions",
          items: [
            "First, I define which business problem is worth solving.",
            "Then I prioritize the critical user flow before expanding scope.",
            "Finally I shape architecture for evolution, not only initial delivery.",
          ],
        },
        {
          title: "Execution principles",
          items: [
            "Short iterations with real user validation.",
            "Less accidental complexity, more operational clarity.",
            "Minimum viable documentation to keep speed without losing context.",
          ],
        },
        {
          title: "Quality bar",
          items: [
            "Maintainable code aligned with product goals.",
            "Traceability and observability from early stages.",
            "Explicit trade-offs to align technology and business.",
          ],
        },
      ],
    },
    qantus: {
      kicker: "Deep dive",
      summary:
        "Qantus was designed as a reliable commercial engine: reduce errors, accelerate closing, and standardize pricing decisions in real operations.",
      sections: [
        {
          title: "Solution architecture",
          items: [
            "Configurable rules model by segment and quote type.",
            "Validation layer to detect inconsistencies before proposal output.",
            "Rule version traceability for commercial auditing.",
          ],
        },
        {
          title: "Key decisions",
          items: [
            "Prioritize precision before early customization.",
            "Design comparison flows to speed up sales decisions.",
            "Standardize output templates to reduce operational friction.",
          ],
        },
        {
          title: "Operational lessons",
          items: [
            "Most impact came from reducing ambiguity in data inputs.",
            "Adoption increased when manual steps were removed.",
            "Error tracking by segment improved rules iteratively.",
          ],
        },
      ],
    },
    wavi: {
      kicker: "Deep dive",
      summary:
        "Wavi is not just a chatbot. It is a WhatsApp commercial layer focused on conversion, continuity, and conversational context control.",
      sections: [
        {
          title: "Flow design",
          items: [
            "Intent classification to route automated responses.",
            "Human escalation paths when complexity is detected.",
            "Follow-up structure to avoid losing warm conversations.",
          ],
        },
        {
          title: "Trade-offs",
          items: [
            "Less blind automation, more response quality control.",
            "FAQ automation first before edge scenarios.",
            "Response speed prioritized over feature volume.",
          ],
        },
        {
          title: "Business impact",
          items: [
            "Improved first-response rates outside business hours.",
            "Stronger continuity in sales pipeline.",
            "Lower operational pressure in lean teams.",
          ],
        },
      ],
    },
    malu: {
      kicker: "Deep dive",
      summary:
        "Malu was built to solve operational complexity in condo management: collections, access, and communication in one system with clear rules.",
      sections: [
        {
          title: "Product pillars",
          items: [
            "Collections and financial status visibility for managers.",
            "Access control with simple and fast validation.",
            "Booking and communication with resident-friendly rules.",
          ],
        },
        {
          title: "Implementation decisions",
          items: [
            "UX designed for non-technical operators.",
            "Dashboards focused on daily operations, not vanity metrics.",
            "Modular growth per feature without breaking existing flows.",
          ],
        },
        {
          title: "Learnings",
          items: [
            "In traditional verticals, functional clarity beats visual sophistication.",
            "Onboarding quality defines perceived value.",
            "Small flow improvements compound into major operational savings.",
          ],
        },
      ],
    },
    mealmate: {
      kicker: "Deep dive",
      summary:
        "MealMate+ evolved into a consistent habits experience: useful personalization, low friction, and visible progress signals for retention.",
      sections: [
        {
          title: "Retention strategy",
          items: [
            "Lower initial friction for first sessions.",
            "Create visible micro-progress to sustain consistency.",
            "Context-aware recommendations based on real usage.",
          ],
        },
        {
          title: "Product decisions",
          items: [
            "Avoid overwhelming early configuration.",
            "Prioritize daily clarity over functional complexity.",
            "Iterate fast on detected drop-off points.",
          ],
        },
        {
          title: "Outcome",
          items: [
            "Higher continuity in active cohorts.",
            "Better perception of digital guidance.",
            "Strong base for deeper personalization layers.",
          ],
        },
      ],
    },
    rablo: {
      kicker: "Deep dive",
      summary:
        "Rablo focuses on critical workflows: less approval friction, stronger traceability, and operational decisions supported by context.",
      sections: [
        {
          title: "Operational problem",
          items: [
            "Slow approvals due to informal communication channels.",
            "Limited visibility into request lifecycle.",
            "Low confidence when auditing historical decisions.",
          ],
        },
        {
          title: "Solution direction",
          items: [
            "Standardize approval workflows and process states.",
            "Capture key events for end-to-end traceability.",
            "Use AI as a support layer for prioritization/classification, not a black box.",
          ],
        },
        {
          title: "Value generated",
          items: [
            "Faster decision cycles in internal operations.",
            "Stronger compliance and operational control.",
            "Higher trust across teams via shared visibility.",
          ],
        },
      ],
    },
    "run-territory": {
      kicker: "Deep dive",
      summary:
        "Run Territory follows a builder logic: launch fast with criteria, validate with real users, and evolve with data, not assumptions.",
      sections: [
        {
          title: "Launch approach",
          items: [
            "Core flow first, expansions later.",
            "Measurable value hypotheses from version one.",
            "Early feedback to prioritize roadmap.",
          ],
        },
        {
          title: "Product governance",
          items: [
            "Backlog tied to retention and adoption goals.",
            "Explicit trade-offs between speed and depth.",
            "Bi-weekly iterations with learning reviews.",
          ],
        },
        {
          title: "Q1-Q2 validation",
          items: [
            "Perceived value among initial users.",
            "Onboarding and early activation friction.",
            "Repeated usage signals before scaling distribution.",
          ],
        },
      ],
    },
    "kobro-lessons": {
      kicker: "Deep dive",
      summary:
        "Kobro was a fintech execution school: useful product in real operations, architecture built for continuity, and strict business-impact focus.",
      sections: [
        {
          title: "Domain pressure",
          items: [
            "Processes highly sensitive to time and operational accuracy.",
            "Reliable traceability needed for decision quality.",
            "Multiple actors integrated in a single flow.",
          ],
        },
        {
          title: "What worked",
          items: [
            "Continuous delivery with stability criteria.",
            "Prioritization by operational friction, not feature trends.",
            "Constant alignment between engineering and business goals.",
          ],
        },
        {
          title: "Transferable lessons",
          items: [
            "B2B adoption is won through flow clarity.",
            "Scaling without observability creates operational debt.",
            "Architecture and product must evolve together.",
          ],
        },
      ],
    },
    "kobro-moonflow": {
      kicker: "Deep dive",
      summary:
        "Kobro's acquisition by Moonflow validates a repeatable pattern: product focus, disciplined execution, and sustained operational value.",
      sections: [
        {
          title: "What the market usually validates",
          items: [
            "A problem solved with tangible operational impact.",
            "Team capability to execute consistently over time.",
            "Scalability of technical and commercial model.",
          ],
        },
        {
          title: "Strong signals",
          items: [
            "Useful product beyond demos or narrative.",
            "Metrics supporting real usage and continuity.",
            "Roadmap decisions aligned with business value.",
          ],
        },
        {
          title: "Strategic conclusion",
          items: [
            "Major opportunities are outcomes, not isolated goals.",
            "Technical preparation reduces risk in transition moments.",
            "Execution consistency is a real competitive advantage.",
          ],
        },
      ],
    },
  },
};

export function getDeepDive(locale: Locale, translationKey: string) {
  return DEEP_DIVE_BY_LOCALE[locale]?.[translationKey];
}
