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
    features: ["Vista Ciudad", "King Size", "Sala de Estar"],
  },
  {
    id: 2,
    name: "Habitación Matrimonial",
    image: "/room-double.png",
    features: ["Cama Queen", "Escritorio", "Frigobar"],
  },
  {
    id: 3,
    name: "Habitación Single Premium",
    image: "/room-single.png",
    features: ["Cama Single", "Ideal Business", "Wifi High-Speed"],
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
            Cada una de nuestras habitaciones está diseñada para ofrecer el
            máximo confort y elegancia.
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
                <ul className={styles.features}>
                  {room.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.amenities}>
                  <Wifi size={18} />
                  <Tv size={18} />
                  <Coffee size={18} />
                  <Wind size={18} />
                </div>
                <Link href="/habitaciones" className={styles.cardBtn}>
                  Ver Detalles
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
