import { Metadata } from "next";
import { getTranslations } from "next-intl/server";


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  let messages;
  try {
    messages = (await import(`@/i18n/locales/${locale}/common.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}`, error);
  }

  const t = await getTranslations("metadata");

  return {
    title: t('faq.title'),
    description: t('faq.description'),
    keywords: t('faq.keywords'),  
    alternates: {
      canonical: "/faq",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
