import { JournalCard } from "@/components/cards/JournalCard";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

const FEED_COUNT = 8;

export function JournalSection() {
  return (
    <section id="journal" className="py-28 md:py-40 bg-coal">
      <div className="container-x">
        <div className="flex items-end justify-between mb-12">
          <RevealWrapper>
            <p className="eyebrow">— Editorial · @nereaperfumery</p>
            <h2 className="h-display text-4xl md:text-6xl mt-5 text-cream">
              From the atelier.
            </h2>
          </RevealWrapper>

          <a
            href="https://instagram.com/nereaperfumery"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block nav-link text-[12px] uppercase tracking-widest2"
          >
            Follow →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {Array.from({ length: FEED_COUNT }, (_, i) => (
            <JournalCard key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
