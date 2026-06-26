import type { Metadata } from "next";
import {
  ServiceLandingPage,
  type ServiceLandingPageConfig,
} from "../service-landing-page";

const siteUrl = "https://dravictoriagomez.com.br";
const pageUrl = `${siteUrl}/brasileiros-no-exterior`;
const ogImage = `${siteUrl}/opengraph-image`;

export const metadata: Metadata = {
  title: "Psicoterapia para Brasileiros no Exterior | Dra. Victoria A. Gómez",
  description:
    "Psicóloga brasileira online para brasileiros no exterior e hispano-falantes. Psicoterapia online internacional em português e espanhol.",
  alternates: {
    canonical: pageUrl,
  },
  keywords: [
    "psicóloga brasileira online",
    "psicóloga para brasileiros no exterior",
    "terapia em português no exterior",
    "psicóloga online em espanhol",
    "psicoterapia online internacional",
  ],
  openGraph: {
    title: "Psicoterapia para Brasileiros no Exterior",
    description:
      "Atendimento psicológico online em português e espanhol para brasileiros e hispano-falantes fora do país.",
    url: pageUrl,
    siteName: "Dra. Victoria A. Gómez",
    locale: "pt_BR",
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicoterapia para Brasileiros no Exterior",
    description:
      "Psicoterapia online internacional em português e espanhol.",
    images: [ogImage],
  },
};

const config: ServiceLandingPageConfig = {
  eyebrow: "Atendimento internacional",
  title: "Psicoterapia para Brasileiros no Exterior",
  subtitle:
    "Atendimento psicológico online em português e espanhol para brasileiros e hispano-falantes que vivem fora do país.",
  chips: ["Português | Español", "Online internacional", "CRP 01/19626"],
  primarySection: {
    id: "para-quem",
    label: "Para quem é este atendimento?",
    title: "Cuidado clínico para quem vive entre culturas, idiomas e distâncias.",
    items: [
      "Brasileiros vivendo na Europa, Estados Unidos e outros países",
      "Hispano-falantes",
      "Pessoas em processo de adaptação cultural",
      "Casais interculturais",
      "Expatriados",
    ],
  },
  secondarySection: {
    id: "desafios",
    label: "Desafios comuns",
    title: "Temas que podem aparecer na vida fora do país.",
    items: [
      "Adaptação cultural",
      "Saudade",
      "Solidão",
      "Identidade",
      "Relações à distância",
      "Ansiedade",
      "Mudanças de vida",
    ],
  },
  processSection: {
    label: "Como funciona",
    title: "Psicoterapia online com escuta qualificada e vínculo consistente.",
    text: "O atendimento acontece por videochamada, em ambiente reservado, com sigilo profissional e atenção à singularidade de quem vive fora do país. A psicoterapia online internacional pode ser realizada em português ou espanhol.",
  },
  authoritySection: {
    label: "Por que escolher Dra. Victoria",
    title: "Formação internacional e experiência clínica bilíngue.",
    items: [
      "Formação internacional",
      "Doutora pela UnB",
      "Pós-Doutora",
      "Professora universitária",
      "Atendimento bilíngue português/espanhol",
      "Atendimento online para brasileiros no exterior",
    ],
  },
  faqs: [
    {
      question: "Atende fora do Brasil?",
      answer:
        "Sim. O atendimento psicológico online pode ser realizado com brasileiros e hispano-falantes que vivem em outros países, respeitando as condições clínicas e éticas do acompanhamento.",
    },
    {
      question: "O atendimento pode ser em espanhol?",
      answer:
        "Sim. Dra. Victoria realiza atendimento bilíngue em português e espanhol, o que pode favorecer a expressão de experiências ligadas à cultura, vínculo e identidade.",
    },
    {
      question: "Como funciona a psicoterapia online?",
      answer:
        "A psicoterapia online ocorre por videochamada, com horário combinado, sigilo profissional e construção de um espaço clínico estável mesmo à distância.",
    },
    {
      question: "Atende casais em diferentes países?",
      answer:
        "Sim. Casais em diferentes países podem ser atendidos online, desde que seja possível organizar presença, privacidade e participação adequada de ambos.",
    },
  ],
  relatedLinks: [
    { label: "Terapia de Casal", href: "/terapia-de-casal" },
    { label: "Intervenção em Crise", href: "/intervencao-em-crise" },
  ],
  contactTitle: "Agende seu atendimento online.",
  contactText:
    "Atendimento psicológico em português e espanhol para brasileiros e hispano-falantes vivendo fora do país.",
};

export default function BrasileirosNoExteriorPage() {
  return <ServiceLandingPage config={config} />;
}
