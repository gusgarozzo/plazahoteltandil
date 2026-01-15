"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import styles from "./Habitaciones.module.css";
import { Coffee, Tv, Wifi, Wind, Bath, ShieldCheck } from "lucide-react";

const allRooms = [
  {
    id: 1,
    name: "Suite Ejecutiva Premium",
    image: "/room-suite.png",
    description:
      "Nuestra suite más exclusiva, diseñada para quienes buscan el máximo confort y privacidad. Cuenta con una amplia sala de estar independiente y vistas panorámicas a la ciudad.",
    amenities: [
      "Cama King Size",
      "Sala de Estar",
      "Escritorio Premium",
      "Cafetera Nespresso",
      'Smart TV 55"',
      "Bañera de Hidromasaje",
      "Wifi Alta Velocidad",
    ],
  },
  {
    id: 2,
    name: "Habitación Doble Matrimonial",
    image: "/room-double.png",
    description:
      "Perfecta para parejas, esta habitación combina elegancia y calidez. Equipada con todo lo necesario para una estancia relajante y placentera.",
    amenities: [
      "Cama Queen Size",
      "Climatización Individual",
      "Frigobar",
      'Smart TV 43"',
      "Cofre de Seguridad",
      "Secador de Cabello",
    ],
  },
  {
    id: 3,
    name: "Habitación Twin Estándar",
    image: "/room-double.png",
    description:
      "Ideal para viajes de negocios o amigos. Dos camas individuales de alta calidad y un ambiente funcional y acogedor.",
    amenities: [
      "2 Camas Sommier",
      "Wifi de Cortesía",
      "Escritorio de Trabajo",
      "Climatización",
      "Frigobar",
    ],
  },
];

export default function HabitacionesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Nuestras Habitaciones"
        subtitle="Confort & Elegancia"
        image="/room-suite.png"
      />

      <section className={`section-padding ${styles.roomsList}`}>
        <div className="container">
          {allRooms.map((room, idx) => (
            <div
              key={room.id}
              className={`${styles.roomRow} ${
                idx % 2 !== 0 ? styles.reverse : ""
              }`}
            >
              <div className={styles.imageCol}>
                <img src={room.image} alt={room.name} />
              </div>
              <div className={styles.infoCol}>
                <h2>{room.name}</h2>
                <p>{room.description}</p>
                <div className={styles.amenitiesGrid}>
                  {room.amenities.map((item, i) => (
                    <div key={i} className={styles.amenity}>
                      <ShieldCheck size={16} className="text-gold" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/5492494600471?text=Hola,%20quisiera%20consultar%20disponibilidad%20en%20el%20Plaza%20Hotel%20Tandil%20para%20la%20habitación:%20${encodeURIComponent(
                    room.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bookBtn}
                >
                  Consultar Disponibilidad
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
