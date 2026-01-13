"use client";

import styles from "./Location.module.css";
import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section className={`section-padding ${styles.location}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <span className="text-gold">Ubicación Privilegiada</span>
            <h2>En el Corazón de Tandil</h2>
            <p>
              Nos encontramos frente a la Plaza Independencia, en el epicentro
              histórico y social de la ciudad. Un punto de partida ideal para
              explorar las sierras y el encanto urbano de Tandil.
            </p>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <MapPin className={styles.icon} />
                <div>
                  <h3>Dirección</h3>
                  <p>Gral. Pinto 438, B7000 Tandil, Argentina</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <Navigation className={styles.icon} />
                <div>
                  <h3>Cómo Llegar</h3>
                  <p>
                    A solo 5 minutos de la terminal de ómnibus y con fácil
                    acceso desde las rutas principales.
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir//Plaza+Hotel+Tandil,+Gral.+Pinto+438,+B7000+Tandil,+Provincia+de+Buenos+Aires/@-37.328328,-59.136709,16z"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapBtn}
            >
              Ver en Google Maps
            </a>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              src="https://maps.google.com/maps?q=Hotel%20Plaza%20-%20Pinto%20438%20-%20Tandil%20-%20Provincia%20de%20Buenos%20Aires%20-%20Argentina&t=m&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
