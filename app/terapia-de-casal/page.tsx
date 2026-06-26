import type { Metadata } from "next";
import {
  ServiceLandingPage,
  type BilingualServiceLandingPageConfig,
} from "../service-landing-page";

const siteUrl = "https://dravictoriagomez.com.br";
const pageUrl = `${siteUrl}/terapia-de-casal`;
const ogImage = `${siteUrl}/opengraph-image`;

export const metadata: Metadata = {
  title: "Terapia de Casal | Dra. Victoria A. Gómez",
  description:
    "Terapia de casal em Brasília e online com psicóloga clínica, doutora pela UnB. Atendimento para conflitos conjugais, comunicação, separação e reconstrução da confiança.",
  alternates: { canonical: pageUrl },
  keywords: [
    "terapia de casal",
    "psicóloga para casais",
    "conflitos conjugais",
    "terapia de casal online",
    "terapia de casal Brasília",
  ],
  openGraph: {
    title: "Terapia de Casal | Dra. Victoria A. Gómez",
    description:
      "Um espaço seguro para compreender conflitos, fortalecer o diálogo e reconstruir relações.",
    url: pageUrl,
    siteName: "Dra. Victoria A. Gómez",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Dra. Victoria A. Gómez | Terapia de Casal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapia de Casal | Dra. Victoria A. Gómez",
    description:
      "Terapia de casal em Brasília e online para conflitos, comunicação e reconstrução da confiança.",
    images: [ogImage],
  },
};

