export const locales = ['en', 'pt', 'de', 'es', 'fr', 'it', 'ja', 'ko', 'pl', 'ru', 'tr', 'ar'] as const;
export const defaultLocale = 'en';

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

// Apenas um objeto comum para rotas, você não precisa do tipo `Pathnames`
export const pathnames = {
  // Páginas principais
  '/': '/',
  '/faq': '/faq',
  '/organization': '/organization',
  '/contact': '/contact',
  '/terms': '/terms',
  '/privacy': '/privacy',
  '/about': '/about',
  
  // Páginas de países
  '/countries': '/countries',
  '/organizations': '/organizations',
  '/organizations/[name]': '/organizations/[name]',
  '/countries/[country]': '/countries/[country]',
  '/countries/[country]/topics': '/countries/[country]/topics',
  '/countries/[country]/topics/[topic]': '/countries/[country]/topics/[topic]',
  'https://www.throughline.org': 'https://www.throughline.org',
  // Páginas de tópicos
  '/topics': '/topics',
  '/topics/[topic]': '/topics/[topic]',
  
  // Páginas de teste
  '/test': '/test',
  
  // API
  '/api/helplines': '/api/helplines'
};

// Também não precisa do tipo `LocalePrefix` explicitamente
export const localePrefix = 'always'; // ou 'as-needed' ou 'never'
