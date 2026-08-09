import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SectionTitle, SiteLayout, CONTACT } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { IMG, ROOMS } from "@/components/site/data";
import heroPhoto from "@/assets/hero.jpg";
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
  Footprints,
  Star,
  Check,
  Phone,
  MapPin,
  ArrowRight,
  Coffee,
  Droplets,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pensiunea Dona Sinaia | Cazare premium la 5 min de Peleș" },
      {
        name: "description",
        content:
          "Cazare în Sinaia cu 4,7/5 din 157 recenzii: camere elegante, foișor cu grătar, parcare gratuită în curte și mic dejun local. Rezervă direct, fără comision.",
      },
      {
        property: "og:title",
        content: "Pensiunea Dona Sinaia | Cazare premium la 5 min de Peleș",
      },
      {
        property: "og:description",
        content:
          "Liniște, lemn cald și aer de munte în Sinaia. Camere, facilități, recenzii reale și rezervare directă.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Pensiunea Dona",
          description:
            "Pensiune de 3 stele în Sinaia, cu camere elegante, foișor cu grătar, parcare gratuită și mic dejun local.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bulevardul Republicii 34A",
            postalCode: "106100",
            addressLocality: "Sinaia",
            addressCountry: "RO",
          },
          telephone: "+40731357323",
          starRating: { "@type": "Rating", ratingValue: "3" },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            reviewCount: "157",
          },
          priceRange: "320–520 RON",
        }),
      },
    ],
  }),
  component: Home,
});

const ADVANTAGES = [
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Car, label: "Parcare gratuită" },
  { icon: Flame, label: "Grătar" },
  { icon: TreePine, label: "Foișor" },
  { icon: UtensilsCrossed, label: "Bucătărie" },
  { icon: Coffee, label: "Cafea din partea casei" },
  { icon: Droplets, label: "Dozator de apă" },
  { icon: Dog, label: "Animale acceptate" },
  { icon: Baby, label: "Loc de joacă" },
  { icon: Mountain, label: "Natură" },
  { icon: Footprints, label: "Drumeții" },
  { icon: Wind, label: "Aer curat" },
  { icon: Star, label: "4,7 / 5" },
];

/** Efect de parallax discret pentru fotografia din hero. */
function useParallax() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(0, ${Math.min(window.scrollY * 0.18, 140)}px, 0) scale(1.06)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return ref;
}

const WHATSAPP_NUMBER = CONTACT.phoneHref.replace(/\D/g, "");

const WHATSAPP_QUICK_MESSAGE = `Bună ziua! Mă interesează o cazare la Pensiunea Dona din Sinaia și aș dori să primesc mai multe informații pentru a face o rezervare. Mulțumesc!`;

