export const locales = ['en', 'pt'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

// export const pathnames: Pathnames<Locales> ={
//   '/':'/',
//   '/pathnames':'pathnames'
// } 

// export const localePrefix = LocalePrefo