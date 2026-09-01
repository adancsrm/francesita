import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Asistente from "@/components/Asistente";
import CursorOrbe from "@/components/CursorOrbe";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2C3B7E",
};

export const metadata = {
  metadataBase: new URL("https://www.calcetasfrances.com"),
  title: "Calcetas y calcetines escolares Francés | Fabricante en México",
  description:
    "Francés fabrica calcetas escolares y calcetines de algodón con lycra para escuelas, uniformerías y distribuidores en México. Cotiza tu pedido por mayoreo.",
  icons: {
    icon: [{ url: "/img/LogoFrances.jpeg", type: "image/jpeg" }],
  },
  openGraph: {
    title: "Calcetas y calcetines escolares Francés | Fabricante en México",
    description:
      "Francés fabrica calcetas escolares y calcetines de algodón con lycra para escuelas, uniformerías y distribuidores en México. Cotiza tu pedido por mayoreo.",
    type: "website",
    locale: "es_MX",
    siteName: "Francés",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX" data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
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
