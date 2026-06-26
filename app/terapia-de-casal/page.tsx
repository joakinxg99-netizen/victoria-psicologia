import type { Metadata } from "next";
import Image from "next/image";

const siteUrl = "https://dravictoriagomez.com.br";
const pageUrl = `${siteUrl}/terapia-de-casal`;
const whatsappUrl = "https://wa.me/556192868268";
const instagramUrl = "https://www.instagram.com/victoriagomezpsicologa/";
const email = "victoria.ayelen.gomez@gmail.com";
const emailUrl = "mailto:victoria.ayelen.gomez@gmail.com?subject=Contato pelo site";

export const metadata: Metadata = {
  title: "Terapia de Casal | Dra. Victoria A. Gómez",
  description:
    "Terapia de casal em Brasília e online com psicóloga clínica, doutora pela UnB. Atendimento para conflitos conjugais, comunicação, separação e reconstrução da confiança.",
  alternates: {
    canonical: pageUrl,
  },
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
        url: `${siteUrl}/opengraph-image`,
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
    images: [`${siteUrl}/opengraph-image`],
  },
};

const seekItems = [
  "Dificuldades de comunicação",
  "Conflitos frequentes",
  "Separação",
  "Reconstrução da confiança",
  "Infidelidade",
  "Desgaste emocional",
  "Mudanças importantes",
];

const authorityItems = [
  "Doutora pela UnB",
  "Pós-Doutora",
  "Professora Universitária",
  "Supervisora da Psicoterapia de Casal",
  "Formação internacional",
  "Atendimento presencial e online",
];

const faqs = [
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
];

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

