import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/i18n/config';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  
  // Used when no locale matches
  defaultLocale: defaultLocale,
  
  // Always use locale prefix for all routes
  localePrefix: 'as-needed',
  
  // Don't redirect to a locale prefix for the default locale
  // when the pathname is /
  localeDetection: false
});

export default intlMiddleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|en|de|es|fr|it|ja|ko|pl|ru|tr|ar)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};