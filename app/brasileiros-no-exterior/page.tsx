import type { Metadata } from "next";
import {
  ServiceLandingPage,
  type BilingualServiceLandingPageConfig,
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

const config: BilingualServiceLandingPageConfig = {
  pt: {
    eyebrow: "Atendimento internacional",
    title: "Psicoterapia para Brasileiros no Exterior",
    subtitle:
      "Atendimento psicológico online em português e espanhol para brasileiros e hispano-falantes que vivem fora do país.",
    chips: ["Português | Español", "Online internacional", "CRP 01/19626"],
    primarySection: {
      id: "para-quem",
      label: "Para quem é este atendimento?",
      title:
        "Cuidado clínico para quem vive entre culturas, idiomas e distâncias.",
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
  },
  es: {
    eyebrow: "Atención internacional",
    title: "Psicoterapia para Brasileños en el Exterior",
    subtitle:
      "Atención psicológica online en portugués y español para brasileños e hispanohablantes que viven fuera del país.",
    chips: ["Português | Español", "Online internacional", "CRP 01/19626"],
    primarySection: {
      id: "para-quem",
      label: "¿Para quién es esta atención?",
      title:
        "Cuidado clínico para quienes viven entre culturas, idiomas y distancias.",
      items: [
        "Brasileños que viven en Europa, Estados Unidos y otros países",
        "Hispanohablantes",
        "Personas en proceso de adaptación cultural",
        "Parejas interculturales",
        "Expatriados",
      ],
    },
    secondarySection: {
      id: "desafios",
      label: "Desafíos comunes",
      title: "Temas que pueden aparecer en la vida fuera del país.",
      items: [
        "Adaptación cultural",
        "Nostalgia",
        "Soledad",
        "Identidad",
        "Relaciones a distancia",
        "Ansiedad",
        "Cambios de vida",
      ],
    },
    processSection: {
      label: "Cómo funciona",
      title: "Psicoterapia online con escucha calificada y vínculo consistente.",
      text: "La atención se realiza por videollamada, en un ambiente reservado, con sigilo profesional y atención a la singularidad de quien vive fuera del país. La psicoterapia online internacional puede realizarse en portugués o español.",
    },
    authoritySection: {
      label: "Por qué elegir a Dra. Victoria",
      title: "Formación internacional y experiencia clínica bilingüe.",
      items: [
        "Formación internacional",
        "Doctora por la UnB",
        "Posdoctora",
        "Profesora universitaria",
        "Atención bilingüe portugués/español",
        "Atención online para brasileños en el exterior",
      ],
    },
    faqs: [
      {
        question: "¿Atiende fuera de Brasil?",
        answer:
          "Sí. La atención psicológica online puede realizarse con brasileños e hispanohablantes que viven en otros países, respetando las condiciones clínicas y éticas del acompañamiento.",
      },
      {
        question: "¿La atención puede ser en español?",
        answer:
          "Sí. Dra. Victoria realiza atención bilingüe en portugués y español, lo que puede favorecer la expresión de experiencias ligadas a cultura, vínculos e identidad.",
      },
      {
        question: "¿Cómo funciona la psicoterapia online?",
        answer:
          "La psicoterapia online ocurre por videollamada, con horario acordado, sigilo profesional y construcción de un espacio clínico estable aun a distancia.",
      },
      {
        question: "¿Atiende parejas en diferentes países?",
        answer:
          "Sí. Parejas en diferentes países pueden ser atendidas online, siempre que sea posible organizar presencia, privacidad y participación adecuada de ambos.",
      },
    ],
    relatedLinks: [
      { label: "Terapia de Pareja", href: "/terapia-de-casal" },
      { label: "Intervención en Crisis", href: "/intervencao-em-crise" },
    ],
    contactTitle: "Agenda tu atención online.",
    contactText:
      "Atención psicológica en portugués y español para brasileños e hispanohablantes que viven fuera del país.",
  },
};

export default function BrasileirosNoExteriorPage() {
  return <ServiceLandingPage config={config} />;
}
