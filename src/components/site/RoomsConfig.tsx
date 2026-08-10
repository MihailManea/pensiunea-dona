import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SiteLayout";
import {
  BedDouble,
  Bed,
  Sofa,
  Bath,
  Sun,
  X,
  Wifi,
  Thermometer,
  Tv,
  Refrigerator,
  Wind,
  Clock,
  Baby,
  Users,
} from "lucide-react";

const STANDARD = [
  { icon: Bath, label: "Baie proprie" },
  { icon: Thermometer, label: "Încălzire centrală" },
  { icon: Tv, label: "TV" },
  { icon: Refrigerator, label: "Mini-frigider" },
  { icon: Wind, label: "Uscător de păr" },
  { icon: Wifi, label: "Wi-Fi gratuit" },
];

type Room = {
  nr: string;
  type: string;
  beds: { icon: typeof Bed; label: string }[];
  balcony: boolean;
  capacity: string;
};

const CONFIG: Room[] = [
  {
    nr: "Camera 2",
    type: "Cameră dublă",
    beds: [{ icon: BedDouble, label: "Pat matrimonial" }],
    balcony: true,
    capacity: "2 adulți + 1 copil (max. 10 ani)",
  },
  {
    nr: "Camera 3",
    type: "Cameră triplă",
    beds: [
      { icon: BedDouble, label: "Pat matrimonial" },
      { icon: Bed, label: "Pat de o persoană" },
    ],
    balcony: true,
    capacity: "2 adulți + 2 copii sau 3 adulți + 1 copil (max. 10 ani)",
  },
  {
    nr: "Camera 4",
    type: "Cameră dublă",
    beds: [{ icon: BedDouble, label: "Pat matrimonial" }],
    balcony: false,
    capacity: "2 adulți + 1 copil (max. 10 ani)",
  },
  {
    nr: "Camera 5",
    type: "Cameră dublă",
    beds: [{ icon: BedDouble, label: "Pat matrimonial" }],
    balcony: true,
    capacity: "2 adulți + 1 copil (max. 10 ani)",
  },
  {
    nr: "Camera 6",
    type: "Cameră dublă",
    beds: [{ icon: BedDouble, label: "Pat matrimonial" }],
    balcony: false,
    capacity: "2 adulți + 1 copil (max. 10 ani)",
  },
  {
    nr: "Camera 7",
    type: "Apartament, 5 locuri (3 camere)",
    beds: [
      { icon: BedDouble, label: "Cameră cu pat matrimonial" },
      { icon: Sofa, label: "Canapea extensibilă 2 persoane" },
      { icon: Bed, label: "Cameră cu pat single" },
    ],
    balcony: false,
    capacity: "4 adulți + 2 copii (max. 10 ani)",
  },
  {
    nr: "Camera 8",
    type: "Cameră dublă",
    beds: [{ icon: BedDouble, label: "Pat matrimonial" }],
    balcony: false,
    capacity: "2 adulți + 1 copil (max. 10 ani)",
  },
];

const RULES = [
  { icon: Clock, label: "Check-in de la 14:00", note: "Check-out până la ora 11:00" },
  { icon: Baby, label: "Copiii sunt bineveniți", note: "Gratuitate la cazare până la 7 ani" },
  {
    icon: Users,
    label: "Pat suplimentar",
    note: "Pentru copii peste 7 ani sau adulți se poate aplica un cost suplimentar",
  },
];

export function RoomsConfig() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionTitle
        eyebrow="Configurația camerelor"
        title="Camerele Pensiunii Dona, în detaliu"
        subtitle="Cazare confortabilă în Sinaia, în camere potrivite pentru cupluri, familii și grupuri mici: camere duble, o cameră triplă și un apartament, toate cu baie proprie și dotări esențiale pentru un sejur relaxant la munte."
      />

      <Reveal>
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {STANDARD.map((s) => (
            <li
              key={s.label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
            >
              <s.icon className="size-4 text-primary" aria-hidden="true" />
              {s.label}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-4 text-sm text-muted-foreground">
          Unele camere dispun și de balcon, oferind un plus de confort pentru oaspeții care doresc
          să se bucure de aerul montan din Sinaia.
        </p>
      </Reveal>

      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CONFIG.map((room, i) => (
          <Reveal as="li" key={room.nr} delay={(i % 3) * 80}>
            <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl text-primary">{room.nr}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{room.type}</p>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                    room.balcony
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {room.balcony ? (
                    <Sun className="size-3.5" aria-hidden="true" />
                  ) : (
                    <X className="size-3.5" aria-hidden="true" />
                  )}
                  {room.balcony ? "Balcon" : "Fără balcon"}
                </span>
              </div>

              <ul className="mt-5 space-y-2">
                {room.beds.map((b) => (
                  <li key={b.label} className="flex items-center gap-2 text-sm">
                    <b.icon className="size-4 shrink-0 text-wood" aria-hidden="true" />
                    <span>{b.label}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2 text-sm">
                  <Bath className="size-4 shrink-0 text-wood" aria-hidden="true" />
                  <span>Baie proprie</span>
                </li>
              </ul>

              <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                {room.capacity}
              </p>
              <span className="mt-4 block h-0.5 w-0 rounded-full bg-primary transition-all duration-500 group-hover:w-16" />
            </div>
          </Reveal>
        ))}
      </ol>

      <ul className="mt-12 grid gap-4 sm:grid-cols-3">
        {RULES.map((r, i) => (
          <Reveal as="li" key={r.label} delay={i * 80}>
            <div className="h-full rounded-2xl border border-border bg-secondary/40 p-5">
              <r.icon className="size-6 text-wood" aria-hidden="true" />
              <h3 className="mt-3 text-base font-semibold">{r.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.note}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={120}>
        <p className="mt-6 text-xs text-muted-foreground">
          Condițiile exacte, disponibilitatea camerelor și eventualele cerințe speciale se confirmă
          telefonic sau prin WhatsApp.
        </p>
      </Reveal>
    </section>
  );
}
