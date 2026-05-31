"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function RevealWrapper({
  children,
  className,
  delay = 0,
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px -5% 0px",
  });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 28, filter: "blur(8px)", scale: 0.99 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }
          : {}
      }
      transition={{
        duration: 1.1,
        delay,
        ease: [0.2, 0.7, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
