import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/i18n/config';

const intlMiddleware = createMiddleware({
  locales: locales,
  
  defaultLocale: defaultLocale,
  
  localePrefix: 'as-needed',
  
  localeDetection: false
});

export default intlMiddleware;

export const config = {
  matcher: ['/', '/(pt|en|de|es|fr|it|ja|ko|pl|ru|tr|ar)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};