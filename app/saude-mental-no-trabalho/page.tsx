import type { Metadata } from "next";
import {
  ServiceLandingPage,
  type BilingualServiceLandingPageConfig,
} from "../service-landing-page";

const siteUrl = "https://dravictoriagomez.com.br";
const pageUrl = `${siteUrl}/saude-mental-no-trabalho`;
const ogImage = `${siteUrl}/opengraph-image`;

export const metadata: Metadata = {
  title: "Saúde Mental no Trabalho | Dra. Victoria A. Gómez",
  description:
    "Psicoterapia para profissionais, executivos, burnout, estresse no trabalho e sofrimento ocupacional com psicóloga clínica doutora pela UnB.",
  alternates: { canonical: pageUrl },
  keywords: [
    "saúde mental no trabalho",
    "psicóloga para burnout",
    "psicóloga para executivos",
    "psicoterapia para profissionais",
    "estresse no trabalho",
    "sofrimento ocupacional",
  ],
  openGraph: {
    title: "Saúde Mental no Trabalho | Dra. Victoria A. Gómez",
    description:
      "Psicoterapia para profissionais, executivos e pessoas em sofrimento emocional relacionado ao trabalho.",
    url: pageUrl,
    siteName: "Dra. Victoria A. Gómez",
    locale: "pt_BR",
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saúde Mental no Trabalho | Dra. Victoria A. Gómez",
    description:
      "Psicoterapia para burnout, estresse no trabalho e sofrimento ocupacional.",
    images: [ogImage],
  },
};

