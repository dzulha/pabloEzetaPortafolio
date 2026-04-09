import type { Locale } from './i18n';

// We use dynamic imports to keep the bundle small and load dictionaries on demand
const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  es: () => import('../dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  // Fallback to default locale if the requested one is not found
  if (!dictionaries[locale]) {
    console.warn(`Dictionary for locale '${locale}' not found. Falling back to 'en'.`);
    return dictionaries['en']();
  }
  return dictionaries[locale]();
};
