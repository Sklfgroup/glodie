import type { Metadata } from "next";
import Image from "next/image";
import type { IconType } from "react-icons";
import { FaWhatsapp } from "react-icons/fa6";
import {
  MdAccountTree,
  MdAlarmOn,
  MdCorporateFare,
  MdEdit,
  MdEngineering,
  MdEventAvailable,
  MdFlightTakeoff,
  MdFormatQuote,
  MdHomeWork,
  MdInventory2,
  MdRoute,
  MdStar,
  MdSupportAgent,
  MdTrackChanges,
  MdVerified,
} from "react-icons/md";
import ContactForm from "./components/contact-form";
import CopyableText from "./components/copyable-text";

export const metadata: Metadata = {
  title: "Transport et déménagement fiable et ponctuel",
  description:
    "GLODIEXPOTRANS accompagne vos besoins en transport et déménagement: tournées, navettes, prestations ponctuelles et logistique B2B.",
};

type CardItem = {
  icon: IconType;
  title: string;
  description: string;
};

const services: CardItem[] = [
  {
    icon: MdHomeWork,
    title: "Déménagement professionnel",
    description:
      "Solutions de transfert pour particuliers et entreprises avec soin et efficacité.",
  },
  {
    icon: MdRoute,
    title: "Tournées régulières",
    description:
      "Optimisation de vos trajets quotidiens avec des chauffeurs dédiés.",
  },
  {
    icon: MdCorporateFare,
    title: "Transport B2B",
    description:
      "Transport de marchandises personnalisé pour les professionnels exigeants.",
  },
  {
    icon: MdEventAvailable,
    title: "Prestations ponctuelles",
    description:
      "Renfort logistique et solutions de transport pour vos pics d'activité.",
  },
];

