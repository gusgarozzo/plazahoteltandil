import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import RoomsPreview from "@/components/RoomsPreview";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plaza Hotel Tandil | Alojamiento en Pleno Centro | Mejor Precio",
  description:
    "Reserve en Plaza Hotel Tandil. Ubicado frente a la plaza principal, es la mejor opción de alojamiento en Tandil. Habitaciones confortables, Spa, Restaurante y atención personalizada.",
  alternates: {
    canonical: "https://plazahoteltandil.com.ar",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Plaza Hotel Tandil",
    image: "https://plazahoteltandil.com.ar/logo.png",
    description:
      "El Plaza Hotel de Tandil ofrece una experiencia de lujo y tradición en el corazón de la ciudad. Alojamiento, Spa y Restaurante.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gral. Pinto 438",
      addressLocality: "Tandil",
      addressRegion: "Buenos Aires",
      postalCode: "B7000",
      addressCountry: "AR",
    },
    telephone: "+542494600471",
    priceRange: "$$",
    url: "https://plazahoteltandil.com.ar",
  };

  return (
    <main>
      <JsonLd data={structuredData} />
      <Navbar />
      <Hero />

      <FadeIn>
        <Experience />
      </FadeIn>

      <FadeIn>
        <RoomsPreview />
      </FadeIn>

      <FadeIn>
        <ServicesOverview />
      </FadeIn>

      <FadeIn>
        <Testimonials />
      </FadeIn>

      <FadeIn>
        <Location />
      </FadeIn>

      <Footer />
    </main>
  );
}
