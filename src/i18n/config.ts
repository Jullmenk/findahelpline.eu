export const locales = ['en', 'pt'] as const;
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
  
  // Páginas de países
  '/countries': '/countries',
  '/countries/[country]': '/countries/[country]',
  '/countries/[country]/topics': '/countries/[country]/topics',
  '/countries/[country]/topics/[topic]': '/countries/[country]/topics/[topic]',
  
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
