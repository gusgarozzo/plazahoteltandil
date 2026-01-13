"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import styles from "./Restaurante.module.css";

export default function RestaurantePage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Restaurante & Gastronomía"
        subtitle="Sabores de Tandil"
        image="/restaurant.png"
      />

      <section className="section-padding">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.content}>
              <h2>Excelencia Culinaria</h2>
              <p>
                Nuestro restaurante ofrece una experiencia gastronómica única,
                donde la tradición local se encuentra con la alta cocina.
                Utilizamos los productos más frescos de la región de Tandil para
                crear platos inolvidables.
              </p>

              <div className={styles.menuFeature}>
                <h3>Menú de Estación</h3>
                <p>
                  Nuestra carta se renueva periódicamente para aprovechar los
                  mejores ingredientes de cada temporada.
                </p>
              </div>

              <div className={styles.menuFeature}>
                <h3>Cava Seleccionada</h3>
                <p>
                  Una exclusiva selección de vinos argentinos para acompañar
                  cada uno de nuestros platos.
                </p>
              </div>
            </div>

            <div className={styles.imageGrid}>
              <div className={styles.imageItem}>
                <img src="/restaurant.png" alt="Restaurante" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
