import Link from "next/link";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import styles from "./CtaFinal.module.css";

export default function CtaFinal() {
  return (
    <section className="seccion">
      <div className="contenedor">
        <Reveal as="div" scale={0.94} y={0} className={styles.cta}>
          <div>
            <h2>¿Listo para surtir las calcetas de tu negocio?</h2>
            <p>
              Mándanos modelo, tallas y cantidad. Te devolvemos precio por
              par, tiempo de producción y muestra física sin costo.
            </p>
          </div>
          <div className="grupoBotones">
            <Magnetic>
              <Link className="btn btnAcento" href="/cotizacion">
                Cotiza ahora
              </Link>
            </Magnetic>
            <Magnetic>
              <Link className="btn btnClaro" href="/contacto">
                Hablar con ventas
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
