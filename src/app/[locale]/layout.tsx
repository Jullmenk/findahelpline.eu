import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import "@/styles/main.css";
import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";
import { ConfigProvider } from "@/context/useContext";
import { locales } from '@/i18n/config';
import { getTranslations } from "next-intl/server";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: "normal",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};


export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}


export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  if (!locales.includes(locale as any)) notFound();

  let messages;
  try {
    messages = (await import(`@/i18n/locales/${locale}/common.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}`, error);
    notFound();
  }

  const t = await getTranslations("metadata");

  return {
    metadataBase: new URL("https://findahelpline.com"),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),  
    robots: "index, follow", 
    openGraph: {
      type: "website",
      locale: locale, 
      siteName: t('openGraph.siteName'),
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      images: [
        {
          url: "/img/og.png", 
          width: 800,
          height: 600,
          alt: t('openGraph.imagesAlt')
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@findahelpline",
      title: t('twitter.title'),
      description: t('twitter.description'),
      images: "/img/og.png",  
    }
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {

  if (!locales.includes(locale as any)) notFound();

  let messages;
  try {
    messages = (await import(`@/i18n/locales/${locale}/common.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}`, error);
    notFound();
  }

  const t = await getTranslations("metadata");

  return (
    <html lang={locale} className={lato.className}>
      <head>
        <meta name="description" content={t('description')} />
        <meta name="keywords" content={t('keywords')} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t('openGraph.title')} />
        <meta property="og:description" content={t('openGraph.description')} />
        <meta property="og:image" content="/img/og.png" />
        <meta property="og:image:alt" content={t('openGraph.imagesAlt')} />
        <meta property="og:site_name" content={t('openGraph.siteName')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@findahelpline" />
        <meta name="twitter:title" content={t('twitter.title')} />
        <meta name="twitter:description" content={t('twitter.description')} />
        <meta name="twitter:image" content="/img/og.png" />
        <link rel="icon" href="/svg/find-a-helpline-brandmark.svg" />
      </head>
      <body className="font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ConfigProvider>
            <Header />
            {children}
            <Footer />
          </ConfigProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
