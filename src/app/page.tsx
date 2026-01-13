"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import RoomsPreview from "@/components/RoomsPreview";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as any },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <motion.div {...fadeInUp}>
        <Experience />
      </motion.div>

      <motion.div {...fadeInUp}>
        <RoomsPreview />
      </motion.div>

      <motion.div {...fadeInUp}>
        <ServicesOverview />
      </motion.div>

      <motion.div {...fadeInUp}>
        <Testimonials />
      </motion.div>

      <motion.div {...fadeInUp}>
        <Location />
      </motion.div>

      <Footer />
    </main>
  );
}
