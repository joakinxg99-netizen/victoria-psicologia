import type { Metadata } from "next";
import {
  ServiceLandingPage,
  type BilingualServiceLandingPageConfig,
} from "../service-landing-page";

const siteUrl = "https://dravictoriagomez.com.br";
const pageUrl = `${siteUrl}/intervencao-em-crise`;
const ogImage = `${siteUrl}/opengraph-image`;

export const metadata: Metadata = {
  title: "Intervenção em Crise | Dra. Victoria A. Gómez",
  description:
    "Psicóloga para intervenção em crise, crise emocional e sofrimento intenso. Atendimento psicológico em crise presencial em Brasília e online.",
  alternates: { canonical: pageUrl },
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

const config: BilingualServiceLandingPageConfig = {
  pt: {
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
  },
  es: {
    eyebrow: "Cuidado en momentos difíciles",
    title: "Intervención en Crisis",
    subtitle:
      "Apoyo psicológico especializado para momentos de sufrimiento intenso, cambios importantes y situaciones de alta complejidad emocional.",
    chips: ["Brasília y online", "Casos complejos", "CRP 01/19626"],
    primarySection: {
      id: "quando-buscar",
      label: "¿Cuándo buscar intervención en crisis?",
      title: "Para momentos en que el sufrimiento requiere cuidado organizado.",
      items: [
        "Sufrimiento emocional intenso",
        "Duelo",
        "Separaciones",
        "Conflictos familiares",
        "Riesgo psicosocial",
        "Rupturas importantes",
        "Sobrecarga emocional",
      ],
    },
    secondarySection: {
      id: "cuidado",
      label: "¿Cómo funciona el cuidado en crisis?",
      title: "Un proceso breve, cuidadoso y técnicamente orientado.",
      items: [
        "Acogida",
        "Evaluación clínica",
        "Estabilización emocional",
        "Construcción de recursos",
        "Derivaciones cuando sea necesario",
      ],
    },
    processSection: {
      label: "Cómo funciona",
      title: "La crisis se acoge con escucha, evaluación y responsabilidad técnica.",
      text: "La atención en crisis busca comprender el momento vivido, reducir la desorganización emocional, construir recursos posibles y evaluar derivaciones cuando sea necesario.",
      disclaimer:
        "Esta atención no sustituye servicios de emergencia. En una situación de riesgo inmediato, busca el servicio de urgencia de tu región.",
    },
    authoritySection: {
      label: "Diferenciales",
      title: "Experiencia clínica y académica para situaciones complejas.",
      items: [
        "Experiencia en casos complejos",
        "Actuación institucional",
        "Formación académica avanzada",
        "Ética profesional",
        "Cuidado basado en ciencia",
        "Atención presencial y online",
      ],
    },
    faqs: [
      {
        question: "¿Qué es intervención en crisis?",
        answer:
          "Es un cuidado psicológico orientado a momentos de sufrimiento intenso, rupturas, cambios importantes o situaciones en que la persona necesita acogida y organización emocional.",
      },
      {
        question: "¿Cuándo buscar ayuda?",
        answer:
          "Cuando el sufrimiento parece difícil de sostener en soledad, hay desorganización emocional importante, conflictos intensos o un cambio que exige apoyo clínico.",
      },
      {
        question: "¿Es atención de emergencia?",
        answer:
          "No. Esta atención no sustituye servicios de emergencia. En una situación de riesgo inmediato, busca el servicio de urgencia de tu región.",
      },
      {
        question: "¿Puede ser online?",
        answer:
          "Sí, cuando existen condiciones clínicas y privacidad para la atención. En situaciones de riesgo inmediato, la prioridad debe ser el servicio de emergencia local.",
      },
    ],
    relatedLinks: [
      { label: "Brasileños en el Exterior", href: "/brasileiros-no-exterior" },
      { label: "Salud Mental en el Trabajo", href: "/saude-mental-no-trabalho" },
    ],
    contactTitle: "Agenda un primer contacto.",
    contactText:
      "Apoyo psicológico para momentos de sufrimiento intenso, cambios importantes y situaciones complejas.",
  },
};

export default function IntervencaoEmCrisePage() {
  return <ServiceLandingPage config={config} />;
}
