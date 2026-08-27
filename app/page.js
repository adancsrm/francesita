import Hero from "@/components/Hero";
import TrustTicker from "@/components/TrustTicker";
import Nosotros from "@/components/Nosotros";
import Productos from "@/components/Productos";
import Proceso from "@/components/Proceso";
import Testimonios from "@/components/Testimonios";
import CtaFinal from "@/components/CtaFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustTicker />
      <Nosotros />
      <Productos />
      <Proceso />
      <Testimonios />
      <CtaFinal />
    </>
  );
}
