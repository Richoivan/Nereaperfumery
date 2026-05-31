"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 3800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[120] bg-ink grid place-items-center overflow-hidden"
          exit={{ y: "-100%" }}
          transition={{ duration: 1.4, ease: [0.87, 0, 0.13, 1] }}
          aria-hidden="true"
        >
          <div className="intro-ring" />
          <div className="intro-glow" />

          <div className="relative text-center px-6">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.2 }}
            >
              Maison de Parfum · Est. MMXXIV
            </motion.p>

            <motion.h1
              className="h-display shimmer-text mt-6 text-[18vw] md:text-[10vw] leading-none"
              initial={{ opacity: 0, filter: "blur(24px)", scale: 1.08 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 2.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Nerèa
            </motion.h1>

            <motion.p
              className="h-serif italic text-ivory/80 mt-4 text-xl md:text-3xl tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.5 }}
            >
              Extrait de Parfum
            </motion.p>

            <motion.div
              className="mt-10 mx-auto h-px bg-gold/60"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1.0, delay: 2.0 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
