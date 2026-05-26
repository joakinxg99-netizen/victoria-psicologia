import Image from "next/image";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Supervisão", href: "#supervisao" },
  { label: "Pesquisa", href: "#pesquisa" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const areas = [
  "Intervenção em crise",
  "Psicoterapia individual",
  "Casal & Família",
  "Supervisão clínica",
  "Saúde mental institucional",
  "Consultoria técnica",
];

const credentials = [
  "Psicóloga",
  "PhD & Pós-Doutora",
  "CRP 01/19626",
];

const faqs = [
  {
    question: "O atendimento pode ser realizado em espanhol?",
    answer:
      "Sim. Dra. Victoria realiza atendimento em Português e Español, oferecendo uma escuta clínica qualificada para pacientes bilíngues, brasileiros e estrangeiros.",
  },
  {
    question: "Atende pacientes fora do Brasil?",
    answer:
      "Sim. A prática contempla atendimentos nacionais e internacionais, especialmente por meio da modalidade online, com cuidado ético e humanizado.",
  },
  {
    question: "Como funciona o atendimento online?",
    answer:
      "O atendimento online é realizado em ambiente reservado e seguro, preservando sigilo, qualidade técnica e continuidade do acompanhamento psicológico.",
  },
  {
    question: "Como agendar um primeiro atendimento?",
    answer:
      "O primeiro contato pode ser feito por WhatsApp ou email para alinhar disponibilidade, modalidade de atendimento, idioma e encaminhamentos iniciais.",
  },
];

const whatsappUrl = "https://wa.me/556192868268";
const instagramUrl = "https://www.instagram.com/victoriagomezpsicologa/";
const email = "victoria.ayelen.gomez@gmail.com";

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

function LanguageToggle({ className = "" }: { className?: string }) {
  return (
    <div
      aria-label="Selecionar idioma"
      className={`inline-flex items-center rounded-full border border-[#e1d3c1] bg-white/46 p-1 text-[0.68rem] font-semibold tracking-[0.18em] text-[#7a6654] shadow-[0_10px_26px_rgba(86,62,40,0.045)] backdrop-blur-xl ${className}`}
    >
      <a
        href="?lang=pt"
        aria-current="page"
        className="rounded-full bg-[#3f332b] px-3 py-2 text-white shadow-[0_8px_18px_rgba(63,51,43,0.12)]"
      >
        PT
      </a>
      <span className="px-1 text-[#c4ad95]">|</span>
      <a
        href="?lang=es"
        className="rounded-full px-3 py-2 transition-colors duration-300 hover:bg-white/72 hover:text-[#3f332b]"
      >
        ES
      </a>
    </div>
  );
}

export default function Home() {
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
              Psicologia Clínica
            </span>
          </a>

          <div className="hidden items-center gap-7 rounded-full border border-white/70 bg-white/45 px-7 py-3 shadow-[0_14px_46px_rgba(96,70,45,0.06)] backdrop-blur-xl lg:flex">
            {navItems.map((item) => (
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
            <LanguageToggle />
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
              Agendar Consulta
            </a>
          </div>

          <div className="ml-auto mr-3 flex items-center gap-2 sm:hidden">
            <LanguageToggle className="scale-90" />
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
              <span className="sr-only">Abrir navegação</span>
              <span className="relative block h-3.5 w-5">
                <span className="absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 group-open:translate-y-[7px] group-open:rotate-45" />
                <span className="absolute left-0 top-[7px] h-px w-5 bg-current transition-opacity duration-300 group-open:opacity-0" />
                <span className="absolute bottom-0 left-0 h-px w-5 bg-current transition-transform duration-300 group-open:-translate-y-[7px] group-open:-rotate-45" />
              </span>
            </summary>
            <div className="absolute right-0 top-14 w-[min(82vw,21rem)] overflow-hidden rounded-3xl border border-white/75 bg-[#fffaf4]/92 p-3 shadow-[0_28px_80px_rgba(63,51,43,0.18)] backdrop-blur-2xl">
              <div className="grid gap-1">
                {navItems.map((item) => (
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
                Agendar pelo WhatsApp
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
            <div className="mb-5 inline-flex max-w-2xl items-center gap-3 rounded-2xl border border-[#e5d9c9] bg-white/62 px-4 py-2 text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-[#8b6b4b] shadow-[0_10px_24px_rgba(93,69,45,0.045)] backdrop-blur-xl sm:rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a8845d]" />
              <span className="hidden sm:inline">
                CRP 01/19626 • Brasil e Internacional • Português | Español
              </span>
              <span className="grid gap-0.5 sm:hidden">
                <span>CRP 01/19626 • Brasil e Internacional</span>
                <span>Português | Español</span>
              </span>
            </div>

            <h1 className="font-serif text-5xl font-medium leading-[0.98] tracking-normal text-[#302923] sm:text-6xl lg:text-7xl">
              Dra. Victoria A. Gómez
            </h1>

            <div className="mt-6 flex flex-wrap gap-3">
              {credentials.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#e5d9c9] bg-white/60 px-4 py-2 text-sm text-[#6f5b48] shadow-sm backdrop-blur-xl"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#65584d] sm:text-xl sm:leading-9">
              Atendimento psicológico com rigor clínico, escuta qualificada e
              abordagem humanizada para pessoas, casais e famílias, no Brasil
              e internacionalmente.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#3f332b] px-8 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(63,51,43,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7f654c] hover:shadow-[0_20px_48px_rgba(86,62,40,0.18)]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Agendar pelo WhatsApp
              </a>
              <a
                href="#sobre"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#d9cab8] bg-white/56 px-8 text-sm font-semibold text-[#46382e] shadow-[0_10px_26px_rgba(86,62,40,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b99a77] hover:bg-white"
              >
                Conhecer abordagem
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
                  alt="Retrato de Dra. Victoria A. Gómez"
                  width={920}
                  height={1120}
                  priority
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="aspect-[4/5] w-full scale-[1.08] object-cover object-[center_26%] saturate-[0.96]"
                />
              </div>
              <div className="absolute bottom-6 left-6 max-w-[16rem] rounded-full border border-white/45 bg-[#fffaf4]/38 px-4 py-2 shadow-[0_10px_28px_rgba(67,49,32,0.08)] backdrop-blur-xl">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#7f654c]">
                  Clínica • Ensino • Pesquisa
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
                alt="Dra. Victoria A. Gómez em retrato editorial"
                width={852}
                height={1280}
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="aspect-[4/5] w-full rounded-[1.55rem] object-cover object-[center_18%] saturate-[0.96]"
              />
            </div>
            <div className="absolute left-5 top-5 rounded-2xl border border-white/70 bg-white/72 px-5 py-4 text-sm text-[#6f5b48] shadow-[0_18px_48px_rgba(67,49,32,0.12)] backdrop-blur-2xl">
              <p className="font-serif text-xl text-[#352c25]">
                Português | Español
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#9a7654]">
                Brasil e Internacional
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pl-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              Sobre
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-medium leading-tight text-[#302923] sm:text-5xl">
              Uma prática clínica guiada por ciência, presença e precisão.
            </h2>
            <div className="mt-8 rounded-[1.75rem] border border-white/75 bg-white/62 p-8 shadow-[0_24px_70px_rgba(90,65,42,0.09)] backdrop-blur-xl sm:p-10">
              <p className="text-lg leading-9 text-[#65584d]">
                Dra. Victoria A. Gómez é psicóloga, PhD e pós-doutora, CRP
                01/19626. Sua trajetória integra clínica, docência
                universitária, supervisão profissional e produção de
                conhecimento, oferecendo um espaço de cuidado reservado,
                bilíngue e profundamente atento às singularidades de cada
                pessoa, casal ou família, no Brasil e internacionalmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="atuacao" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              Áreas de atuação
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923] sm:text-5xl">
              Cuidado especializado para momentos sensíveis.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, index) => (
              <article
                key={area}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/75 bg-white/60 p-7 shadow-[0_22px_65px_rgba(90,65,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_80px_rgba(90,65,42,0.13)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#b8946d] via-[#e5d4bd] to-transparent opacity-80" />
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#efe4d5] font-serif text-lg text-[#8b6b4b] transition-colors group-hover:bg-[#3f332b] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 font-serif text-2xl text-[#352c25]">
                  {area}
                </h3>
                <div className="mt-8 h-px w-full bg-gradient-to-r from-[#d8c2a3] to-transparent" />
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
                Supervisão
              </p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-5xl">
                Supervisão clínica para profissionais em desenvolvimento.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-9 text-[#eadfce]">
                Como professora universitária e supervisora, Dra. Victoria
                oferece acompanhamento qualificado para psicólogas e psicólogos
                que buscam ampliar repertório técnico, leitura clínica e
                segurança ética na prática profissional.
              </p>
              <div className="mt-10 grid gap-3 text-sm text-[#eadfce] sm:grid-cols-3">
                <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur-xl">
                  Leitura clínica
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur-xl">
                  Manejo ético
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur-xl">
                  Casos complexos
                </div>
              </div>
            </div>

            <div className="relative min-h-[28rem] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">
              <Image
                src="/victoria-chair.jpeg"
                alt="Dra. Victoria A. Gómez sentada em poltrona verde"
                width={852}
                height={1280}
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="h-full min-h-[28rem] w-full object-cover object-[center_18%] saturate-[0.94]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3f332b]/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#3f332b]/22 lg:via-transparent lg:to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/18 bg-[#fffaf4]/12 p-5 text-[#f8efe4] shadow-[0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
                <p className="text-xs uppercase tracking-[0.24em] text-[#e5d4bd]">
                  Supervisão • Cuidado • Formação
                </p>
                <p className="mt-2 font-serif text-2xl">
                  Uma presença clínica para sustentar decisões sensíveis.
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
              Pesquisa
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923]">
              Produção acadêmica com impacto humano.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#65584d]">
              Atuação em pesquisa, formação e discussão científica, conectando
              conhecimento avançado às necessidades concretas de cuidado,
              prevenção e intervenção.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-white/75 bg-white/60 p-8 shadow-[0_24px_70px_rgba(90,65,42,0.09)] backdrop-blur-xl sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
              Consultoria
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923]">
              Consultoria técnica para contextos complexos.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#65584d]">
              Apoio especializado para equipes, instituições e projetos que
              demandam leitura psicológica qualificada, especialmente em crise,
              família, vínculo e cuidado.
            </p>
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
              Perguntas frequentes antes do primeiro contato.
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
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7654]">
            Contato
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#302923] sm:text-6xl">
            Um primeiro contato pode ser simples, discreto e acolhedor.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#3f332b] px-8 text-sm font-semibold text-white shadow-[0_20px_55px_rgba(63,51,43,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8b6b4b] sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chamar no WhatsApp
            </a>
            <a
              href={`mailto:${email}`}
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
            <p className="mt-2">Psicóloga • PhD & Pós-Doutora</p>
            <p className="mt-1 font-semibold text-[#5f4e42]">CRP 01/19626</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7654]">
              Contato
            </p>
            <a
              href={`mailto:${email}`}
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
              WhatsApp
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
              Atendimento
            </p>
            <p>Online e Presencial</p>
            <p>Brasil e Internacional</p>
            <p>Português | Español</p>
          </div>
        </div>
      </footer>

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
