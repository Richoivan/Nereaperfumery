"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

export function TestimonialSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5500, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="py-28 md:py-40">
      <div className="container-x">
        <RevealWrapper>
          <p className="eyebrow">— In Their Words</p>
        </RevealWrapper>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="flex-none w-full min-w-0">
                <div className="text-center max-w-3xl mx-auto px-4">
                  <div className="text-gold text-5xl h-display leading-none" aria-hidden="true">
                    "
                  </div>
                  <blockquote className="h-serif italic text-2xl md:text-4xl text-cream leading-snug mt-4">
                    {testimonial.quote}
                  </blockquote>
                  <cite className="block mt-8 text-[11px] uppercase tracking-widest2 text-ivory/55 not-italic">
                    {testimonial.author}
                  </cite>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-12" role="tablist" aria-label="Testimonials">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === selectedIndex}
              onClick={() => scrollTo(i)}
              className="w-2 h-2 rounded-full transition-opacity duration-300"
              style={{
                background: "#c9a96a",
                opacity: i === selectedIndex ? 1 : 0.4,
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
