"use client";

import { useEffect, useRef } from "react";

interface ParticleData {
  el: HTMLSpanElement;
  x: number;
  baseY: number;
  size: number;
  duration: number;
  delay: number;
  xDrift: number;
}

export function Particles() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const particles: ParticleData[] = [];
    const count = 26;

    for (let i = 0; i < count; i++) {
      const el = document.createElement("span");
      const size = Math.random() * 6 + 2;
      el.className = "particle";
      el.style.width = el.style.height = `${size}px`;
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${60 + Math.random() * 40}%`;
      el.style.opacity = "0";
      host.appendChild(el);

      particles.push({
        el,
        x: Math.random() * 100,
        baseY: 60 + Math.random() * 40,
        size,
        duration: 8000 + Math.random() * 8000,
        delay: Math.random() * 6000,
        xDrift: (Math.random() - 0.5) * 120,
      });
    }

    const startTimes: number[] = new Array(count).fill(0);
    let startTimestamp: number | null = null;
    let rafId: number;

    function animate(timestamp: number) {
      if (!startTimestamp) startTimestamp = timestamp;

      particles.forEach((p, i) => {
        if (!startTimes[i]) {
          startTimes[i] = timestamp + p.delay;
        }
        if (timestamp < startTimes[i]) return;

        const elapsed = (timestamp - startTimes[i]) % p.duration;
        const progress = elapsed / p.duration;

        const yMove = -(window.innerHeight * 0.9 + Math.random() * 200) * progress;
        const xMove = p.xDrift * progress;
        const opacity =
          progress < 0.1
            ? progress / 0.1 * (0.5 + Math.random() * 0.4)
            : progress > 0.8
            ? (1 - progress) / 0.2
            : 0.5 + Math.random() * 0.1;

        p.el.style.transform = `translate(${xMove}px, ${yMove}px)`;
        p.el.style.opacity = String(Math.max(0, Math.min(1, opacity)));
      });

      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      particles.forEach((p) => p.el.remove());
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
