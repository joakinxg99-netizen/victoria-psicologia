import type { Metadata } from "next";
import {
  ServiceLandingPage,
  type BilingualServiceLandingPageConfig,
} from "../service-landing-page";

const siteUrl = "https://dravictoriagomez.com.br";
const pageUrl = `${siteUrl}/supervisao-clinica`;
const ogImage = `${siteUrl}/opengraph-image`;

export const metadata: Metadata = {
  title: "Supervisão Clínica para Psicólogos | Dra. Victoria A. Gómez",
  description:
    "Supervisão clínica para psicólogos, profissionais em formação, terapia de casal, família, casos complexos e intervenção em crise.",
  alternates: { canonical: pageUrl },
  keywords: [
    "supervisão clínica psicologia",
    "supervisão clínica para psicólogos",
    "supervisão terapia de casal",
    "supervisão clínica online",
    "supervisora clínica psicologia",
  ],
  openGraph: {
    title: "Supervisão Clínica | Dra. Victoria A. Gómez",
    description:
      "Supervisão para psicólogos que buscam aprofundar escuta clínica, manejo técnico e responsabilidade ética.",
    url: pageUrl,
    siteName: "Dra. Victoria A. Gómez",
    locale: "pt_BR",
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supervisão Clínica | Dra. Victoria A. Gómez",
    description:
      "Supervisão clínica online e presencial para psicólogos e profissionais em formação.",
    images: [ogImage],
  },
};

