"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <div
          className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.menuOpen : ""
          }`}
        >
          <ul className={styles.mobileLinks}>
            <li>
              <Link href="/" onClick={toggleMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/habitaciones" onClick={toggleMenu}>
                Habitaciones
              </Link>
            </li>
            <li>
              <Link href="/restaurante" onClick={toggleMenu}>
                Restaurante
              </Link>
            </li>
            <li>
              <Link href="/spa" onClick={toggleMenu}>
                Spa
              </Link>
            </li>
            <li>
              <Link href="/salon-cafeteria" onClick={toggleMenu}>
                Salón & Cafetería
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className={styles.contactBtn}
                onClick={toggleMenu}
              >
                Reservar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
