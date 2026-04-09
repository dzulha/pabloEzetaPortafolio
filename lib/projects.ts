import { ExternalLink, Github, Code, Palette, Globe, Database, Server, Smartphone } from "lucide-react"
import { type Locale } from "./i18n"
import { projectsES } from "./data/projects.es"
import { projectsEN } from "./data/projects.en"

export type ProjectCategory =
  | "Desarrollo web y diseño web"
  | "Diseño editorial maquetado"
  | "Desarrollo de epub"
  | "Diseño de portada"
  | "Proyectos personales"
  | "all"

export interface ProcessStep {
  title: string
  description: string
  image?: string
}

export interface CaseStudyData {
  // 1. Hero Section e Introducción
  heroIntro?: {
    logo?: string;
    services?: string[];
    industry?: string;
    tools?: string[];
    objective?: string;
  };
  // 2. El Contexto y el Reto
  contextAndChallenge?: {
    description: string;
    images?: string[]; // Grid de pantallas en perspectiva / zoom
  };
  // 3. Branding y Estética
  branding?: {
    colors?: string[]; // Códigos hex
    typography?: string;
    designJustification?: string; // Justificación del vibe o estética
    designerQuote?: {
      text: string;
      image?: string; // Foto del diseñador
    };
  };
  // 3b. UX Research e Insights
  userInsights?: string[];
  uxResearch?: {
    description?: string;
    points?: string[];
  };
  // 4. Arquitectura y Segmentación de Usuarios
  architecture?: {
    description?: string;
    userFlowImages?: string[]; // Diagramas de flujo o sketches
  };
  // 4b. Decisiones de UX y Accesibilidad
  uxDecisions?: {
    title: string;
    description: string[];
  }[];
  accessibility?: {
    description?: string;
    points?: string[];
  };
  // 5. Presentación de Landing Pages y UI
  uiDesign?: {
    desktopMockups?: string[]; // Capturas de pantalla grandes
    copywritingDecisions?: string; // Explicación de puntos de dolor
  };
  // 6. Diseño Mobile (Responsive)
  mobileDesign?: {
    description?: string;
    mobileMockups?: string[]; // Teléfonos reales
  };
  // 7. Resultados y Métricas
  results?: {
    metrics?: { label: string; value: string }[]; // ej. "+400%" "visitas"
    description?: string;
    learnings?: string[]; // 🧠 Aprendizajes
    nextSteps?: string[]; // 🚀 Próximos pasos
  };
  // 8. Prueba Social (Testimonios)
  testimonial?: {
    quote: string;
    clientName: string;
    clientRole: string;
    clientImage?: string;
  };
  // 9. Llamada a la Acción (CTA) Final
  relatedProjects?: string[]; // Slugs de proyectos relacionados
}

export interface Project {
  slug: string
  title: string
  description: string
  tech: string[]
  github: string
  live: string // URL for live demo or external link
  image: string
  categories: ProjectCategory[] // Permite múltiples categorías
  tags?: string[] // More granular tags like "User Research", "Wireframing"
  role?: string
  timeline?: string
  tools?: string[] // Herramientas usadas
  caseStudy?: CaseStudyData // Toda la data estructurada para el case study
}

export const getProjects = async (lang: Locale): Promise<Project[]> => {
  return lang === "es" ? projectsES : projectsEN
}
