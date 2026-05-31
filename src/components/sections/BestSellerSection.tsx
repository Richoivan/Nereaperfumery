"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PRODUCTS } from "@/data/products";
import { Bottle } from "@/components/ui/Bottle";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

const SLIDES = [...PRODUCTS, ...PRODUCTS];

export function BestSellerSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
    align: "start",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-28 md:py-40">
      <div className="container-x flex items-end justify-between mb-12">
        <RevealWrapper>
          <p className="eyebrow">— Maison Favourites</p>
          <h2 className="h-display text-4xl md:text-6xl mt-5 text-cream">
            Most beloved.
          </h2>
        </RevealWrapper>

        <div className="hidden md:flex gap-3">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-gold/40 grid place-items-center hover:bg-gold hover:text-ink transition-colors duration-300"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-gold/40 grid place-items-center hover:bg-gold hover:text-ink transition-colors duration-300"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>

      <div className="overflow-hidden pl-5 md:pl-10" ref={emblaRef}>
        <div className="flex gap-6">
          {SLIDES.map((product, i) => (
            <div
              key={`${product.id}-${i}`}
              className="flex-none w-[78vw] sm:w-[420px]"
            >
              <div className="ed-img aspect-[4/5] rounded-sm relative overflow-hidden group cursor-grab active:cursor-grabbing">
                <div className="absolute inset-0 grid place-items-center">
                  <Bottle name={product.name} labelSize="md" />
                </div>
                <div className="absolute left-5 top-5 eyebrow">
                  N° 0{(i % 4) + 1}
                </div>
                <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between">
                  <div>
                    <div className="h-display text-3xl text-cream">
                      {product.name}
                    </div>
                    <div className="text-[11px] uppercase tracking-widest2 text-ivory/60 mt-1">
                      {product.tag}
                    </div>
                  </div>
                  <div className="h-display text-xl text-gold">
                    {product.price["50"]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
