"use client";

import styles from "./ServicesOverview.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesOverview() {
  return (
    <section className={`section-padding ${styles.services}`}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.serviceItem}
          >
            <div className={styles.imageWrapper}>
              <img src="/spa.png" alt="Spa & Relax" />
            </div>
            <div className={styles.content}>
              <span className="text-gold">Bienestar</span>
              <h2>Spa & Relax</h2>
              <p>
                Sumérjase en la tranquilidad absoluta. Nuestra zona de spa
                cuenta con piscina climatizada, sauna y una variedad de
                tratamientos diseñados para renovar cuerpo y mente.
              </p>
              <Link href="/spa" className={styles.link}>
                Descubrir Spa
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${styles.serviceItem} ${styles.reverse}`}
          >
            <div className={styles.imageWrapper}>
              <img src="/restaurant.png" alt="Gastronomía" />
            </div>
            <div className={styles.content}>
              <span className="text-gold">Gastronomía</span>
              <h2>Restaurante & Bar</h2>
              <p>
                Una propuesta culinaria que destaca los sabores locales con un
                toque internacional. Disfrute de nuestro menú ejecutivo y una
                selecta carta de vinos en un ambiente distinguido.
              </p>
              <Link href="/restaurante" className={styles.link}>
                Ver Menú
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
