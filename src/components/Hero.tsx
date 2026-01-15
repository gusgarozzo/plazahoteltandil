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
          <span className={styles.subtitle}>Plaza Hotel Tandil</span>
          <h1>
            Tu lugar en el <span className={styles.desktopBreak} />
            Centro de la Ciudad
          </h1>
          <p>
            Ubicación privilegiada frente a la plaza principal.
            <br />
            Spa, Piscina & Gastronomía.
          </p>

          <div className={styles.ctaWrapper}>
            <Link
              href="https://wa.me/5492494600471?text=Hola,%20quisiera%20reservar%20en%20el%20Plaza%20Hotel%20Tandil"
              target="_blank"
              className={styles.primaryBtn}
            >
              Consultar Disponibilidad
            </Link>
            <Link href="/habitaciones" className={styles.secondaryBtn}>
              Ver Habitaciones
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
