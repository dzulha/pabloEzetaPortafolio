import Portfolio from '@/portfolio'
import { getDictionary } from '@/lib/getDictionary'
import { getProjects } from '@/lib/projects'
import type { Locale } from '@/lib/i18n'

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const projectsData = await getProjects(lang)

  return <Portfolio lang={lang} dict={dictionary} projects={projectsData} />
}
