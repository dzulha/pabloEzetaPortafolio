import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './lib/i18n';

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return defaultLocale;

  // Simple parser for accept-language header: "es-MX,es;q=0.9,en-US;q=0.8,en;q=0.7"
  const preferredLocales = acceptLanguage
    .split(',')
    .map((lang) => {
      const [localePart, qPart] = lang.split(';');
      const locale = localePart.trim().split('-')[0].toLowerCase(); // 'es-MX' -> 'es'
      let q = 1;
      if (qPart && qPart.trim().startsWith('q=')) {
        q = parseFloat(qPart.trim().substring(2));
      }
      return { locale, q };
    })
    .sort((a, b) => b.q - a.q)
    .map((item) => item.locale);

  for (const locale of preferredLocales) {
    if (locales.includes(locale as any)) {
      return locale;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return; // All good

  // Redirect if there is no locale
  const locale = getLocale(request);
  
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and public assets
    '/((?!_next|images|ABISMO|Cetus|Cosiendo Letras|Marta Watts|Sinfonia|Wild Sites|Xplora|.*\\.|favicon.ico).*)',
  ],
};
