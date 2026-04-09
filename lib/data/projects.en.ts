import { type Project } from "../types"

export const projectsEN: Project[] = [
  // --- DESARROLLO WEB Y DISEÑO WEB (Case Studies) ---
  {
    slug: "cetus-dive-center",
    title: "CETUS — Dive School Web Platform",
    description: "A highly functional platform designed by translating complex requirements from non-technical clients into clear digital decisions for the end user.",
    tech: ["WordPress", "Calendly", "MailerLite", "CSS"],
    github: "",
    live: "",
    image: "/Cetus.webp",
    categories: ["Desarrollo web y diseño web"],
    tags: ["UX Strategy", "Clients", "WordPress"],
    role: "Web Designer + UX/UI + Implementation",
    timeline: "~1 year",
    tools: ["WordPress", "Figma", "CSS"],
    caseStudy: {
      heroIntro: {
        services: ["UX/UI Web", "Implementation", "Product Strategy"],
        industry: "Scuba Diving School / Outdoor",
        tools: ["WordPress", "Figma", "API Integrations"],
        objective: "Design a clear and functional platform for beginner divers, addressing the critical challenge of guiding a client with no digital background to achieve an ecosystem that genuinely drives business."
      },
      contextAndChallenge: {
        description: "CETUS needed a digital presence with three clear purposes: showcasing courses, promoting trips, and facilitating contact.\n\nHowever, there was an underlying, vital human challenge:\nThe client lacked technical and digital experience. This caused difficulties in structuring content, confusion regarding business priorities, and a constant need for education and validation at every step.\n\n👉 Real problem: How to design a robust, conversion-focused platform while translating the client's manual, non-technical vision into components they can independently manage.",
        images: ["/Cetus.webp", "/Cetus/Cetus UI (1).webp"]
      },
      userInsights: [
        "My clients had zero technical background; they wanted a product to solve their logistics but experienced huge friction learning new digital tools.",
        "The end-users (students) demand absolute clarity; they immediately avoid confusing formats because physical safety is constantly top of mind.",
        "Translating the client's operational frustrations into digital flows became the core user insight."
      ],
      uxResearch: {
        description: "Strategy heavily based on Perceptive UX:",
        points: [
          "CLARITY: Destroy specialized diving jargon.",
          "CONFIDENCE: Display real faces and official instructor certifications.",
          "CONVERSION: Limit navigation and boost direct Call-to-Actions for bookings."
        ]
      },
      branding: {
        colors: ["#BF0B2C", "#049DD9"],
        typography: "Clear, large, non-intimidating",
        designJustification: "We avoided the typical paradigm of highly academic technical certification pages. The visual mood screams 'safe adventure'. Generous spacing, bright light, and photos of people interactively learning (trust-building) rather than abstract vector graphics.",
        designerQuote: {
          text: "\"A huge part of the Product Design challenge is dealing with emotional, unstructured feedback from first-time clients. Translating that into a logical screen flow... that's where the magic lies.\"",
          image: "/pabloEzeta.png"
        }
      },
      architecture: {
        description: "Hierarchical Web Structure and Information Architecture:\n\n1. Home (Introduction and service anchoring).\n2. Courses (Visually segmented by level: from Try-Dive to Professional).\n3. Trips (Community retention catalog).\n4. About Us (Social validation and trust).\n5. Contact (Conversion).",
      },
      uxDecisions: [
        {
          title: "1. 100% Simplified Information",
          description: ["Removed technical language.", "Every course is explained as a digestible, step-by-step process."]
        },
        {
          title: "2. Navigation Limitation",
          description: ["Fewer global options.", "Significantly reduces 'Analysis Paralysis' and increases final conversion rates."]
        },
        {
          title: "3. Visual Blocks and Hierarchy",
          description: ["Course names set in high visual hierarchy.", "Favors quick scanning by mobile users walking down the street."]
        }
      ],
      accessibility: {
        description: "Designed for both the final visitor and the administrator (client):",
        points: [
          "CMS (Content Management System) finely adjusted for extreme ease of use by the owner (Administration Autonomy).",
          "Guided visual interactions (for divers unaccustomed to complex interfaces)."
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
        copywritingDecisions: "🚧 Real-world challenges overcome: Educating the client; iterating over impossible ideas through simple visual mockups; defending interface decisions when the client's technical feedback did not follow conventional mental models."
      },
      results: {
        description: "Delivered a fully live, complete platform serving as a reliable lead-capture tool, modernizing the school's entire promotional structure.",
        learnings: [
          "Designing is, to a large extent, educating the stakeholder about what their own business needs.",
          "Absolute clarity consistently defeats unnecessary technological complexity.",
          "With non-technical users, the interface must assume the user has never been in a web environment."
        ],
        nextSteps: [
          "Future integration to an automated shift and management system.",
          "Native integration of direct payment gateways.",
          "Technical SEO improvements for local blogging."
        ]
      },
      relatedProjects: ["abismo-centro-buceo"]
    }
  },
  {
    slug: "xplora-app",
    title: "Xplora — Tour & Experience Platform",
    description: "Fullstack platform connecting local guides with travelers.",
    tech: ["React", "Python", "Flask", "PostgreSQL"],
    github: "https://github.com/dzulha/Xplore-Proyecto-final-latam-ft-5",
    live: "",
    image: "/xplora.webp",
    categories: ["Desarrollo web y diseño web"],
    tags: ["Full Stack", "UX Design", "Travel App"],
    role: "Fullstack Developer + UX Designer",
    timeline: "4 Weeks",
    tools: ["React", "Flask", "PostgreSQL", "Figma", "Miro"],
    caseStudy: {
      heroIntro: {
        services: ["Fullstack Development", "UX/UI Design"],
        industry: "Tourism & Travel Tech",
        tools: ["React", "Python/Flask", "PostgreSQL", "Figma"],
        objective: "Build an end-to-end functional platform where local guides can register and publish tours, and users can easily explore and book them."
      },
      contextAndChallenge: {
        description: "Local tourism faces a clear disconnect: people offering experiences lack accessible digital tools to manage them, while users encounter fragmented and unclear booking processes.\n\nAdditionally, non-technical users face friction when:\n• Understanding how to book\n• Comparing options\n• Trusting local experiences\n\n👉 Real problem: Design an asymmetrical logistics platform (explorers vs. local guides) that distills total trust and eliminates vast adoption barriers in a dominantly mobile setting.",
        images: ["/xplora.webp", "/Xplora/Xplora Ui 1.png"]
      },
      userInsights: [
        "Users prioritize speed over deep exploration.",
        "Trust (reviews, clarity) directly influences out-of-town booking decisions.",
        "Long registration forms cause immediate cart abandonment.",
        "The mobile context reigns supreme during travel."
      ],
      uxResearch: {
        description: "Flow Analysis and Validation Approach:",
        points: [
          "Benchmark of existing platforms like Airbnb Experiences, GetYourGuide, and Viator.",
          "Analyzed existing booking flows and edge cases.",
          "Identified common frictions: Too many steps, hidden pricing, cluttered UI.",
          "Objective: drastically reduce friction in the core flow."
        ]
      },
      branding: {
        colors: ["#A3D9D3", "#327367", "#2F6F64"],
        typography: "Clear and legible for variable environments",
        designJustification: "We prioritized visual accessibility for on-the-go mobile environments. Scannable components, visual cards, and minimal-friction input forms.",
        designerQuote: {
          text: "\"A product isn't just UI; it's logic operating in a complex system. Edge cases—like handling duplicate bookings or validating credentials—break everything if not considered early on. The best UX in the world fails without a solid backend.\"",
          image: "/pabloEzeta.png"
        }
      },
      architecture: {
        description: "Two primary user archetypes were defined:\n\n1. Explorers (Bookers)\n2. Providers (Tour Publishers)\n\nCore flows structured to maintain clarity:\n• Registration and Login\n• Experience Discovery\n• Tour Creation Engine\n• Experience Booking\n\n👉 The architecture securely separates profiles to avoid user misdirection during key tasks.",
        userFlowImages: ["/uxXplora.webp"]
      },
      uxDecisions: [
        {
          title: "1. Immediate Search Dominance",
          description: ["Cuts down time-to-action.", "The user instantly knows what to do upon landing."]
        },
        {
          title: "2. Simplified Tour Cards",
          description: ["Facilitates rapid scanning.", "Prevents cognitive overload."]
        },
        {
          title: "3. Stripped Booking Flow",
          description: ["Fewer steps directly equal less cart abandonment."]
        },
        {
          title: "4. Mobile-First Foundation",
          description: ["Tailored to real-world usage during actual transit."]
        }
      ],
      accessibility: {
        description: "Designed anticipating low digital literacy margins:",
        points: [
          "Direct, jargon-free language.",
          "Guided, sequential forms.",
          "Strong visual hierarchy.",
          "Aggressive reduction of complex decision-making."
        ]
      },
      uiDesign: {
        desktopMockups: ["/Xplora/Explora UI .webp"],
        copywritingDecisions: "Hero Section with direct search capabilities to kill friction early. We deployed highly visual, informative experience cards for fast scanning, an explicit value proposition section driving credibility, and social proof through testimonials."
      },
      mobileDesign: {
        description: "Necessity-driven Mobile-First design: In tourism, the natural context of use happens 'on the trip' (via smartphone). This dictated ultra-simple hierarchies, reduced forms, and unmistakable CTAs.",
        mobileMockups: ["/Xplora/Explora mobile UI.webp"]
      },
      results: {
        description: "Resulted in a robust, end-to-end tested MVP featuring fully operational registration, publishing, and booking flows, demonstrating successful integration between user needs and backend architecture.",
        learnings: [
          "Designing for real users means simplifying, not adding.",
          "Clarity always beats pure aesthetics in transactional products.",
          "Reducing steps has exponentially more impact than adding superficial features.",
          "Thinking in terms of roles (explorer vs provider) changes the entire product modeling."
        ],
        nextSteps: [
          "Usability testing with real demographics.",
          "Deep integration of the review and rating system.",
          "Payment gateway integration (Stripe).",
          "Metrics-driven iteration and refactoring."
        ]
      }
    }
  },
  {
    slug: "abismo-centro-buceo",
    title: "ABISMO",
    description: "Scuba diving center in Mexico City. Brand identity and web ecosystem.",
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
        description: "The scuba diving market suffers a high barrier to entry due to certification complexity and a lack of post-license follow-up.\n\nIdentified Frictions:\n• Users don't know what course logically follows their current level.\n• Lack of belonging post-certification (divers lose contact).\n• Confusing offerings between 'Trips' and 'Courses'.\n\n👉 Real problem: Transform a fragmented online presence into an integrated ecosystem that eliminates corporate booking friction and instinctively guides the diver toward their next certification.",
        images: ["/abismo (2).png", "/ABISMO/UI ABISMO.webp"]
      },
      userInsights: [
        "Beginners feel highly intimidated by technical requirements.",
        "Advanced divers need to filter expeditions rapidly by level and cost.",
        "Drop-off spikes when prerequisites for a dive aren't crystal clear.",
        "Feeling part of a community (Club) is the strongest retention driver."
      ],
      uxResearch: {
        description: "Market Analysis and Booking Flow teardowns:",
        points: [
          "Benchmark of high-end adventure agencies and global PADI schools.",
          "Identified drop-off points during course booking funnels.",
          "Primary objective: Lower cognitive load when a user chooses their developmental path as a diver."
        ]
      },
      branding: {
        colors: ["#00121E", "#00B4D8"],
        typography: "Montserrat & Inter",
        designJustification: "The goal was to project 'Technical Confidence alongside Wonder'. We deployed an elegant deep 'Abyss Blue' combined with an 'Electric Cyan' for action accents on dark backgrounds, using immersive full-screen imagery to evoke underwater immersion from the first scroll.",
        designerQuote: {
          text: "\"Designing for ABISMO was about capturing the quiet awe of the deep ocean while making the user feel entirely physically safe.\"",
          image: "/pabloEzeta.png"
        }
      },
      architecture: {
        description: "To solve booking friction, I proposed an Information Architecture built around 'The Diver's Progression': categories by skill ceiling, the concept of 'Preparation Courses' linked to major expeditions, and dynamic filters.",
        userFlowImages: []
      },
      uxDecisions: [
        {
          title: "1. Visual Skill Categorization System",
          description: ["Deployed difficulty tags (Beginner, Intermediate, Advanced).", "Significantly cuts cognitive overload while browsing."]
        },
        {
          title: "2. The 'Bridge' Concept",
          description: ["Technical courses displayed as logical prerequisites for epic expeditions.", "Generates a natural cross-selling funnel."]
        },
        {
          title: "3. Intelligent Filters",
          description: ["Filters by Level, Price, and Service.", "Empowers advanced users to find and book expeditions in under 3 clicks."]
        }
      ],
      accessibility: {
        description: "Adapted for outdoor visual access (beach, direct sunlight):",
        points: [
          "Ultra-high contrast (Electric Cyan on Abyss Blue).",
          "Highly structured, ultra-legible typography.",
          "Oversized tactile touch targets optimized for single-handed mobile use."
        ]
      },
      uiDesign: {
        desktopMockups: ["/abismo (2).png", "/ABISMO/UI ABISMO.webp"],
        copywritingDecisions: "As a Product Designer with a development focus, using Next.js ensured instant loading (crucial for users in low-signal areas), local SEO optimization, and a scalable layout ready for new destinations."
      },
      mobileDesign: {
        description: "Mobile-first approach, prioritizing instant loading and visibility for users routinely checking expeditions from ports or boats.",
        mobileMockups: ["/ABISMO/ABISMO UI MOBILE.webp"]
      },
      results: {
        description: "Achieved a professional brand image competing globally, coupled with a booking flow that simplified conversions to just 3 steps (Discover > Filter > Book).",
        learnings: [
          "Organizing content by 'User Progression' vastly outperforms static catalog organization.",
          "Niche loyalty is forged by designing community ecosystems, not just eCommerce stores.",
          "Bold use of color and full-screen media triggers the emotional immersion critical for high-ticket sales."
        ],
        nextSteps: [
          "Develop a custom dashboard featuring user profiles and digital dive logs.",
          "Integrate digital signatures for pre-expedition waivers.",
          "Deploy a loyalty reward system for recurring dive bookings."
        ]
      },
      relatedProjects: ["cetus-dive-center"]
    }
  },
  {
    slug: "marta-watts",
    title: "Marta Watts",
    description: "Complete digital ecosystem: Web dev, editorial design, and KDP distribution for an Indie Author.",
    tech: ["WordPress", "Figma", "Amazon KDP", "Illustrator"],
    github: "",
    live: "https://amazon.com/dp/B0C3969188",
    image: "/martawatts.webp",
    categories: ["Desarrollo web y diseño web"],
    tags: ["Product Design", "Ecosystem", "Web Design", "KDP"],
    role: "Product Designer & Full Stack",
    timeline: "3 Months",
    tools: ["WordPress", "Figma", "Amazon KDP", "Illustrator"],
    caseStudy: {
      heroIntro: {
        services: ["Product Design", "UX/UI Web", "Editorial Design"],
        industry: "Publishing / Indie Author",
        tools: ["WordPress", "Figma", "Amazon KDP", "Illustrator"],
        objective: "Design a comprehensive ecosystem facilitating Amazon KDP publishing, constructing a compelling visual brand, and launching a centralized web hub to build trust and scale seamlessly."
      },
      contextAndChallenge: {
        description: "Marta faced a clear hurdle: she had no solid digital presence, nor were her books optimized for online sales. There was zero unified experience linking her literature, personal brand, and web platform.\n\n👉 Real problem: Transform valuable, fragmented content into a unified editorial and web system that turns casual visitors into recurring literature buyers directly elevating Amazon sales.",
        images: ["/Marta Watts/Marta Watts UI.webp", "/Marta Watts/Marta watts UI 2.webp"]
      },
      userInsights: [
        "Readers connect emotionally with the author first, not just the isolated book.",
        "Social proof is the undisputed dealmaker for new readers.",
        "Multiple fragmented landing pages dangerously dilute traffic and author authority.",
        "The checkout process must lead instantly to highly-trusted platforms (Amazon)."
      ],
      uxResearch: {
        description: "Digital presence audit alongside Top-Seller Indie benchmark:",
        points: [
          "Analyzed web setups for Amazon KDP top-sellers.",
          "Identified severe friction points: major traffic bleed due to lack of centralization.",
          "Objective: establish a scalable 'Central Hub' supporting continuous publication."
        ]
      },
      branding: {
        typography: "Legible, heavily focused on storytelling",
        designJustification: "The visual aesthetic was defined as clean and highly editorial. Color was strictly reserved to differentiate each book, anchored by reusable components. Our most critical decision: avoid being 'over-creative' and instead deliver a clear, highly-sellable experience conveying trust and emotional connection through themes of family and music.",
        designerQuote: {
          text: "\"An author doesn't just need design; they need a system. Conceptualizing distribution (KDP + web) from Day 1 changes everything. My role was leading the UX, coding the platform, and packaging editorial assets into one cohesive digital engine.\"",
          image: "/pabloEzeta.png"
        }
      },
      architecture: {
        description: "Deployed a 3-layer conversion-centric strategy:\n\n1. Product: Layout and cover designs hyper-optimized for the Amazon marketplace.\n2. Distribution: SEO/KDP optimization prepping for Ad campaigns.\n3. Web Hub: An architecture guiding the user from 'Emotional Impact' straight into 'Social Validation' and concluding at the 'Purchase Catalog'.",
        userFlowImages: []
      },
      uxDecisions: [
        {
          title: "1. Traffic Concentration directly into a Single Hub",
          description: ["Aggressively scales domain authority.", "Facilitates organic cross-selling between titles."]
        },
        {
          title: "2. Emotionally-Charged Hero Section",
          description: ["Connects instantly to the target demographic's core values.", "Engineers a trust-baseline long before attempting a hard sell."]
        },
        {
          title: "3. Prominent 'Wall of Love'",
          description: ["Groups real-world testimonials right above purchase intent zones.", "Radically dampens purchase anxiety."]
        }
      ],
      accessibility: {
        description: "Custom tailored for the target demographic (predominantly mothers, 90% mobile):",
        points: [
          "Aggressive Mobile-First approach.",
          "Oversized, high-contrast touch targets for CTAs.",
          "Classic, novel-like typographic hierarchy honoring the reader's mental model."
        ]
      },
      uiDesign: {
        desktopMockups: ["/Marta Watts/Marta watts UI 2.webp"],
        copywritingDecisions: "The UI features a poignant Hero message with an immediate CTA, visual cards for published works maintaining strict hierarchy (Read More vs Buy Now), a 'Coming Soon' section building hype, and a testimonial block acting as the final conversion push."
      },
      mobileDesign: {
        description: "The site was relentlessly optimized for mobile viewing for its primary target audience (mothers aged 25-40), ensuring gorgeous visuals and actions were always a single thumb-tap away.",
        mobileMockups: ["/Marta Watts/Marta Watts UI mobile.webp"]
      },
      results: {
        description: "Forged a rock-solid foundation for future digital scalability, tying her brand directly onto the Amazon KDP engine and profoundly elevating the perceived quality of her literary products.",
        learnings: [
          "Editorial design for Indie Authors is practically Product Design.",
          "Consolidating digital efforts into a Hub crushes isolated micro-sites every time.",
          "When selling literature online, user trust is equally as vital as an interesting synopsis."
        ],
        nextSteps: [
          "Optimize lead generation funnels (Email Marketing automation).",
          "Deep integration of Amazon Ads campaigns.",
          "A/B split testing targeting book descriptions and buying CTAs."
        ]
      },
      relatedProjects: ["sinfonia-epub", "cosiendo-letras"]
    }
  },
  // --- EDITORIAL, EPUB Y PORTADAS ---
  {
    slug: "sinfonia-epub",
    title: "Sinfonía — Kids Book Design & Optimization",
    description: "Illustrated children's book intricately laid out using Sigil and Adobe InDesign.",
    tech: ["HTML", "CSS", "Sigil", "Amazon KDP"],
    github: "",
    live: "https://www.amazon.com.mx/Sinfon%C3%ADa-Spanish-Marta-Watts/dp/B0D77R7W6S",
    image: "/SinfoniaEpub.png",
    categories: ["Diseño editorial maquetado", "Desarrollo de epub", "Diseño de portada"],
    tags: ["E-book", "Design", "Layout"],
    role: "Editorial Designer + Illustrator + Product Thinking",
    tools: ["Adobe InDesign", "Sigil", "HTML/CSS", "Amazon KDP"],
    caseStudy: {
      heroIntro: {
        services: ["Editorial Design", "Illustration", "Product Thinking"],
        industry: "Illustrated Children's Literature",
        tools: ["InDesign", "HTML/CSS", "Amazon KDP", "Sigil"],
        objective: "Design a visually arresting book for 6-12 year olds, mint a coherent visual identity, adapt it seamlessly into physical and digital realms, and execute ruthless cost optimization without bleeding value."
      },
      contextAndChallenge: {
        description: "The project started with a thrilling story, but stumbled upon major logistical walls:\n\n• An original, launch-ready product didn't yet exist.\n• Color printing costs (mandatory for kids' books) was financially unsustainable for scale.\n• High Risk: A bloated retail price would murder conversion rates on Amazon.\n\n👉 Real problem: How to scale the sales of an illustrated book within a hyper-competitive arena (Amazon), balancing crushing color-printing fees alongside a final price parents will happily pay.",
        images: ["/SinfoniaEpub.png", "/Sinfonia/PORTADA.webp"]
      },
      userInsights: [
        "Parents (the buyers) demand a hyper-competitive price without sacrificing the narrative experience.",
        "Kids (the readers) require heavy visual grounding to maintain absolute focus.",
        "An exorbitantly priced indie book cannot snowball organic traction (reviews)."
      ],
      uxResearch: {
        description: "Deep-dive commercial viability analysis evaluating Amazon KDP print formats:",
        points: [
          "Calculated print-on-demand margins mapping color against Black & White variants in KDP.",
          "Studied leading indie competitors within the 6-12 years category.",
          "Core objective: Lock down the mathematical sweet spot balancing visual delight with unit cost."
        ]
      },
      branding: {
        designJustification: "Deployed an emotional, fantasy-driven visual direction. Mastered high-impact colors with a strict focus on visual narrative rather than mere decoration.",
        designerQuote: {
          text: "\"The ultimate boss fight here was the margin (Color Book → Expensive Print → High Price = dead sales). The design-led solution? Engineering a secondary Black & White edition.\"",
          image: "/pabloEzeta.png"
        }
      },
      architecture: {
        description: "Execution spanned full-page illustrations, adaptive layouts, softcover sleeve designs, and semantic HTML/CSS diagramming enforcing EPUB structural integrity."
      },
      uxDecisions: [
        {
          title: "1. Launching an 'Alternate Edition'",
          description: ["Prototyped a pure Black and White variant to crash production costs.", "Permitted a wickedly competitive market price to capture hesitant parents."]
        },
        {
          title: "2. Strategic Illustration Framing",
          description: ["Fantasy-centric focus leaning heavily into primary character action.", "Perfectly captures the child's attention even in the total absence of photographic color."]
        }
      ],
      accessibility: {
        description: "Formats architected from the ground up for kids and E-ink Kindle hardware:",
        points: [
          "Supersized typography configured for emerging readers.",
          "Dynamic EPUB reflow ensuring text-image alignment survives screen rescaling.",
          "Generous physical print margins to accommodate clumsy handling."
        ]
      },
      uiDesign: {
        desktopMockups: ["/SinfoniaEpub.png", "/Sinfonia/InDesign Sinfonia (1).webp", "/Sinfonia/InDesign Sinfonia (2).webp"],
        copywritingDecisions: "Crafted print-ready assets and a surgically optimized EPUB strictly tested on E-ink screens to sidestep extreme file-size bloat."
      },
      results: {
        description: "Successfully shipped 2 editions simultaneously, locking down disparate economic segments and cementing scalable commercial traction for the author.",
        learnings: [
          "Product Thinking doesn't end at software; editorial design is just as much an engineering and business endeavor.",
          "Commercially adapting a product often eclipses the desire to visually perfect it.",
          "Designing constrained by the platform (KDP Print) from sketch zero prevents weeks of agonizing rework."
        ],
        nextSteps: [
          "Deploy an exclusive high-volume sales landing page.",
          "Execute targeted Amazon Ads targeting 'children's books' organic searches.",
          "Progressive A/B price elasticity testing on both variants."
        ]
      },
      relatedProjects: ["marta-watts", "cosiendo-letras"]
    }
  },
  {
    slug: "cosiendo-letras",
    title: "Cosiendo Letras — Adult Editorial Direction",
    description: "EPUB development, professional layout, and cover conceptualization.",
    tech: ["Adobe InDesign", "Sigil", "Amazon KDP"],
    github: "",
    live: "",
    image: "/Cosiendo Letras/Portada Cosiendo Letras.webp", 
    categories: ["Diseño editorial maquetado", "Desarrollo de epub", "Diseño de portada"],
    tags: ["E-book", "Print", "Layout"],
    role: "Editorial Designer + Illustrator + Digital Production",
    tools: ["Adobe InDesign", "Sigil", "Amazon KDP"],
    caseStudy: {
      heroIntro: {
        services: ["Editorial Design", "Illustration", "Digital Production"],
        industry: "Adult Short Story Anthology",
        tools: ["InDesign", "HTML/CSS", "Amazon KDP", "Sigil"],
        objective: "Establish a mature and coherent visual identity, design a highly targeted genre-aligned cover, enforce editorial perfection across print/digital, and prime the asset for Amazon distro."
      },
      contextAndChallenge: {
        description: "Targeting an adult demographic via an anthology drastically diverged the design constraints compared to previous projects:\n\n• Mandatory communication of a dark, psychological, and completely mature tone.\n• Absolute avoidance of generic or mildly juvenile aesthetic traps.\n• The literary anthology market is brutally saturated; the thumbnail cover acts as the sole hook.\n\n👉 Real problem: How to engineer a mature, psychological visual asset that instantly stands out inside a suffocated adult literary marketplace, evading childish cliches while hijacking reader curiosity.",
        images: ["/CL_2.webp", "/Cosiendo Letras/Portada Cosiendo Letras.webp"]
      },
      userInsights: [
        "Mature literature readers relentlessly judge tonal quality purely via typographic restraint.",
        "Overt, explicit illustrations accidentally murder the suspense required for thriller/psychological genres.",
        "The Amazon thumbnail (viewed on mobile) must remain utterly legible at 50px wide."
      ],
      uxResearch: {
        description: "Perceptive analysis dominating contemporary literary covers:",
        points: [
          "Conducted visual audits of top-ranking psychological thrillers.",
          "Identified macro-trends: heavy dominance of sharp minimalism and macabre contrast.",
          "Core objective: Force total tonal differentiation against the author's previous portfolio."
        ]
      },
      branding: {
        typography: "Dark, somber aesthetics",
        designJustification: "We navigated towards a grim, subdued aesthetic deploying typography as the absolute anchor element. We stripped away narrative illustration in favor of conceptual editorial weight, prioritizing tone over mere visual noise.",
        designerQuote: {
          text: "\"Every audience requires a drastically distinct visual syntax. Editorial design is strategic warfare; within the adult landscape, doing less frequently achieves infinitely more.\"",
          image: "/pabloEzeta.png"
        }
      },
      architecture: {
        description: "Execution commanded the conceptualization of the sleeve, a rhythmic editorial flow smoothing reading stamina, and compiling the final asset into a strictly validated EPUB format."
      },
      uxDecisions: [
        {
          title: "1. Dominant Typographic Hierarchy",
          description: ["Total absence of explicit imagery to supercharge psychological intrigue.", "Forges a 'cult classic' aesthetic, psychologically forcing the reader to check the synopsis."]
        },
        {
          title: "2. Visual Noise Eradication",
          description: ["Somber, highly-textured backdrop void of distractions.", "Massively elevates thumbnail punch within overcrowded Amazon search pages."]
        }
      ],
      accessibility: {
        description: "Tailored to facilitate prolonged un-interrupted reading sessions:",
        points: [
          "Expansive margins mapped with aggressive leading (line-height) to eradicate visual fatigue.",
          "Contrast highly optimized for Print-on-Demand constraints (preventing 'muddy' deep blacks)."
        ]
      },
      uiDesign: {
        desktopMockups: ["/CL_2.webp", "/Cosiendo Letras/Portada de cosiendo letras.webp", "/Cosiendo Letras/cosiendo letras epub.webp"],
        copywritingDecisions: "Overcame immense challenges translating incredibly heavy narrative weight into an elegant, cliché-free commercial proposition."
      },
      results: {
        description: "Published a brutally robust, razor-sharp digital asset onto KDP, locking in a visual identity flawlessly aligned with its rigorous genre constraints.",
        learnings: [
          "Audiences mandate fundamentally opposed visual languages.",
          "Editorial Design is emphatically not decorative art—it's strategic communication framing product tone.",
          "In the adult literary sphere, surgical restraint infinitely outclasses visual saturation."
        ],
        nextSteps: [
          "Deploy an independent, review-centric landing page specifically for this anthology.",
          "Execute split-tested Amazon Ad integrations.",
          "Continuous post-launch keyword optimization via KDP metadata."
        ]
      },
      relatedProjects: ["marta-watts", "sinfonia-epub"]
    }
  }
];
