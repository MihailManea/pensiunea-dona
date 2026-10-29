import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { findUnit } from "@/components/site/data";
import { ArrowLeft, Check, Users } from "lucide-react";

export const Route = createFileRoute("/camere_/$unit")({
  loader: ({ params }) => {
    const found = findUnit(params.unit);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.unit.name} – ${loaderData.room.name} | Pensiunea Dona Sinaia`
          : "Cameră | Pensiunea Dona Sinaia",
      },
      {
        name: "description",
        content: loaderData
          ? `${loaderData.unit.name} la Pensiunea Dona din Sinaia: ${loaderData.room.description}`
          : "Cameră la Pensiunea Dona din Sinaia.",
      },
      {
        property: "og:title",
        content: loaderData
          ? `${loaderData.unit.name} – ${loaderData.room.name} | Pensiunea Dona Sinaia`
          : "Cameră | Pensiunea Dona Sinaia",
      },
      {
        property: "og:description",
        content: "Vezi fotografiile și dotările camerei la Pensiunea Dona din Sinaia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UnitPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl text-primary">Camera nu a fost găsită</h1>
        <p className="mt-4 text-muted-foreground">
          Adresa nu corespunde niciunei camere. Verifică lista completă a camerelor.
        </p>
        <Link
          to="/camere"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Înapoi la camere
        </Link>
      </div>
    </SiteLayout>
  ),
});

function UnitPage() {
  const { room, unit } = Route.useLoaderData();

  return (
    <SiteLayout>
      <PageHeader
        eyebrow={room.name}
        title={unit.name}
        intro={room.description}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/camere"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-wood"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> Toate camerele
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <Users className="size-3.5" aria-hidden="true" /> {room.capacity}
          </span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {unit.images.map((src, i) => (
            <Reveal key={`${src}-${i}`} delay={(i % 3) * 70}>
              <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <img
                  src={src}
                  alt={`${unit.name} – fotografia ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-soft lg:grid-cols-2 lg:p-10">
          <div>
            <h2 className="font-display text-2xl text-primary">Dotările camerei</h2>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {room.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 lg:items-end">
            <p className="font-display text-2xl text-wood">{room.price}</p>
            <Link
              to="/"
              hash="rezervare"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Verifică disponibilitatea
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
