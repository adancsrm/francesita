import Link from "next/link";
import CabeceraPagina from "@/components/CabeceraPagina";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Gracias por tu solicitud | Francés",
  description: "Recibimos tu solicitud de cotización. El equipo de Francés te contactará en menos de 24 horas hábiles.",
  robots: { index: false, follow: false },
};

export default function Gracias() {
  return (
    <>
      <CabeceraPagina miga="Gracias" eyebrow="Solicitud enviada" titulo="¡Gracias! Ya tenemos tu cotización">
        En menos de 24 horas hábiles te escribimos con precio por par, tiempo de producción y costo de
        envío. Si tu pedido es urgente, contáctanos directo por teléfono o WhatsApp.
      </CabeceraPagina>

      <section className="seccion">
        <div className="contenedor">
          <Reveal className="grupoBotones">
            <Link className="btn btnAcento" href="/">
              Volver al inicio
            </Link>
            <Link className="btn btnLinea" href="/productos">
              Seguir viendo el catálogo
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
