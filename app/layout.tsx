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

export const metadata: Metadata = {
  metadataBase: new URL("https://dravictoriagomez.com.br"),
  title: "Dra. Victoria A. Gómez | Psicóloga Clínica",
  description:
    "Psicóloga clínica, PhD e pós-doutora. Atendimento psicológico para pessoas, casais e famílias no Brasil e internacionalmente. Supervisão clínica, intervenção em crise e atendimento em português e espanhol.",
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
    title: "Dra. Victoria A. Gómez | Psicóloga Clínica",
    description:
      "Psicóloga clínica, PhD e pós-doutora. Atendimento psicológico para pessoas, casais e famílias no Brasil e internacionalmente. Supervisão clínica, intervenção em crise e atendimento em português e espanhol.",
    url: "https://dravictoriagomez.com.br",
    siteName: "Dra. Victoria A. Gómez",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
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
