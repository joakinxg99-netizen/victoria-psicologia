"use client";

import Image from "next/image";
import { useState } from "react";

type Lang = "pt" | "es";

const copy = {
  pt: {
    brandSubtitle: "Psicologia Clínica",
    navItems: [
      { label: "Sobre", href: "#sobre" },
      { label: "Formação", href: "#formacao" },
      { label: "Atuação", href: "#atuacao" },
      { label: "Supervisão", href: "#supervisao" },
      { label: "Pesquisa", href: "#pesquisa" },
      { label: "FAQ", href: "#faq" },
      { label: "Contato", href: "#contato" },
    ],
    areas: [
      {
        title: "Relacionamentos",
        description:
          "Acompanhamento clínico para compreender vínculos, padrões afetivos e formas mais saudáveis de se relacionar.",
      },
      {
        title: "Terapia de Casal",
        description:
          "Terapia de casal em Brasília e online para conflitos, comunicação, reconstrução de confiança e decisões difíceis.",
      },
      {
        title: "Saúde Mental no Trabalho",
        description:
          "Cuidado para sofrimento psíquico relacionado ao trabalho, esgotamento, conflitos institucionais e qualidade de vida.",
      },
      {
        title: "Ansiedade",
        description:
          "Psicoterapia para ansiedade, sobrecarga emocional, insegurança e dificuldades de regulação no cotidiano.",
      },
      {
        title: "Depressão",
        description:
          "Atendimento psicológico para tristeza persistente, perda de sentido, isolamento e sofrimento emocional prolongado.",
      },
      {
        title: "Intervenção em Crise",
        description:
          "Acolhimento técnico e sensível para situações de crise, risco, ruptura, violência e sofrimento agudo.",
      },
      {
        title: "Relacionamentos Abusivos e Violência Doméstica",
        description:
          "Atendimento especializado para violência doméstica, vínculos abusivos e reconstrução de autonomia com cuidado ético.",
      },
    ],
    credentials: [
      "Psicóloga Clínica",
      "Doutora em Psicologia Clínica e Cultura (UnB)",
      "CRP 01/19626",
    ],
    topCta: "Agendar consulta",
    mobileNavLabel: "Abrir navegação",
    whatsappCta: "Agendar consulta",
    heroTrustDesktop:
      "CRP 01/19626 • Brasil e Internacional • Português | Español",
    heroTrustMobileTop: "CRP 01/19626 • Brasil e Internacional",
    heroTrustMobileBottom: "Português | Español",
    heroParagraph:
      "Psicoterapia para adultos, casais e famílias com base científica, experiência clínica e atuação em casos complexos.",
    heroSupport:
      "Atendimento presencial em Brasília e online para todo o Brasil e brasileiros no exterior.",
    secondaryCta: "Conhecer abordagem",
    heroImageBadge: "Clínica • Ensino • Pesquisa",
    aboutLabel: "Sobre",
    aboutImageLanguage: "Português | Español",
    international: "Brasil e Internacional",
    aboutTitle:
      "Uma prática clínica guiada por ciência, presença e precisão.",
    aboutText:
      "Acredito que cada pessoa possui uma história única e merece ser escutada com respeito, sensibilidade e responsabilidade técnica. Minha atuação busca integrar conhecimento científico, experiência clínica e cuidado genuíno para ajudar cada paciente a compreender seu sofrimento e construir novas possibilidades de vida.",
    psychotherapyLabel: "Como é a psicoterapia?",
    psychotherapyTitle:
      "Um espaço clínico de escuta, acolhimento e transformação.",
    psychotherapyText:
      "A psicoterapia é um espaço de escuta, acolhimento e transformação, construído de forma ética e baseada em evidências científicas. O trabalho clínico integra conhecimento científico, experiência profissional e atenção à singularidade de cada pessoa, casal ou família.",
    psychotherapyForLabel: "Para quem é a psicoterapia?",
    psychotherapyForTitle:
      "Psicoterapia online e presencial para diferentes momentos da vida.",
    psychotherapyForItems: [
      "Pessoas vivendo ansiedade",
      "Depressão",
      "Conflitos familiares",
      "Casais em crise",
      "Baixa autoestima",
      "Violência doméstica",
      "Burnout",
      "Dependência emocional",
      "Crises emocionais",
    ],
    educationLabel: "Formação Acadêmica",
    educationTitle:
      "Uma trajetória construída entre clínica, pesquisa e universidade.",
    educationItems: [
      "Graduação em Psicologia – Universidad Nacional de Córdoba (Argentina)",
      "Mestrado em Psicologia Social, do Trabalho e das Organizações – Universidade de Brasília (Brasil)",
      "Doutorado em Psicologia Clínica e Cultura – Universidade de Brasília (Brasil)",
      "Pós-Doutorado em Saúde Mental e Qualidade de Vida – Universidade de Brasília (Brasil)",
    ],
    academicLabel: "Atuação Acadêmica",
    academicTitle:
      "Ensino, supervisão e pesquisa como extensões da prática clínica.",
    academicItems: [
      "Professora universitária",
      "Supervisora clínica de estágios em Psicologia",
      "Supervisora da Psicoterapia de Casal e Família na Clínica-Escola do Centro Universitário UDF",
      "Pesquisadora em Psicologia Clínica, Saúde Mental e Cultura",
    ],
    areasLabel: "Áreas de atuação",
    areasTitle:
      "Atendimento psicológico para relações, saúde mental e situações complexas.",
    helpLabel: "Como posso ajudar você?",
    helpTitle:
      "Escolha a área que mais se aproxima do momento que você está vivendo.",
    helpButton: "Saiba mais",
    helpCards: [
      {
        icon: "❤️",
        title: "Terapia de Casal",
        description:
          "Acompanhamento para casais que desejam fortalecer o diálogo, compreender conflitos e reconstruir a relação.",
        href: "/terapia-de-casal",
      },
      {
        icon: "🌍",
        title: "Brasileiros no Exterior",
        description:
          "Atendimento psicológico online para brasileiros e hispano-falantes que vivem fora do país.",
        href: "/brasileiros-no-exterior",
      },
      {
        icon: "⚠️",
        title: "Intervenção em Crise",
        description:
          "Apoio psicológico em momentos de sofrimento intenso, mudanças importantes e situações de crise.",
        href: "/intervencao-em-crise",
      },
      {
        icon: "💼",
        title: "Saúde Mental no Trabalho",
        description:
          "Psicoterapia para questões relacionadas ao trabalho, burnout, estresse e sofrimento ocupacional.",
        href: "/saude-mental-no-trabalho",
      },
      {
        icon: "👩‍⚕️",
        title: "Supervisão Clínica",
        description:
          "Supervisão para psicólogos e profissionais em formação clínica.",
        href: "/supervisao-clinica",
      },
    ],
    supervisionLabel: "Supervisão",
    supervisionTitle:
      "Supervisão clínica para profissionais em desenvolvimento.",
    supervisionText:
      "Como professora universitária e supervisora, Dra. Victoria oferece acompanhamento qualificado para psicólogas e psicólogos que buscam ampliar repertório técnico, leitura clínica e segurança ética na prática profissional.",
    supervisionChips: ["Leitura clínica", "Manejo ético", "Casos complexos"],
    supervisionBadge: "Supervisão • Cuidado • Formação",
    supervisionImageText:
      "Uma presença clínica para sustentar decisões sensíveis.",
    researchLabel: "Pesquisa",
    researchTitle: "Produção acadêmica com impacto humano.",
    researchText:
      "Atuação em pesquisa, formação e discussão científica, conectando conhecimento avançado às necessidades concretas de cuidado, prevenção e intervenção.",
    consultingLabel: "Consultoria",
    consultingTitle: "Consultoria técnica para contextos complexos.",
    consultingText:
      "Apoio especializado para equipes, instituições e projetos que demandam leitura psicológica qualificada, especialmente em crise, família, vínculo e cuidado.",
    faqLabel: "FAQ",
    faqTitle: "Perguntas frequentes antes do primeiro contato.",
    faqs: [
      {
        question: "Como funciona o atendimento psicológico online?",
        answer:
          "O atendimento psicológico online é realizado em ambiente reservado, por videochamada, com sigilo profissional e a mesma qualidade clínica do atendimento presencial. É indicado para pessoas que buscam terapia online no Brasil ou no exterior.",
      },
      {
        question: "Atende brasileiros que vivem no exterior?",
        answer:
          "Sim. Dra. Victoria realiza atendimento internacional e acompanha brasileiros que vivem fora do país, oferecendo psicoterapia em português e espanhol para demandas de saúde mental, adaptação, vínculos e sofrimento emocional.",
      },
      {
        question: "Como funciona a primeira consulta?",
        answer:
          "A primeira consulta é um encontro de escuta inicial para compreender a demanda, o contexto de vida, os objetivos do atendimento psicológico e a melhor forma de acompanhamento clínico.",
      },
      {
        question: "Atendimento para casais e famílias?",
        answer:
          "Sim. Há atendimento para casais e famílias, com foco em comunicação, conflitos, vínculos, parentalidade, crises relacionais e construção de novos recursos de convivência.",
      },
      {
        question: "Como agendar atendimento?",
        answer:
          "O agendamento pode ser feito pelo WhatsApp ou email. No primeiro contato, são alinhados disponibilidade, modalidade de consulta, idioma e informações iniciais sobre o atendimento.",
      },
      {
        question: "Supervisão clínica para profissionais?",
        answer:
          "Sim. A supervisão clínica é voltada para psicólogas e psicólogos que buscam aprimorar manejo técnico, formulação de caso, intervenção em crise e tomada de decisão ética.",
      },
    ],
    contactLabel: "Contato",
    contactTitle: "Agende seu atendimento",
    contactSupport:
      "Atendimento presencial em Brasília e online para todo o Brasil e brasileiros no exterior.",
    contactWhatsapp: "Chamar no WhatsApp",
    footerCredentials: "Psicóloga • PhD & Pós-Doutora",
    footerContact: "Contato",
    footerCare: "Atendimento",
    footerCareMode: "Online e Presencial",
    whatsapp: "WhatsApp",
    floatingWhatsappLabel: "Abrir WhatsApp",
    altHero: "Retrato de Dra. Victoria A. Gómez",
    altStanding: "Dra. Victoria A. Gómez em retrato editorial",
    altChair: "Dra. Victoria A. Gómez sentada em poltrona verde",
  },
  es: {
    brandSubtitle: "Psicología Clínica",
    navItems: [
      { label: "Sobre", href: "#sobre" },
      { label: "Formación", href: "#formacao" },
      { label: "Áreas", href: "#atuacao" },
      { label: "Supervisión", href: "#supervisao" },
      { label: "Investigación", href: "#pesquisa" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contato" },
    ],
    areas: [
      {
        title: "Relaciones",
        description:
          "Acompañamiento clínico para comprender vínculos, patrones afectivos y formas más saludables de relacionarse.",
      },
      {
        title: "Terapia de Pareja",
        description:
          "Terapia de pareja en Brasília y online para conflictos, comunicación, reconstrucción de confianza y decisiones difíciles.",
      },
      {
        title: "Salud Mental en el Trabajo",
        description:
          "Cuidado para el sufrimiento psíquico relacionado con el trabajo, agotamiento, conflictos institucionales y calidad de vida.",
      },
      {
        title: "Ansiedad",
        description:
          "Psicoterapia para ansiedad, sobrecarga emocional, inseguridad y dificultades de regulación en la vida cotidiana.",
      },
      {
        title: "Depresión",
        description:
          "Atención psicológica para tristeza persistente, pérdida de sentido, aislamiento y sufrimiento emocional prolongado.",
      },
      {
        title: "Intervención en Crisis",
        description:
          "Acogida técnica y sensible para situaciones de crisis, riesgo, ruptura, violencia y sufrimiento agudo.",
      },
      {
        title: "Relaciones Abusivas y Violencia Doméstica",
        description:
          "Atención especializada para violencia doméstica, vínculos abusivos y reconstrucción de autonomía con cuidado ético.",
      },
    ],
    credentials: [
      "Psicóloga Clínica",
      "Doctora en Psicología Clínica y Cultura (UnB)",
      "CRP 01/19626",
    ],
    topCta: "Agendar consulta",
    mobileNavLabel: "Abrir navegación",
    whatsappCta: "Agendar consulta",
    heroTrustDesktop:
      "CRP 01/19626 • Brasil e Internacional • Português | Español",
    heroTrustMobileTop: "CRP 01/19626 • Brasil e Internacional",
    heroTrustMobileBottom: "Português | Español",
    heroParagraph:
      "Psicoterapia para adultos, parejas y familias con base científica, experiencia clínica y actuación en casos complejos.",
    heroSupport:
      "Atención presencial en Brasília y online para todo Brasil y brasileños en el exterior.",
    secondaryCta: "Conocer el enfoque",
    heroImageBadge: "Clínica • Docencia • Investigación",
    aboutLabel: "Sobre",
    aboutImageLanguage: "Português | Español",
    international: "Brasil e Internacional",
    aboutTitle:
      "Una práctica clínica guiada por ciencia, presencia y precisión.",
    aboutText:
      "Creo que cada persona posee una historia única y merece ser escuchada con respeto, sensibilidad y responsabilidad técnica. Mi práctica busca integrar conocimiento científico, experiencia clínica y cuidado genuino para ayudar a cada paciente a comprender su sufrimiento y construir nuevas posibilidades de vida.",
    psychotherapyLabel: "¿Cómo es la psicoterapia?",
    psychotherapyTitle:
      "Un espacio clínico de escucha, acogida y transformación.",
    psychotherapyText:
      "La psicoterapia es un espacio de escucha, acogida y transformación, construido de forma ética y basado en evidencias científicas. El trabajo clínico integra conocimiento científico, experiencia profesional y atención a la singularidad de cada persona, pareja o familia.",
    psychotherapyForLabel: "¿Para quién es la psicoterapia?",
    psychotherapyForTitle:
      "Psicoterapia online y presencial para diferentes momentos de la vida.",
    psychotherapyForItems: [
      "Personas viviendo ansiedad",
      "Depresión",
      "Conflictos familiares",
      "Parejas en crisis",
      "Baja autoestima",
      "Violencia doméstica",
      "Burnout",
      "Dependencia emocional",
      "Crisis emocionales",
    ],
    educationLabel: "Formación Académica",
    educationTitle:
      "Una trayectoria construida entre clínica, investigación y universidad.",
    educationItems: [
      "Grado en Psicología – Universidad Nacional de Córdoba (Argentina)",
      "Maestría en Psicología Social, del Trabajo y de las Organizaciones – Universidade de Brasília (Brasil)",
      "Doctorado en Psicología Clínica y Cultura – Universidade de Brasília (Brasil)",
      "Posdoctorado en Salud Mental y Calidad de Vida – Universidade de Brasília (Brasil)",
    ],
    academicLabel: "Actuación Académica",
    academicTitle:
      "Docencia, supervisión e investigación como extensiones de la práctica clínica.",
    academicItems: [
      "Profesora universitaria",
      "Supervisora clínica de prácticas en Psicología",
      "Supervisora de Psicoterapia de Pareja y Familia en la Clínica-Escuela del Centro Universitario UDF",
      "Investigadora en Psicología Clínica, Salud Mental y Cultura",
    ],
    areasLabel: "Áreas de actuación",
    areasTitle:
      "Atención psicológica para relaciones, salud mental y situaciones complejas.",
    helpLabel: "¿Cómo puedo ayudarte?",
    helpTitle:
      "Elige el área que más se aproxima al momento que estás viviendo.",
    helpButton: "Saber más",
    helpCards: [
      {
        icon: "❤️",
        title: "Terapia de Pareja",
        description:
          "Acompañamiento para parejas que desean fortalecer el diálogo, comprender conflictos y reconstruir la relación.",
        href: "/terapia-de-casal",
      },
      {
        icon: "🌍",
        title: "Brasileños en el Exterior",
        description:
          "Atención psicológica online para brasileños e hispanohablantes que viven fuera del país.",
        href: "/brasileiros-no-exterior",
      },
      {
        icon: "⚠️",
        title: "Intervención en Crisis",
        description:
          "Apoyo psicológico en momentos de sufrimiento intenso, cambios importantes y situaciones de crisis.",
        href: "/intervencao-em-crise",
      },
      {
        icon: "💼",
        title: "Salud Mental en el Trabajo",
        description:
          "Psicoterapia para cuestiones relacionadas con el trabajo, burnout, estrés y sufrimiento ocupacional.",
        href: "/saude-mental-no-trabalho",
      },
      {
        icon: "👩‍⚕️",
        title: "Supervisión Clínica",
        description:
          "Supervisión para psicólogos y profesionales en formación clínica.",
        href: "/supervisao-clinica",
      },
    ],
    supervisionLabel: "Supervisión",
    supervisionTitle:
      "Supervisión clínica para profesionales en desarrollo.",
    supervisionText:
      "Como profesora universitaria y supervisora, Dra. Victoria ofrece acompañamiento calificado para psicólogas y psicólogos que buscan ampliar repertorio técnico, lectura clínica y seguridad ética en la práctica profesional.",
    supervisionChips: ["Lectura clínica", "Manejo ético", "Casos complejos"],
    supervisionBadge: "Supervisión • Cuidado • Formación",
    supervisionImageText:
      "Una presencia clínica para sostener decisiones sensibles.",
    researchLabel: "Investigación",
    researchTitle: "Producción académica con impacto humano.",
    researchText:
      "Actuación en investigación, formación y discusión científica, conectando conocimiento avanzado con necesidades concretas de cuidado, prevención e intervención.",
    consultingLabel: "Consultoría",
    consultingTitle: "Consultoría técnica para contextos complejos.",
    consultingText:
      "Apoyo especializado para equipos, instituciones y proyectos que demandan lectura psicológica calificada, especialmente en crisis, familia, vínculo y cuidado.",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes antes del primer contacto.",
    faqs: [
      {
        question: "¿Cómo funciona la atención psicológica online?",
        answer:
          "La atención psicológica online se realiza en un entorno reservado, por videollamada, con sigilo profesional y la misma calidad clínica de la atención presencial. Es indicada para personas que buscan terapia online en Brasil o en el exterior.",
      },
      {
        question: "¿Atiende brasileños que viven en el exterior?",
        answer:
          "Sí. Dra. Victoria realiza atención internacional y acompaña brasileños que viven fuera del país, ofreciendo psicoterapia en portugués y español para demandas de salud mental, adaptación, vínculos y sufrimiento emocional.",
      },
      {
        question: "¿Cómo funciona la primera consulta?",
        answer:
          "La primera consulta es un encuentro de escucha inicial para comprender la demanda, el contexto de vida, los objetivos de la atención psicológica y la mejor forma de acompañamiento clínico.",
      },
      {
        question: "¿Atención para parejas y familias?",
        answer:
          "Sí. Hay atención para parejas y familias, con foco en comunicación, conflictos, vínculos, parentalidad, crisis relacionales y construcción de nuevos recursos de convivencia.",
      },
      {
        question: "¿Cómo agendar atención?",
        answer:
          "La consulta puede agendarse por WhatsApp o email. En el primer contacto, se alinean disponibilidad, modalidad de consulta, idioma e información inicial sobre la atención.",
      },
      {
        question: "¿Supervisión clínica para profesionales?",
        answer:
          "Sí. La supervisión clínica está dirigida a psicólogas y psicólogos que buscan aprimorar manejo técnico, formulación de caso, intervención en crisis y toma de decisiones éticas.",
      },
    ],
    contactLabel: "Contacto",
    contactTitle: "Agenda tu atención",
    contactSupport:
      "Atención presencial en Brasília y online para todo Brasil y brasileños en el exterior.",
    contactWhatsapp: "Escribir por WhatsApp",
    footerCredentials: "Psicóloga • PhD & Posdoctora",
    footerContact: "Contacto",
    footerCare: "Atención",
    footerCareMode: "Online y Presencial",
    whatsapp: "WhatsApp",
    floatingWhatsappLabel: "Abrir WhatsApp",
    altHero: "Retrato de Dra. Victoria A. Gómez",
    altStanding: "Dra. Victoria A. Gómez en retrato editorial",
    altChair: "Dra. Victoria A. Gómez sentada en sillón verde",
  },
} satisfies Record<Lang, Record<string, unknown>>;

const whatsappUrl = "https://wa.me/556192868268";
const instagramUrl = "https://www.instagram.com/victoriagomezpsicologa/";
const email = "victoria.ayelen.gomez@gmail.com";
const emailUrl = "mailto:victoria.ayelen.gomez@gmail.com?subject=Contato pelo site";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M16.01 3.2A12.72 12.72 0 0 0 5.08 22.43L3.6 28.8l6.53-1.55A12.7 12.7 0 1 0 16.01 3.2Zm0 2.33a10.37 10.37 0 0 1 8.84 15.8 10.34 10.34 0 0 1-13.9 3.77l-.43-.25-3.87.92.88-3.78-.28-.45A10.38 10.38 0 0 1 16 5.53Zm-4.07 4.9c-.22 0-.58.08-.88.42-.3.35-1.15 1.13-1.15 2.75s1.18 3.18 1.34 3.4c.17.22 2.28 3.65 5.62 4.97 2.78 1.1 3.35.88 3.95.82.6-.05 1.95-.8 2.22-1.57.28-.77.28-1.42.2-1.57-.08-.14-.3-.23-.63-.4-.33-.16-1.95-.96-2.25-1.07-.3-.11-.52-.16-.74.17-.22.33-.85 1.07-1.05 1.29-.2.22-.38.25-.71.08-.33-.16-1.4-.51-2.66-1.64-.98-.88-1.65-1.96-1.84-2.29-.2-.33-.02-.51.15-.67.15-.15.33-.38.5-.58.16-.2.22-.33.33-.55.11-.22.05-.41-.03-.58-.08-.16-.72-1.79-1.02-2.43-.25-.55-.52-.56-.76-.57h-.59Z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.7" />
      <path d="M17.4 6.6h.01" />
    </svg>
  );
}

