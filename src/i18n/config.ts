export const locales = ['en', 'pt', 'de', 'es', 'fr', 'it', 'ja', 'ko', 'pl', 'ru', 'tr', 'ar'] as const;
export const defaultLocale = 'en';

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const pathnames = {
  '/': '/',
  '/faq': '/faq',
  '/contact': '/contact',
  '/terms': '/terms',
  '/privacy': '/privacy',
  '/#about': '/#about',

  '/countries': '/countries',
  '/organizations': '/organizations',
  '/organizations/[name]': '/organizations/[name]',
  '/countries/[country]': '/countries/[country]',
  '/countries/[country]/topics': '/countries/[country]/topics',
  '/countries/[country]/topics/[topic]': '/countries/[country]/topics/[topic]',
  'https://www.throughline.org': 'https://www.throughline.org',
  
  '/topics': '/topics',
  '/topics/[topic]': '/topics/[topic]',


  '/api/helplines': '/api/helplines'
};

export const localePrefix = 'always';
