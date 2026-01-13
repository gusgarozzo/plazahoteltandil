"use client";

import styles from "./Testimonials.module.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ana García",
    text: "Una experiencia increíble. El spa es de primer nivel y la atención del personal te hace sentir como en casa. La ubicación es inmejorable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    text: "Las habitaciones son amplias y muy cómodas. Se nota la dedicación en mantener la elegancia clásica del hotel. Muy recomendable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena P.",
    text: "Desayuno excelente y habitaciones impecables. Es mi lugar de referencia cada vez que visito Tandil por negocios.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className={`section-padding ${styles.testimonials}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="text-gold">Nuestros Huéspedes</span>
          <h2>Opiniones Reales</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < t.rating ? "var(--secondary)" : "none"}
                    color="var(--secondary)"
                  />
                ))}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              <span className={styles.name}>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
