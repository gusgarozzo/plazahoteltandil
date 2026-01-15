"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as any },
};

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return <motion.div {...fadeInUp}>{children}</motion.div>;
}
