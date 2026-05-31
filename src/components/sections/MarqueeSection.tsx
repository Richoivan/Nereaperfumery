import { MARQUEE_ITEMS } from "@/constants/navigation";

export function MarqueeSection() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      className="border-y border-gold/10 py-6 overflow-hidden bg-coal"
      aria-hidden="true"
    >
      <div
        className="flex gap-16 whitespace-nowrap h-display text-3xl md:text-5xl text-ivory/40"
        style={{ animation: "marquee 38s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-16 pr-16">
            <span className={item === "Extrait de Parfum" ? "italic text-gold" : ""}>
              {item}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
