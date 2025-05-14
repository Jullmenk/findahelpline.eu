import { getRequestConfig } from 'next-intl/server';
import { locales, isLocale, defaultLocale } from './config';

const messages = {
  en: () => import('./locales/en/common.json').then((module) => module.default),
  pt: () => import('./locales/pt/common.json').then((module) => module.default),
  de: () => import('./locales/de/common.json').then((module) => module.default),
  es: () => import('./locales/es/common.json').then((module) => module.default),
  fr: () => import('./locales/fr/common.json').then((module) => module.default),
  it: () => import('./locales/it/common.json').then((module) => module.default),
  ja: () => import('./locales/ja/common.json').then((module) => module.default),
  ko: () => import('./locales/ko/common.json').then((module) => module.default),
  pl: () => import('./locales/pl/common.json').then((module) => module.default),
  ru: () => import('./locales/ru/common.json').then((module) => module.default),
  tr: () => import('./locales/tr/common.json').then((module) => module.default),
  ar: () => import('./locales/ar/common.json').then((module) => module.default),
};

export default getRequestConfig(async ({ locale = defaultLocale }) => {

  const currentLocale = isLocale(locale) ? locale : defaultLocale;

  const messagesForLocale = await messages[currentLocale]();

  return {
    locale: currentLocale,
    messages: messagesForLocale,
  };
});
