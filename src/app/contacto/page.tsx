"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import styles from "./Contacto.module.css";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactoPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Contacto & Reservas"
        subtitle="Estamos para Ayudarle"
        image="/room-suite.png"
      />

      <section className="section-padding">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.formCol}>
              <h2>Envíenos su consulta</h2>
              <form
                className={styles.form}
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get("name");
                  const email = formData.get("email");
                  const subject = formData.get("subject");
                  const message = formData.get("message");
                  const body = `Nombre: ${name}%0D%0AEmail: ${email}%0D%0AAsunto: ${subject}%0D%0AMensaje: ${message}`;
                  window.location.href = `mailto:plazahoteltandil@gmail.com?subject=Consulta Web: ${subject}&body=${body}`;
                }}
              >
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ej: Juan Pérez"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ejemplo@correo.com"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Asunto</label>
                  <select id="subject" name="subject">
                    <option>Consulta General</option>
                    <option>Reserva de Habitaciones</option>
                    <option>Eventos & Salón</option>
                    <option>Spa & Bienestar</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Cuéntenos cómo podemos ayudarle..."
                  ></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Enviar Mensaje
                </button>
              </form>
            </div>

            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <h3>Información de Contacto</h3>
                <ul className={styles.contactList}>
                  <li>
                    <MapPin className={styles.icon} />
                    <span>Gral. Pinto 438, Tandil, Argentina</span>
                  </li>
                  <li>
                    <Phone className={styles.icon} />
                    <span>+54 2494600471</span>
                  </li>
                  <li>
                    <Mail className={styles.icon} />
                    <span>plazahoteltandil@gmail.com</span>
                  </li>
                </ul>
              </div>

              <div className={styles.hoursCard}>
                <h3>Horarios</h3>
                <p>
                  <strong>Recepción:</strong> 24hs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
