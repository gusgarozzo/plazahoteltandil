import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Plaza Hotel Tandil",
    default: "Plaza Hotel en Tandil | Alojamiento, Spa y Restaurante",
  },
  description:
    "Descubra el Plaza Hotel de Tandil. El hotel más emblemático ubicado en pleno centro. Habitaciones exclusivas, Spa, Restaurante y salones para eventos en Tandil.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://plazahoteltandil.com.ar",
    siteName: "Plaza Hotel Tandil",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
