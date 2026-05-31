"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(docHeight > 0 && window.scrollY / docHeight > 0.15);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className="fab"
      style={{ bottom: "78px", opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none", transition: "opacity 0.4s, transform 0.4s, background 0.4s" }}
      onClick={scrollTop}
      aria-label="Back to top"
    >
      <ArrowUp size={16} />
    </button>
  );
}
