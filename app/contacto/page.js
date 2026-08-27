import CabeceraPagina from "@/components/CabeceraPagina";
import FormularioContacto from "@/components/FormularioContacto";
import PanelDatos from "@/components/PanelDatos";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contacto | Francesita, calcetas y calcetines escolares",
  description:
    "Escríbenos para pedidos, resurtidos o dudas sobre calcetas y calcetines Francesita. Teléfono, correo y horario de atención en la Ciudad de México.",
  alternates: { canonical: "/contacto" },
};

export default function Contacto() {
  return (
    <>
      <CabeceraPagina miga="Contacto" eyebrow="Contacto" titulo="Habla con el equipo de Francesita">
        Dudas sobre modelos, tallas, resurtidos o el estado de un pedido: escríbenos y te contestamos el
        mismo día hábil.
      </CabeceraPagina>

      <section className="seccion">
        <div className="contenedor formularioEnvoltura">
          <FormularioContacto />

          <PanelDatos titulo="Datos de contacto">
            <li>
              <strong>Dirección</strong>San Rafael Ixtapalucan, Puebla, México
              <br />
              <em>Plus Code 7CQQ+53M</em>
            </li>
            <li>
              <strong>Teléfono</strong>
              <a href="tel:+525500000000">55 0000 0000</a>
            </li>
            <li>
              <strong>WhatsApp</strong>
              <a href="https://wa.me/522228836412" target="_blank" rel="noopener">
                222 883 6412
              </a>
            </li>
            <li>
              <strong>Ventas</strong>
              <a href="mailto:ventas@francesitas.com.mx">ventas@francesitas.com.mx</a>
            </li>
            <li>
              <strong>Contacto general</strong>
              <a href="mailto:contacto@francesitas.com.mx">contacto@francesitas.com.mx</a>
            </li>
            <li>
              <strong>Horario</strong>Lunes a viernes 9:00 – 18:00
              <br />
              Sábados 9:00 – 14:00
            </li>
          </PanelDatos>
        </div>
      </section>

      <section className="seccion seccion--tenue">
        <div className="contenedor">
          <Reveal className="encabezadoSeccion">
            <span className="eyebrow">Cómo llegar</span>
            <h2>Nuestra ubicación</h2>
            <p>San Rafael Ixtapalucan, Puebla, México · Plus Code 7CQQ+53M</p>
          </Reveal>
          <Reveal className="mapaEmbed">
            <iframe
              src="https://www.google.com/maps?q=19.2879677,-98.5623398&z=16&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Francesita en San Rafael Ixtapalucan, Puebla"
            />
          </Reveal>
          <p style={{ marginTop: "1.2rem" }}>
            <a
              className="btn btnLinea"
              target="_blank"
              rel="noopener"
              href="https://www.google.com/maps/place/19%C2%B017'16.7%22N+98%C2%B033'44.4%22W/@19.2879677,-98.5649147,17z/data=!3m1!4b1!4m4!3m3!8m2!3d19.2879677!4d-98.5623398?hl=es"
            >
              Ver en Google Maps
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
