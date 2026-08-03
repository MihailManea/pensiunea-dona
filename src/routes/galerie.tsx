import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader, SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { GALLERY_CATEGORIES, PHOTOS, type GalleryCategory } from "@/components/site/data";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie foto – Pensiunea Dona Sinaia" },
      {
        name: "description",
        content:
          "Peste 30 de fotografii cu Pensiunea Dona din Sinaia: exterior, camere, interior, curte cu foișor și grătar, facilități și împrejurimi.",
      },
      { property: "og:title", content: "Galerie foto – Pensiunea Dona Sinaia" },
      {
        property: "og:description",
        content: "Vezi camerele, curtea, foișorul și împrejurimile Pensiunii Dona.",
      },
    ],
    links: [{ rel: "canonical", href: "/galerie" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory | "Toate">("Toate");
  const [index, setIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(false);

  const photos = useMemo(
    () => (filter === "Toate" ? PHOTOS : PHOTOS.filter((p) => p.category === filter)),
    [filter],
  );

  const close = () => {
    setIndex(null);
    setZoom(false);
  };
  const move = (step: number) =>
    setIndex((i) => (i === null ? i : (i + step + photos.length) % photos.length));

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Galerie"
        title="Fotografii din Pensiunea Dona"
        intro="Fiecare fotografie este reală și nefiltrată. Alege o categorie pentru a vedea exact spațiul care te interesează."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div
          role="group"
          aria-label="Filtrează fotografiile"
          className="flex flex-wrap gap-2"
        >
          {(["Toate", ...GALLERY_CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "border border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo, i) => (
            <Reveal as="li" key={`${photo.alt}-${i}`} delay={(i % 8) * 40}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-xl bg-muted shadow-soft lift"
                aria-label={`Deschide fotografia: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={960}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <ZoomIn className="pointer-events-none absolute bottom-3 right-3 size-5 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </ul>
      </section>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Vizualizare fotografie"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-forest/90 p-4 animate-in fade-in"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Închide"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full glass-dark text-white"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="Fotografia anterioară"
            className="absolute left-3 inline-flex size-11 items-center justify-center rounded-full glass-dark text-white sm:left-6"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="Fotografia următoare"
            className="absolute right-3 inline-flex size-11 items-center justify-center rounded-full glass-dark text-white sm:right-6"
          >
            <ChevronRight className="size-5" />
          </button>

          <figure className="max-h-full w-full max-w-5xl overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[index].src}
              alt={photos[index].alt}
              onClick={() => setZoom((z) => !z)}
              className={`mx-auto rounded-xl shadow-lift transition-transform duration-500 ${
                zoom ? "scale-150 cursor-zoom-out" : "max-h-[80dvh] cursor-zoom-in"
              }`}
            />
            <figcaption className="mt-4 text-center text-sm text-white/85">
              {photos[index].alt} · {index + 1} / {photos.length} — apasă pe imagine pentru
              zoom
            </figcaption>
          </figure>
        </div>
      )}
    </SiteLayout>
  );
}