function LanguageToggle({
  className = "",
  lang,
  setLang,
}: {
  className?: string;
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  return (
    <div
      aria-label="Selecionar idioma"
      className={`inline-flex items-center rounded-full border border-[#e1d3c1] bg-white/46 p-1 text-[0.68rem] font-semibold tracking-[0.18em] text-[#7a6654] shadow-[0_10px_26px_rgba(86,62,40,0.045)] backdrop-blur-xl ${className}`}
    >
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        className={`rounded-full px-3 py-2 transition-colors duration-300 ${
          lang === "pt"
            ? "bg-[#3f332b] text-white shadow-[0_8px_18px_rgba(63,51,43,0.12)]"
            : "hover:bg-white/72 hover:text-[#3f332b]"
        }`}
      >
        PT
      </button>
      <span className="px-1 text-[#c4ad95]">|</span>
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`rounded-full px-3 py-2 transition-colors duration-300 ${
          lang === "es"
            ? "bg-[#3f332b] text-white shadow-[0_8px_18px_rgba(63,51,43,0.12)]"
            : "hover:bg-white/72 hover:text-[#3f332b]"
        }`}
      >
        ES
      </button>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = copy[lang];

  return (
    <main className="min-h-screen scroll-smooth bg-[#fbf8f3] text-[#302923] selection:bg-[#d8c2a3]/40">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/55 bg-[#fbf8f3]/76 shadow-[0_10px_34px_rgba(70,48,28,0.045)] backdrop-blur-2xl">
        <div className="mx-auto flex h-[4.75rem] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#hero" className="group flex flex-col">
            <span className="font-serif text-xl tracking-[0.08em] text-[#3c3129] transition-colors group-hover:text-[#8b6b4b]">
              VICTORIA
            </span>
            <span className="text-[0.62rem] uppercase tracking-[0.32em] text-[#9a846c]">
              {t.brandSubtitle}
            </span>
          </a>

          <div className="hidden items-center gap-7 rounded-full border border-white/70 bg-white/45 px-7 py-3 shadow-[0_14px_46px_rgba(96,70,45,0.06)] backdrop-blur-xl lg:flex">
            {t.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#6e5f52] transition-colors hover:text-[#2f2822]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <LanguageToggle lang={lang} setLang={setLang} />
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e1d3c1] bg-white/46 text-[#5d4c3f] shadow-[0_10px_26px_rgba(86,62,40,0.045)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#3f332b]"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#3f332b] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(63,51,43,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7f654c] hover:shadow-[0_18px_44px_rgba(86,62,40,0.18)]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.topCta}
            </a>
          </div>

          <div className="ml-auto mr-3 flex items-center gap-2 sm:hidden">
            <LanguageToggle className="scale-90" lang={lang} setLang={setLang} />
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e1d3c1] bg-white/54 text-[#5d4c3f] shadow-[0_10px_24px_rgba(86,62,40,0.05)] backdrop-blur-xl"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>

          <details className="group relative sm:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#e1d3c1] bg-white/60 text-[#3f332b] shadow-[0_12px_34px_rgba(63,51,43,0.10)] backdrop-blur-xl transition-all duration-300 group-open:bg-[#3f332b] group-open:text-white [&::-webkit-details-marker]:hidden">
              <span className="sr-only">{t.mobileNavLabel}</span>
              <span className="relative block h-3.5 w-5">
                <span className="absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 group-open:translate-y-[7px] group-open:rotate-45" />
                <span className="absolute left-0 top-[7px] h-px w-5 bg-current transition-opacity duration-300 group-open:opacity-0" />
                <span className="absolute bottom-0 left-0 h-px w-5 bg-current transition-transform duration-300 group-open:-translate-y-[7px] group-open:-rotate-45" />
              </span>
            </summary>
            <div className="absolute right-0 top-14 w-[min(82vw,21rem)] overflow-hidden rounded-3xl border border-white/75 bg-[#fffaf4]/92 p-3 shadow-[0_28px_80px_rgba(63,51,43,0.18)] backdrop-blur-2xl">
              <div className="grid gap-1">
                {t.navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-[#5e5046] transition-colors hover:bg-[#efe4d5] hover:text-[#302923]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#3f332b] px-5 text-sm font-semibold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t.whatsappCta}
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-[#e1d3c1] bg-white/62 px-5 text-sm font-semibold text-[#5e5046]"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </details>
        </div>
      </nav>

      <section
        id="hero"
        className="relative isolate overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-10 lg:pt-30"
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(255,255,255,0.92),rgba(251,248,243,0.72)_40%,rgba(239,228,213,0.54)),radial-gradient(circle_at_14%_16%,rgba(216,194,163,0.30),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(143,111,79,0.12),transparent_32%)]" />
        <div className="absolute bottom-0 left-1/2 -z-10 h-px w-[82vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d8c2a3] to-transparent" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="max-w-3xl animate-[fadeUp_0.8s_ease-out_both]">
            <h1 className="font-serif text-5xl font-medium leading-[0.98] tracking-normal text-[#302923] sm:text-6xl lg:text-7xl">
              Dra. Victoria A. Gómez
            </h1>

            <div className="mt-6 flex flex-wrap gap-3">
              {t.credentials.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#e5d9c9] bg-white/60 px-4 py-2 text-sm text-[#6f5b48] shadow-sm backdrop-blur-xl"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#65584d] sm:text-xl sm:leading-9">
              {t.heroParagraph}
            </p>

            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-[#7a6654] sm:text-lg">
              {t.heroSupport}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#3f332b] px-8 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(63,51,43,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7f654c] hover:shadow-[0_20px_48px_rgba(86,62,40,0.18)]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t.whatsappCta}
              </a>
              <a
                href="#sobre"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#d9cab8] bg-white/56 px-8 text-sm font-semibold text-[#46382e] shadow-[0_10px_26px_rgba(86,62,40,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b99a77] hover:bg-white"
              >
                {t.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[39rem] animate-[fadeUp_0.8s_0.15s_ease-out_both] lg:mr-0">
            <div className="absolute -left-8 top-12 hidden h-52 w-36 rounded-t-full border border-[#dac8b3] bg-[#efe4d5]/58 lg:block" />
            <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full border border-white/65 bg-white/44 shadow-[0_18px_54px_rgba(86,62,40,0.08)] backdrop-blur-2xl" />
            <div className="absolute -inset-5 rounded-[2.35rem] bg-[#d8c2a3]/24 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/78 bg-white/46 p-3 shadow-[0_28px_86px_rgba(85,62,40,0.16)] backdrop-blur-2xl">
              <div className="overflow-hidden rounded-[1.78rem] bg-[#efe4d5]">
                <Image
                  src="/victoria-hero.jpg"
                  alt={t.altHero}
                  width={920}
                  height={1120}
                  priority
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="aspect-[4/5] w-full scale-[1.08] object-cover object-[center_26%] saturate-[0.96]"
                />
              </div>
              <div className="absolute bottom-6 left-6 max-w-[16rem] rounded-full border border-white/45 bg-[#fffaf4]/38 px-4 py-2 shadow-[0_10px_28px_rgba(67,49,32,0.08)] backdrop-blur-xl">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#7f654c]">
                  {t.heroImageBadge}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="relative px-5 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-white/28 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -bottom-6 -right-6 hidden h-56 w-44 rounded-b-full border border-[#d9c8b5] bg-[#f2e8da]/72 lg:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/75 bg-white/52 p-3 shadow-[0_30px_95px_rgba(83,61,40,0.14)] backdrop-blur-xl">
              <Image
                src="/victoria-standing.jpeg"
                alt={t.altStanding}
                width={852}
                height={1280}
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="aspect-[4/5] w-full rounded-[1.55rem] object-cover object-[center_18%] saturate-[0.96]"
              />
              <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-2xl border border-white/70 bg-white/72 px-4 py-3 text-sm text-[#6f5b48] shadow-[0_18px_48px_rgba(67,49,32,0.12)] backdrop-blur-2xl sm:bottom-6 sm:left-6 sm:max-w-none sm:px-5 sm:py-4">
                <p className="font-serif text-xl text-[#352c25]">
                  {t.aboutImageLanguage}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#9a7654]">
                  {t.international}
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pl-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              {t.aboutLabel}
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-medium leading-tight text-[#302923] sm:text-5xl">
              {t.aboutTitle}
            </h2>
            <div className="mt-8 rounded-[1.75rem] border border-white/75 bg-white/62 p-8 shadow-[0_24px_70px_rgba(90,65,42,0.09)] backdrop-blur-xl sm:p-10">
              <p className="text-lg leading-9 text-[#65584d]">
                {t.aboutText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="psicoterapia" className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[1.75rem] border border-white/75 bg-white/62 p-8 shadow-[0_24px_70px_rgba(90,65,42,0.08)] backdrop-blur-xl sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              {t.psychotherapyLabel}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923] sm:text-5xl">
              {t.psychotherapyTitle}
            </h2>
          </article>

          <article className="rounded-[1.75rem] border border-white/75 bg-[#fffaf4]/70 p-8 shadow-[0_24px_70px_rgba(90,65,42,0.075)] backdrop-blur-xl sm:p-10">
            <p className="text-lg leading-9 text-[#65584d]">
              {t.psychotherapyText}
            </p>
          </article>
        </div>
      </section>

      <section id="para-quem" className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              {t.psychotherapyForLabel}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923] sm:text-5xl">
              {t.psychotherapyForTitle}
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {t.psychotherapyForItems.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-white/75 bg-white/60 px-5 py-4 text-sm font-medium leading-6 text-[#65584d] shadow-[0_14px_42px_rgba(90,65,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#352c25]"
              >
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="formacao" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              {t.educationLabel}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923] sm:text-5xl">
              {t.educationTitle}
            </h2>
          </div>

          <div className="grid gap-4">
            {t.educationItems.map((item, index) => (
              <article
                key={item}
                className="group grid gap-4 rounded-[1.5rem] border border-white/75 bg-white/60 p-6 shadow-[0_20px_60px_rgba(90,65,42,0.075)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_26px_72px_rgba(90,65,42,0.12)] sm:grid-cols-[4rem_1fr] sm:items-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#efe4d5] font-serif text-lg text-[#8b6b4b] transition-colors group-hover:bg-[#3f332b] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl leading-snug text-[#352c25] sm:text-2xl">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="academica" className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/75 bg-white/58 p-8 shadow-[0_26px_80px_rgba(90,65,42,0.09)] backdrop-blur-xl sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
                {t.academicLabel}
              </p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923] sm:text-5xl">
                {t.academicTitle}
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {t.academicItems.map((item) => (
                <article
                  key={item}
                  className="rounded-[1.25rem] border border-[#eadfce] bg-[#fffaf4]/70 p-5 text-base leading-7 text-[#65584d] shadow-[0_14px_42px_rgba(90,65,42,0.055)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  {item}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="atuacao" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              {t.areasLabel}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923] sm:text-5xl">
              {t.areasTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.areas.map((area, index) => (
              <article
                key={area.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/75 bg-white/60 p-7 shadow-[0_22px_65px_rgba(90,65,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_80px_rgba(90,65,42,0.13)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#b8946d] via-[#e5d4bd] to-transparent opacity-80" />
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#efe4d5] font-serif text-lg text-[#8b6b4b] transition-colors group-hover:bg-[#3f332b] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 font-serif text-2xl text-[#352c25]">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#6f6258]">
                  {area.description}
                </p>
                <div className="mt-8 h-px w-full bg-gradient-to-r from-[#d8c2a3] to-transparent" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-posso-ajudar" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              {t.helpLabel}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923] sm:text-5xl">
              {t.helpTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {t.helpCards.map((card) => (
              <article
                key={card.href}
                className="group flex min-h-[17rem] flex-col rounded-[1.5rem] border border-white/75 bg-white/60 p-6 shadow-[0_22px_65px_rgba(90,65,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_80px_rgba(90,65,42,0.13)]"
              >
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#efe4d5] text-xl transition-transform duration-300 group-hover:scale-105"
                >
                  {card.icon}
                </span>
                <h3 className="mt-6 font-serif text-2xl leading-tight text-[#352c25]">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[#6f6258]">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-[#d9cab8] bg-white/56 px-5 text-sm font-semibold text-[#46382e] shadow-[0_10px_26px_rgba(86,62,40,0.04)] backdrop-blur-xl transition-all duration-300 hover:border-[#b99a77] hover:bg-white"
                >
                  {t.helpButton}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="supervisao" className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-white/75 bg-[#3f332b] text-white shadow-[0_32px_100px_rgba(63,51,43,0.23)]">
          <div className="grid lg:grid-cols-[1.04fr_0.96fr]">
            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <div className="absolute left-12 top-10 -z-10 h-44 w-44 rounded-full bg-[#8b6b4b]/20 blur-3xl" />
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d8c2a3]">
                {t.supervisionLabel}
              </p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-5xl">
                {t.supervisionTitle}
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-9 text-[#eadfce]">
                {t.supervisionText}
              </p>
              <div className="mt-10 grid gap-3 text-sm text-[#eadfce] sm:grid-cols-3">
                {t.supervisionChips.map((chip) => (
                  <div
                    key={chip}
                    className="rounded-2xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur-xl"
                  >
                    {chip}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[28rem] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">
              <Image
                src="/victoria-chair.jpeg"
                alt={t.altChair}
                width={852}
                height={1280}
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="h-full min-h-[28rem] w-full object-cover object-[center_18%] saturate-[0.94]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3f332b]/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#3f332b]/22 lg:via-transparent lg:to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/18 bg-[#fffaf4]/12 p-5 text-[#f8efe4] shadow-[0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
                <p className="text-xs uppercase tracking-[0.24em] text-[#e5d4bd]">
                  {t.supervisionBadge}
                </p>
                <p className="mt-2 font-serif text-2xl">
                  {t.supervisionImageText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pesquisa" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-white/75 bg-white/60 p-8 shadow-[0_24px_70px_rgba(90,65,42,0.09)] backdrop-blur-xl sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              {t.researchLabel}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923]">
              {t.researchTitle}
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#65584d]">
              {t.researchText}
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-white/75 bg-white/60 p-8 shadow-[0_24px_70px_rgba(90,65,42,0.09)] backdrop-blur-xl sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              {t.consultingLabel}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923]">
              {t.consultingTitle}
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#65584d]">
              {t.consultingText}
            </p>
          </article>
        </div>
      </section>

      <section id="faq" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              {t.faqLabel}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923] sm:text-5xl">
              {t.faqTitle}
            </h2>
          </div>

          <div className="grid gap-4">
            {t.faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-[1.35rem] border border-white/75 bg-white/62 p-6 shadow-[0_18px_55px_rgba(90,65,42,0.08)] backdrop-blur-xl transition-all duration-300 open:bg-white"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-xl text-[#352c25] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#efe4d5] text-lg text-[#8b6b4b] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[#65584d]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
            {t.contactLabel}
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923] sm:text-6xl">
            {t.contactTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#65584d] sm:text-lg">
            {t.contactSupport}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#3f332b] px-8 text-sm font-semibold text-white shadow-[0_20px_55px_rgba(63,51,43,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8b6b4b] sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.contactWhatsapp}
            </a>
            <a
              href={emailUrl}
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-[#d9cab8] bg-white/62 px-8 text-sm font-semibold text-[#46382e] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#b99a77] hover:bg-white sm:w-auto"
            >
              {email}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e6d9c8] bg-[#f5eee5]/52 px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 text-sm text-[#7a6a5d] md:grid-cols-[1.1fr_1fr_1fr] md:items-start">
          <div>
            <p className="font-serif text-2xl text-[#3c3129]">
              Dra. Victoria A. Gómez
            </p>
            <p className="mt-2">{t.footerCredentials}</p>
            <p className="mt-1 font-semibold text-[#5f4e42]">CRP 01/19626</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7654]">
              {t.footerContact}
            </p>
            <a
              href={emailUrl}
              className="block break-words transition-colors hover:text-[#3f332b]"
            >
              {email}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-[#3f332b]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.whatsapp}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-[#3f332b]"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>
          <div className="space-y-2 md:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7654]">
              {t.footerCare}
            </p>
            <p>{t.footerCareMode}</p>
            <p>{t.international}</p>
            <p>{t.aboutImageLanguage}</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floatingWhatsappLabel}
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#4f5a3a] text-white shadow-[0_14px_34px_rgba(54,62,39,0.24)] ring-1 ring-white/45 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#434d32] hover:shadow-[0_18px_42px_rgba(54,62,39,0.28)]"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </main>
  );
}
