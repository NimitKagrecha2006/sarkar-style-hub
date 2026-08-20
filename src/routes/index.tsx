import { createFileRoute } from "@tanstack/react-router";

import bottleOrion from "@/assets/bottle-orion.png.asset.json";
import bottleNoble from "@/assets/bottle-noble.png.asset.json";
import bottleThrone from "@/assets/bottle-throne.png.asset.json";
import bottleRegal from "@/assets/bottle-regal.png.asset.json";
import bottleRoyal from "@/assets/bottle-royal.png.asset.json";
import sceneOrion from "@/assets/scene-orion.png.asset.json";
import sceneNoble from "@/assets/scene-noble.png.asset.json";
import sceneThrone from "@/assets/scene-throne.png.asset.json";
import sceneRegal from "@/assets/scene-regal.png.asset.json";
import sceneRoyal from "@/assets/scene-royal.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sarkar Parfums — Shop the 100ml Chess King Collection" },
      {
        name: "description",
        content:
          "Shop Sarkar 100ml parfums: ORION, NOBEL, THRONE, REGAL and ROYAL. Sculpted chess-king bottles from ₹1499.",
      },
      { property: "og:title", content: "Sarkar Parfums — Shop the Collection" },
      {
        property: "og:description",
        content:
          "Five 100ml parfums in sculpted chess-king bottles: ORION, NOBEL, THRONE, REGAL and ROYAL.",
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
  bottle: string;
  scene: string;
};

const perfumes: Perfume[] = [
  {
    name: "ORION",
    size: "100ML",
    price: 1499,
    tags: ["FRESH", "UNISEX", "PARFUM"],
    bottle: bottleOrion.url,
    scene: sceneOrion.url,
  },
  {
    name: "NOBEL",
    size: "100ML",
    price: 1499,
    tags: ["CITRUS", "UNISEX", "PARFUM"],
    bottle: bottleNoble.url,
    scene: sceneNoble.url,
  },
  {
    name: "THRONE",
    size: "100ML",
    price: 2499,
    tags: ["LEATHER", "UNISEX", "PARFUM"],
    bottle: bottleThrone.url,
    scene: sceneThrone.url,
  },
  {
    name: "REGAL",
    size: "100ML",
    price: 1499,
    tags: ["OUD", "UNISEX", "PARFUM"],
    bottle: bottleRegal.url,
    scene: sceneRegal.url,
  },
  {
    name: "ROYAL",
    size: "100ML",
    price: 1499,
    tags: ["SAFFRON", "UNISEX", "PARFUM"],
    bottle: bottleRoyal.url,
    scene: sceneRoyal.url,
  },
];

function PerfumeCard({ p, priority }: { p: Perfume; priority: boolean }) {
  return (
    <article className="group flex flex-col border border-border bg-card">
      <div className="relative aspect-[3/4] overflow-hidden bg-white">
        <img
          src={p.bottle}
          alt={`${p.name} ${p.size} parfum bottle`}
          width={960}
          height={1008}
          loading={priority ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-contain p-4 transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src={p.scene}
          alt={`${p.name} parfum bottle with its packaging`}
          width={960}
          height={1008}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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

        <section className="mx-auto mt-10 grid max-w-[1600px] gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {perfumes.map((p, i) => (
            <PerfumeCard key={p.name} p={p} priority={i === 0} />
          ))}
        </section>
      </main>
    </div>
  );
}