const config: BilingualServiceLandingPageConfig = {
  pt: {
    eyebrow: "Psicoterapia para profissionais",
    title: "Saúde Mental no Trabalho",
    subtitle:
      "Psicoterapia para profissionais, executivos e pessoas que enfrentam sofrimento emocional relacionado ao trabalho.",
    chips: ["Burnout", "Executivos", "Online e presencial"],
    primarySection: {
      id: "para-quem",
      label: "Para quem é este atendimento?",
      title: "Cuidado clínico para quem sustenta muitas responsabilidades.",
      items: [
        "Executivos",
        "Profissionais de alta performance",
        "Médicos",
        "Empresários",
        "Líderes",
        "Pessoas com burnout",
        "Pessoas com estresse ocupacional",
      ],
    },
    secondarySection: {
      id: "temas",
      label: "Temas trabalhados",
      title: "Questões profissionais que também atravessam a vida emocional.",
      items: [
        "Burnout",
        "Excesso de cobrança",
        "Ansiedade",
        "Conflitos no trabalho",
        "Decisões profissionais",
        "Liderança",
        "Limites",
        "Qualidade de vida",
      ],
    },
    processSection: {
      label: "Como funciona",
      title: "Um espaço para compreender sofrimento, limites e escolhas.",
      text: "A psicoterapia para profissionais trabalha os efeitos emocionais do trabalho, a relação com cobrança, desempenho, liderança, conflitos e decisões, preservando sigilo e responsabilidade clínica.",
    },
    authoritySection: {
      label: "Diferenciais",
      title: "Formação voltada à clínica, trabalho e saúde mental.",
      items: [
        "Mestrado em Psicologia Social, do Trabalho e das Organizações pela UnB",
        "Pós-Doutorado em Saúde Mental e Qualidade de Vida",
        "Experiência clínica",
        "Doutora pela UnB",
        "Professora universitária",
        "Atendimento presencial e online",
      ],
    },
    faqs: [
      {
        question: "Atende executivos?",
        answer:
          "Sim. O atendimento pode acolher executivos, líderes, empresários e profissionais que lidam com pressão, decisões complexas e alta responsabilidade.",
      },
      {
        question: "Terapia ajuda no burnout?",
        answer:
          "A psicoterapia pode ajudar a compreender sinais de esgotamento, limites, padrões de cobrança e formas de cuidado. Quando necessário, encaminhamentos complementares podem ser indicados.",
      },
      {
        question: "O atendimento é sigiloso?",
        answer:
          "Sim. O atendimento psicológico é realizado com sigilo profissional, privacidade e responsabilidade ética.",
      },
      {
        question: "Pode ser online?",
        answer:
          "Sim. O atendimento pode ser realizado online por videochamada ou presencialmente em Brasília.",
      },
    ],
    relatedLinks: [
      { label: "Intervenção em Crise", href: "/intervencao-em-crise" },
      { label: "Brasileiros no Exterior", href: "/brasileiros-no-exterior" },
    ],
    contactTitle: "Agende seu atendimento.",
    contactText:
      "Psicoterapia para burnout, estresse, ansiedade e sofrimento emocional relacionado ao trabalho.",
  },
  es: {
    eyebrow: "Psicoterapia para profesionales",
    title: "Salud Mental en el Trabajo",
    subtitle:
      "Psicoterapia para profesionales, ejecutivos y personas que enfrentan sufrimiento emocional relacionado con el trabajo.",
    chips: ["Burnout", "Ejecutivos", "Online y presencial"],
    primarySection: {
      id: "para-quem",
      label: "¿Para quién es esta atención?",
      title: "Cuidado clínico para quienes sostienen muchas responsabilidades.",
      items: [
        "Ejecutivos",
        "Profesionales de alto rendimiento",
        "Médicos",
        "Empresarios",
        "Líderes",
        "Personas con burnout",
        "Personas con estrés ocupacional",
      ],
    },
    secondarySection: {
      id: "temas",
      label: "Temas trabajados",
      title: "Cuestiones profesionales que también atraviesan la vida emocional.",
      items: [
        "Burnout",
        "Exceso de exigencia",
        "Ansiedad",
        "Conflictos en el trabajo",
        "Decisiones profesionales",
        "Liderazgo",
        "Límites",
        "Calidad de vida",
      ],
    },
    processSection: {
      label: "Cómo funciona",
      title: "Un espacio para comprender sufrimiento, límites y elecciones.",
      text: "La psicoterapia para profesionales trabaja los efectos emocionales del trabajo, la relación con la exigencia, el desempeño, el liderazgo, los conflictos y las decisiones, preservando sigilo y responsabilidad clínica.",
    },
    authoritySection: {
      label: "Diferenciales",
      title: "Formación orientada a clínica, trabajo y salud mental.",
      items: [
        "Maestría en Psicología Social, del Trabajo y de las Organizaciones por la UnB",
        "Posdoctorado en Salud Mental y Calidad de Vida",
        "Experiencia clínica",
        "Doctora por la UnB",
        "Profesora universitaria",
        "Atención presencial y online",
      ],
    },
    faqs: [
      {
        question: "¿Atiende ejecutivos?",
        answer:
          "Sí. La atención puede acoger ejecutivos, líderes, empresarios y profesionales que lidian con presión, decisiones complejas y alta responsabilidad.",
      },
      {
        question: "¿La terapia ayuda en el burnout?",
        answer:
          "La psicoterapia puede ayudar a comprender señales de agotamiento, límites, patrones de exigencia y formas de cuidado. Cuando es necesario, pueden indicarse derivaciones complementarias.",
      },
      {
        question: "¿La atención es confidencial?",
        answer:
          "Sí. La atención psicológica se realiza con sigilo profesional, privacidad y responsabilidad ética.",
      },
      {
        question: "¿Puede ser online?",
        answer:
          "Sí. La atención puede realizarse online por videollamada o presencialmente en Brasília.",
      },
    ],
    relatedLinks: [
      { label: "Intervención en Crisis", href: "/intervencao-em-crise" },
      { label: "Brasileños en el Exterior", href: "/brasileiros-no-exterior" },
    ],
    contactTitle: "Agenda tu atención.",
    contactText:
      "Psicoterapia para burnout, estrés, ansiedad y sufrimiento emocional relacionado con el trabajo.",
  },
};

export default function SaudeMentalNoTrabalhoPage() {
  return <ServiceLandingPage config={config} />;
}
