"use client";

import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={`section-padding ${styles.experience}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.textContent}>
          <span className="text-gold">Nuestra Historia</span>
          <h2>Una Experiencia con historia</h2>
          <p>
            Situado en el corazón de Tandil, el Plaza Hotel ha sido testigo de
            la evolución de nuestra ciudad. Combinamos la elegancia
            arquitectónica de antaño con todas las comodidades de un hotel de
            lujo contemporáneo.
          </p>
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <h3>Ubicación Central</h3>
              <p>
                Frente a la plaza principal, cerca de los puntos de interés más
                importantes.
              </p>
            </div>
            <div className={styles.featureItem}>
              <h3>Atención Personalizada</h3>
              <p>Nuestro equipo está dedicado a hacer su estancia memorable.</p>
            </div>
          </div>
        </div>
        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <img src="/lobby.png" alt="Plaza Hotel Lobby" />
          </div>
          <div className={styles.experienceBox}>
            <span className={styles.years}>+40</span>
            <p>Años de Tradición</p>
          </div>
        </div>
      </div>
    </section>
  );
}
