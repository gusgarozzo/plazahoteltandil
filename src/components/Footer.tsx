import Link from "next/link";
import styles from "./Footer.module.css";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandInfo}>
          <Link href="/" className={styles.logo}>
            <img
              src="/logo.png"
              alt="Plaza Hotel Tandil"
              className={styles.logoImg}
            />
          </Link>
          <p className={styles.description}>
            Tradición y modernidad en el corazón de Tandil. Un espacio diseñado
            para el descanso y la excelencia.
          </p>
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/plazahoteltandil/?hl=es"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className={styles.linksColumn}>
          <h3>Navegación</h3>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/habitaciones">Habitaciones</Link>
            </li>
            <li>
              <Link href="/restaurante">Restaurante</Link>
            </li>
            <li>
              <Link href="/spa">Spa</Link>
            </li>
            <li>
              <Link href="/salon-cafeteria">Salón & Cafetería</Link>
            </li>
          </ul>
        </div>

        <div className={styles.linksColumn}>
          <h3>Servicios</h3>
          <ul>
            <li>
              <Link href="/habitaciones">Suite Ejecutiva</Link>
            </li>
            <li>
              <Link href="/habitaciones">Suite Matrimonial</Link>
            </li>
            <li>
              <Link href="/restaurante">Menú Ejecutivo</Link>
            </li>
            <li>
              <Link href="/spa">Tratamientos Spa</Link>
            </li>
          </ul>
        </div>

        <div className={styles.contactColumn}>
          <h3>Contacto</h3>
          <ul>
            <li>
              <MapPin size={18} className={styles.icon} />
              <span>Gral. Pinto 438, Tandil, Argentina</span>
            </li>
            <li>
              <Phone size={18} className={styles.icon} />
              <span>+54 2494600471</span>
            </li>
            <li>
              <Mail size={18} className={styles.icon} />
              <span>plazahoteltandil@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Plaza Hotel de Tandil. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
