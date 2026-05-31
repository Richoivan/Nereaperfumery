import { cn } from "@/lib/utils";

interface BottleProps {
  name?: string;
  className?: string;
  labelSize?: "sm" | "md" | "lg";
}

const labelSizeMap = {
  sm: "text-[9px]",
  md: "text-base",
  lg: "text-lg",
};

export function Bottle({ name, className, labelSize = "md" }: BottleProps) {
  return (
    <div className={cn("bottle-shape", className)}>
      <div className="bottle-label">
        <div className={cn("h-display text-cream tracking-widest2", labelSizeMap[labelSize])}>
          NERÈA
        </div>
        {name && (
          <div className="text-[9px] uppercase tracking-widest2 text-gold mt-1">
            {name}
          </div>
        )}
      </div>
    </div>
  );
}