const config: BilingualServiceLandingPageConfig = {
  pt: {
    eyebrow: "Psicóloga para casais",
    title: "Terapia de Casal",
    subtitle:
      "Um espaço seguro para compreender conflitos, fortalecer o diálogo e reconstruir relações de forma ética e baseada em evidências.",
    chips: ["Terapia de casal Brasília", "Online", "CRP 01/19626"],
    primarySection: {
      id: "quando-procurar",
      label: "Quando buscar terapia",
      title: "Para casais atravessando crise, distância ou decisões difíceis.",
      items: [
        "Dificuldades de comunicação",
        "Conflitos frequentes",
        "Separação",
        "Reconstrução da confiança",
        "Infidelidade",
        "Desgaste emocional",
        "Mudanças importantes",
      ],
    },
    secondarySection: {
      id: "situacoes",
      label: "Situações trabalhadas",
      title: "Temas que podem ser acolhidos no processo.",
      items: [
        "Crises conjugais",
        "Comunicação difícil",
        "Distanciamento afetivo",
        "Decisões sobre continuidade da relação",
        "Conflitos familiares",
        "Reorganização de vínculos",
      ],
    },
    processSection: {
      label: "Como funciona",
      title: "Um processo clínico para escutar, organizar e reconstruir.",
      text: "A terapia de casal cria um espaço de escuta para compreender os conflitos conjugais, reconhecer padrões de comunicação e construir caminhos possíveis com responsabilidade técnica, sigilo e cuidado.",
    },
    authoritySection: {
      label: "Por que Dra. Victoria",
      title: "Experiência clínica, acadêmica e supervisão em casal e família.",
      items: [
        "Doutora pela UnB",
        "Pós-Doutora",
        "Professora Universitária",
        "Supervisora da Psicoterapia de Casal",
        "Formação internacional",
        "Atendimento presencial e online",
      ],
    },
    faqs: [
      {
        question: "Quando procurar terapia de casal?",
        answer:
          "A terapia de casal pode ajudar quando há conflitos conjugais frequentes, dificuldade de diálogo, crise de confiança, distanciamento afetivo ou dúvidas importantes sobre a continuidade da relação.",
      },
      {
        question: "A terapia de casal funciona para casais considerando separação?",
        answer:
          "Sim. O processo oferece um espaço ético e organizado para compreender a crise, avaliar possibilidades e construir decisões com mais clareza, cuidado e responsabilidade.",
      },
      {
        question: "É possível fazer terapia de casal online?",
        answer:
          "Sim. A terapia de casal online é realizada por videochamada, com sigilo profissional, organização do setting clínico e cuidado técnico para sustentar a participação de ambos.",
      },
      {
        question: "O atendimento é apenas para casais casados?",
        answer:
          "Não. O acompanhamento pode ser indicado para casais em diferentes formatos de vínculo, incluindo namoro, união estável, casamento ou relações em processo de reorganização.",
      },
    ],
    relatedLinks: [
      { label: "Brasileiros no Exterior", href: "/brasileiros-no-exterior" },
      { label: "Intervenção em Crise", href: "/intervencao-em-crise" },
      { label: "Supervisão Clínica", href: "/supervisao-clinica" },
    ],
    contactTitle: "Agende uma consulta para terapia de casal.",
    contactText:
      "Atendimento em Brasília e online para casais que desejam compreender conflitos, fortalecer o diálogo e tomar decisões com mais clareza.",
  },
  es: {
    eyebrow: "Psicóloga para parejas",
    title: "Terapia de Pareja",
    subtitle:
      "Un espacio seguro para comprender conflictos, fortalecer el diálogo y reconstruir relaciones de forma ética y basada en evidencias.",
    chips: ["Terapia de pareja Brasília", "Online", "CRP 01/19626"],
    primarySection: {
      id: "quando-procurar",
      label: "Cuándo buscar terapia",
      title: "Para parejas que atraviesan crisis, distancia o decisiones difíciles.",
      items: [
        "Dificultades de comunicación",
        "Conflictos frecuentes",
        "Separación",
        "Reconstrucción de la confianza",
        "Infidelidad",
        "Desgaste emocional",
        "Cambios importantes",
      ],
    },
    secondarySection: {
      id: "situacoes",
      label: "Situaciones trabajadas",
      title: "Temas que pueden ser acogidos en el proceso.",
      items: [
        "Crisis de pareja",
        "Comunicación difícil",
        "Distanciamiento afectivo",
        "Decisiones sobre continuidad de la relación",
        "Conflictos familiares",
        "Reorganización de vínculos",
      ],
    },
    processSection: {
      label: "Cómo funciona",
      title: "Un proceso clínico para escuchar, organizar y reconstruir.",
      text: "La terapia de pareja crea un espacio de escucha para comprender los conflictos, reconocer patrones de comunicación y construir caminos posibles con responsabilidad técnica, sigilo y cuidado.",
    },
    authoritySection: {
      label: "Por qué Dra. Victoria",
      title: "Experiencia clínica, académica y supervisión en pareja y familia.",
      items: [
        "Doctora por la UnB",
        "Posdoctora",
        "Profesora universitaria",
        "Supervisora de Psicoterapia de Pareja",
        "Formación internacional",
        "Atención presencial y online",
      ],
    },
    faqs: [
      {
        question: "¿Cuándo buscar terapia de pareja?",
        answer:
          "La terapia de pareja puede ayudar cuando hay conflictos frecuentes, dificultad de diálogo, crisis de confianza, distanciamiento afectivo o dudas importantes sobre la continuidad de la relación.",
      },
      {
        question: "¿La terapia de pareja funciona para parejas que consideran separarse?",
        answer:
          "Sí. El proceso ofrece un espacio ético y organizado para comprender la crisis, evaluar posibilidades y construir decisiones con más claridad, cuidado y responsabilidad.",
      },
      {
        question: "¿Es posible hacer terapia de pareja online?",
        answer:
          "Sí. La terapia de pareja online se realiza por videollamada, con sigilo profesional, organización del encuadre clínico y cuidado técnico para sostener la participación de ambos.",
      },
      {
        question: "¿La atención es solo para parejas casadas?",
        answer:
          "No. El acompañamiento puede indicarse para parejas en diferentes formatos de vínculo, incluyendo noviazgo, unión estable, matrimonio o relaciones en proceso de reorganización.",
      },
    ],
    relatedLinks: [
      { label: "Brasileños en el Exterior", href: "/brasileiros-no-exterior" },
      { label: "Intervención en Crisis", href: "/intervencao-em-crise" },
      { label: "Supervisión Clínica", href: "/supervisao-clinica" },
    ],
    contactTitle: "Agenda una consulta para terapia de pareja.",
    contactText:
      "Atención en Brasília y online para parejas que desean comprender conflictos, fortalecer el diálogo y tomar decisiones con más claridad.",
  },
};

export default function TerapiaDeCasalPage() {
  return <ServiceLandingPage config={config} />;
}
