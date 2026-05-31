import { RevealWrapper } from "@/components/animations/RevealWrapper";

export function ShowcaseSection() {
  return (
    <section id="showcase" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 hero-image opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 50%, transparent, rgba(0,0,0,.85))",
        }}
        aria-hidden="true"
      />

      <div className="container-x relative z-10 text-center">
        <RevealWrapper>
          <p className="eyebrow">— Cinematic Showcase</p>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <h2 className="h-display text-[14vw] md:text-[9vw] leading-[0.95] mt-8 text-cream">
            A <span className="italic text-gold">scent</span>
            <br />
            is a memory.
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <p className="h-serif italic text-xl md:text-2xl text-ivory/75 mt-8 max-w-2xl mx-auto">
            Composed in fragments, worn as a whole. Nerèa is the silence between notes.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
