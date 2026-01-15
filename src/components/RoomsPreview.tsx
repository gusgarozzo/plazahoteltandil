"use client";

import { motion } from "framer-motion";
import styles from "./RoomsPreview.module.css";
import Link from "next/link";
import { Coffee, Tv, Wifi, Wind } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Suite Ejecutiva",
    image: "/room-suite.png",
    useCase: "Ideal para parejas y estadías de lujo",
    features: ["Vista Ciudad", "King Size", "Sala de Estar"],
  },
  {
    id: 2,
    name: "Habitación Matrimonial",
    image: "/room-double.png",
    useCase: "Confort superior y descanso asegurado",
    features: ["Cama Queen", "Escritorio", "Frigobar"],
  },
  {
    id: 3,
    name: "Habitación Single Premium",
    image: "/room-single.png",
    useCase: "Perfecta para viajes de negocios",
    features: ["Cama Single", "Wifi High-Speed", "Escritorio"],
  },
];

export default function RoomsPreview() {
  return (
    <section className={`section-padding ${styles.rooms}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="text-gold">Alojamiento Exclusivo</span>
          <h2>Habitaciones & Suites</h2>
          <p>
            Espacios diseñados para el bienestar. Encuentre la opción perfecta
            para su estadía en Tandil.
          </p>
        </div>

        <div className={styles.grid}>
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              whileHover={{ y: -10 }}
              className={styles.roomCard}
            >
              <div className={styles.imageWrapper}>
                <img src={room.image} alt={room.name} />
              </div>
              <div className={styles.content}>
                <h3>{room.name}</h3>
                <p className={styles.useCase}>{room.useCase}</p>
                <div className={styles.amenities}>
                  <div className={styles.featureItem}>
                    <span className={styles.featureLabel}>Capacidad:</span>{" "}
                    {room.features[0]}
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.featureLabel}>Destacado:</span>{" "}
                    {room.features[1]}
                  </div>
                </div>
                {/* 
                <div className={styles.amenitiesIcons}>
                  <Wifi size={18} />
                  <Tv size={18} />
                  <Coffee size={18} />
                  <Wind size={18} />
                </div> 
                */}

                <Link href="/habitaciones" className={styles.cardBtn}>
                  Ver Disponibilidad
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/habitaciones" className={styles.viewAllBtn}>
            Explorar Todas las Habitaciones
          </Link>
        </div>
      </div>
    </section>
  );
}
