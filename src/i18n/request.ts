import { getRequestConfig } from 'next-intl/server';
import { locales, isLocale, defaultLocale } from './config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const messages = {
  en: () => import('./locales/en/common.json').then((module) => module.default),
  pt: () => import('./locales/pt/common.json').then((module) => module.default),
};

export default getRequestConfig(async ({ locale = defaultLocale }) => {
  // Use default locale if locale is not provided
  const currentLocale = isLocale(locale) ? locale : defaultLocale;

  // Load messages for the current locale
  const messagesForLocale = await messages[currentLocale]();

  return {
    locale: currentLocale,
    messages: messagesForLocale,
  };
});
