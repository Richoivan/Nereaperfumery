"use client";

import { useEffect, useRef, useCallback } from "react";
import { RevealWrapper } from "@/components/animations/RevealWrapper";
import { Particles } from "@/components/animations/Particles";

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = parallaxRef.current;
    if (!el) return;
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    el.style.transform = `translate(${-x * 30}px, ${-y * 20}px)`;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const scrollToCollection = () => {
    document.querySelector("#collection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-[100svh] hero-bg overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute inset-0 transition-transform duration-[1200ms] ease-out will-change-transform"
        style={{ transition: "transform 0ms" }}
      >
        <div className="absolute inset-0 hero-image opacity-90" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 60% at 50% 100%, rgba(0,0,0,.85), transparent 60%)",
          }}
        />
      </div>

      <Particles />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: "inset 0 0 220px 60px rgba(0,0,0,.85)" }}
        aria-hidden="true"
      />

      <div className="container-x relative z-10 min-h-[100svh] flex flex-col justify-end pb-20 md:pb-28 pt-40">
        <RevealWrapper>
          <p className="eyebrow">Extrait de Parfum · Maison Nerèa</p>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <h1 className="h-display mt-6 text-[18vw] md:text-[12vw] leading-[0.9] text-cream">
            Ner<span className="italic text-gold">è</span>a
          </h1>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="h-serif italic text-2xl md:text-4xl text-ivory/85 max-w-xl">
              Timeless elegance in every scent — composed for those who wear silence beautifully.
            </p>
            <button
              onClick={scrollToCollection}
              className="btn-luxe self-start md:self-auto"
            >
              <span className="btn-luxe-dot" />
              <span className="text-[12px] uppercase tracking-widest2">
                Explore Collection
              </span>
            </button>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.35}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-[11px] uppercase tracking-widest2 text-ivory/55">
            {[
              "Crafted in Grasse",
              "Extrait 25–30%",
              "Cruelty Free",
              "Numbered Series",
            ].map((item, i) => (
              <div key={item}>
                <span className="text-gold">0{i + 1} ·</span> {item}
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
