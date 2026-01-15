"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.background}>
        <img src="/hero-bg.png" alt="Plaza Hotel de Tandil" />
      </div>

      <div className={`container ${styles.heroContent}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.textWrapper}
        >
          <img src="/logo.png" alt="" className={styles.heroLogo} />
          <span className={styles.subtitle}>
            Bienvenidos al Corazón de Tandil
          </span>
          <h1>
            Donde la Tradición de Tandil{" "}
            <span className={styles.desktopBreak} /> Encuentra la Excelencia
          </h1>
          <p>
            Disfrute de una estadía inolvidable en el{" "}
            <strong>Plaza Hotel Tandil</strong>. Alojamiento de categoría, Spa y
            gastronomía en pleno centro de la ciudad.
          </p>

          <div className={styles.ctaWrapper}>
            <Link href="/habitaciones" className={styles.primaryBtn}>
              Ver Habitaciones
            </Link>
            <Link href="/contacto" className={styles.secondaryBtn}>
              Reservar Ahora
            </Link>
          </div>
        </motion.div>
      </div>

      <div className={styles.scrollIndicator}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className={styles.mouse}
        >
          <div className={styles.wheel}></div>
        </motion.div>
        <span>Deslizar</span>
      </div>
    </section>
  );
}
