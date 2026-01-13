"use strict";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import styles from "./SalonCafeteria.module.css";

export default function SalonCafeteriaPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Salón & Cafetería"
        subtitle="Espacios Exclusivos"
        image="/salon.png"
      />

      <section className="section-padding">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src="/salon.png" alt="Salón de Eventos" />
              </div>
              <div className={styles.content}>
                <h2>Salón de Eventos</h2>
                <p>
                  Un espacio versátil y elegante para sus reuniones
                  corporativas, conferencias o celebraciones sociales. Contamos
                  con equipamiento audiovisual de última generación y servicio
                  de catering personalizado.
                </p>
                <ul>
                  <li>Capacidad hasta 100 personas</li>
                  <li>Climatización central</li>
                  <li>Asesoramiento integral</li>
                </ul>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src="/cafeteria.png" alt="Cafetería" />
              </div>
              <div className={styles.content}>
                <h2>Cafetería del Plaza</h2>
                <p>
                  El lugar ideal para un encuentro casual o una tarde de relax.
                  Disfrute de nuestra pastelería artesanal y el mejor café en un
                  ambiente histórico y tranquilo.
                </p>
                <ul>
                  <li>Desayunos & Meriendas</li>
                  <li>Pastelería de Autor</li>
                  <li>Ambiente Climatizado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
