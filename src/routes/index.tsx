import { createFileRoute } from "@tanstack/react-router";

import nobelImg from "@/assets/nobel.png";
import regalImg from "@/assets/regal.png";
import royalImg from "@/assets/royal.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sarkar Parfums — NOBEL, REGAL & ROYAL 100ml" },
      {
        name: "description",
        content:
          "Shop the Sarkar 100ml parfum collection: NOBEL, REGAL and the new ROYAL saffron unisex parfum at ₹1499.",
      },
      { property: "og:title", content: "Sarkar Parfums — NOBEL, REGAL & ROYAL" },
      {
        property: "og:description",
        content:
          "Three 100ml parfums. Discover ROYAL — saffron, gold and deep red, ₹1499.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type Perfume = {
  name: string;
  size: string;
  price: number;
  tags: string[];
  image: string;
  panel: string;
  halo: string;
  chip: string;
  price_class: string;
  button: string;
};

const perfumes: Perfume[] = [
  {
    name: "NOBEL",
    size: "100 ML",
    price: 1499,
    tags: ["AQUATIC", "PARFUM", "MEN"],
    image: nobelImg,
    panel:
      "bg-[radial-gradient(120%_90%_at_50%_0%,var(--nobel-glow)_0%,var(--nobel-deep)_55%,oklch(0.16_0.07_264)_100%)]",
    halo: "bg-nobel-glow/40",
    chip: "border-nobel-accent/40 text-nobel-accent",
    price_class: "text-nobel-accent",
    button: "bg-nobel-accent/95 text-nobel-deep hover:bg-nobel-accent",
  },
  {
    name: "REGAL",
    size: "100 ML",
    price: 1499,
    tags: ["ORCHID", "PARFUM", "WOMEN"],
    image: regalImg,
    panel:
      "bg-[radial-gradient(120%_90%_at_50%_0%,var(--regal-glow)_0%,var(--regal-deep)_55%,oklch(0.15_0.08_310)_100%)]",
    halo: "bg-regal-glow/40",
    chip: "border-regal-accent/45 text-regal-accent",
    price_class: "text-regal-accent",
    button: "bg-regal-accent/95 text-regal-deep hover:bg-regal-accent",
  },
  {
    name: "ROYAL",
    size: "100 ML",
    price: 1499,
    tags: ["SAFFRON", "PARFUM", "UNISEX"],
    image: royalImg,
    panel:
      "bg-[radial-gradient(120%_90%_at_50%_0%,var(--royal-glow)_0%,var(--royal-deep)_55%,oklch(0.14_0.08_22)_100%)]",
    halo: "bg-royal-glow/45",
    chip: "border-royal-accent/45 text-royal-accent",
    price_class: "text-royal-accent",
    button: "bg-royal-accent/95 text-royal-deep hover:bg-royal-accent",
  },
];

function PerfumeCard({ p, priority }: { p: Perfume; priority: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl ${p.panel} p-6 pb-8 shadow-2xl`}
    >
      <div
        className={`pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full ${p.halo} blur-3xl`}
        aria-hidden="true"
      />
      <div className="relative flex items-center justify-center py-4">
        <img
          src={p.image}
          alt={`${p.name} ${p.size} parfum bottle`}
          width={768}
          height={1024}
          loading={priority ? "eager" : "lazy"}
          className="h-64 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
        />
      </div>
      <div className="relative mt-4 text-center">
        <h2 className="text-3xl font-semibold tracking-[0.35em] text-white">
          {p.name}
        </h2>
        <p className="mt-1 text-xs tracking-[0.3em] text-white/60">{p.size}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className={`rounded-full border px-3 py-1 text-[10px] tracking-[0.2em] ${p.chip}`}
            >
              {t}
            </span>
          ))}
        </div>
        <p className={`mt-5 text-2xl font-medium ${p.price_class}`}>
          ₹{p.price.toLocaleString("en-IN")}
        </p>
        <button
          className={`mt-5 w-full rounded-full px-6 py-3 text-xs font-semibold tracking-[0.25em] transition-colors ${p.button}`}
        >
          ADD TO CART
        </button>
      </div>
    </article>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-[oklch(0.13_0.02_60)] px-5 py-16">
      <header className="mx-auto max-w-5xl text-center">
        <p className="text-xs tracking-[0.5em] text-white/50">SARKAR PARFUMS</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[0.2em] text-white sm:text-5xl">
          SHOP ALL
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/60">
          Long-lasting 100ml parfums, each built around a single signature accord.
        </p>
      </header>

      <section className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {perfumes.map((p, i) => (
          <PerfumeCard key={p.name} p={p} priority={i === 0} />
        ))}
      </section>
    </main>
  );
}
