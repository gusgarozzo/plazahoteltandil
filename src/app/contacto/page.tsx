import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import styles from "./Contacto.module.css";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contacto | Plaza Hotel Tandil",
  description:
    "Contáctenos para reservas y consultas en Plaza Hotel Tandil. Teléfono, email y ubicación en el centro de la ciudad.",
};

export default function ContactoPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Plaza Hotel Tandil",
    telephone: "+542494600471",
    email: "plazahoteltandil@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gral. Pinto 438",
      addressLocality: "Tandil",
      addressRegion: "Buenos Aires",
      postalCode: "B7000",
      addressCountry: "AR",
    },
  };

  return (
    <main>
      <JsonLd data={structuredData} />
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
              <ContactForm />
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
                    <span>0249 460-0471</span>
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
