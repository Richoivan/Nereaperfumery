import { Bottle } from "@/components/ui/Bottle";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

interface JournalCardProps {
  index: number;
}

export function JournalCard({ index }: JournalCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <RevealWrapper>
      <div className="ed-img aspect-square rounded-sm relative overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 grid place-items-center opacity-60 group-hover:opacity-100 transition-opacity duration-700">
          <Bottle className="w-[55%]" />
        </div>
        <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/0 transition-colors duration-700" />
        <span className="absolute left-3 top-3 eyebrow">№ {num}</span>
      </div>
    </RevealWrapper>
  );
}
