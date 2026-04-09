import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getDictionary } from "@/lib/getDictionary"
import { getProjects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, ArrowRight } from "lucide-react"
import { locales, type Locale } from "@/lib/i18n"

interface PageProps {
  params: Promise<{
    slug: string
    lang: Locale
  }>
}

export async function generateStaticParams() {
  const allParams: any[] = []
  
  for (const lang of locales) {
    const projects = await getProjects(lang)
    const filtered = projects
      .filter((p) => !!p.caseStudy)
      .map((p) => ({
        slug: p.slug,
        lang: lang,
      }))
    allParams.push(...filtered)
  }
  
  return allParams
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug, lang } = await params
  const projects = await getProjects(lang)
  const dictionary = await getDictionary(lang)
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const { caseStudy } = project
  const d = dictionary.projects.buttons

  // Helper for related projects
  const relatedProjects = caseStudy?.relatedProjects
    ? projects.filter(p => caseStudy.relatedProjects!.includes(p.slug))
    : [];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href={`/${lang}#projects`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              {lang === 'es' ? 'Volver al Portafolio' : 'Back to Portfolio'}
            </Link>
            <div className="text-lg font-bold text-white tracking-tight">Pablo Ezeta</div>
          </div>
        </div>
      </nav>

      {/* 1. Cabecera (Hero Section) e Introducción */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b from-blue-900/10 via-gray-950 to-gray-950 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Title & Resume */}
            <div className="lg:col-span-8">
              {caseStudy?.heroIntro?.logo ? (
                 <Image src={caseStudy.heroIntro.logo} alt="Logo" width={80} height={80} className="mb-6 rounded-lg bg-white/10 p-2" />
              ) : (
                 <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs tracking-wider uppercase">Case Study</Badge>
              )}
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                {project.title}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-400 mb-8 leading-relaxed font-light max-w-3xl">
                {caseStudy?.heroIntro?.objective || project.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                {project.live && (
                  <Button size="lg" className="bg-white text-gray-950 hover:bg-gray-200 font-medium px-8 rounded-full" asChild>
                    <Link href={project.live} target="_blank" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      {lang === 'es' ? 'Visitar Proyecto' : 'Visit Project'}
                    </Link>
                  </Button>
                )}
                {project.github && (
                   <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent rounded-full px-8" asChild>
                    <Link href={project.github} target="_blank" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      {d.code}
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Sidebar Data */}
            <div className="lg:col-span-4 bg-gray-900/50 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
               <div className="space-y-6">
                 {caseStudy?.heroIntro?.services && (
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{lang === 'es' ? 'Servicios' : 'Services'}</h4>
                      <p className="text-gray-200 font-medium">{caseStudy.heroIntro.services.join(", ")}</p>
                    </div>
                 )}
                 {caseStudy?.heroIntro?.industry && (
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{lang === 'es' ? 'Industria' : 'Industry'}</h4>
                      <p className="text-gray-200 font-medium">{caseStudy.heroIntro.industry}</p>
                    </div>
                 )}
                 {(caseStudy?.heroIntro?.tools || project.tech) && (
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{lang === 'es' ? 'Herramientas' : 'Tools'}</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                          {(caseStudy?.heroIntro?.tools || project.tech).map(t => (
                              <Badge key={t} variant="secondary" className="bg-gray-800 text-gray-300 border-0 hover:bg-gray-700">{t}</Badge>
                          ))}
                      </div>
                    </div>
                 )}
               </div>
            </div>
          </div>

          {/* Lifestyle / Main Mockup */}
          <div className="mt-16 aspect-video relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 group bg-gray-900">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. El Contexto y el Reto */}
      {caseStudy?.contextAndChallenge && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{lang === 'es' ? 'El Contexto y el Reto' : 'Context & Challenge'}</h2>
            <div className="text-xl text-gray-400 leading-relaxed font-light text-left md:text-center space-y-6">
               {caseStudy.contextAndChallenge.description.split(lang === 'es' ? '👉 Problema real:' : '👉 Real problem:').map((part, idx) => {
                  if (idx === 1) {
                     return (
                        <div key={idx} className="mt-12 bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-8 opacity-10">
                            <svg className="w-32 h-32 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                          </div>
                          <h3 className="text-blue-400 font-bold text-xs md:text-sm uppercase tracking-widest mb-4 relative z-10">{lang === 'es' ? 'El Problema Real' : 'The Real Problem'}</h3>
                          <p className="text-2xl md:text-3xl text-white font-medium italic relative z-10 leading-snug text-balance">"{part.trim()}"</p>
                        </div>
                     );
                  }
                  return <p key={idx} className="whitespace-pre-line text-balance">{part.trim()}</p>;
               })}
            </div>
          </div>
          
          {caseStudy.contextAndChallenge.images && caseStudy.contextAndChallenge.images.length > 0 && (
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudy.contextAndChallenge.images.map((img, idx) => (
                 <div key={idx} className="aspect-[4/3] relative rounded-2xl overflow-hidden border border-gray-800/50 shadow-xl bg-gray-900">
                   <Image src={img} alt="Context" fill className="object-cover" />
                 </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 2b. UX Research e Insights */}
      {(caseStudy?.userInsights || caseStudy?.uxResearch) && (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
               {/* User Insights */}
               {caseStudy.userInsights && (
                 <div>
                   <Badge className="mb-6 bg-pink-500/10 text-pink-400 border-pink-500/20">User Insights</Badge>
                   <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight">{lang === 'es' ? 'Entendiendo al Usuario' : 'Understanding the User'}</h2>
                   <div className="space-y-4">
                     {caseStudy.userInsights.map((insight, idx) => (
                       <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow-sm hover:border-pink-500/30 transition-colors">
                         <div className="w-10 h-10 shrink-0 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 font-bold">
                           {idx + 1}
                         </div>
                         <p className="text-gray-300 font-medium pt-2">{insight}</p>
                       </div>
                     ))}
                   </div>
                 </div>
               )}
               {/* UX Research */}
               {caseStudy.uxResearch && (
                 <div>
                   <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">UX Research</Badge>
                   <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{lang === 'es' ? 'Validación & Benchmark' : 'Validation & Benchmark'}</h2>
                   <p className="text-lg text-gray-400 leading-relaxed mb-8">
                     {caseStudy.uxResearch.description}
                   </p>
                   {caseStudy.uxResearch.points && (
                     <ul className="space-y-4">
                       {caseStudy.uxResearch.points.map((point, idx) => (
                         <li key={idx} className="flex items-start gap-3">
                           <div className="w-6 h-6 mt-1 shrink-0 bg-blue-500/20 rounded-full flex items-center justify-center">
                             <div className="w-2 h-2 bg-blue-400 rounded-full" />
                           </div>
                           <span className="text-gray-300 leading-relaxed">{point}</span>
                         </li>
                       ))}
                     </ul>
                   )}
                 </div>
               )}
            </div>
          </div>
        </section>
      )}

      {/* 3. Branding y Estética */}
      {caseStudy?.branding && (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                   <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20">{lang === 'es' ? 'Identidad Visual' : 'Visual Identity'}</Badge>
                   <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{lang === 'es' ? 'Branding y Estética' : 'Branding & Aesthetics'}</h2>
                   <p className="text-lg text-gray-400 leading-relaxed mb-8">
                     {caseStudy.branding.designJustification || (lang === 'es' ? "La estética se centró en transmitir confianza y modernidad a través de tipografías legibles y una paleta de colores coherente con la industria." : "The aesthetics focused on conveying trust and modernity through legible typography and a color palette consistent with the industry.")}
                   </p>
                   
                   {/* Colors */}
                   {caseStudy.branding.colors && (
                     <div className="mb-8 items-center flex flex-wrap gap-4">
                       <h4 className="text-sm font-medium text-gray-300 w-full">{lang === 'es' ? 'Paleta de Colores' : 'Color Palette'}</h4>
                       {caseStudy.branding.colors.map(color => (
                          <div key={color} className="group relative">
                             <div className="w-16 h-16 rounded-full shadow-inner border border-gray-700/50" style={{ backgroundColor: color }} />
                             <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity font-mono">{color}</span>
                          </div>
                       ))}
                     </div>
                   )}
                   
                   {/* Typography */}
                   {caseStudy.branding.typography && (
                     <div>
                       <h4 className="text-sm font-medium text-gray-300 mb-4">{lang === 'es' ? 'Tipografía' : 'Typography'}</h4>
                       <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800/50">
                          <span className="text-3xl text-white font-medium block mb-2">{caseStudy.branding.typography}</span>
                          <span className="block text-gray-500">Aa Bb Cc Dd Ee Ff 0123456789</span>
                       </div>
                     </div>
                   )}
                </div>

                {/* Designer Quote */}
                {caseStudy.branding.designerQuote && (
                   <div className="relative pl-8 md:pl-0">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full md:hidden" />
                      <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-10 rounded-3xl border border-gray-800/50 shadow-2xl relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-8 opacity-10">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.5 45H0L12 0H21L10.5 45ZM34.5 45H24L36 0H45L34.5 45Z" fill="currentColor"/>
                            </svg>
                         </div>
                         <p className="text-xl sm:text-2xl text-gray-300 italic mb-8 relative z-10 leading-relaxed font-light">
                           "{caseStudy.branding.designerQuote.text}"
                         </p>
                         <div className="flex items-center gap-4">
                            {caseStudy.branding.designerQuote.image && (
                              <Image src={caseStudy.branding.designerQuote.image} alt="Pablo Ezeta" width={48} height={48} className="rounded-full object-cover border-2 border-gray-800" />
                            )}
                            <div>
                               <p className="text-white font-medium">Pablo Ezeta</p>
                               <p className="text-gray-500 text-sm">Lead Designer</p>
                            </div>
                         </div>
                      </div>
                   </div>
                )}
             </div>
          </div>
        </section>
      )}

      {/* 4. Arquitectura y Segmentación */}
      {caseStudy?.architecture && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
          <div className="max-w-6xl mx-auto">
             <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{lang === 'es' ? 'Arquitectura y User Flows' : 'Architecture & User Flows'}</h2>
               <p className="text-xl text-gray-400 leading-relaxed font-light">
                 {caseStudy.architecture.description}
               </p>
             </div>
             
             {caseStudy.architecture.userFlowImages && caseStudy.architecture.userFlowImages.length > 0 && (
                <div className="space-y-8">
                  {caseStudy.architecture.userFlowImages.map((img, idx) => (
                    <div key={idx} className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-gray-800/50 bg-gray-900/50 p-4">
                       <Image src={img} alt="User Flow" fill className="object-contain" />
                    </div>
                  ))}
                </div>
             )}
          </div>
        </section>
      )}

      {/* 4b. UX Decisions & Accessibility */}
      {(caseStudy?.uxDecisions || caseStudy?.accessibility) && (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
             <div className="mb-16">
               <Badge className="mb-6 bg-green-500/10 text-green-400 border-green-500/20">Product Design</Badge>
               <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{lang === 'es' ? 'Decisiones Clave de UX' : 'Key UX Decisions'}</h2>
             </div>
             
             {caseStudy.uxDecisions && (
               <div className="grid md:grid-cols-2 gap-8 mb-20">
                 {caseStudy.uxDecisions.map((decision, idx) => (
                   <div key={idx} className="bg-gray-900 border border-gray-800 p-8 rounded-3xl hover:shadow-xl transition-all hover:-translate-y-1">
                     <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="text-green-400 bg-green-400/10 w-8 h-8 flex items-center justify-center rounded-lg text-sm">{idx + 1}</span>
                        {decision.title.replace(/^\d+\.\s*/, '')}
                     </h3>
                     <ul className="space-y-3">
                       {decision.description.map((desc, dIdx) => (
                         <li key={dIdx} className="flex items-start gap-3 text-gray-400">
                           <span className="text-green-400 mt-1">👉</span>
                           <span>{desc}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 ))}
               </div>
             )}

             {caseStudy.accessibility && (
               <div className="bg-gradient-to-br from-indigo-900/40 to-gray-900 border border-gray-800 p-10 md:p-12 rounded-[2.5rem]">
                 <div className="max-w-3xl">
                   <h3 className="text-2xl font-bold text-white mb-4">{lang === 'es' ? 'Accesibilidad y Usabilidad' : 'Accessibility & Usability'}</h3>
                   <p className="text-indigo-200 mb-8 max-w-2xl">{caseStudy.accessibility.description}</p>
                   {caseStudy.accessibility.points && (
                     <div className="grid sm:grid-cols-2 gap-4">
                       {caseStudy.accessibility.points.map((point, idx) => (
                         <div key={idx} className="flex items-center gap-3 bg-gray-950/50 p-4 rounded-xl border border-gray-800">
                           <div className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                           <span className="text-gray-300 font-medium">{point}</span>
                         </div>
                       ))}
                     </div>
                   )}
                 </div>
               </div>
             )}
          </div>
        </section>
      )}

      {/* 5. UI y Desktop */}
      {caseStudy?.uiDesign && (
         <section className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
               <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{lang === 'es' ? 'Diseño de Interfaz (UI)' : 'Interface Design (UI)'}</h2>
                    <p className="text-lg text-gray-400">
                       {caseStudy.uiDesign.copywritingDecisions}
                    </p>
                  </div>
               </div>
               
               {caseStudy.uiDesign.desktopMockups && (
                  <div className="space-y-12">
                    {caseStudy.uiDesign.desktopMockups.map((img, idx) => (
                       <div key={idx} className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 bg-gray-900 group">
                          {/* Mac window header simulation */}
                          <div className="absolute top-0 w-full h-8 bg-gray-900/80 backdrop-blur border-b border-gray-800/50 flex items-center px-4 gap-2 z-20 transition-opacity opacity-0 group-hover:opacity-100">
                             <div className="w-3 h-3 rounded-full bg-red-500/80" />
                             <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                             <div className="w-3 h-3 rounded-full bg-green-500/80" />
                          </div>
                          <Image src={img} alt="Desktop UI" fill className="object-cover object-top hover:object-bottom transition-all duration-[5s] ease-in-out" />
                       </div>
                    ))}
                  </div>
               )}
            </div>
         </section>
      )}

      {/* 6. Diseño Mobile */}
      {caseStudy?.mobileDesign && (
         <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/20 overflow-hidden">
            <div className="max-w-6xl mx-auto">
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1">
                     <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{lang === 'es' ? 'Experiencia Mobile' : 'Mobile Experience'}</h2>
                     <p className="text-lg text-gray-400 leading-relaxed">
                        {caseStudy.mobileDesign.description}
                     </p>
                  </div>
                  <div className="order-1 lg:order-2">
                     {caseStudy.mobileDesign.mobileMockups && caseStudy.mobileDesign.mobileMockups.length > 0 && (
                        <div className="flex justify-center gap-6">
                           {caseStudy.mobileDesign.mobileMockups.map((img, idx) => (
                              <div key={idx} className={`relative w-[260px] h-[550px] rounded-[3rem] border-[12px] border-gray-900 overflow-hidden shadow-2xl bg-gray-900 ${idx % 2 === 0 ? 'translate-y-0' : 'translate-y-12'}`}>
                                 <div className="absolute top-0 inset-x-0 h-5 bg-gray-900 rounded-b-2xl z-20 mx-auto w-1/2" />
                                 <Image src={img} alt="Mobile UI" fill className="object-cover" />
                              </div>
                           ))}
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </section>
      )}

      {/* 7. Resultados y Experiencia */}
      {caseStudy?.results && (
         <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10" />
            <div className="max-w-6xl mx-auto relative z-10">
               {caseStudy.results.description && (
                 <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{lang === 'es' ? 'El Impacto' : 'The Impact'}</h2>
                    <p className="text-lg text-gray-400">
                       {caseStudy.results.description}
                    </p>
                 </div>
               )}
               
               {/* Learnings and Next Steps */}
               {(caseStudy.results.learnings || caseStudy.results.nextSteps) && (
                  <div className="mt-24 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                     {caseStudy.results.learnings && (
                        <div className="bg-gray-900/80 p-10 rounded-3xl border border-gray-800/50 shadow-lg">
                           <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                              <span className="text-2xl">🧠</span> {lang === 'es' ? 'Aprendizajes' : 'Learnings'}
                           </h3>
                           <ul className="space-y-5">
                              {caseStudy.results.learnings.map((learning, idx) => (
                                 <li key={idx} className="flex items-start gap-4">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                    <span className="text-gray-300 text-lg leading-relaxed">{learning}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}
                     {caseStudy.results.nextSteps && (
                        <div className="bg-gray-900/80 p-10 rounded-3xl border border-gray-800/50 shadow-lg">
                           <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                              <span className="text-2xl">🚀</span> {lang === 'es' ? 'Próximos Pasos' : 'Next Steps'}
                           </h3>
                           <ul className="space-y-5">
                              {caseStudy.results.nextSteps.map((step, idx) => (
                                 <li key={idx} className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex justify-center items-center shrink-0">
                                       <ArrowRight className="w-3 h-3" />
                                    </div>
                                    <span className="text-gray-300 text-lg leading-relaxed">{step}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}
                  </div>
               )}
            </div>
         </section>
      )}

      {/* 8. Prueba Social / Testimonio */}
      {caseStudy?.testimonial && (
         <section className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
               <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-10 sm:p-16 rounded-[2.5rem] border border-gray-800/50 shadow-2xl text-center relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                  
                  <div className="mb-8">
                     <svg className="mx-auto w-12 h-12 text-blue-500/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                     </svg>
                  </div>
                  <p className="text-2xl sm:text-3xl text-white font-light leading-snug mb-12 italic">
                     "{caseStudy.testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                     {caseStudy.testimonial.clientImage && (
                        <Image src={caseStudy.testimonial.clientImage} alt={caseStudy.testimonial.clientName} width={64} height={64} className="rounded-full object-cover border border-gray-700" />
                     )}
                     <div className="text-left">
                        <p className="text-white font-semibold text-lg">{caseStudy.testimonial.clientName}</p>
                        <p className="text-gray-400">{caseStudy.testimonial.clientRole}</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      )}

      {/* 9. Relacionados & CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-900 bg-gray-950">
         <div className="max-w-6xl mx-auto">
            {relatedProjects.length > 0 && (
               <div className="mb-32">
                  <h3 className="text-3xl font-bold text-white mb-10 text-center tracking-tight">{lang === 'es' ? 'Proyectos Relacionados' : 'Related Projects'}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                     {relatedProjects.map(rel => (
                        <Link key={rel.slug} href={rel.caseStudy ? `/${lang}/ux/${rel.slug}` : rel.live || rel.github || '#'} className="group block">
                           <div className="aspect-video relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 mb-6 shadow-lg group-hover:border-gray-600 transition-colors">
                              <Image src={rel.image} alt={rel.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 duration-500" />
                           </div>
                           <h4 className="text-xl font-medium text-gray-200 group-hover:text-blue-400 transition-colors">{rel.title}</h4>
                           <p className="text-gray-500 text-sm mt-1">{rel.categories[0]}</p>
                        </Link>
                     ))}
                  </div>
               </div>
            )}

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-[3rem] p-12 sm:p-20 text-center shadow-2xl relative overflow-hidden">
               {/* Grid background effect */}
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
               
               <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 tracking-tight">{lang === 'es' ? '¿Listo para mejorar tu producto?' : 'Ready to enhance your product?'}</h2>
                  <p className="text-xl sm:text-2xl text-blue-100 mb-12 font-light">
                     {lang === 'es' 
                        ? 'Me encantaría ayudarte a diseñar una experiencia de usuario increíble y desarrollar un sitio que genere resultados medibles.'
                        : 'I would love to help you design an amazing user experience and develop a site that drives measurable results.'
                     }
                  </p>
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg sm:text-xl px-10 py-8 rounded-full font-bold shadow-xl hover:scale-105 transition-transform" asChild>
                     <a href="https://calendar.notion.so/meet/pabloezetawatts/h7m42i2j" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                        {lang === 'es' ? 'Agendar Llamada' : 'Schedule a Call'}
                        <ArrowRight className="w-6 h-6" />
                     </a>
                  </Button>
               </div>
            </div>
         </div>
      </section>
      
      {/* Footer Minimal */}
      <footer className="py-12 border-t border-gray-900 text-center text-gray-500 text-sm">
         <p>© {new Date().getFullYear()} Pablo Ezeta. {dictionary.footer.rights}</p>
      </footer>
    </div>
  )
}
