import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, SectionTitle, SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  Heart,
  Users,
  Briefcase,
  Leaf,
  
  Fish,
  Camera,
  Moon,
  Baby,
  ChevronDown,
} from "lucide-react";

const FAQ: Array<[string, string]> = [
  [
    "Merită prețul?",
    "Da, și îți spunem exact de ce: tariful include parcarea în curte, accesul la foișor și grătar, bucătăria utilată, cafea din partea casei, dozator de apă și Wi-Fi. Tarifele includ TVA, dar nu includ micul dejun și taxele locale. La un hotel din Sinaia, aceleași servicii ajung cu 25–35% mai scump. În plus, rezervând direct pe site nu plătești comisionul platformelor.",
  ],
  [
    "Este frig iarna?",
    "Nu. Am înlocuit centrala și fiecare cameră are termostat individual; temperatura ajunge la 23°C în mai puțin de 15 minute. Geamurile sunt tripan, iar mansarda este izolată suplimentar.",
  ],
  [
    "Cum este drumul până la pensiune?",
    "Complet asfaltat, direct pe Bulevardul Republicii, la 400 m de centru. Nu ai nevoie de mașină 4x4 nici iarna — deszăpezirea se face zilnic, inclusiv în curte.",
  ],
  [
    "Există magazine în apropiere?",
    "Da. Supermarket la 400 m (5 minute de mers), farmacie la 500 m, bancomat și magazine mici pe drum. Pentru cumpărături mari, hipermarket la 4 km.",
  ],
  [
    "Există internet și este stabil?",
    "Fibră optică 300 Mbps, cu două access point-uri Wi-Fi 6. Funcționează în camere, în living și în foișor. Poți lucra remote sau ține ședințe video fără probleme.",
  ],
  [
    "Animalele de companie sunt acceptate?",
    "Da, la cerere, în camerele de la parter. Fără taxă suplimentară pentru animale mici și medii; te rugăm doar să ne anunți la rezervare ca să pregătim camera potrivită.",
  ],
  [
    "Există loc de parcare?",
    "Da, parcare gratuită în curte, cu poartă și supraveghere video. Fiecare cameră are un loc numerotat, alocat automat la rezervare.",
  ],
  [
    "Copiii sunt bineveniți?",
    "Absolut. Avem Camera Triplă, pătuț la cerere, scaun de masă, loc de joacă în curte și curte închisă, fără acces la stradă.",
  ],
  [
    "Există bucătărie pentru oaspeți?",
    "Da, o bucătărie complet utilată (plită, cuptor, frigider, microunde, vase și tacâmuri). Apartamentul are chicinetă proprie.",
  ],
  [
    "Există grătar?",
    "Da, grătar mare în foișor, disponibil gratuit. Îl pregătim noi înainte de sosire dacă ne anunți.",
  ],
  [
    "Există foișor?",
    "Da, foișor acoperit cu mese pentru până la 16 persoane, cu iluminat ambiental — se poate folosi și pe ploaie.",
  ],
  [
    "Ce activități există în zonă?",
    "Drumeții pe trasee marcate, schi la Cota 1400 și 2000, telegondolă, parc de aventură, ATV, ciclism montan, vizite la Castelul Peleș și Mănăstirea Sinaia.",
  ],
  [
    "Care este programul de check-in și check-out?",
    "Check-in de la 14:00, check-out până la 11:00. Sosirile târzii (după 22:00) sunt acceptate dacă ne anunți — te așteptăm.",
  ],
  [
    "Micul dejun este inclus în tarif?",
    "Nu, tarifele includ TVA, dar nu includ micul dejun și taxele locale. Micul dejun se poate solicita separat și se servește între 8:00 și 10:30, cu produse locale: brânzeturi, miere, gem de casă, ouă proaspete, pâine coaptă zilnic.",

  ],
  [
    "Se poate anula rezervarea?",
    "Da, gratuit până la 7 zile înainte de sosire. Între 7 și 3 zile se reține 30%. Pentru situații neprevăzute (boală, vreme extremă) găsim mereu o soluție, inclusiv reprogramare.",
  ],
  [
    "Camerele au baie proprie?",
    "Fiecare cameră are baie proprie, cu duș sau cadă, prosoape, uscător de păr și produse de igienă.",
  ],
  [
    "Se aude zgomot din stradă sau din alte camere?",
    "Nu. Clădirea este retrasă de la stradă, cu geamuri tripan, iar pereții au izolație fonică. Liniștea este cel mai lăudat aspect în recenzii.",
  ],
  [
    "Cum pot plăti cazarea?",
    "Acceptăm cash, card, card de vacanță și plată la locație. Rezervarea nu se plătește online — confirmăm disponibilitatea telefonic, apoi alegi metoda care ți se potrivește. În anumite situații se poate solicita plata unui avans în cont, acesta fiind nerambursabil.",
  ],
  [
    "Este potrivit pentru grupuri sau team building?",
    "Da. Se poate închiria integral pensiunea, cu foișor rezervat pentru grup și meniuri organizate la cerere. Am gazduit deja grupuri de 12–16 persoane.",
  ],
  [
    "Aveți fumat / spații pentru fumători?",
    "Camerele sunt nefumător. Există o zonă amenajată pentru fumat în curte, lângă foișor.",
  ],
  [
    "Ce se întâmplă dacă apare o problemă în cameră?",
    "Suntem la fața locului. Orice problemă semnalată se rezolvă în aceeași zi, iar dacă nu putem remedia imediat, mutăm oaspetele într-o cameră superioară fără cost.",
  ],
  [
    "Aveți piscină?",
    "Nu avem piscină proprie, dar oaspeții primesc acces la un centru spa cu piscină la 1,5 km, cu tarif preferențial negociat de noi.",
  ],
];