function BookingForm() {
  const [sent, setSent] = useState(false);
  const [childrenCount, setChildrenCount] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  const sendWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_QUICK_MESSAGE)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  return (
    <form
      ref={formRef}
      className="grid gap-5 rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        sendWhatsApp();
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="nume" label="Nume" />
        <Field id="prenume" label="Prenume" />
        <Field id="email" label="Email" />
        <Field id="telefon" label="Telefon" />
        <Field id="checkin" label="Data sosirii" type="date" />
        <Field id="checkout" label="Data plecării" type="date" />
        <div>
          <label htmlFor="adulti" className="text-sm font-medium">
            Număr adulți
          </label>
          <select
            id="adulti"
            name="adulti"
            className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm"
            defaultValue="2"
          >
            {Array.from({ length: 22 }, (_, n) => n + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "adult" : "adulti"}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="copii" className="text-sm font-medium">
            Număr copii
          </label>
          <select
            id="copii"
            name="copii"
            className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm"
            defaultValue="0"
            onChange={(e) => setChildrenCount(Number(e.target.value))}
          >
            {Array.from({ length: 21 }, (_, n) => n).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "copil" : "copii"}
              </option>
            ))}
          </select>
        </div>
        {childrenCount > 0 && (
          <div className="sm:col-span-2">
            <p className="mb-2 text-sm font-medium">Vârsta copiilor</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {Array.from({ length: childrenCount }, (_, i) => (
                <div key={i}>
                  <label htmlFor={`varsta-copil-${i + 1}`} className="text-xs text-muted-foreground">
                    Copil {i + 1} (ani)
                  </label>
                  <input
                    id={`varsta-copil-${i + 1}`}
                    name={`varsta-copil-${i + 1}`}
                    type="number"
                    min={0}
                    max={17}
                    placeholder="ex: 7"
                    className="mt-1 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <div>
          <label htmlFor="camera" className="text-sm font-medium">
            Tip cameră
          </label>
          <select
            id="camera"
            name="camera"
            className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm"
          >
            <option>Camera Dubla</option>
            <option>Camera Tripla</option>
            <option>Apartament</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mesaj" className="text-sm font-medium">
          Mesaj (opțional)
        </label>
        <textarea
          id="mesaj"
          name="mesaj"
          rows={4}
          placeholder="Sosire târzie, pătuț pentru copil, animal de companie, grătar pregătit..."
          className="mt-2 w-full rounded-xl border border-input bg-background p-4 text-sm"
        />
      </div>

      <button
        type="submit"
        className="h-13 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
      >
        Dă mesaj pe WhatsApp
      </button>

      <p aria-live="polite" className="text-sm">
        {sent ? (
          <span className="flex items-center gap-2 rounded-xl bg-secondary p-4 text-secondary-foreground">
            <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
            Cererea ta este pregătită — trimite-o din aplicația deschisă. Te contactăm în mai
            puțin de 2 ore (8:00–22:00).
          </span>
        ) : (
          <span className="block space-y-2 text-muted-foreground">
            <span className="block">
              Rezervarea nu se plătește online. Confirmăm disponibilitatea, apoi alegi metoda de
              plată: cash, card, card de vacanță sau plată la locație, după cum e convenabil. În
              anumite situații se poate solicita plata unui avans în cont, acesta fiind
              nerambursabil.
            </span>
            <span className="block text-xs">
              Tarifele includ TVA, nu includ micul dejun și taxele locale.
            </span>
          </span>
        )}
      </p>

    </form>
  );
}


function Field({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm"
      />
    </div>
  );
}

function Home() {
  const parallaxRef = useParallax();

  return (
    <SiteLayout>
      {/* HERO – ecran complet, fotografie cu parallax discret și overlay elegant */}
      <section className="relative flex min-h-dvh items-center overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
          <img
            src={heroPhoto}
            alt="Fațada Pensiunii Dona din Sinaia, cu parcare în curte și flori"
            width={1456}
            height={1092}
            fetchPriority="high"
            decoding="async"
            className="size-full object-cover"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-forest/75 via-forest/45 to-forest/85"
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <p className="text-xs uppercase tracking-[0.24em] text-white/80">
              Sinaia · Bulevardul Republicii
            </p>
            <h1 className="mt-5 font-display text-4xl leading-tight text-white sm:text-6xl">
              Pensiunea Dona
            </h1>
            <p className="mt-4 font-display text-xl text-white/90 sm:text-2xl">
              Liniștea muntelui, confortul unui hotel de oraș.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              Camere calde din lemn masiv, foișor cu grătar, parcare în curte și mic dejun cu
              produse locale — la cinci minute de Castelul Peleș și patru minute de
              telegondolă.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/"
                hash="rezervare"
                className="rounded-full bg-background px-7 py-4 text-sm font-medium text-primary shadow-lift transition-transform hover:-translate-y-1"
              >
                Rezervă acum
              </Link>
              <Link
                to="/galerie"
                className="rounded-full glass-dark px-7 py-4 text-sm font-medium text-white transition-transform hover:-translate-y-1"
              >
                Vezi fotografii
              </Link>
            </div>
            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-white/85">
              {[
                ["4,7 / 5", "157 recenzii"],
                ["900 m", "altitudine"],
                ["1,6 km", "până la Peleș"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl text-white">{value}</dt>
                  <dd className="text-xs uppercase tracking-wider">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* DESPRE NOI */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionTitle
              eyebrow="Cine suntem"
              title="O casă de familie, ținută la standard de hotel"
              subtitle="Pensiunea Dona este administrată de familia noastră, zi de zi, la fața locului. Nu suntem o recepție anonimă: îți deschidem noi poarta, îți spunem care traseu e cel mai frumos în ziua respectivă și pregătim grătarul înainte să ajungi."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Ce oferim:</strong> trei tipuri de spații —
              Camera Dubla, Camera Tripla și Apartament —
              toate cu baie proprie, lenjerie de bumbac, aer condiționat și încălzire cu
              termostat individual. Micul dejun se pregătește în casă, cu brânzeturi, miere și
              pâine din zonă.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">De ce să ne alegi:</strong> pentru că
              rezervând direct plătești cel mai bun preț, fără comisioane; pentru că nu ai
              costuri ascunse; și pentru că fiecare observație critică din recenzii a fost
              rezolvată, nu ștearsă.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Experiența pe care o oferim:</strong>{" "}
              dimineți cu cafea pe balcon și ceață în pădure, zile pe trasee sau la schi și
              seri lungi în foișor, cu grătarul aprins și liniște deplină după ora 22:00.
            </p>
            <Link
              to="/camere"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              Vezi camerele și prețurile <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { src: IMG.lounge, alt: "Living cu cămin din piatră" },
              { src: IMG.roomDouble, alt: "Cameră dublă deluxe" },
              { src: IMG.breakfast, alt: "Micul dejun servit pe terasă" },
              { src: IMG.courtyard, alt: "Foișorul cu grătar din curte" },
            ].map((img, i) => (
              <Reveal key={img.alt} delay={i * 90}>
                <figure className="overflow-hidden rounded-2xl shadow-soft lift">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={960}
                    className={`w-full object-cover transition-transform duration-700 hover:scale-[1.05] ${
                      i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
                    }`}
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AVANTAJE */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            center
            eyebrow="Totul inclus"
            title="Avantajele de care te bucuri"
            subtitle="Fără taxe surpriză la check-out. Tot ce vezi mai jos este inclus în tarif."
          />
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {ADVANTAGES.map((a, i) => (
              <Reveal as="li" key={a.label} delay={(i % 4) * 60}>
                <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card px-4 py-4 shadow-soft transition-colors hover:border-primary/40">
                  <a.icon className="size-5 shrink-0 text-wood" aria-hidden="true" />
                  <span className="min-w-0 text-sm font-medium">{a.label}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CAMERE – previzualizare */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionTitle
          eyebrow="Cazare"
          title="Alege spațiul potrivit"
          subtitle="Tarifele includ TVA, nu includ micul dejun și taxele locale."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {ROOMS.map((room, i) => (
            <Reveal as="li" key={room.name} delay={i * 90}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft lift">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={960}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-primary">{room.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {room.capacity}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {room.description}
                  </p>
                  <p className="mt-5 font-display text-lg text-wood">{room.price}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* REZERVARE – scroll lin din butoane, fără pagină nouă */}
      <section id="rezervare" className="scroll-mt-24 bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <SectionTitle
                eyebrow="Rezervare directă"
                title="Cel mai bun preț, direct de la gazde"
                subtitle="Completează formularul și primești confirmarea telefonic în mai puțin de 2 ore, între 8:00 și 22:00."
              />
              <ul className="mt-8 space-y-3 text-sm">
                {[
                  "Fără comision de platformă",
                  "Anulare gratuită până la 7 zile înainte",
                  "Parcare gratuită în curte",
                  "Cash, card, card de vacanță sau plată la locație",

                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-3 rounded-2xl border border-border bg-card p-5 text-sm shadow-soft">
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 font-medium text-primary"
                >
                  <Phone className="size-4" aria-hidden="true" /> {CONTACT.phone}
                </a>
                <p className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-wood" aria-hidden="true" />
                  {CONTACT.address}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <BookingForm />
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
