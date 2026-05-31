"use client";

import Image from "next/image";
import type { Product } from "@/types";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <RevealWrapper>
      <article className="card-glow relative bg-coal border border-gold/10 rounded-sm overflow-hidden flex flex-col h-full group">
        {/* Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-espresso">
          <Image
            src={product.image}
            alt={`${product.name} — ${product.deity}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal/80 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 eyebrow text-gold">{product.number}</span>
          <span className="absolute right-4 top-4 text-[10px] uppercase tracking-widest2 text-ivory/70 bg-ink/60 backdrop-blur-sm px-2 py-1 rounded-full">
            {product.tag}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="h-display text-2xl text-cream">{product.name}</h3>
          <p className="text-[10px] uppercase tracking-widest2 text-gold/80 mt-1 font-serif italic">
            {product.deity}
          </p>
          <p className="text-ivory/65 text-sm mt-3 leading-relaxed flex-1">
            {product.desc}
          </p>

          {/* Notes */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {product.notes.map((note) => (
              <span
                key={note}
                className="text-[10px] uppercase tracking-wider text-ivory/55 border border-gold/20 px-2 py-1 rounded-full"
              >
                {note}
              </span>
            ))}
          </div>

          {/* Price & Size */}
          <div className="mt-4 pt-4 border-t border-gold/10 flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-widest2 text-ivory/50">
              {product.size}
            </span>
            <span className="h-display text-xl text-gold">
              {product.price}
            </span>
          </div>
        </div>
      </article>
    </RevealWrapper>
  );
}
