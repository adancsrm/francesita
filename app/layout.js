import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Asistente from "@/components/Asistente";
import CursorOrbe from "@/components/CursorOrbe";
import { SITIO_URL, NOMBRE_SITIO, NOMBRES_ALTERNOS, PALABRAS_CLAVE_BASE, IMAGEN_PREDETERMINADA } from "@/lib/metadatos";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2C3B7E",
};

const TITULO = "Calcetas Francés | Fábrica de calcetas y calcetines en México";
const DESCRIPCION =
  "Calcetas Francés: del hilo a la caja, fabricamos calcetas, calcetines y tines de alta calidad para todas las edades. Maquila con tu diseño y tu etiqueta. Cotiza por mayoreo.";

export const metadata = {
  metadataBase: new URL(SITIO_URL),
  title: TITULO,
  description: DESCRIPCION,
  applicationName: NOMBRE_SITIO,
  keywords: PALABRAS_CLAVE_BASE,
  category: "Calcetería: calcetas, calcetines y tines",
  creator: NOMBRE_SITIO,
  publisher: NOMBRE_SITIO,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: "/img/LogoFrances.jpeg", type: "image/jpeg" }],
  },
  openGraph: {
    title: TITULO,
    description: DESCRIPCION,
    type: "website",
    locale: "es_MX",
    siteName: NOMBRE_SITIO,
    images: [IMAGEN_PREDETERMINADA],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRIPCION,
    images: [IMAGEN_PREDETERMINADA],
  },
};

const jsonLdEmpresa = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITIO_URL}/#empresa`,
  name: NOMBRE_SITIO,
  alternateName: NOMBRES_ALTERNOS,
  url: SITIO_URL,
  logo: `${SITIO_URL}/img/LogoFrances.jpeg`,
  image: `${SITIO_URL}${IMAGEN_PREDETERMINADA.url}`,
  description: DESCRIPCION,
  foundingDate: "1994",
  email: "ventas@calcetasfrances.com",
  telephone: "+52 248 688 7054",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Rafael Ixtapalucan",
    addressRegion: "Puebla",
    addressCountry: "MX",
  },
  knowsAbout: ["calcetas", "calcetines", "tines", "calcetas escolares", "tejido de punto"],
  keywords: PALABRAS_CLAVE_BASE.join(", "),
};

// Google toma de aquí el nombre que muestra arriba del enlace en los resultados.
const jsonLdSitio = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITIO_URL}/#sitio`,
  name: NOMBRE_SITIO,
  alternateName: NOMBRES_ALTERNOS,
  url: `${SITIO_URL}/`,
  inLanguage: "es-MX",
  publisher: { "@id": `${SITIO_URL}/#empresa` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX" data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEmpresa).replace(/</g, "\\u003c") }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSitio).replace(/</g, "\\u003c") }}
        />
        <a className="saltaContenido" href="#contenido">
          Saltar al contenido
        </a>
        <CursorOrbe />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <Asistente />
      </body>
    </html>
  );
}
