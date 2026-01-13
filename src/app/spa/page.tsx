"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import styles from "./Spa.module.css";
import { motion } from "framer-motion";

const services = [
  {
    title: "Masajes Terapéuticos",
    desc: "Técnicas de relajación profunda para liberar tensiones y restaurar el equilibrio natural de su cuerpo. Contamos con profesionales especializados en diversas técnicas.",
    image: "/spa-extra1.png",
  },
  {
    title: "Piscina Climatizada",
    desc: "Disfrute de nuestra piscina en un ambiente sereno con control de temperatura permanente, ideal para relajarse después de un día recorriendo las sierras.",
    image: "/spa.png",
  },
  {
    title: "Sauna Seco & Húmedo",
    desc: "Eliminación de toxinas y mejora de la circulación en nuestras instalaciones de vanguardia. Un paso esencial en su rutina de bienestar.",
    image: "/spa-extra2.png",
  },
  {
    title: "Tratamientos Faciales",
    desc: "Cuidado profesional para revitalizar su piel con productos de primera calidad y técnicas avanzadas de estética.",
    image: "/spa-extra3.png",
  },
];

export default function SpaPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Spa & Bienestar"
        subtitle="Relajación Absoluta"
        image="/spa.png"
      />

      <section className="section-padding">
        <div className="container">
          <div className={styles.intro}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Un Santuario de Paz
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Nuestro spa está diseñado como un refugio del estrés cotidiano.
              Ofrecemos una experiencia sensorial completa para que su única
              preocupación sea el descanso.
            </motion.p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <motion.div
                key={i}
                className={`${styles.serviceRow} ${
                  i % 2 !== 0 ? styles.reverse : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.imageCol}>
                  <img src={s.image} alt={s.title} />
                </div>
                <div className={styles.contentCol}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className={styles.divider}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