export default function TerapiaDeCasalPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#fbf8f3] text-[#302923] selection:bg-[#d8c2a3]/40">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/55 bg-[#fbf8f3]/76 shadow-[0_10px_34px_rgba(70,48,28,0.045)] backdrop-blur-2xl">
        <div className="mx-auto flex h-[4.75rem] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="/" className="group flex flex-col">
            <span className="font-serif text-xl tracking-[0.08em] text-[#3c3129] transition-colors group-hover:text-[#8b6b4b]">
              VICTORIA
            </span>
            <span className="text-[0.62rem] uppercase tracking-[0.32em] text-[#9a846c]">
              Psicologia Clínica
            </span>
          </a>

          <div className="hidden items-center gap-7 rounded-full border border-white/70 bg-white/45 px-7 py-3 shadow-[0_14px_46px_rgba(96,70,45,0.06)] backdrop-blur-xl md:flex">
            <a
              href="#quando-procurar"
              className="text-sm font-medium text-[#6e5f52] transition-colors hover:text-[#2f2822]"
            >
              Quando procurar
            </a>
            <a
              href="#como-funciona"
              className="text-sm font-medium text-[#6e5f52] transition-colors hover:text-[#2f2822]"
            >
              Como funciona
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-[#6e5f52] transition-colors hover:text-[#2f2822]"
            >
              FAQ
            </a>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#3f332b] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(63,51,43,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7f654c] hover:shadow-[0_18px_44px_rgba(86,62,40,0.18)]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agendar consulta
          </a>
        </div>
      </nav>

      <section className="relative isolate overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-10 lg:pt-30">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(255,255,255,0.92),rgba(251,248,243,0.72)_40%,rgba(239,228,213,0.54)),radial-gradient(circle_at_14%_16%,rgba(216,194,163,0.30),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(143,111,79,0.12),transparent_32%)]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              Psicóloga para casais
            </p>
            <h1 className="mt-4 font-serif text-5xl font-medium leading-[0.98] tracking-normal text-[#302923] sm:text-6xl lg:text-7xl">
              Terapia de Casal
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#65584d] sm:text-xl sm:leading-9">
              Um espaço seguro para compreender conflitos, fortalecer o diálogo
              e reconstruir relações de forma ética e baseada em evidências.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Terapia de casal Brasília", "Online", "CRP 01/19626"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e5d9c9] bg-white/60 px-4 py-2 text-sm text-[#6f5b48] shadow-sm backdrop-blur-xl"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#3f332b] px-8 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(63,51,43,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7f654c] hover:shadow-[0_20px_48px_rgba(86,62,40,0.18)]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Agendar consulta
              </a>
              <a
                href="#como-funciona"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#d9cab8] bg-white/56 px-8 text-sm font-semibold text-[#46382e] shadow-[0_10px_26px_rgba(86,62,40,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b99a77] hover:bg-white"
              >
                Entender o processo
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[38rem] lg:mr-0">
            <div className="absolute -left-8 top-12 hidden h-52 w-36 rounded-t-full border border-[#dac8b3] bg-[#efe4d5]/58 lg:block" />
            <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full border border-white/65 bg-white/44 shadow-[0_18px_54px_rgba(86,62,40,0.08)] backdrop-blur-2xl" />
            <div className="absolute -inset-5 rounded-[2.35rem] bg-[#d8c2a3]/24 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/78 bg-white/46 p-3 shadow-[0_28px_86px_rgba(85,62,40,0.16)] backdrop-blur-2xl">
              <Image
                src="/victoria-hero.jpg"
                alt="Dra. Victoria A. Gómez"
                width={920}
                height={1120}
                priority
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="aspect-[4/5] w-full rounded-[1.78rem] object-cover object-[center_26%] saturate-[0.96]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="quando-procurar" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              Quando buscar terapia
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923] sm:text-5xl">
              Para casais atravessando crise, distância ou decisões difíceis.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {seekItems.map((item, index) => (
              <article
                key={item}
                className="group relative overflow-hidden rounded-[1.35rem] border border-white/75 bg-white/60 p-6 shadow-[0_18px_55px_rgba(90,65,42,0.075)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_26px_70px_rgba(90,65,42,0.12)]"
              >
                <span className="font-serif text-lg text-[#8b6b4b]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-2xl leading-tight text-[#352c25]">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-white/75 bg-white/62 p-8 shadow-[0_24px_70px_rgba(90,65,42,0.09)] backdrop-blur-xl sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              Como funciona
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923]">
              Um processo clínico para escutar, organizar e reconstruir.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#65584d]">
              A terapia de casal cria um espaço de escuta para compreender os
              conflitos conjugais, reconhecer padrões de comunicação e construir
              caminhos possíveis com responsabilidade técnica, sigilo e cuidado.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-white/75 bg-[#3f332b] p-8 text-white shadow-[0_28px_86px_rgba(63,51,43,0.18)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d8c2a3]">
              Por que Dra. Victoria
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight">
              Experiência clínica, acadêmica e supervisão em casal e família.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {authorityItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/12 bg-white/[0.06] p-4 text-sm leading-6 text-[#eadfce] backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="faq" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              FAQ
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923] sm:text-5xl">
              Perguntas sobre terapia de casal.
            </h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, index) => (
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
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/75 bg-white/62 p-8 text-center shadow-[0_26px_80px_rgba(90,65,42,0.10)] backdrop-blur-xl sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
            Atendimento presencial e online
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923] sm:text-6xl">
            Agende uma consulta para terapia de casal.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#65584d] sm:text-lg">
            Atendimento em Brasília e online para casais que desejam compreender
            conflitos, fortalecer o diálogo e tomar decisões com mais clareza.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#3f332b] px-8 text-sm font-semibold text-white shadow-[0_20px_55px_rgba(63,51,43,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8b6b4b] sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={emailUrl}
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-[#d9cab8] bg-white/62 px-8 text-sm font-semibold text-[#46382e] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#b99a77] hover:bg-white sm:w-auto"
            >
              Email
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-[#d9cab8] bg-white/62 px-8 text-sm font-semibold text-[#46382e] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#b99a77] hover:bg-white sm:w-auto"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>
          <p className="mt-6 break-words text-sm text-[#7a6a5d]">{email}</p>
        </div>
      </section>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#4f5a3a] text-white shadow-[0_14px_34px_rgba(54,62,39,0.24)] ring-1 ring-white/45 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#434d32] hover:shadow-[0_18px_42px_rgba(54,62,39,0.28)]"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </main>
  );
}
