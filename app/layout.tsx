import type { Metadata } from "next";
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
const socialDescription =
  "Psicóloga clínica, PhD e pós-doutora. Atendimento psicológico para pessoas, casais e famílias no Brasil e internacionalmente.";
const description =
  "Psicóloga clínica, PhD e pós-doutora. Atendimento psicológico para pessoas, casais e famílias no Brasil e internacionalmente. Supervisão clínica, intervenção em crise e atendimento em português e espanhol.";
const siteUrl = "https://dravictoriagomez.com.br";
const ogImage = `${siteUrl}/victoria-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "psicóloga clínica",
    "psicóloga online",
    "psicóloga brasil",
    "psicóloga bilíngue",
    "psicóloga português espanhol",
    "terapia casal",
    "terapia familiar",
    "supervisão clínica",
    "intervenção em crise",
    "saúde mental",
    "psicoterapia online",
    "Dra Victoria Gomez",
  ],
  openGraph: {
    title,
    description: socialDescription,
    url: siteUrl,
    siteName: "Dra. Victoria A. Gómez",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 1800,
        alt: "Dra. Victoria A. Gómez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: socialDescription,
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
