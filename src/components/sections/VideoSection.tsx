"use client";

import { useRef, useState } from "react";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <section className="relative py-0 bg-ink overflow-hidden">
      {/* Section header */}
      <div className="container-x pt-20 pb-10">
        <RevealWrapper>
          <p className="eyebrow">— Maison Nerèa</p>
          <h2 className="h-display text-4xl md:text-6xl mt-5 text-cream leading-[1]">
            Feel the <span className="italic text-gold">essence.</span>
          </h2>
        </RevealWrapper>
      </div>

      {/* Video — natural size, no crop */}
      <div className="relative w-full bg-ink">
        <video
          ref={videoRef}
          src={`${BASE}/VIDEO/c35bd695747747a39789daa5c97cd7fe.mov`}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto block"
          aria-label="Nerèa Perfumery — cinematic showcase video"
        />

        {/* Subtle top/bottom fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,10,9,0.35) 0%, transparent 8%, transparent 92%, rgba(11,10,9,0.5) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Mute toggle */}
        <button
          onClick={toggleMute}
          className="absolute bottom-5 right-5 w-10 h-10 rounded-full border border-gold/40 bg-ink/60 backdrop-blur-sm grid place-items-center text-ivory/80 hover:bg-gold/20 transition-all duration-300"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M11 5 6 9H2v6h4l5 4V5Z" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M11 5 6 9H2v6h4l5 4V5Z" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>
      </div>

      <div className="container-x pb-16 pt-8">
        <RevealWrapper>
          <p className="h-serif italic text-xl md:text-2xl text-ivory/65 max-w-2xl">
            Each bottle carries a story. Wear yours.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
