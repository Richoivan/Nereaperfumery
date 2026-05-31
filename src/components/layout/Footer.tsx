import { FOOTER_LINKS } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="relative pt-24 pb-12 bg-ink border-t border-gold/15">
      <div className="container-x">
        <h2 className="h-display text-[24vw] md:text-[14vw] leading-[0.85] text-cream/95">
          Ner<span className="italic text-gold">è</span>a
        </h2>

        <div className="grid md:grid-cols-12 gap-10 mt-12 text-sm text-ivory/70">
          <div className="md:col-span-5">
            <p className="h-serif italic text-2xl text-ivory/85">
              Extrait de Parfum — Timeless elegance in every scent.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-4">Maison</p>
            <ul className="space-y-2">
              {FOOTER_LINKS.maison.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gold transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-4">Olfactive</p>
            <ul className="space-y-2">
              {FOOTER_LINKS.olfactive.map((item) => (
                <li key={item}>
                  <a href="#collection" className="hover:text-gold transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Concierge</p>
            <ul className="space-y-2">
              {FOOTER_LINKS.concierge.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-wrap justify-between gap-4 text-[11px] uppercase tracking-widest2 text-ivory/45">
          <div>© MMXXV Maison Nerèa</div>
          <div>Crafted with quiet intention.</div>
        </div>
      </div>
    </footer>
  );
}
