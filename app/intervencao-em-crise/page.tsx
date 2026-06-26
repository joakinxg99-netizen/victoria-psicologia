import type { Metadata } from "next";
import {
  ServiceLandingPage,
  type ServiceLandingPageConfig,
} from "../service-landing-page";

const siteUrl = "https://dravictoriagomez.com.br";
const pageUrl = `${siteUrl}/intervencao-em-crise`;
const ogImage = `${siteUrl}/opengraph-image`;

export const metadata: Metadata = {
  title: "Intervenção em Crise | Dra. Victoria A. Gómez",
  description:
    "Psicóloga para intervenção em crise, crise emocional e sofrimento intenso. Atendimento psicológico em crise presencial em Brasília e online.",
  alternates: {
    canonical: pageUrl,
  },
  keywords: [
    "psicóloga intervenção em crise",
    "psicóloga para crise emocional",
    "atendimento psicológico em crise",
    "intervenção em crise Brasília",
    "psicoterapia para sofrimento intenso",
  ],
  openGraph: {
    title: "Intervenção em Crise | Dra. Victoria A. Gómez",
    description:
      "Apoio psicológico especializado para momentos de sofrimento intenso e alta complexidade emocional.",
    url: pageUrl,
    siteName: "Dra. Victoria A. Gómez",
    locale: "pt_BR",
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intervenção em Crise | Dra. Victoria A. Gómez",
    description:
      "Atendimento psicológico em crise para sofrimento intenso e situações complexas.",
    images: [ogImage],
  },
};

const config: ServiceLandingPageConfig = {
  eyebrow: "Cuidado em momentos difíceis",
  title: "Intervenção em Crise",
  subtitle:
    "Apoio psicológico especializado para momentos de sofrimento intenso, mudanças importantes e situações de alta complexidade emocional.",
  chips: ["Brasília e online", "Casos complexos", "CRP 01/19626"],
  primarySection: {
    id: "quando-buscar",
    label: "Quando buscar intervenção em crise?",
    title: "Para momentos em que o sofrimento pede cuidado organizado.",
    items: [
      "Sofrimento emocional intenso",
      "Luto",
      "Separações",
      "Conflitos familiares",
      "Risco psicossocial",
      "Rupturas importantes",
      "Sobrecarga emocional",
    ],
  },
  secondarySection: {
    id: "cuidado",
    label: "Como funciona o cuidado em crise?",
    title: "Um processo breve, cuidadoso e tecnicamente orientado.",
    items: [
      "Acolhimento",
      "Avaliação clínica",
      "Estabilização emocional",
      "Construção de recursos",
      "Encaminhamentos quando necessário",
    ],
  },
  processSection: {
    label: "Como funciona",
    title: "A crise é acolhida com escuta, avaliação e responsabilidade técnica.",
    text: "O atendimento em crise busca compreender o momento vivido, reduzir a desorganização emocional, construir recursos possíveis e avaliar encaminhamentos quando necessário.",
    disclaimer:
      "Este atendimento não substitui serviços de emergência. Em situação de risco imediato, procure o serviço de urgência da sua região.",
  },
  authoritySection: {
    label: "Diferenciais",
    title: "Experiência clínica e acadêmica para situações complexas.",
    items: [
      "Experiência em casos complexos",
      "Atuação institucional",
      "Formação acadêmica avançada",
      "Ética profissional",
      "Cuidado baseado em ciência",
      "Atendimento presencial e online",
    ],
  },
  faqs: [
    {
      question: "O que é intervenção em crise?",
      answer:
        "É um cuidado psicológico voltado a momentos de sofrimento intenso, rupturas, mudanças importantes ou situações em que a pessoa precisa de acolhimento e organização emocional.",
    },
    {
      question: "Quando procurar ajuda?",
      answer:
        "Quando o sofrimento parece difícil de sustentar sozinho, há desorganização emocional importante, conflitos intensos ou uma mudança que exige apoio clínico.",
    },
    {
      question: "É atendimento emergencial?",
      answer:
        "Não. Este atendimento não substitui serviços de emergência. Em situação de risco imediato, procure o serviço de urgência da sua região.",
    },
    {
      question: "Pode ser online?",
      answer:
        "Sim, quando houver condições clínicas e privacidade para o atendimento. Em situações de risco imediato, a prioridade deve ser o serviço de emergência local.",
    },
  ],
  relatedLinks: [
    { label: "Brasileiros no Exterior", href: "/brasileiros-no-exterior" },
    { label: "Saúde Mental no Trabalho", href: "/saude-mental-no-trabalho" },
  ],
  contactTitle: "Agende um primeiro contato.",
  contactText:
    "Apoio psicológico para momentos de sofrimento intenso, mudanças importantes e situações complexas.",
};

export default function IntervencaoEmCrisePage() {
  return <ServiceLandingPage config={config} />;
}