const config: BilingualServiceLandingPageConfig = {
  pt: {
    eyebrow: "Formação clínica",
    title: "Supervisão Clínica",
    subtitle:
      "Supervisão para psicólogos e profissionais em formação que buscam aprofundar sua escuta clínica, manejo técnico e responsabilidade ética.",
    chips: ["Psicólogos", "Casal e família", "Online e presencial"],
    primarySection: {
      id: "para-quem",
      label: "Para quem é a supervisão?",
      title: "Acompanhamento para sustentar a prática clínica com mais clareza.",
      items: [
        "Psicólogos",
        "Profissionais em formação",
        "Terapeutas iniciantes",
        "Profissionais que atuam com casais",
        "Profissionais que atuam com famílias",
        "Profissionais que acompanham casos complexos",
      ],
    },
    secondarySection: {
      id: "temas",
      label: "Temas de supervisão",
      title: "Discussão técnica para ampliar leitura e manejo de caso.",
      items: [
        "Manejo clínico",
        "Psicoterapia de casal",
        "Família",
        "Casos complexos",
        "Intervenção em crise",
        "Ética profissional",
        "Construção de caso",
      ],
    },
    processSection: {
      label: "Como funciona",
      title: "Um espaço de análise clínica, cuidado ético e elaboração técnica.",
      text: "A supervisão clínica trabalha a escuta, a formulação de caso, o manejo técnico e os impasses que surgem na prática profissional, sem substituir terapia pessoal ou formação regular.",
    },
    authoritySection: {
      label: "Diferenciais",
      title: "Docência, supervisão e trajetória acadêmica integradas à clínica.",
      items: [
        "Professora universitária",
        "Supervisora clínica de estágios",
        "Supervisora da Psicoterapia de Casal e Família na Clínica-Escola do UDF",
        "Doutora",
        "Pós-Doutora",
        "Experiência com casos complexos",
      ],
    },
    faqs: [
      {
        question: "Quem pode fazer supervisão?",
        answer:
          "A supervisão é voltada a psicólogos, profissionais em formação clínica e terapeutas que buscam discutir casos, manejo técnico e responsabilidade ética.",
      },
      {
        question: "A supervisão pode ser online?",
        answer:
          "Sim. A supervisão clínica pode ser realizada online, desde que haja privacidade e condições adequadas para discussão do material clínico.",
      },
      {
        question: "Supervisão é terapia?",
        answer:
          "Não. A supervisão não substitui psicoterapia pessoal. Ela é um espaço técnico para discussão de prática clínica, casos e manejo profissional.",
      },
      {
        question: "Quais casos podem ser trabalhados?",
        answer:
          "Podem ser discutidos casos de psicoterapia individual, casal, família, intervenção em crise, situações complexas e impasses éticos ou técnicos.",
      },
    ],
    relatedLinks: [
      { label: "Terapia de Casal", href: "/terapia-de-casal" },
      { label: "Intervenção em Crise", href: "/intervencao-em-crise" },
    ],
    contactTitle: "Agende uma supervisão clínica.",
    contactText:
      "Supervisão para psicólogos e profissionais em formação clínica que desejam aprofundar manejo, escuta e construção de caso.",
  },
  es: {
    eyebrow: "Formación clínica",
    title: "Supervisión Clínica",
    subtitle:
      "Supervisión para psicólogos y profesionales en formación que buscan profundizar su escucha clínica, manejo técnico y responsabilidad ética.",
    chips: ["Psicólogos", "Pareja y familia", "Online y presencial"],
    primarySection: {
      id: "para-quem",
      label: "¿Para quién es la supervisión?",
      title: "Acompañamiento para sostener la práctica clínica con más claridad.",
      items: [
        "Psicólogos",
        "Profesionales en formación",
        "Terapeutas iniciantes",
        "Profesionales que trabajan con parejas",
        "Profesionales que trabajan con familias",
        "Profesionales que acompañan casos complejos",
      ],
    },
    secondarySection: {
      id: "temas",
      label: "Temas de supervisión",
      title: "Discusión técnica para ampliar lectura y manejo de caso.",
      items: [
        "Manejo clínico",
        "Psicoterapia de pareja",
        "Familia",
        "Casos complejos",
        "Intervención en crisis",
        "Ética profesional",
        "Construcción de caso",
      ],
    },
    processSection: {
      label: "Cómo funciona",
      title: "Un espacio de análisis clínico, cuidado ético y elaboración técnica.",
      text: "La supervisión clínica trabaja la escucha, la formulación de caso, el manejo técnico y los impasses que surgen en la práctica profesional, sin sustituir terapia personal ni formación regular.",
    },
    authoritySection: {
      label: "Diferenciales",
      title: "Docencia, supervisión y trayectoria académica integradas a la clínica.",
      items: [
        "Profesora universitaria",
        "Supervisora clínica de prácticas",
        "Supervisora de Psicoterapia de Pareja y Familia en la Clínica-Escuela del UDF",
        "Doctora",
        "Posdoctora",
        "Experiencia con casos complejos",
      ],
    },
    faqs: [
      {
        question: "¿Quién puede hacer supervisión?",
        answer:
          "La supervisión está dirigida a psicólogos, profesionales en formación clínica y terapeutas que buscan discutir casos, manejo técnico y responsabilidad ética.",
      },
      {
        question: "¿La supervisión puede ser online?",
        answer:
          "Sí. La supervisión clínica puede realizarse online, siempre que haya privacidad y condiciones adecuadas para discutir el material clínico.",
      },
      {
        question: "¿Supervisión es terapia?",
        answer:
          "No. La supervisión no sustituye psicoterapia personal. Es un espacio técnico para discutir práctica clínica, casos y manejo profesional.",
      },
      {
        question: "¿Qué casos pueden trabajarse?",
        answer:
          "Pueden discutirse casos de psicoterapia individual, pareja, familia, intervención en crisis, situaciones complejas e impasses éticos o técnicos.",
      },
    ],
    relatedLinks: [
      { label: "Terapia de Pareja", href: "/terapia-de-casal" },
      { label: "Intervención en Crisis", href: "/intervencao-em-crise" },
    ],
    contactTitle: "Agenda una supervisión clínica.",
    contactText:
      "Supervisión para psicólogos y profesionales en formación clínica que desean profundizar manejo, escucha y construcción de caso.",
  },
};

export default function SupervisaoClinicaPage() {
  return <ServiceLandingPage config={config} />;
}