const commitments: CardItem[] = [
  {
    icon: MdAlarmOn,
    title: "Ponctualité",
    description: "Le respect strict des créneaux horaires est notre engagement n°1.",
  },
  {
    icon: MdAccountTree,
    title: "Organisation",
    description: "Une planification rigoureuse pour une logistique sans faille.",
  },
  {
    icon: MdTrackChanges,
    title: "Traçabilité",
    description: "Suivi en temps réel pour une visibilité totale sur vos flux.",
  },
  {
    icon: MdEngineering,
    title: "Entretien",
    description: "Une flotte moderne, révisée et parfaitement entretenue.",
  },
];

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "GLODIEXPOTRANS",
    url: "https://glodiexpotrans.com",
    image: "https://glodiexpotrans.com/image.jpg",
    telephone: "+33 7 49 71 50 14",
    email: "contact@glodiexpotrans.com",
    areaServed: ["Dreux", "Eure-et-Loir", "Île-de-France"],
    address: {
      "@type": "PostalAddress",
      postalCode: "28100",
      addressLocality: "Dreux",
      addressCountry: "FR",
    },
    offers: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  };

  return (
    <div className="text-[var(--color-text)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <header className="relative min-h-[88vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover"
            src="/image.jpg"
            alt="Camionnette logistique"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a4d92f2] via-[#0a4d92bf] to-[#0a4d9233]" />
        </div>

        <nav className="absolute inset-x-0 top-0 z-20 border-b border-white/15 bg-white/5 backdrop-blur-sm">
          <div className="container-shell flex items-center justify-between py-5">
            <div className="flex items-center gap-3 text-white">
              <div className="flex h-14 w-14 items-center justify-center">
                <Image src="/logo.png" alt="Logo GLODIEXPOTRANS" width={52} height={52} />
              </div>
              <div>
                <p className="text-2xl font-bold leading-none tracking-tight">
                  GLODI<span className="text-[var(--color-accent)]">EXPOTRANS</span>
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">
                  Expertise logistique
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-8 text-sm font-semibold text-white md:flex">
              <a className="transition-colors hover:text-[var(--color-accent)]" href="#services">
                Services
              </a>
              <a
                className="transition-colors hover:text-[var(--color-accent)]"
                href="#engagements"
              >
                Engagements
              </a>
              <a className="transition-colors hover:text-[var(--color-accent)]" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </nav>

        <div className="container-shell relative z-10 flex min-h-[88vh] items-center pb-20 pt-28">
          <div className="max-w-3xl text-white">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/35 bg-[var(--color-accent)]/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
              <MdFlightTakeoff className="text-base" />
              Basé à Dreux (28)
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Transport et déménagement
              <br />
              <span className="text-[var(--color-accent)]">fiable et ponctuel</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-white/90 sm:text-xl">
              Tournées, navettes, déménagement et transport B2B. Votre partenaire
              logistique de confiance, alliant rigueur, force et couverture régionale.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] px-8 py-4 text-lg font-bold text-[var(--color-secondary)] shadow-xl shadow-[var(--color-accent)]/20 transition-transform hover:scale-[1.02]"
              >
                Démarrer un projet
              </a>
              <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <MdVerified className="text-[22px] text-[var(--color-accent)]" />
                <div>
                  <p className="text-sm font-bold">Certifié et assuré</p>
                  <p className="text-xs text-white/65">Sérénité garantie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="sticky top-0 z-30 border-b-4 border-[var(--color-accent)] bg-white/95 shadow-xl backdrop-blur-md">
        <div className="container-shell flex flex-col items-center justify-between gap-5 py-4 md:flex-row">
          <div className="grid w-full grid-cols-2 gap-4 text-[var(--color-primary)] md:w-auto">
            <div className="flex min-w-0 items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-primary)]/10 md:h-11 md:w-11">
                <MdSupportAgent className="text-[22px] md:text-[28px]" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 md:text-[10px]">
                  Ligne directe
                </p>
                <a
                  href="tel:+33749715014"
                  className="break-words text-sm font-bold leading-tight hover:underline sm:text-lg md:text-2xl"
                >
                  +33 7 49 71 50 14
                </a>
              </div>
            </div>

            <div className="flex min-w-0 items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-primary)]/10 md:h-11 md:w-11">
                <FaWhatsapp className="text-[22px] md:text-[28px]" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 md:text-[10px]">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/33753473841"
                  target="_blank"
                  rel="noreferrer"
                  className="break-words text-sm font-bold leading-tight hover:underline sm:text-lg md:text-2xl"
                >
                  +33 7 53 47 38 41
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-3 md:w-auto">
            <a
              href="#contact"
              className="flex-1 rounded-full bg-[var(--color-primary)] px-6 py-3 text-center font-bold text-white transition-colors hover:bg-[var(--color-secondary)] md:flex-none"
            >
              Demander un devis
            </a>
            <a
              href="#contact"
              className="flex-1 rounded-full bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] px-6 py-3 text-center font-bold text-[var(--color-secondary)] md:flex-none"
            >
               Être rappelé
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden bg-[var(--color-paper)] py-24">
        <div className="container-shell grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/15 bg-[var(--color-primary)]/5 px-4 py-1.5 text-sm font-bold text-[var(--color-primary)]">
              <MdInventory2 className="text-base" />
              NOS SERVICES
            </p>
            <h2 className="mb-10 text-4xl font-bold leading-tight">
              Expertise logistique
              <br />
              <span className="text-[var(--color-primary)]">sur mesure</span>
            </h2>

            <div className="space-y-5">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group flex gap-5 rounded-2xl border border-slate-100 bg-white p-7 transition-all hover:border-[var(--color-primary)]/25 hover:shadow-xl hover:shadow-[var(--color-primary)]/10"
                >
                  {(() => {
                    const ServiceIcon = service.icon;
                    return (
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-2xl text-white transition-transform group-hover:scale-105">
                        <ServiceIcon className="text-[30px]" />
                  </div>
                    );
                  })()}
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-primary)]">{service.title}</h3>
                    <p className="mt-2 leading-relaxed text-[var(--color-muted)]">
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside
            id="engagements"
            className="relative self-start overflow-hidden rounded-[2.25rem] bg-[var(--color-primary)] p-10 text-white shadow-2xl md:p-12"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full border border-white/20" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full border border-white/15" />
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/20 px-4 py-1.5 text-sm font-bold text-[var(--color-accent)]">
              <MdStar className="text-base" />
              NOS ENGAGEMENTS
            </p>
            <h2 className="mb-10 break-words text-4xl font-bold leading-tight">
              Pourquoi choisir
              <br />
              GLODIEXPOTRANS ?
            </h2>

            <div className="grid gap-8 sm:grid-cols-2">
              {commitments.map((item) => (
                <article key={item.title}>
                  <div className="mb-3 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-xl">
                    {(() => {
                      const CommitmentIcon = item.icon;
                      return <CommitmentIcon className="text-[24px] text-[var(--color-accent)]" />;
                    })()}
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-[var(--color-accent)]/40 bg-[var(--color-accent)]/20 text-xl text-[var(--color-accent)]">
                <MdFormatQuote className="text-[24px]" />
              </div>
              <div>
                <p className="italic text-white/90">
                  &quot;Un partenaire essentiel à notre chaîne logistique et nos
                  déménagements.&quot;
                </p>
                <p className="mt-1 text-sm font-bold">Responsable logistique, Dreux (28)</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="contact" className="bg-slate-50 py-24">
        <div className="container-shell grid items-start gap-14 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="text-4xl font-bold text-[var(--color-primary)]">
                Proximité <span className="text-[var(--color-text)]">&amp;</span> Réactivité
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted)]">
                Basés à Dreux (28), nous couvrons le bassin eurélien et l&apos;Île-de-France
                pour vos transports et déménagements.
              </p>
            </div>

            <div className="relative h-[340px] overflow-hidden rounded-3xl border-8 border-white shadow-2xl">
              <iframe
                title="Carte - Dreux (28100)"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42091.64634769839!2d1.3581966227539022!3d48.748894374794986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e1551ee0688e79%3A0x40dc8d7053981f0!2s28100%20Dreux%2C%20France!5e0!3m2!1sfr!2scm!4v1771057867474!5m2!1sfr!2scm"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Adresse</p>
                <p className="mt-1 text-sm font-semibold">28100 Dreux, France</p>
              </article>
              <article className="min-w-0 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</p>
                <CopyableText
                  value="contact@glodiexpotrans.com"
                  copiedText="Copié !"
                  className="mt-1 truncate text-sm font-semibold"
                />
              </article>
            </div>
          </div>

          <div className="relative rounded-[2.25rem] border border-slate-100 bg-white p-8 shadow-2xl md:p-12 lg:col-span-3">
            <div className="absolute -right-5 -top-5 grid h-16 w-16 place-items-center rounded-full bg-[var(--color-accent)] text-3xl shadow-lg">
              <MdEdit className="text-[36px] text-[var(--color-secondary)]" />
            </div>
            <h3 className="mb-8 text-3xl font-bold text-[var(--color-primary)]">
              Discutons de vos besoins
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-[var(--color-secondary)] py-16 text-white">
        <div className="container-shell flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-3xl font-bold tracking-tight">
              GLODI<span className="text-[var(--color-accent)]">EXPOTRANS</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-white/60">
              Votre partenaire de confiance pour le transport et le déménagement à Dreux
              et ses environs.
            </p>
          </div>

          <div className="flex gap-6 text-sm font-semibold uppercase tracking-widest text-white/85">
            <a href="#services" className="transition-colors hover:text-[var(--color-accent)]">
              Services
            </a>
            <a
              href="#engagements"
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              Engagements
            </a>
            <a href="#contact" className="transition-colors hover:text-[var(--color-accent)]">
              Contact
            </a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs tracking-wide text-white/50">
          © 2026 GLODIEXPOTRANS. Mentions légales | Dreux (28)
        </p>
      </footer>
    </div>
  );
}
