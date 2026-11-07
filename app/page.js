import Hero from "@/components/Hero";
import TrustTicker from "@/components/TrustTicker";
import Nosotros from "@/components/Nosotros";
import Proceso from "@/components/Proceso";
import Testimonios from "@/components/Testimonios";
import CtaFinal from "@/components/CtaFinal";
import { crearMetadatos } from "@/lib/metadatos";

export const metadata = crearMetadatos({
  titulo: "Calcetas Francés | Fábrica de calcetas y calcetines en México",
  descripcion:
    "Calcetas Francés: del hilo a la caja, fabricamos calcetas, calcetines y tines de alta calidad para todas las edades. Maquila con tu diseño y tu etiqueta. Cotiza por mayoreo.",
  ruta: "/",
  palabrasClave: ["calcetas escolares", "calcetines de algodón con lycra", "tines de algodón", "uniformerías"],
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustTicker />
      <Nosotros />
      <Proceso />
      <Testimonios />
      <CtaFinal />
    </>
  );
}
