import CabeceraPagina from "@/components/CabeceraPagina";
import FormularioCotizacion from "@/components/FormularioCotizacion";
import PanelDatos from "@/components/PanelDatos";

export const metadata = {
  title: "Cotiza calcetas y calcetines por mayoreo | Francés",
  description:
    "Solicita tu cotización de calcetas escolares y calcetines Francés. Indica modelo, tallas y cantidad y recibe precio por par en menos de 24 horas hábiles.",
  alternates: { canonical: "/cotizacion" },
};

export default function Cotizacion() {
  return (
    <>
      <CabeceraPagina miga="Cotización" eyebrow="Cotización" titulo="Cotiza tus calcetas y calcetines Francés">
        Llena el formulario con el modelo, las tallas y la cantidad que necesitas. Te devolvemos precio
        por par, tiempo de producción y costo de envío en menos de 24 horas hábiles.
      </CabeceraPagina>

      <section className="seccion">
        <div className="contenedor formularioEnvoltura">
          <FormularioCotizacion />

          <PanelDatos titulo="¿Prefieres hablarlo?">
            <li>
              <strong>Ventas</strong>
              <a href="mailto:ventas@calcetasfrances.com">ventas@calcetasfrances.com</a>
            </li>
            <li>
              <strong>Teléfono</strong>
              <a href="tel:+522228836412">222 883 6412</a>
            </li>
            <li>
              <strong>WhatsApp</strong>
              <a href="https://wa.me/522228836412" target="_blank" rel="noopener">
                222 883 6412
              </a>
            </li>
            <li>
              <strong>Horario</strong>Lunes a viernes 9:00 – 18:00
              <br />
              Sábados 9:00 – 14:00
            </li>
            <li>
              <strong>Tiempo de respuesta</strong>Menos de 24 horas hábiles
            </li>
          </PanelDatos>
        </div>
      </section>
    </>
  );
}
