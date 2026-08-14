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
};

const perfumes: Perfume[] = [
  {
    name: "NOBEL",
    size: "100ML",
    price: 1499,
    tags: ["AQUATIC", "PARFUM", "MEN"],
    image: nobelImg,
  },
  {
    name: "REGAL",
    size: "100ML",
    price: 1499,
    tags: ["ORCHID", "PARFUM", "WOMEN"],
    image: regalImg,
  },
  {
    name: "ROYAL",
    size: "100ML",
    price: 1499,
    tags: ["SAFFRON", "PARFUM", "UNISEX"],
    image: royalImg,
  },
];

function PerfumeCard({ p, priority }: { p: Perfume; priority: boolean }) {
  return (
    <article className="group flex flex-col border border-border bg-card">
      <div className="flex items-center justify-center bg-white p-6">
        <img
          src={p.image}
          alt={`${p.name} ${p.size} parfum bottle`}
          width={768}
          height={1024}
          loading={priority ? "eager" : "lazy"}
          className="h-72 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col items-center gap-3 px-5 pb-6 pt-5 text-center">
        <h2 className="text-lg tracking-wide text-foreground">
          {p.name} ({p.size})
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="bg-muted px-3 py-1 text-[11px] tracking-wider text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-1 text-base text-foreground">
          ₹ {p.price.toLocaleString("en-IN")}
        </p>
        <button className="mt-1 bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
          Add To Cart
        </button>
      </div>
    </article>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between border-b border-border px-5 py-4">
        <button
          aria-label="Open menu"
          className="flex flex-col gap-1.5 p-1 text-foreground"
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>
        <span className="text-xl font-bold tracking-[0.35em] text-foreground sm:text-2xl">
          SARKAR
        </span>
        <button className="bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
          Buy Now
        </button>
      </header>

      <main className="px-5 py-10">
        <h1 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          SHOP THE COLLECTION
        </h1>

        <section className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perfumes.map((p, i) => (
            <PerfumeCard key={p.name} p={p} priority={i === 0} />
          ))}
        </section>
      </main>
    </div>
  );
}
