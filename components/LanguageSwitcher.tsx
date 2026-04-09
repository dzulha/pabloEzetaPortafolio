"use client"

import { useRouter, usePathname } from 'next/navigation'
import { Locale, locales } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

interface LanguageSwitcherProps {
  currentLocale: Locale
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const newLocale: Locale = currentLocale === 'en' ? 'es' : 'en'
    
    // Split pathname: e.g. /en/ux/cetus -> ['', 'en', 'ux', 'cetus']
    const segments = pathname.split('/')
    
    // The locale is always the second segment because of our [lang] structure
    if (locales.includes(segments[1] as any)) {
      segments[1] = newLocale
    } else {
      // Fallback: if somehow the locale isn't there (shouldn't happen with middleware)
      segments.splice(1, 0, newLocale)
    }
    
    const newPath = segments.join('/') || `/${newLocale}`
    router.push(newPath)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-gray-300 hover:text-white border border-gray-800 hover:border-gray-600 px-3 rounded-full transition-all"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase font-bold text-xs tracking-widest">
        {currentLocale === 'en' ? 'English' : 'Español'}
      </span>
      <span className="text-[10px] text-gray-500 font-normal">
        {currentLocale === 'en' ? '→ ES' : '→ EN'}
      </span>
    </Button>
  )
}
