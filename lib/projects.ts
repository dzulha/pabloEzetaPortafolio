import { projectsES } from "./data/projects.es"
import { projectsEN } from "./data/projects.en"
import { type Locale } from "./i18n"
import { type Project } from "./types"

export * from "./types"

/**
 * Returns the correct project list based on the provided locale.
 * This is an async function to allow for potential future database fetching.
 */
export async function getProjects(lang: Locale): Promise<Project[]> {
  // Simulate async behavior if needed
  switch (lang) {
    case 'es':
      // @ts-ignore - Temporary until data files are updated to import variants
      return projectsES as Project[]
    case 'en':
      // @ts-ignore - Temporary until data files are updated to import variants
      return projectsEN as Project[]
    default:
      // @ts-ignore - Temporary
      return projectsEN as Project[]
  }
}