export const Route = createFileRoute("/pentru-cine")({
  head: () => ({
    meta: [
      { title: "Pentru cine este Pensiunea Dona + 22 întrebări frecvente" },
      {
        name: "description",
        content:
          "Familii, cupluri, grupuri, team building, motocicliști, pescari și fotografi. Plus 22 de întrebări frecvente cu răspunsuri complete despre cazarea în Sinaia.",
      },
      { property: "og:title", content: "Pentru cine este Pensiunea Dona + FAQ" },
      {
        property: "og:description",
        content: "Clientul ideal și răspunsuri clare la orice întrebare înainte de rezervare.",
      },
    ],
    links: [{ rel: "canonical", href: "/pentru-cine" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
    ],
  }),
  component: AudiencePage,
});

const AUDIENCES = [
  {
    icon: Users,
    title: "Familii cu copii",
    text: "Mansardă spațioasă, pătuț la cerere, loc de joacă și curte închisă. Bucătăria e la dispoziție pentru mesele copiilor.",
  },
  {
    icon: Heart,
    title: "Cupluri",
    text: "Cameră dublă cu vedere la pădure, liniște garantată și micul dejun servit pe terasă.",
  },
  {
    icon: Briefcase,
    title: "Grupuri & team building",
    text: "Se poate închiria integral pensiunea: foișor rezervat si grătar pregătit.",
  },
  {
    icon: Leaf,
    title: "Iubitori de natură",
    text: "Pădure de conifere la 200 m, trasee marcate la 10 minute de mers și aer curat la 900 m altitudine.",
  },

  {
    icon: Fish,
    title: "Pescari",
    text: "Lacurile Bolboci și Scropoasa la mai puțin de o oră; frigider dedicat și acces la bucătărie la orice oră.",
  },
  {
    icon: Camera,
    title: "Fotografi",
    text: "Răsărituri peste Bucegi, Castelul Peleș la 5 minute și ceață de dimineață în pădure — mic dejun devansat la cerere.",
  },
  {
    icon: Moon,
    title: "Cei care caută liniște",
    text: "Fără petreceri, fără zgomot după 22:00. Izolație fonică și clădire retrasă de la stradă.",
  },
  {
    icon: Baby,
    title: "Bunici și familii extinse",
    text: "Camere la parter, fără scări, acces ușor și mese lungi în foișor pentru toată familia.",
  },
];

function AudiencePage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Clientul ideal"
        title="Pentru cine am construit Pensiunea Dona"
        intro="Nu suntem pentru toată lumea — și e în regulă. Iată cui i se potrivește perfect ce oferim, ca să știi din prima dacă e locul tău."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <Reveal as="li" key={a.title} delay={(i % 3) * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft lift">
                <a.icon className="size-6 text-wood" aria-hidden="true" />
                <h2 className="mt-4 font-display text-xl text-primary">{a.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="Întrebări frecvente"
            title="Răspundem la orice ezitare"
            subtitle="22 de întrebări reale primite de la oaspeți, cu răspunsuri complete și fără ambiguități."
          />
          <ul className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            {FAQ.map(([q, a], i) => (
              <li key={q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left text-sm font-medium transition-colors hover:bg-secondary/50"
                  >
                    <span className="min-w-0 flex-1">{q}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-4 shrink-0 text-primary transition-transform duration-300 ${
                        open === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  hidden={open !== i}
                  className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground"
                >
                  {a}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl bg-primary p-8 text-center">
            <h2 className="font-display text-2xl text-primary-foreground">
              Mai ai o întrebare?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/80">
              Scrie-ne în formularul de rezervare — răspundem în mai puțin de 2 ore, între
              8:00 și 22:00.
            </p>
            <Link
              to="/"
              hash="rezervare"
              className="mt-6 inline-flex rounded-full bg-background px-6 py-3 text-sm font-medium text-primary shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Mergi la rezervare
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
