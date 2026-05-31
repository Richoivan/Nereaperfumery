import Image from "next/image";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

export function StorySection() {
  return (
    <section id="story" className="relative py-32 md:py-48">
      <div className="absolute left-1/2 vline hidden md:block" aria-hidden="true" />

      <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16">
        <RevealWrapper className="md:col-span-5">
          <p className="eyebrow">— La Maison</p>
          <h2 className="h-display text-5xl md:text-7xl mt-6 leading-[1] text-cream">
            A house of{" "}
            <span className="italic text-gold">quiet</span>
            <br />
            luxury.
          </h2>
        </RevealWrapper>

        <RevealWrapper className="md:col-span-6 md:col-start-7" delay={0.15}>
          <p className="h-serif text-2xl md:text-3xl text-ivory/85 leading-snug">
            Nerèa adalah brand parfum premium yang menghadirkan aroma timeless
            dengan sentuhan modern elegance. Terinspirasi dari seni, emosi, dan
            kepribadian unik setiap individu.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 text-sm text-ivory/65">
            <div>
              <p className="eyebrow mb-3">Philosophy</p>
              Composed slowly, distilled patiently. Each accord is an emotion,
              each bottle a chapter of memory.
            </div>
            <div>
              <p className="eyebrow mb-3">Artistry</p>
              Crafted with rare absolutes, hand-poured in small numbered series
              for the few who truly notice.
            </div>
          </div>
        </RevealWrapper>
      </div>

      {/* Editorial diptych — real photos */}
      <div className="container-x grid md:grid-cols-12 gap-6 mt-24">
        {/* Large photo — COM00013 */}
        <RevealWrapper className="md:col-span-7">
          <div className="relative aspect-[16/10] rounded-sm overflow-hidden border border-gold/12">
            <Image
              src="/PHOTO ALL/COM00013.webp"
              alt="Nerèa — Editorial No. 01"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            <span className="absolute left-4 top-4 eyebrow">N° 01 — Editorial</span>
          </div>
        </RevealWrapper>

        <div className="md:col-span-5 flex flex-col gap-6">
          {/* Small photo — COM00070 */}
          <RevealWrapper delay={0.1}>
            <div className="relative aspect-square rounded-sm overflow-hidden border border-gold/12">
              <Image
                src="/PHOTO ALL/COM00070.webp"
                alt="Nerèa — Atelier"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              <span className="absolute left-4 top-4 eyebrow">Maison Nerèa</span>
            </div>
          </RevealWrapper>

          {/* Quote */}
          <RevealWrapper delay={0.2}>
            <blockquote className="h-serif text-xl text-ivory/75 italic leading-relaxed">
              "To wear Nerèa is to leave a trace — soft, deliberate, unforgettable."
              <footer className="mt-3 text-[11px] not-italic uppercase tracking-widest2 text-gold/80">
                — The Maison
              </footer>
            </blockquote>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
