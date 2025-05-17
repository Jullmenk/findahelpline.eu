import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: "normal",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <meta property="og:image" content="/img/og.png" />
      <meta name="twitter:image" content="/img/og.png" />
      <link rel="icon" href="/svg/find-a-helpline-brandmark.svg" />
      <meta name="twitter:site" content="@findahelpline" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content="/img/og.png" />
      <meta name="robots" content="index, follow" />
      <body>{children}</body>
    </html>
  );
}
