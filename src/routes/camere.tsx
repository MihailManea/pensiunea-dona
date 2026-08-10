import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, SectionTitle, SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ROOMS } from "@/components/site/data";
import { RoomsConfig } from "@/components/site/RoomsConfig";

import {
  Wifi,
  Car,
  Flame,
  TreePine,
  UtensilsCrossed,
  Dog,
  Baby,
  Mountain,
  Wind,
  Coffee,
  Droplets,
  Check,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/camere")({
  head: () => ({
    meta: [
      { title: "Camere și facilități – Pensiunea Dona Sinaia" },
      {
        name: "description",
        content:
          "Camere duble, cameră triplă și apartament în Sinaia. Baie proprie, balcon, TV smart, aer condiționat, Wi-Fi fibră. Prețuri transparente.",
      },
      { property: "og:title", content: "Camere și facilități – Pensiunea Dona Sinaia" },
      {
        property: "og:description",
        content: "Vezi camerele, dotările și prețurile Pensiunii Dona din Sinaia.",
      },
    ],
    links: [{ rel: "canonical", href: "/camere" }],
  }),
  component: RoomsPage,
});

const FACILITIES = [
  { icon: Wifi, label: "Wi-Fi fibră 300 Mbps", note: "În toate camerele și spațiile comune" },
  { icon: Car, label: "Parcare gratuită", note: "În curte, cu poartă, supravegheată video" },
  { icon: Flame, label: "Grătar", note: "Grătar mare, disponibil oaspeților fără cost" },
  { icon: TreePine, label: "Foișor", note: "Acoperit, cu mese pentru până la 16 persoane" },
  { icon: UtensilsCrossed, label: "Bucătărie utilată", note: "Plită, cuptor, frigider, vase" },
  { icon: Coffee, label: "Cafea din partea casei", note: "Disponibilă gratuit pentru oaspeți" },
  { icon: Droplets, label: "Dozator de apă", note: "Apă rece/caldă în zona comună" },
  { icon: Baby, label: "Loc de joacă", note: "Leagăne și zonă de iarbă sigură" },
  { icon: Dog, label: "Animale acceptate", note: "La cerere, în camerele de la parter" },
  { icon: Mountain, label: "Drumeții", note: "Trasee marcate la 10 minute de mers" },
  { icon: Wind, label: "Aer curat", note: "900 m altitudine, pădure de conifere" },
];

function RoomsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Camere & facilități"
        title="Trei tipuri de spații, un singur standard: impecabil"
        intro="Fiecare cameră are baie proprie, lenjerie de bumbac, curățenie verificată de două ori și dotări complete. Prețurile includ taxele locale și micul dejun."
      />

      <section className="mx-auto max-w-7xl space-y-14 px-4 py-16 sm:px-6">
        {ROOMS.map((room, i) => (
          <Reveal as="article" key={room.name}>
            <div
              className={`grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-soft lg:grid-cols-2 lg:p-6 ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="overflow-hidden rounded-2xl">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={960}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </figure>
              <div className="px-2 pb-4 lg:px-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-2xl text-primary sm:text-3xl">
                    {room.name}
                  </h2>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    <Users className="size-3.5" aria-hidden="true" /> {room.capacity}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {room.description}
                </p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <p className="font-display text-xl text-wood">{room.price}</p>
                  <Link
                    to="/"
                    hash="rezervare"
                    className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    Verifică disponibilitatea
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <RoomsConfig />


      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="Incluse pentru toți oaspeții"
            title="Facilități generale"
            subtitle="Fără costuri ascunse și fără supraplată la check-out."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((f, i) => (
              <Reveal as="li" key={f.label} delay={(i % 3) * 70}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-soft lift">
                  <f.icon className="size-6 text-wood" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-semibold">{f.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.note}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
