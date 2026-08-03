import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Star, MessageSquareReply } from "lucide-react";

export const Route = createFileRoute("/recenzii")({
  head: () => ({
    meta: [
      { title: "Recenzii oaspeți – Pensiunea Dona Sinaia (4,7/5)" },
      {
        name: "description",
        content:
          "157 de recenzii, scor 4,7/5. Citește experiențele reale ale oaspeților Pensiunii Dona din Sinaia și răspunsurile proprietarului la fiecare observație.",
      },
      { property: "og:title", content: "Recenzii oaspeți – Pensiunea Dona Sinaia" },
      {
        property: "og:description",
        content: "Scor 4,7/5 din 157 de recenzii verificate. Transparență totală.",
      },
    ],
    links: [{ rel: "canonical", href: "/recenzii" }],
  }),
  component: ReviewsPage,
});

type Review = {
  name: string;
  country: string;
  date: string;
  score: number;
  stars: number;
  title: string;
  text: string;
  reply?: string;
};

const SCORES = [
  ["Curățenie", 4.9],
  ["Confort", 4.8],
  ["Locație", 4.9],
  ["Personal", 5.0],
  ["Raport calitate-preț", 4.6],
  ["Wi-Fi", 4.7],
] as const;

const REVIEWS: Review[] = [
  {
    name: "Marian B.",
    country: "România",
    date: "Mai 2026",
    score: 10,
    stars: 5,
    title: "Ospitalitate deosebită",
    text: "Mulțumiri sincere Pensiunii Dona pentru ospitalitatea de care am avut parte. Camerele impecabile, gazde atente la fiecare detaliu, iar micul dejun a fost o surpriză plăcută.",
  },
  {
    name: "Aura N.",
    country: "România",
    date: "Aprilie 2026",
    score: 10,
    stars: 5,
    title: "Impecabil!",
    text: "Poziție excelentă, la câțiva pași de centru. Am petrecut două zile excelente și plecăm cu gândul de a reveni în iarnă.",
  },
  {
    name: "Klaus H.",
    country: "Germania",
    date: "Martie 2026",
    score: 9.6,
    stars: 5,
    title: "Sehr sauber, very quiet",
    text: "Foarte curat, liniște totală noaptea și parcare în curte. Peleș la 5 minute cu mașina. Recomand pentru cupluri.",
  },
  {
    name: "Familia Ionescu",
    country: "România",
    date: "Februarie 2026",
    score: 9.8,
    stars: 5,
    title: "Perfect pentru copii",
    text: "Mansarda de familie e foarte spațioasă, iar copiii s-au jucat în curte toată ziua. Gazdele ne-au împrumutat sănii fără să cerem.",
  },
  {
    name: "Andrei P.",
    country: "România",
    date: "Ianuarie 2026",
    score: 9.4,
    stars: 5,
    title: "Cald și primitor iarna",
    text: "Am venit la schi. Drumul deszăpezit, camera caldă, iar seara am stat la foișor cu grătarul. Exact ce căutam.",
  },
  {
    name: "Sophie L.",
    country: "Franța",
    date: "Decembrie 2025",
    score: 9.2,
    stars: 5,
    title: "Charmant et authentique",
    text: "Lemnul, căminul din living și micul dejun cu produse locale fac diferența față de un hotel standard.",
  },
  {
    name: "Cristina M.",
    country: "România",
    date: "Noiembrie 2025",
    score: 9.6,
    stars: 5,
    title: "Curățenie exemplară",
    text: "Lenjerie impecabilă, baie fără urmă de calcar, prosoape schimbate zilnic. Se vede că se lucrează cu grijă.",
  },
  {
    name: "Tudor & Ana",
    country: "România",
    date: "Octombrie 2025",
    score: 10,
    stars: 5,
    title: "Cea mai liniștită vacanță",
    text: "Zero zgomot, aer curat, cafea pe balcon cu vedere la pădure. Ne-am deconectat complet în trei zile.",
  },
  {
    name: "Grup Team Building",
    country: "România",
    date: "Septembrie 2025",
    score: 9.5,
    stars: 5,
    title: "Am închiriat toată pensiunea",
    text: "12 colegi, foișor rezervat pentru noi, grătar pregătit de gazde. Organizare fără nicio bătaie de cap.",
  },
  {
    name: "Radu V.",
    country: "România",
    date: "August 2025",
    score: 6.5,
    stars: 3,
    title: "Camera era prea rece dimineața",
    text: "Cazarea a fost bună, dar în prima dimineață camera a fost destul de rece și a durat până s-a încălzit.",
    reply:
      "Vă mulțumim pentru feedback. Între timp am înlocuit centrala și am instalat un sistem nou de încălzire, cu termostat individual în fiecare cameră: temperatura se atinge acum în mai puțin de 15 minute. Problema a fost complet rezolvată și v-am rezerva cu plăcere o noapte gratuită la următoarea vizită.",
  },
  {
    name: "Elena D.",
    country: "România",
    date: "Iulie 2025",
    score: 7,
    stars: 3,
    title: "Wi-Fi slab în mansardă",
    text: "Semnalul de internet nu ajungea bine la mansardă și am avut probleme la o ședință online.",
    reply:
      "Aveți dreptate și vă mulțumim că ne-ați semnalat. Am trecut pe fibră 300 Mbps și am montat două access point-uri Wi-Fi 6, inclusiv unul dedicat mansardei. Am testat cu videoconferințe: semnalul este acum stabil în toate camerele și în foișor.",
  },
  {
    name: "Mihai S.",
    country: "România",
    date: "Iunie 2025",
    score: 7.5,
    stars: 4,
    title: "Micul dejun servit prea târziu",
    text: "Voiam să plecăm dimineața pe traseu, dar micul dejun începea la ora 9.",
    reply:
      "Mulțumim pentru observație — a fost întemeiată. Am mutat programul micului dejun de la 8:00 la 10:30 și pregătim, la cerere, pachete pentru drumeție cu o seară înainte, fără cost suplimentar. Oaspeții care pleacă pe traseu la 6:00 primesc acum termos cu cafea.",
  },
  {
    name: "Ioana T.",
    country: "România",
    date: "Mai 2025",
    score: 7,
    stars: 3,
    title: "Parcarea era ocupată la sosire",
    text: "Am ajuns seara și locurile din curte erau luate, a trebuit să parchez pe stradă.",
    reply:
      "Ne pare sincer rău pentru neplăcere. Am reorganizat curtea și am marcat un loc numerotat pentru fiecare cameră, alocat automat la rezervare, plus două locuri suplimentare pentru oaspeții care sosesc târziu. Situația nu se mai poate repeta.",
  },
];

