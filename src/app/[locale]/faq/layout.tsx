import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perguntas Frequentes | Find a Helpline",
  description: "Respostas para as suas perguntas sobre linhas de apoio e linhas diretas. Saiba mais sobre quem atende, como funciona e como encontrar ajuda.",
  keywords: [
    "linhas de apoio",
    "linhas diretas",
    "FAQ",
    "perguntas frequentes",
    "apoio psicológico",
    "ajuda emocional",
    "suporte telefônico",
    "voluntários",
    "psicólogos"
  ],
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

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}