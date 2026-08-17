import { createFileRoute } from "@tanstack/react-router";

import heroLineup from "@/assets/hero-lineup.webp.asset.json";
import bottleOrion from "@/assets/bottle-orion.webp.asset.json";
import bottleNoble from "@/assets/bottle-noble.webp.asset.json";
import bottleThrone from "@/assets/bottle-throne.webp.asset.json";
import bottleRegal from "@/assets/bottle-regal.webp.asset.json";
import bottleRoyal from "@/assets/bottle-royal.webp.asset.json";
import sceneOrion from "@/assets/scene-orion.webp.asset.json";
import sceneNoble from "@/assets/scene-noble.webp.asset.json";
import sceneThrone from "@/assets/scene-throne.webp.asset.json";
import sceneRegal from "@/assets/scene-regal.webp.asset.json";
import sceneRoyal from "@/assets/scene-royal.webp.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sarkar Parfums — Chess King 100ml Parfum Collection" },
      {
        name: "description",
        content:
          "Sarkar Parfums: sculpted chess-king bottles in 100ml. Discover ORION, NOBEL, THRONE, REGAL and ROYAL — long-lasting parfums from ₹1499.",
      },
      { property: "og:title", content: "Sarkar Parfums — Chess King Collection" },
      {
        property: "og:description",
        content:
          "Five 100ml parfums in sculpted chess-king bottles: ORION, NOBEL, THRONE, REGAL and ROYAL.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.sarkar.store/" }],
  }),
});

const STORE_URL = "https://www.sarkar.store/";
const SHOP_URL = "https://www.sarkar.store/collections/shop-all";


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
    price: 2499,
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
        <a
          href={SHOP_URL}
          className="mt-1 bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Add To Cart
        </a>
      </div>
    </article>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background/90 px-5 py-4 backdrop-blur">
        <nav className="hidden gap-6 text-xs tracking-widest text-muted-foreground md:flex">
          <a href="#collection" className="hover:text-foreground">
            COLLECTION
          </a>
          <a href="#craft" className="hover:text-foreground">
            THE CRAFT
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
        </nav>
        <button
          aria-label="Open menu"
          className="flex flex-col gap-1.5 p-1 text-foreground md:hidden"
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>
        <span className="text-xl font-bold tracking-[0.35em] text-foreground sm:text-2xl">
          SARKAR
        </span>
        <a
          href={STORE_URL}
          className="bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Buy Now
        </a>
      </header>

      <main>
        <section className="border-b border-border px-5 py-16 text-center sm:py-24">
          <p className="text-[11px] tracking-[0.4em] text-muted-foreground">
            EAU DE PARFUM · 100ML
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">
            CROWNED IN SCENT.
            <br />
            SCULPTED LIKE A KING.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Five signature parfums housed in hand-finished chess-king flacons.
            Long-lasting, unisex, and made to be remembered.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#collection"
              className="bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Shop the Collection
            </a>
            <a
              href={STORE_URL}
              className="border border-border px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Visit sarkar.store
            </a>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-4 text-[11px] tracking-widest text-muted-foreground">
            <span>FREE SHIPPING</span>
            <span>12H+ LONGEVITY</span>
            <span>CRUELTY FREE</span>
          </div>
        </section>

        <section id="collection" className="px-5 py-14">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            SHOP THE COLLECTION
          </h2>

          <div className="mx-auto mt-10 grid max-w-[1600px] gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {perfumes.map((p, i) => (
              <PerfumeCard key={p.name} p={p} priority={i === 0} />
            ))}
          </div>
        </section>

        <section id="craft" className="border-y border-border bg-muted/40 px-5 py-16">
          <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-3">
            {[
              {
                t: "SCULPTED FLACONS",
                d: "Each bottle is cast in the silhouette of a chess king — weighted glass, polished crown.",
              },
              {
                t: "HIGH OIL CONCENTRATION",
                d: "Parfum-grade blends built for depth and projection that carries through the day.",
              },
              {
                t: "MADE FOR EVERYONE",
                d: "Every scent in the collection is unisex, layered to sit differently on every skin.",
              },
            ].map((f) => (
              <div key={f.t}>
                <h3 className="text-sm font-semibold tracking-widest text-foreground">
                  {f.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="px-5 py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            QUESTIONS
          </h2>
          <div className="mx-auto mt-8 max-w-3xl divide-y divide-border border-y border-border">
            {[
              {
                q: "How long does the scent last?",
                a: "Our parfum concentration typically lasts 8–12 hours, with sillage strongest in the first 4 hours.",
              },
              {
                q: "Are the parfums unisex?",
                a: "Yes. All five fragrances are composed as unisex blends.",
              },
              {
                q: "Where do you ship?",
                a: "We ship across India, with free delivery on every order.",
              },
            ].map((item) => (
              <details key={item.q} className="group px-1 py-4">
                <summary className="cursor-pointer list-none text-sm font-medium text-foreground">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="border-t border-border px-5 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            FIND YOUR SIGNATURE
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            The full collection is available now at sarkar.store.
          </p>
          <a
            href={STORE_URL}
            className="mt-7 inline-block bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Shop Now
          </a>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-8 text-center text-xs tracking-widest text-muted-foreground">
        <p className="text-base font-bold tracking-[0.35em] text-foreground">SARKAR</p>
        <p className="mt-3">
          <a href={STORE_URL} className="hover:text-foreground">
            www.sarkar.store
          </a>
        </p>
        <p className="mt-3">© {new Date().getFullYear()} SARKAR PARFUMS</p>
      </footer>
    </div>
  );
}

