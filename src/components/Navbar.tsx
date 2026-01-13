"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ""}`}
    >
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <img
            src="/logo.png"
            alt="Plaza Hotel Tandil"
            className={styles.logoImg}
          />
        </Link>

        <ul className={styles.navLinks}>
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
          <li>
            <Link href="/contacto" className={styles.contactBtn}>
              Reservar
            </Link>
          </li>
        </ul>

        <div className={styles.mobileMenuBtn}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
