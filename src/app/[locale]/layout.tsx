import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import "@/styles/main.css";
import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";
import { ConfigProvider } from "@/context/useContext";
import { locales } from '@/i18n/config';

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Find a Helpline",
  description: "Find help when you need it most",
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
  
  return (
    <html lang={locale} className={lato.className}>
      <head>
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
