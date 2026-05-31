import { RevealWrapper } from "@/components/animations/RevealWrapper";

const FAQ_ITEMS = [
  {
    question: "What is an Extrait de Parfum?",
    answer:
      "The highest concentration of fragrance, between 25–30% perfume oil. Richer, deeper, longer — a whisper that stays.",
    defaultOpen: true,
  },
  {
    question: "How should I wear Nerèa?",
    answer:
      "Apply to pulse points after a warm shower. Let it settle on skin — never rub. Wear with intention, not abundance.",
  },
  {
    question: "Are the fragrances unisex?",
    answer:
      "Each composition is genderless. Our compositions speak to mood and memory, not category.",
  },
  {
    question: "Where is Nerèa crafted?",
    answer:
      "Composed in Grasse and hand-poured in our private atelier in numbered series.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-28 md:py-40">
      <div className="container-x grid md:grid-cols-12 gap-12">
        <RevealWrapper className="md:col-span-4">
          <p className="eyebrow">— Enquire</p>
          <h2 className="h-display text-4xl md:text-6xl mt-5 text-cream leading-[1]">
            Quietly answered.
          </h2>
          <p className="text-ivory/60 mt-6 max-w-sm">
            For private commissions and atelier visits, our concierge is
            reachable through the floating channel.
          </p>
        </RevealWrapper>

        <RevealWrapper className="md:col-span-8" delay={0.1}>
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="faq"
              open={item.defaultOpen}
            >
              <summary>
                <span className="h-display text-xl md:text-2xl text-cream">
                  {item.question}
                </span>
                <span className="faq-plus text-gold" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="faq-answer">{item.answer}</div>
            </details>
          ))}
        </RevealWrapper>
      </div>
    </section>
  );
}
