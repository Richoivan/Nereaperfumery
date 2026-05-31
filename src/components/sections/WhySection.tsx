import { WHY_FEATURES } from "@/data/whyFeatures";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

export function WhySection() {
  return (
    <section className="py-28 md:py-40 bg-coal">
      <div className="container-x grid md:grid-cols-12 gap-12">
        <RevealWrapper className="md:col-span-4">
          <p className="eyebrow">— Why Nerèa</p>
          <h2 className="h-display text-4xl md:text-6xl mt-5 text-cream leading-[1]">
            Made for the few{" "}
            <span className="italic text-gold">who notice.</span>
          </h2>
        </RevealWrapper>

        <div className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-gold/15">
          {WHY_FEATURES.map((feature, i) => (
            <RevealWrapper key={feature.number} delay={i * 0.08}>
              <div className="bg-coal p-8">
                <div className="text-gold h-display text-3xl">{feature.number}</div>
                <h3 className="h-display text-2xl mt-3 text-cream">{feature.title}</h3>
                <p className="text-ivory/65 text-sm mt-3 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
