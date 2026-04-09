"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, ExternalLink, Mail, Linkedin, Code, Palette, Globe, Database, Server, Smartphone, Filter, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { type Project, type ProjectCategory } from "@/lib/projects"
import { type Locale } from "@/lib/i18n"

export default function Component({ lang, dict, projects }: { lang: Locale, dict: any, projects: Project[] }) {
  
  // High-level category filter
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategory>("all")
  
  // Specific tag filtering
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Get all unique tags from the current displayed projects (based on category)
  // to avoid showing tags that yield 0 results.
  const availableTags = useMemo(() => {
    const projectsInCategory = categoryFilter === "all" 
      ? projects 
      : projects.filter(p => p.categories.includes(categoryFilter));
      
    const tags = new Set<string>();
    projectsInCategory.forEach(p => {
        p.tags?.forEach(t => tags.add(t));
        // Also add tech to tags for filtering if desired, or keep separate
        // p.tech.forEach(t => tags.add(t)); 
    });
    return Array.from(tags).sort();
  }, [categoryFilter]);

  const filteredProjects = useMemo(() => {
    let result = projects

    // 1. Filter by Category
    if (categoryFilter !== "all") {
      result = result.filter((p) => p.categories.includes(categoryFilter))
    }

    // 2. Filter by Selected Tags (Project must have ALL selected tags or ANY? ANY is usually better for casual browsing, ALL is better for specific search)
    // Let's go with "Has at least one of the selected tags" if tags are selected.
    if (selectedTags.length > 0) {
      result = result.filter(p => 
        selectedTags.some(tag => p.tags?.includes(tag))
      )
    }

    return result
  }, [categoryFilter, selectedTags])


  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
        prev.includes(tag) 
            ? prev.filter(t => t !== tag) 
            : [...prev, tag]
    )
  }

  const clearFilters = () => {
      setCategoryFilter("all");
      setSelectedTags([]);
  }

  const skills = [
    { name: "Frontend Development", icon: Code, description: "JavaScript (React.js), HTML5, CSS3, Tailwind" },
    { name: "Backend Development", icon: Server, description: "Python (Flask), C#, Restful APIs, JWT" },
    { name: "UX/UI & Editorial Design", icon: Palette, description: "Figma, Adobe InDesign, Adobe Photoshop" },
    { name: "CMS & Platforms", icon: Globe, description: "WordPress, Wix, Odoo, Elementor" },
    { name: "Database & Cloud", icon: Database, description: "PostgreSQL, SQL, AWS, GitHub" },
    { name: "Product Strategy", icon: Smartphone, description: "SEO, CRM, Automation (n8n)" },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-white">Pablo Ezeta</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900/50 p-2">
                <Image
                  src="/xplora.webp"
                  alt="Projects Showcase"
                  width={600}
                  height={500}
                  className="rounded-xl object-cover w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 text-left">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                Over 15 Years of Experience
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Product-Led Full Stack Developer <span className="text-blue-400 block">& UX/UI Designer</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
                I bridge the gap between design, business strategy, and robust engineering. I build scalable digital products that drive growth and deliver exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                {/* Agenda una llamada: abre una URL externa (Calendly u otro) en nueva pestaña */}
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <a
                    href="https://calendar.notion.so/meet/pabloezetawatts/h7m42i2j" /* reemplaza por tu enlace de agenda */
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Agenda una llamada
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>

                {/* Descargar CV: coloca el PDF en /public (por ejemplo /Pablo_Ezeta_CV.pdf) */}
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  <a
                    href="/Pablo-Alfonso-Ezeta-Watts-CV.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Descargar CV
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As a Product-Led Full Stack Developer and UX/UI Designer with over 15 years of experience, my background uniquely blends Marketing, high-level Design, and Full-Stack Engineering.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I specialize in Python (Flask) and React ecosystems, building secure, full-scale digital solutions like the Xplora Tour Management Platform. Prior to this, I founded and scaled ABISMO, expanding a diving school for 200+ clients across multiple markets by leveraging custom CRM implementations, SEO/SEM strategies, and product strategy.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Through a product-focused approach, I integrate robust backend architectures (PostgreSQL, APIs, AWS) with visually compelling frontends, ensuring every application meets both core business objectives and user needs. My goal is to deliver technical excellence intertwined with measurable business value.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                <Image
                  src="/pabloEzeta.png"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Skills & Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I offer comprehensive development and design services to help bring your ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg">
                      <skill.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-white">{skill.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{skill.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A selection of recent projects showcasing my full-stack development and design capabilities
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-12 space-y-4">
              {/* Main Categories */}
              <div className="flex justify-center">
                <div className="inline-flex flex-wrap justify-center gap-2 rounded-lg bg-gray-800/40 p-2">
                  <button
                    onClick={() => { setCategoryFilter("all"); setSelectedTags([]); }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${categoryFilter === "all" ? "bg-blue-600 text-white shadow-lg" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => { setCategoryFilter("Desarrollo web y diseño web"); setSelectedTags([]); }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${categoryFilter === "Desarrollo web y diseño web" ? "bg-blue-600 text-white shadow-lg" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                  >
                    Desarrollo Web & UX
                  </button>
                  <button
                    onClick={() => { setCategoryFilter("Diseño editorial maquetado"); setSelectedTags([]); }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${categoryFilter === "Diseño editorial maquetado" ? "bg-blue-600 text-white shadow-lg" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                  >
                    Editorial
                  </button>
                  <button
                    onClick={() => { setCategoryFilter("Desarrollo de epub"); setSelectedTags([]); }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${categoryFilter === "Desarrollo de epub" ? "bg-blue-600 text-white shadow-lg" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                  >
                    Epub
                  </button>
                  <button
                    onClick={() => { setCategoryFilter("Diseño de portada"); setSelectedTags([]); }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${categoryFilter === "Diseño de portada" ? "bg-blue-600 text-white shadow-lg" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                  >
                    Portadas
                  </button>
                  <button
                    onClick={() => { setCategoryFilter("Proyectos personales"); setSelectedTags([]); }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${categoryFilter === "Proyectos personales" ? "bg-blue-600 text-white shadow-lg" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                  >
                    Personales
                  </button>
                </div>
              </div>

              {/* Tag Filters */}
              {availableTags.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto animate-in fade-in slide-in-from-top-2">
                       <div className="flex items-center text-sm text-gray-500 mr-2">
                           <Filter className="w-4 h-4 mr-1"/> Filter by:
                       </div>
                       {availableTags.slice(0, 10).map(tag => (
                           <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`px-3 py-1 rounded-full text-xs border transition-colors ${
                                    selectedTags.includes(tag)
                                        ? "bg-blue-500/20 border-blue-500 text-blue-300"
                                        : "bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500"
                                }`}
                           >
                               {tag}
                           </button>
                       ))}
                       {selectedTags.length > 0 && (
                            <button onClick={() => setSelectedTags([])} className="px-3 py-1 rounded-full text-xs text-red-400 hover:text-red-300 flex items-center gap-1">
                                <X className="w-3 h-3" /> Clear
                            </button>
                       )}
                  </div>
              )}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-750 transition-all hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <Image
                    src={project.image || "/Pablo Ezeta.png"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Badge Overlay */}
                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
                      {project.categories.slice(0, 2).map((cat, catIdx) => (
                          <Badge key={catIdx} className={`${cat === 'Desarrollo web y diseño web' ? 'bg-purple-500 hover:bg-purple-600' : 'bg-blue-500 hover:bg-blue-600'} text-white border-0 shadow-md`}>
                              {cat}
                          </Badge>
                      ))}
                      {project.categories.length > 2 && (
                          <Badge className="bg-gray-800 text-white border-0 shadow-md">+{project.categories.length - 2}</Badge>
                      )}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300 line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-gray-700 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    {/* Dynamic Buttons based on project configuration */}
                    <div className="flex flex-wrap gap-2 w-full">
                      {project.caseStudy && (
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 flex-1 min-w-[120px]">
                              <Link href={`/${lang}/ux/${project.slug}`} className="flex items-center justify-center gap-2 w-full">
                                  <Palette className="w-4 h-4" />
                                  Case Study
                              </Link>
                          </Button>
                      )}
                      
                      {(!project.caseStudy || project.live) && project.live && (
                          <Button 
                            variant={project.caseStudy ? "outline" : "default"}
                            size="sm" 
                            className={`flex-1 min-w-[120px] ${project.caseStudy ? 'border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent' : 'bg-blue-600 hover:bg-blue-700'}`}
                          >
                              <Link href={project.live} target="_blank" className="flex items-center justify-center gap-2 w-full">
                                  <ExternalLink className="w-4 h-4" />
                                  Live Demo
                              </Link>
                          </Button>
                      )}
                      
                      {project.github && (
                          <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent flex-1 min-w-[120px]"
                          >
                          <Link href={project.github} target="_blank" className="flex items-center justify-center gap-2 w-full">
                              <Github className="w-4 h-4" />
                              Code
                          </Link>
                          </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                  <p className="text-gray-400 text-lg">No projects found with the selected filters.</p>
                  <Button variant="link" onClick={clearFilters} className="text-blue-400">Clear all filters</Button>
              </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to bring your project to life? I'm available for freelance work and full-time opportunities. Let's
            discuss how I can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="mailto:info@pabloezeta.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Mail className="w-5 h-5 mr-2" />
                info@pabloezeta.com
              </a>
            </Button>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Link href="https://www.linkedin.com/in/pablo-ezeta/" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Link href="https://github.com/dzulha?tab=repositories" className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <Separator className="mb-8 bg-gray-800" />
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Pablo Ezeta. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 sm:mt-0">Built with React, Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
