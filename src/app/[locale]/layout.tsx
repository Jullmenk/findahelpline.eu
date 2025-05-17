import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "@/styles/main.css";
import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";
import { ConfigProvider } from "@/context/useContext";
import { locales } from "@/i18n/config";
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

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
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
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    robots: "index, follow",
    openGraph: {
      type: "website",
      locale: locale,
      siteName: t("openGraph.siteName"),
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      images: [
        {
          url: "/img/og.png",
          width: 800,
          height: 600,
          alt: t("openGraph.imagesAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@findahelpline",
      title: t("twitter.title"),
      description: t("twitter.description"),
      images: "/img/og.png",
    },
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
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ConfigProvider>
        <Header />
        {children}
        <Footer />
      </ConfigProvider>
    </NextIntlClientProvider>
  );
}
