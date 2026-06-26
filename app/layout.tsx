import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Dra. Victoria A. Gómez | Psicóloga Clínica";
const description =
  "Atendimento psicológico no Brasil e internacionalmente para pessoas, casais e famílias.";
const siteUrl = "https://dravictoriagomez.com.br";
const instagramUrl = "https://www.instagram.com/victoriagomezpsicologa/";
const ogImage = `${siteUrl}/opengraph-image`;
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: "Dra. Victoria A. Gómez",
  url: siteUrl,
  email: "victoria.ayelen.gomez@gmail.com",
  sameAs: [instagramUrl],
  description,
  areaServed: ["Brazil", "International"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "psicóloga clínica",
    "psicóloga online",
    "terapia online brasil",
    "psicóloga para casais",
    "atendimento psicológico",
    "psicóloga internacional",
    "terapia familiar",
    "psicóloga brasileira",
    "saúde mental",
    "psicoterapia",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Dra. Victoria A. Gómez",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Dra. Victoria A. Gómez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "y4q-WHaE9YAdMCEd5EWa4BSRutyfBGToX8u5lFxl85k",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-5HYM52GMVY" />
      </body>
    </html>
  );
}
