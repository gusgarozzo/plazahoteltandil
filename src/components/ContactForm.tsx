"use client";

import styles from "../app/contacto/Contacto.module.css";

export default function ContactForm() {
  return (
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
  );
}
