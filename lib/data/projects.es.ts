import { ExternalLink, Github, Code, Palette, Globe, Database, Server, Smartphone } from "lucide-react"

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
export const projectsES: Project[] = [
  // --- DESARROLLO WEB Y DISEÑO WEB (Case Studies) ---
  {
    slug: "cetus-dive-center",
    title: "CETUS — Plataforma Web para Escuela de Buceo",
    description: "Plataforma funcional diseñada a partir de traducir requerimientos complejos de clientes no técnicos a decisiones digitales claras para el usuario final.",
    tech: ["WordPress", "Calendly", "MailerLite", "CSS"],
    github: "",
    live: "",
    image: "/Cetus.webp",
    categories: ["Desarrollo web y diseño web"],
    tags: ["UX Strategy", "Clients", "WordPress"],
    role: "Diseñador Web + UX/UI + Implementación",
    timeline: "~1 año",
    tools: ["WordPress", "Figma", "CSS"],
    caseStudy: {
      heroIntro: {
        services: ["UX/UI Web", "Implementación", "Product Strategy"],
        industry: "Escuela de Buceo / Outdoor",
        tools: ["WordPress", "Figma", "Integraciones API"],
        objective: "Diseñar una plataforma clara y funcional para usuarios principiantes en buceo, enfrentando el reto crítico de guiar a un cliente sin conocimiento digital para lograr un ecosistema que realmente genere negocio."
      },
      contextAndChallenge: {
        description: "CETUS necesitaba una presencia digital con tres propósitos claros: mostrar cursos, promover viajes y facilitar el contacto.\n\nSin embargo, existía un reto humano subyacente y vital:\nEl cliente no tenía experiencia digital ni técnica. Esto desató dificultad para estructurar el contenido, confusión al asignar prioridades de negocio y la necesidad de muchísima educación y validación a cada paso.\n\n👉 Problema real: Cómo diseñar una plataforma robusta y enfocada a la conversión orientada al usuario, mientras te encargas de traducir la visión manual y no-técnica del cliente a componentes que pueda gestionar autónomamente.",
        images: ["/Cetus.webp", "/Cetus/Cetus UI (1).webp"]
      },
      userInsights: [
        "Mis clientes no tenían nada técnico en cuestiones de tecnología; querían un producto que les ayudara a resolver logística pero les cuesta trabajo aprender nuevas herramientas digitales.",
        "El público final (alumnos) demanda total claridad; evitan de inmediato formatos confusos porque la seguridad física está en juego.",
        "Traducir las frustraciones operativas del cliente en flujos digitales es el insight principal."
      ],
      uxResearch: {
        description: "Estrategia basada en UX Perceptiva:",
        points: [
          "CLARIDAD: Destruir la jerga especializada del buceo.",
          "CONFIANZA: Exhibir rostros reales y certificaciones de instructores.",
          "CONVERSIÓN: Limitar la navegación y potenciar los CTAs directos a reserva."
        ]
      },
      branding: {
        colors: ["#BF0B2C", "#049DD9"],
        typography: "Clara, grande, no intimidante",
        designJustification: "Evitamos el paradigma de las páginas académicas de certificación técnica. El mood visual grita 'aventura segura'. Mucha amplitud, luz, y fotografías de personas interactuando (confianza) en lugar de gráficos vectoriales abstractos.",
        designerQuote: {
          text: "\"Gran parte del reto del Product Design es lidiar con feedback emocional y no estructurado de clientes primerizos. Traducir eso a un flujo lógico de pantallas... ahí está la magia.\"",
          image: "/pabloEzeta.png"
        }
      },
      architecture: {
        description: "Estructura Web y Arquitectura de Información jerárquica:\n\n1. Home (Introducción y anclaje de servicios).\n2. Cursos (Segmentados de forma visual por niveles: de Try-Dive a Prof.).\n3. Viajes (Catálogo de retención de comunidad).\n4. Sobre Nosotros (Validación social).\n5. Contacto (Conversión).",
      },
      uxDecisions: [
        {
          title: "1. Información 100% Simplificada",
          description: ["Se eliminó lenguaje técnico.", "Todo curso se explica como un paso a paso asimilable."]
        },
        {
          title: "2. Limitación de Navegación",
          description: ["Menos opciones globales.", "Se reduce la Parálisis por Análisis en el usuario y aumenta la conversión final."]
        },
        {
          title: "3. Bloques Visuales y Jerarquía",
          description: ["Nombres de los cursos en alta jerarquía visual.", "Favorece el escaneo rápido del usuario desde móvil al ir caminando o de prisa."]
        }
      ],
      accessibility: {
        description: "Tanto para el visitante final como para el cliente (Administrador):",
        points: [
          "CMS (Content Management System) ajustado para fácil edición del dueño (Autonomía de administración).",
          "Interacciones visuales guiadas (para el buceador no afín a interfaces complejas)."
        ]
      },
      uiDesign: {
        desktopMockups: [
          "/Cetus.webp", 
          "/Cetus/Cetus UI (6).webp", 
          "/Cetus/Cetus UI (7).webp", 
          "/Cetus/Cetus UI (8).webp", 
          "/Cetus/Cetus UI (9).webp"
        ],
        copywritingDecisions: "🚧 Retos Reales superados: Educar al cliente; Iterar sobre ideas imposibles a través de mockups visuales sencillos; Defender decisiones de interfaz cuando la retroalimentación técnica del cliente no seguía un modelo mental convencional."
      },
      results: {
        description: "Se entregó una plataforma completa, en vivo y sirviendo como medio confiable para captura de leads que modernizó toda la estructura promocional de la escuela.",
        learnings: [
          "Diseñar es, en gran medida, educar al stakeholder (cliente) sobre lo que su propio negocio necesita.",
          "La claridad rotunda siempre vence a la complejidad tecnológica innecesaria.",
          "En usuarios no técnicos, la interfaz debe suponer que el usuario nunca ha estado en un ambiente web."
        ],
        nextSteps: [
          "Integración futura a sistema automatizado de gestión y turnos.",
          "Incorporación nativa de pasarelas de pago directas.",
          "Mejora en SEO Técnico para blogs locales."
        ]
      },
      relatedProjects: ["abismo-centro-buceo"]
    }
  },
  {
    slug: "xplora-app",
    title: "Xplora — Plataforma de Tours y Experiencias",
    description: "Plataforma Fullstack para conectar guías locales con viajeros.",
    tech: ["React", "Python", "Flask", "PostgreSQL"],
    github: "https://github.com/dzulha/Xplore-Proyecto-final-latam-ft-5",
    live: "",
    image: "/xplora.webp",
    categories: ["Desarrollo web y diseño web"],
    tags: ["Full Stack", "UX Design", "Travel App"],
    role: "Fullstack Developer + UX Designer",
    timeline: "4 Semanas",
    tools: ["React", "Flask", "PostgreSQL", "Figma", "Miro"],
    caseStudy: {
      heroIntro: {
        services: ["Fullstack Development", "UX/UI Design"],
        industry: "Turismo & Travel Tech",
        tools: ["React", "Python/Flask", "PostgreSQL", "Figma"],
        objective: "Crear una plataforma funcional end-to-end donde guías locales puedan registrarse y publicar tours, y los usuarios puedan explorarlos y reservarlos fácilmente."
      },
      contextAndChallenge: {
        description: "El turismo local enfrenta una desconexión clara: personas que ofrecen experiencias no cuentan con herramientas digitales accesibles para gestionarlas, mientras que los usuarios encuentran procesos de reserva fragmentados y poco claros.\n\nAdemás, muchos usuarios no técnicos enfrentan dificultades al:\n• Entender cómo reservar\n• Comparar opciones\n• Confiar en experiencias locales\n\n👉 Problema real: Diseñar una plataforma de logística asimétrica (exploradores vs. guías locales) que destile total confianza y elimine las enormes barreras de adopción en un entorno dominantemente móvil.",
        images: ["/xplora.webp", "/Xplora/Xplora Ui 1.png"]
      },
      userInsights: [
        "Los usuarios priorizan rapidez sobre exploración profunda",
        "La confianza (reviews, claridad) influye directamente en la decisión",
        "Formularios largos generan abandono",
        "El contexto mobile es dominante durante viajes"
      ],
      uxResearch: {
        description: "Enfoque de Validación y Análisis de Flujos:",
        points: [
          "Benchmark de plataformas como Airbnb Experiences, GetYourGuide y Viator.",
          "Análisis de flujos de reserva existentes y edge cases.",
          "Identificación de fricciones comunes: Demasiados pasos, falta de claridad en precios, interfaces saturadas.",
          "Objetivo: reducir fricción en el flujo principal."
        ]
      },
      branding: {
        colors: ["#A3D9D3", "#327367", "#2F6F64"],
        typography: "Clara y legible para entornos variables",
        designJustification: "Priorizamos la accesibilidad visual para entornos de uso móvil. Componentes escaneables, tarjetas visuales y formularios con mínima fricción.",
        designerQuote: {
          text: "\"Un producto no es solo UI, es lógica operando en un sistema complejo. Los edge cases, como manejar reservas duplicadas o validar credenciales, rompen todo si no se piensan desde el inicio. La mejor UX del mundo sin un backend sólido no sirve.\"",
          image: "/pabloEzeta.png"
        }
      },
      architecture: {
        description: "Se definieron dos tipos de usuario principales:\n\n1. Exploradores (usuarios que reservan)\n2. Proveedores (usuarios que publican tours)\n\nFlujos principales estructurados para mantener claridad:\n• Registro e inicio de sesión\n• Exploración de experiencias\n• Creación de tours\n• Reserva de experiencias\n\n👉 La arquitectura se diseñó para mantener claridad entre roles y evitar fricción en tareas clave.",
        userFlowImages: ["/uxXplora.webp"]
      },
      uxDecisions: [
        {
          title: "1. Búsqueda visible desde el inicio",
          description: ["Reduce el tiempo de acción", "El usuario entiende inmediatamente qué hacer"]
        },
        {
          title: "2. Cards simples para tours",
          description: ["Facilitan el escaneo rápido", "Evitan la sobrecarga de información"]
        },
        {
          title: "3. Flujo de reserva simplificado",
          description: ["Menos pasos = menos abandono"]
        },
        {
          title: "4. Enfoque mobile-first",
          description: ["Adaptado al uso real en contexto de viaje"]
        }
      ],
      accessibility: {
        description: "Diseñado pensando en usuarios con baja familiaridad digital:",
        points: [
          "Lenguaje claro y directo",
          "Formularios simples y guiados",
          "Jerarquía visual marcada",
          "Reducción exhaustiva de decisiones complejas"
        ]
      },
      uiDesign: {
        desktopMockups: ["/Xplora/Explora UI .webp"],
        copywritingDecisions: "Hero Section con búsqueda directa para reducir fricción. Implementamos tarjetas de experiencias altamente visuales e informativas para su escaneo rápido, una sección de valor explícita que fomenta la credibilidad y testimonios para construir confianza."
      },
      mobileDesign: {
        description: "Diseño Mobile-First por necesidad: en la industria del turismo, el contexto natural de uso sucede \"durante el viaje\" (desde el teléfono). Esto dictó la necesidad de jerarquías muy simples, formularios reducidos y llamadas a la acción inconfundibles.",
        mobileMockups: ["/Xplora/Explora mobile UI.webp"]
      },
      results: {
        description: "El resultado es un MVP robusto probado end-to-end con flujos de registro, publicación y reserva operativos que demuestra una integración exitosa entre necesidades del usuario y arquitectura backend.",
        learnings: [
          "Diseñar para usuarios reales implica simplificar, no añadir",
          "La claridad supera a la estética en productos transaccionales",
          "Reducir pasos tiene más impacto que añadir funcionalidades superficiales",
          "Pensar en roles (explorador vs proveedor) cambia completamente el modelado del producto"
        ],
        nextSteps: [
          "Pruebas de usabilidad con prospectos reales",
          "Implementación profunda del sistema de reviews",
          "Integración de pasarela de pagos (Stripe)",
          "Iteración y refactorización basada en métricas de uso"
        ]
      }
    }
  },
  {
    slug: "abismo-centro-buceo",
    title: "ABISMO",
    description: "Centro de buceo en CDMX. Diseño de identidad visual y sitio web.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/dzulha/ABISMO",
    live: "https://abismo.com.mx",
    image: "/abismo (2).png",
    categories: ["Desarrollo web y diseño web"],
    tags: ["Branding", "UI Design", "Development"],
    role: "Lead Designer & Developer",
    timeline: "2 Months",
    tools: ["Figma", "Next.js", "Illustrator"],
    caseStudy: {
      heroIntro: {
        services: ["Product Design", "Frontend Development"],
        industry: "Recreation / Sports",
        tools: ["Figma", "Next.js", "React", "Tailwind CSS"],
        objective: "Transform their digital presence from a 'certification school' into a Diving Club (Community Ecosystem), creating a platform that sells courses, manages expeditions, and fosters long-term user loyalty."
      },
      contextAndChallenge: {
        description: "El mercado del buceo suele tener una alta barrera de entrada debido a la complejidad de las certificaciones y la falta de seguimiento post-licencia.\n\nFricciones detectadas:\n• Usuarios que no saben qué curso sigue a su nivel actual.\n• Falta de pertenencia tras certificarse (los buzos pierden contacto).\n• Oferta confusa entre 'Viajes' vs. 'Cursos'.\n\n👉 Problema real: Transformar una presencia online fragmentada en un ecosistema integral que elimine la fricción de reservas corporativas y guíe instintivamente al buzo hacia su siguiente certificación.",
        images: ["/abismo (2).png", "/ABISMO/UI ABISMO.webp"]
      },
      userInsights: [
        "Los principiantes se sienten intimidados por los requisitos técnicos.",
        "Los buzos avanzados necesitan filtrar expediciones por nivel y costo rápidamente.",
        "El abandono ocurre cuando no es claro el prerrequisito de una inmersión.",
        "Sentirse parte de una comunidad (Club) es el mayor motor de retención."
      ],
      uxResearch: {
        description: "Análisis de mercado y flujos de reserva:",
        points: [
          "Benchmark de agencias de aventura de alto nivel y escuelas PADI.",
          "Identificación de puntos de caída durante el proceso de reserva de un curso.",
          "Objetivo principal: Reducir la carga cognitiva al elegir el camino de desarrollo como buzo."
        ]
      },
      branding: {
        colors: ["#00121E", "#00B4D8"],
        typography: "Montserrat & Inter",
        designJustification: "The goal was to transmit 'Technical Confidence and Wonder'. We used a deep and elegant 'Abyss Blue' combined with an 'Electric Cyan' for action accents on dark backgrounds, alongside immersive full-screen imagery to evoke the feeling of being underwater from the first scroll.",
        designerQuote: {
          text: "\"Designing for ABISMO was about capturing the quiet awe of the deep ocean while making the user feel entirely safe.\"",
          image: "/pabloEzeta.png"
        }
      },
      architecture: {
        description: "Para solucionar la fricción de reserva, propuse una arquitectura de información basada en 'La Progresión del Buzo': categorías por nivel, el concepto de 'Cursos de Preparación' vinculados a expediciones mayores, y filtros dinámicos.",
        userFlowImages: []
      },
      uxDecisions: [
        {
          title: "1. Sistema de Categorización Visual",
          description: ["Implementación de etiquetas de dificultad (Principiante, Intermedio, Avanzado).", "Reduce significativamente la carga cognitiva del usuario al navegar."]
        },
        {
          title: "2. El concepto de 'Puente' (Prep)",
          description: ["Cursos técnicos mostrados como requisitos lógicos para expediciones épicas.", "Genera un embudo natural de venta cruzada."]
        },
        {
          title: "3. Filtros Inteligentes",
          description: ["Filtros por Nivel, Precio y Servicio.", "Permite a los usuarios avanzados hallar y reservar expediciones en menos de 3 clics."]
        }
      ],
      accessibility: {
        description: "Adaptación para visuales en exteriores (playa, sol directo):",
        points: [
          "Alto contraste (Cyan Eléctrico sobre Azul Abismo).",
          "Tipografía estructurada y ultra-legible.",
          "Botones táctiles de gran tamaño para uso móvil con una mano."
        ]
      },
      uiDesign: {
        desktopMockups: ["/abismo (2).png", "/ABISMO/UI ABISMO.webp"],
        copywritingDecisions: "As a Product Designer with a development focus, using Next.js ensured instant loading (crucial for users in low-signal areas), local SEO optimization, and a scalable layout ready for new destinations."
      },
      mobileDesign: {
        description: "Mobile-first approach, prioritizing instant loading for users checking expeditions from beaches or ports.",
        mobileMockups: ["/ABISMO/ABISMO UI MOBILE.webp"]
      },
      results: {
        description: "Se logró una imagen profesional que compite con centros internacionales, junto a un flujo de reserva que simplificó la conversión a solo 3 pasos (Descubrir > Filtrar > Reservar).",
        learnings: [
          "Organizar el contenido por la 'progresión del usuario' es superior a organizarlo por catálogo estático.",
          "La lealtad en nichos se construye diseñando ecosistemas de comunidad, no solo tiendas online.",
          "El uso audaz del color y media a pantalla completa evoca inmersión emocional decisiva para ventas high-ticket."
        ],
        nextSteps: [
          "Desarrollo de un dashboard personalizado con el perfil y bitácora del buzo.",
          "Integración de firmas digitales para responsivas previas a la expedición.",
          "Sistema de recompensas de lealtad para inmersiones recurrentes."
        ]
      },
      relatedProjects: ["xplora-app"]
    }
  },
  {
    slug: "marta-watts",
    title: "Marta Watts",
    description: "Ecosistema digital completo: Desarrollo web, diseño editorial y distribución KDP para escritora independiente.",
    tech: ["WordPress", "Figma", "Amazon KDP", "Illustrator"],
    github: "",
    live: "https://amazon.com/dp/B0C3969188",
    image: "/martawatts.webp",
    categories: ["Desarrollo web y diseño web"],
    tags: ["Product Design", "Ecosystem", "Web Design", "KDP"],
    role: "Product Designer & Full Stack",
    timeline: "3 Meses",
    tools: ["WordPress", "Figma", "Amazon KDP", "Illustrator"],
    caseStudy: {
      heroIntro: {
        services: ["Product Design", "UX/UI Web", "Diseño Editorial"],
        industry: "Publishing / Autor Independiente",
        tools: ["WordPress", "Figma", "Amazon KDP", "Illustrator"],
        objective: "Diseñar un ecosistema completo que permitiera publicar y vender libros en Amazon KDP, construir una marca visual atractiva y crear una web que centralice sus libros, genere confianza y facilite la escalabilidad futura."
      },
      contextAndChallenge: {
        description: "Marta tenía un reto claro: no contaba con una presencia digital sólida ni sus libros estaban optimizados para venta online. No había una experiencia unificada entre sus libros, su marca personal y su plataforma web.\n\n👉 Problema real: Transformar contenido valioso y fragmentado en un sistema editorial y web unificado que convierta visitantes ocasionales en lectores recurrentes y potencie las ventas en Amazon directamente.",
        images: ["/Marta Watts/Marta Watts UI.webp", "/Marta Watts/Marta watts UI 2.webp"]
      },
      userInsights: [
        "Los lectores conectan emocionalmente con el autor, no solo con el libro aislado.",
        "La prueba social es el factor clave de decisión para nuevos lectores.",
        "Múltiples landings fragmentadas diluyen el tráfico y la autoridad del autor.",
        "La compra debe llevar de inmediato a plataformas de confianza (Amazon)."
      ],
      uxResearch: {
        description: "Auditoría de presencia digital y benchmark de autores Indie:",
        points: [
          "Análisis de sitios de autores top-sellers en Amazon KDP.",
          "Identificación de fricciones: pérdida de tráfico por falta de centralización.",
          "Objetivo: crear un 'Hub Central' escalable para publicación constante."
        ]
      },
      branding: {
        typography: "Legible, enfocada en storytelling",
        designJustification: "El estilo visual se definió como limpio y editorial. El uso de color se reservó para diferenciar cada libro, y se estructuró en componentes reutilizables. La decisión más importante: no hacer algo 'demasiado creativo', sino una experiencia vendible y clara que transmita confianza y conecte emocionalmente a través del valor de la familia y la música.",
        designerQuote: {
          text: "\"Un autor no necesita solo diseño, necesita un sistema. Pensar en la distribución (KDP + web) desde el inicio cambia todo. Mi rol fue liderar la experiencia del usuario, desarrollar la plataforma y organizar los activos editoriales en un ecosistema digital completo.\"",
          image: "/pabloEzeta.png"
        }
      },
      architecture: {
        description: "Se diseñó una estrategia en 3 capas centrada en la conversión:\n\n1. Producto: Maquetación y diseño de portadas orientadas al mercado de Amazon.\n2. Distribución: Optimización SEO/KDP para campañas de Ads.\n3. Web Hub: Arquitectura que guía del 'Impacto Emocional' a la 'Validación Social' y finalmente a 'Catálogo de Compra'.",
        userFlowImages: []
      },
      uxDecisions: [
        {
          title: "1. Concentración de Tráfico en un solo Hub",
          description: ["Aumenta la autoridad de la página.", "Permite cross-selling natural entre libros del mismo autor."]
        },
        {
          title: "2. Hero Section Emocional",
          description: ["Conecta de inmediato con los valores del público objetivo.", "Genera confianza antes de intentar vender."]
        },
        {
          title: "3. 'Muro de Amor' prominente",
          description: ["Agrupa testimonios reales justo antes de los botones de compra.", "Disminuye radicalmente la ansiedad de compra."]
        }
      ],
      accessibility: {
        description: "Adaptado al público objetivo (principalmente madres de familia, dispositivos móviles):",
        points: [
          "Diseño predominante móvil.",
          "Botones táctiles grandes y visibles (Contrastes fuertes en CTAs).",
          "Jerarquía tipográfica clásica (tipo novela) para no romper el modelo mental del lector."
        ]
      },
      uiDesign: {
        desktopMockups: ["/Marta Watts/Marta watts UI 2.webp"],
        copywritingDecisions: "La interfaz incluye un Hero con mensaje emocional y CTA directo, cards visuales para libros publicados con jerarquía clara de acciones (ver más/comprar), sección de próximos proyectos para generar expectativa, y un 'Muro de amor' (testimonios) como prueba social clave para la conversión."
      },
      mobileDesign: {
        description: "El sitio fue optimizado para facilitar la navegación móvil de su público principal (madres de 25 a 40 años), asegurando que el contenido visual atractivo y las llamadas a la acción estuvieran disponibles a un solo toque.",
        mobileMockups: ["/Marta Watts/Marta Watts UI mobile.webp"]
      },
      results: {
        description: "Se construyó una base sólida para la escalabilidad digital y ventas futuras de la autora, vinculando su marca directamente con Amazon KDP y mejorando la percepción de calidad del producto final.",
        learnings: [
          "El diseño editorial para autores indie también es diseño de producto.",
          "Centralizar los esfuerzos digitales en un Hub es más efectivo que micro-sitios por libro.",
          "Para los libros, la confianza del lector es tan importante como el interés por la historia."
        ],
        nextSteps: [
          "Optimización de embudos de captación de leads (Email Marketing).",
          "Implementación profunda de campañas de Amazon Ads.",
          "Tests A/B sobre las descripciones y CTAs de los libros."
        ]
      },
      relatedProjects: ["sinfonia-epub", "cosiendo-letras"]
    }
  },
  // --- EDITORIAL, EPUB Y PORTADAS ---
  {
    slug: "sinfonia-epub",
    title: "Sinfonía — Diseño y Optimización de Libro Infantil",
    description: "Libro infantil ilustrado y maquetado con Sígil y usando Adobe InDesign.",
    tech: ["HTML", "CSS", "Sígil", "Amazon KDP"],
    github: "",
    live: "https://www.amazon.com.mx/Sinfon%C3%ADa-Spanish-Marta-Watts/dp/B0D77R7W6S",
    image: "/SinfoniaEpub.png",
    categories: ["Diseño editorial maquetado", "Desarrollo de epub", "Diseño de portada"],
    tags: ["E-book", "Design", "Layout"],
    role: "Diseñador Editorial + Ilustrador + Product Thinking",
    tools: ["Adobe InDesign", "Sígil", "HTML/CSS", "Amazon KDP"],
    caseStudy: {
      heroIntro: {
        services: ["Diseño Editorial", "Ilustración", "Product Thinking"],
        industry: "Libro infantil ilustrado",
        tools: ["InDesign", "HTML/CSS", "Amazon KDP", "Sígil"],
        objective: "Diseñar un libro atractivo para niños de 6 a 12 años, crear una identidad visual coherente con la historia, adaptar el libro a formato físico y digital, y optimizar costos sin perder valor."
      },
      contextAndChallenge: {
        description: "El proyecto partía de una historia emocionante, pero con varios retos logísticos:\n\n• No existía un producto original listo para publicación y distribución.\n• El costo de impresión a color (estándar para infantil) era insostenible financieramente.\n• Riesgo alto: un precio de venta elevado acabaría con la conversión en Amazon.\n\n👉 Problema real: Cómo escalar la venta de un libro ilustrado en una plataforma altamente competitiva (Amazon), equilibrando los abrumadores costos de impresión a color con un precio final que los padres estén dispuestos a pagar.",
        images: ["/SinfoniaEpub.png", "/Sinfonia/PORTADA.webp"]
      },
      userInsights: [
        "Los padres (quienes compran) buscan un precio competitivo sin sacrificar la historia.",
        "Los niños (quienes leen) necesitan apoyo visual fuerte para mantenerse enfocados.",
        "Un libro demasiado costoso no generará tracción orgánica (reviews)."
      ],
      uxResearch: {
        description: "Análisis de viabilidad comercial y formatos de impresión en Amazon KDP:",
        points: [
          "Cálculo de márgenes de impresión a color vs. blanco y negro en KDP.",
          "Estudio de competidores indie en la categoría infantil de 6 a 12 años.",
          "Objetivo principal: Encontrar un equilibrio entre valor ilustrativo y costo por unidad."
        ]
      },
      branding: {
        designJustification: "Dirección visual con estilo fantástico y emocional. Uso de color para generar impacto con un enfoque en narrativa visual.",
        designerQuote: {
          text: "\"El mayor reto fue el costo (libro a color → impresión cara → precio alto = barrera de compra). La solución fue crear una segunda edición en blanco y negro.\"",
          image: "/pabloEzeta.png"
        }
      },
      architecture: {
        description: "El desarrollo abarcó ilustraciones a página completa, maquetación adaptativa, diseño de carátulas para tapa blanda y diagramación semántica en HTML/CSS para soportar EPUB."
      },
      uxDecisions: [
        {
          title: "1. Lanzamiento de 'Edición Alternativa'",
          description: ["Crear una versión en blanco y negro para abaratar costos.", "Permitió ofrecer un precio sumamente competitivo para captar lectores indecisos."]
        },
        {
          title: "2. Composición de Ilustraciones",
          description: ["Enfoque fantástico y enfocado en personajes centrales.", "Mantiene la atención del niño a pesar de carecer de color fotográfico."]
        }
      ],
      accessibility: {
        description: "Formatos diseñados para el lector final infantil y hardware Kindle:",
        points: [
          "Tipografía de gran tamaño adaptada a primeros lectores.",
          "Reflow dinámico en el EPUB para que no se pierda la alineación de texto-imagen.",
          "Márgenes generosos en versión impresa para facilitar manipulación."
        ]
      },
      uiDesign: {
        desktopMockups: ["/SinfoniaEpub.png", "/Sinfonia/InDesign Sinfonia (1).webp", "/Sinfonia/InDesign Sinfonia (2).webp"],
        copywritingDecisions: "Preparación de archivos print-ready y EPUB altamente optimizado y probado en dispositivos E-ink para evitar peso excesivo."
      },
      results: {
        description: "Se lanzaron 2 versiones del libro, abordando diferentes segmentos económicos y pavimentando la escalabilidad comercial del autor.",
        learnings: [
          "El 'Product Thinking' no ocurre solo en software; el diseño editorial también es un negocio.",
          "Adaptar el producto comercialmente a veces es más prudente que perfeccionarlo visualmente.",
          "Pensar en las restricciones del formato (KDP Print) desde el boceto inicial ahorra semanas de re-trabajo."
        ],
        nextSteps: [
          "Lanzamiento de una landing page exclusiva enfocada en ventas de volumen.",
          "Estrategia de Amazon Ads dirigida a búsquedas de 'libros infantiles'.",
          "Testing progresivo de precios de ambas versiones."
        ]
      },
      relatedProjects: ["marta-watts", "cosiendo-letras"]
    }
  },
  {
    slug: "cosiendo-letras",
    title: "Cosiendo Letras — Dirección Editorial para Público Adulto",
    description: "Maquetación y desarrollo de Epub y diseño de portada.",
    tech: ["Adobe InDesign", "Sígil", "Amazon KDP"],
    github: "",
    live: "",
    image: "/Cosiendo Letras/Portada Cosiendo Letras.webp", 
    categories: ["Diseño editorial maquetado", "Desarrollo de epub", "Diseño de portada"],
    tags: ["E-book", "Print", "Layout"],
    role: "Diseñador Editorial + Ilustrador + Producción Digital",
    tools: ["Adobe InDesign", "Sígil", "Amazon KDP"],
    caseStudy: {
      heroIntro: {
        services: ["Diseño Editorial", "Ilustración", "Producción Digital"],
        industry: "Antología de cuentos (adulto)",
        tools: ["InDesign", "HTML/CSS", "Amazon KDP", "Sígil"],
        objective: "Crear una identidad visual madura y coherente, diseñar una portada alineada con el género, garantizar calidad editorial en print y digital, y preparar el libro para distribución en Amazon."
      },
      contextAndChallenge: {
        description: "Como antología de cuentos dirigida a adultos, el reto divergía drásticamente de los proyectos anteriores:\n\n• Había que comunicar un tono oscuro, psicológico y maduro.\n• Se debla evitar absolutamente recaer en una estética 'genérica' o ligeramente infantil.\n• El mercado de antologías literarias es saturado y la portada suele ser el único gancho.\n\n👉 Problema real: Cómo diseñar un activo visual maduro y psicológico que destaque instantáneamente en el saturado mercado literario adulto, evadiendo clichés infantiles y priorizando la curiosidad del lector.",
        images: ["/CL_2.webp", "/Cosiendo Letras/Portada Cosiendo Letras.webp"]
      },
      userInsights: [
        "El lector de literatura madura juzga el tono por la sobriedad tipográfica.",
        "Ilustraciones explícitas reducen la intriga en thriller/psicológico.",
        "El thumbnail en Amazon (vista móvil) debe ser legible a 50px de ancho."
      ],
      uxResearch: {
        description: "Análisis perceptivo de carátulas literarias contemporáneas:",
        points: [
          "Auditoría visual de libros clasificados como thrillers psicológicos.",
          "Identificación de tendencias: predominancia de elementos minimalistas y contrastes lúgubres.",
          "Objetivo principal: Conseguir diferenciación tonal total frente a otros libros de la autora."
        ]
      },
      branding: {
        typography: "Estética oscura y sobria",
        designJustification: "El enfoque consistió en una estética oscura y sobria, con el uso de la tipografía como elemento principal. Se buscó una menor dependencia de ilustración narrativa y un mayor peso en concepto editorial, priorizando el tono sobre el impacto visual.",
        designerQuote: {
          text: "\"Cada audiencia requiere un lenguaje visual distinto. El diseño editorial es comunicación estratégica y, especialmente en público adulto, menos puede ser más.\"",
          image: "/pabloEzeta.png"
        }
      },
      architecture: {
        description: "La implementación involucró conceptualización de cubierta, maquetación editorial rítmica para fluidez lectora, y compilación final a un formato EPUB validado."
      },
      uxDecisions: [
        {
          title: "1. Priorización Tipográfica Dominante",
          description: ["Ausencia de ilustración explícita para elevar la intriga.", "Genera un aspecto de 'literatura de culto' e induce al lector a leer la sinopsis."]
        },
        {
          title: "2. Reducción de Ruido Visual",
          description: ["Fondo texturizado sobrio sin distractores.", "Mejora el impacto del thumbnail en listados abarrotados de Amazon."]
        }
      ],
      accessibility: {
        description: "Facilitando la experiencia de lectura de textos prolongados:",
        points: [
          "Márgenes generosos y un leading (interlineado) amplio para menor fatiga visual.",
          "Contraste optimizado para impresión bajo demanda (donde los negros intensos pueden empastarse)."
        ]
      },
      uiDesign: {
        desktopMockups: ["/CL_2.webp", "/Cosiendo Letras/Portada de cosiendo letras.webp", "/Cosiendo Letras/cosiendo letras epub.webp"],
        copywritingDecisions: "Se resolvieron los retos de mantener coherencia de un contenido narrativo fuerte traduciéndolo en una propuesta visual libre de clichés comerciales."
      },
      results: {
        description: "Se publicó una obra digital robusta y profesional en la tienda de KDP, forjando una identidad visual perfectamente alineada con las convenciones de su género.",
        learnings: [
          "Cada audiencia requiere un lenguaje visual diametralmente distinto.",
          "El diseño editorial no es arte decorativo, es comunicación estratégica y enmarca el tono del producto.",
          "En el mercado literario adulto, a menudo, menos puede ser infinitamente más."
        ],
        nextSteps: [
          "Landing page independiente para el libro centrada en reseñas literarias.",
          "Ejecución y pruebas A/B en estrategias de Amazon Ads.",
          "Optimizaciones continuas de keywords de metadata post-lanzamiento."
        ]
      },
      relatedProjects: ["marta-watts", "sinfonia-epub"]
    }
  }
];
