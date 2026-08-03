import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SectionTitle, SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/components/site/data";
import { MapPin, Mountain, Utensils, Waves, Church, Snowflake, Footprints } from "lucide-react";

export const Route = createFileRoute("/zona")({
  head: () => ({
    meta: [
      { title: "Despre zonă – ce vizitezi în Sinaia | Pensiunea Dona" },
      {
        name: "description",
        content:
          "Castelul Peleș, Mănăstirea Sinaia, telecabina Cota 1400, Cascada Urlătoarea, pârtii și trasee de drumeție — toate distanțele reale de la Pensiunea Dona.",
      },
      { property: "og:title", content: "Despre zonă – ce vizitezi în Sinaia" },
      {
        property: "og:description",
        content: "Obiective turistice, restaurante, pârtii, lacuri și cascade lângă Pensiunea Dona.",
      },
    ],
    links: [{ rel: "canonical", href: "/zona" }],
  }),
  component: AreaPage,
});

const GROUPS = [
  {
    icon: Church,
    title: "Obiective turistice",
    items: [
      ["Castelul Peleș", "1,6 km · 5 min cu mașina"],
      ["Castelul Pelișor", "1,8 km · 6 min"],
      ["Mănăstirea Sinaia", "1,2 km · 15 min de mers"],
      ["Muzeul Rezervației Bucegi", "900 m · 11 min de mers"],
      ["Casino Sinaia", "1,1 km · 13 min de mers"],
    ],
  },
  {
    icon: Utensils,
    title: "Restaurante & cafenele",
    items: [
      ["Restaurant tradițional pe Bd. Carol I", "600 m · 8 min de mers"],
      ["Braserie cu terasă în centru", "850 m · 10 min"],
      ["Cofetărie artizanală", "700 m · 9 min"],
      ["Supermarket și magazine", "400 m · 5 min"],
    ],
  },
  {
    icon: Snowflake,
    title: "Pârtii & schi",
    items: [
      ["Telegondola Sinaia (stație)", "1,3 km · 4 min cu mașina"],
      ["Pârtia Cota 1400", "5 km cu telegondola"],
      ["Pârtia Valea Dorului", "Cota 2000"],
      ["Centru de închiriere echipament", "1,2 km"],
    ],
  },
  {
    icon: Footprints,
    title: "Drumeții",
    items: [
      ["Traseu Jepii Mici", "Start la 1,5 km"],
      ["Poiana Stânii", "2,5 km · traseu ușor"],
      ["Vârful Furnica", "Traseu mediu, 4–5 h"],
      ["Piatra Arsă", "Traseu de creastă"],
    ],
  },
  {
    icon: Waves,
    title: "Lacuri & cascade",
    items: [
      ["Cascada Urlătoarea", "9 km · 15 min cu mașina"],
      ["Lacul Bolboci", "38 km · 55 min"],
      ["Lacul Scropoasa", "42 km"],
      ["Cheile Zănoagei", "40 km"],
    ],
  },
  {
    icon: Mountain,
    title: "Activități",
    items: [
      ["Parc de aventură", "3 km"],
      ["Tiroliană și ATV", "6 km"],
      ["Ciclism montan", "Trasee din fața pensiunii"],
      ["Spa & piscine hoteliere partenere", "1,5 km"],
    ],
  },
];

function AreaPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Despre zonă"
        title="Sinaia, la câțiva pași de poarta pensiunii"
        intro="Suntem pe Bulevardul Republicii, la 5 minute de Castelul Peleș și la 4 minute de telegondolă. Poți lăsa mașina în curte și explora orașul pe jos."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <figure className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={IMG.area}
                alt="Castelul Peleș înconjurat de pădurea de toamnă din Sinaia"
                loading="lazy"
                decoding="async"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <SectionTitle
              eyebrow="Perla Carpaților"
              title="Un oraș de munte cu istorie regală"
              subtitle="Sinaia are aerul unei stațiuni europene de altă epocă: alei umbrite, arhitectură de secol XIX, păduri de conifere și munții Bucegi ca fundal permanent."
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Vara, orașul este punctul de plecare pentru zeci de trasee marcate. Iarna, ai
              acces rapid la domeniul schiabil de la Cota 1400 și Cota 2000. Primăvara și
              toamna sunt cele mai liniștite perioade — și cele mai frumoase pentru
              fotografie.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft lift">
                <group.icon className="size-6 text-wood" aria-hidden="true" />
                <h2 className="mt-4 font-display text-xl text-primary">{group.title}</h2>
                <ul className="mt-4 space-y-3">
                  {group.items.map(([name, dist]) => (
                    <li key={name} className="flex items-start justify-between gap-3 text-sm">
                      <span className="min-w-0">{name}</span>
                      <span className="shrink-0 text-xs text-muted-foreground">{dist}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="Locație"
            title="Ne găsești ușor"
            subtitle="Bulevardul Republicii 34A, 106100 Sinaia. Acces asfaltat până în curte, în orice sezon."
          />
          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-wood" aria-hidden="true" />
            Drumul este practicabil și iarna; deszăpezirea se face zilnic.
          </div>
          <div className="mt-6 overflow-hidden rounded-3xl border border-border shadow-lift">
            <iframe
              title="Harta Pensiunea Dona, Sinaia"
              src="https://www.google.com/maps?q=Bulevardul%20Republicii%2034A%2C%20Sinaia&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