const positive = REVIEWS.filter((r) => !r.reply);
const critical = REVIEWS.filter((r) => r.reply);

function Stars({ n }: { n: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${n} din 5 stele`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={`size-4 ${i < n ? "fill-gold text-gold" : "text-border"}`}
        />
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden="true"
            className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary font-display text-lg text-primary"
          >
            {review.name.charAt(0)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{review.name}</p>
            <p className="text-xs text-muted-foreground">
              {review.country} · {review.date}
            </p>
          </div>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-xl rounded-tl-none bg-primary text-sm font-semibold text-primary-foreground">
          {review.score.toFixed(1)}
        </span>
      </div>
      <div className="mt-4">
        <Stars n={review.stars} />
        <h3 className="mt-2 font-display text-lg text-primary">{review.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{review.text}</p>
      </div>
      {review.reply && (
        <div className="mt-5 rounded-xl border-l-4 border-wood bg-secondary/60 p-4">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-wood">
            <MessageSquareReply className="size-4" aria-hidden="true" />
            Răspunsul proprietarului
          </p>
          <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">
            {review.reply}
          </p>
        </div>
      )}
    </div>
  );
}

function ReviewsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Recenzii verificate"
        title="4,7 / 5 din 157 de recenzii"
        intro="Publicăm tot: și laudele, și criticile. Sub fiecare observație critică vezi exact ce am schimbat, ca să nu se repete."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-soft lg:grid-cols-[auto_1fr] lg:p-8">
          <div className="flex items-center gap-5">
            <span className="grid size-24 place-items-center rounded-2xl bg-primary font-display text-3xl text-primary-foreground">
              4,7
            </span>
            <div>
              <p className="font-display text-2xl text-primary">Excelent</p>
              <Stars n={5} />
              <p className="mt-1 text-xs text-muted-foreground">157 de recenzii</p>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {SCORES.map(([label, value]) => (
              <li key={label}>
                <div className="flex items-center justify-between text-sm">
                  <span>{label}</span>
                  <span className="font-medium">{value.toFixed(1)}</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-[width] duration-700"
                    style={{ width: `${(value / 5) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="mt-14 font-display text-2xl text-primary rule-gold">
          Ce spun oaspeții noștri
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {positive.map((r, i) => (
            <Reveal as="li" key={r.name + r.date} delay={(i % 3) * 70}>
              <ReviewCard review={r} />
            </Reveal>
          ))}
        </ul>

        <h2 className="mt-16 font-display text-2xl text-primary rule-gold">
          Observații critice și ce am rezolvat
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Aproximativ 10% dintre oaspeți ne-au semnalat lucruri de îmbunătățit. Le păstrăm
          publice, împreună cu soluția aplicată.
        </p>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {critical.map((r, i) => (
            <Reveal as="li" key={r.name + r.date} delay={(i % 2) * 90}>
              <ReviewCard review={r} />
            </Reveal>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
