import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/cards/ProductCard";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

export function CollectionSection() {
  return (
    <section
      id="collection"
      className="relative py-28 md:py-40 bg-gradient-to-b from-ink via-coal to-ink"
    >
      <div className="container-x">
        <div className="flex items-end justify-between gap-8 mb-16 md:mb-24">
          <RevealWrapper>
            <p className="eyebrow">— Signature Collection</p>
            <h2 className="h-display text-5xl md:text-7xl mt-5 text-cream leading-[1]">
              Twelve <span className="italic text-gold">divine</span> chapters.
            </h2>
          </RevealWrapper>

          <RevealWrapper className="hidden md:block max-w-sm text-ivory/65" delay={0.1}>
            Each fragrance is a portrait of a deity — a study of character,
            memory, and skin. Twelve olfactive stories, one maison.
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
