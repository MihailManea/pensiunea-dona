import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Phone, MapPin, Mail } from "lucide-react";

const NAV = [
  { to: "/", label: "Acasă" },
  { to: "/galerie", label: "Galerie" },
  { to: "/camere", label: "Camere" },
  { to: "/zona", label: "Despre zonă" },
  { to: "/recenzii", label: "Recenzii" },
  { to: "/pentru-cine", label: "Pentru cine & FAQ" },
];

export const CONTACT = {
  name: "Pensiunea Dona",
  phone: "0731 357 323",
  phoneHref: "tel:+40731357323",
  email: "rezervari@pensiuneadona.ro",
  address: "Bulevardul Republicii 34A, 106100 Sinaia",
};

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-soft py-2" : "py-4"
      }`}
    >
      <nav
        aria-label="Navigare principală"
        className="mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6"
      >
        <Link to="/" className="min-w-0 shrink-0 leading-none">
          <span className="block font-display text-lg font-semibold tracking-tight text-primary sm:text-xl">
            Pensiunea Dona
          </span>
          <span className="eyebrow block text-[0.6rem]">Sinaia · Carpați</span>
        </Link>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/"
          hash="rezervare"
          className="ml-auto hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift lg:ml-4 lg:inline-flex"
        >
          Rezervă acum
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          className="ml-auto inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="glass mx-4 mt-3 rounded-2xl p-3 lg:hidden">
          <ul className="grid gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/"
                hash="rezervare"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                Rezervă acum
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="font-display text-2xl text-primary">Pensiunea Dona</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Confort discret, liniște și aer de munte, la câțiva pași de Castelul Peleș și
            de pârtiile din Sinaia.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-wood" aria-hidden="true" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-wood" aria-hidden="true" />
              <a className="hover:text-primary" href={CONTACT.phoneHref}>
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-wood" aria-hidden="true" />
              <a className="hover:text-primary" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground">Pagini</h3>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link className="hover:text-primary" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70 px-4 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pensiunea Dona, Sinaia. Toate drepturile rezervate.
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Sari la conținut
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}

/** Titlu de secțiune reutilizabil. */
export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`mt-3 font-display text-3xl text-primary sm:text-4xl ${
          center ? "" : "rule-gold"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

/** Antet standard pentru paginile interioare. */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="bg-secondary/40 pb-14 pt-32 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-primary sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {intro}
        </p>
      </div>
    </section>
  );
}
