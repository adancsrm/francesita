import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import styles from "./Nosotros.module.css";

export default function Nosotros() {
  return (
    <section className={`seccion ${styles.seccion}`} id="nosotros">
      <div className={`contenedor ${styles.grid}`}>
        <Reveal x={-32} y={0}>
          <span className="eyebrow">Quiénes somos</span>
          <h2>Calcetas hechas en México, con más de 25 años de oficio.</h2>
          <p>
            Francés nació como un taller familiar y hoy es una fábrica que
            surte a marcas, distribuidores y escuelas de todo el país. Hacemos
            una sola cosa, y la hacemos completa: del hilo a la caja, sin
            intermediarios.
          </p>
          <h3 className={styles.subtitulo}>Por qué elegirnos</h3>
          <ul className={styles.lista}>
            <li>
              <strong>Materiales de alta calidad.</strong> Seleccionamos cada
              hilo pensando en la comodidad y la durabilidad.
            </li>
            <li>
              <strong>Revisión par por par.</strong> Cada calceta se
              inspecciona antes de empacarse.
            </li>
            <li>
              <strong>Fabricación 100% mexicana.</strong> Control total del
              proceso, con tiempos y precios directos de fábrica.
            </li>
            <li>
              <strong>Te ayudamos a crear tu marca.</strong> Si quieres vender
              calcetas con tu propio nombre, te acompañamos desde el diseño
              hasta la entrega.
            </li>
          </ul>
          <p className={styles.cierre}>
            ¿Listo para trabajar con nosotros?{" "}
            <Link href="/cotizacion">Escríbenos y cotiza hoy.</Link>
          </p>
          <Link className="btn btnLinea" href="/nosotros">
            Ver más sobre Francés
          </Link>
        </Reveal>

        <Reveal x={32} y={0} delay={0.1} className={styles.mediaWrap}>
          <TiltCard className={styles.media} intensity={6}>
            <Image
              src="/img/InicioFabrica.jpg"
              alt="Fábrica de calcetas, calcetines y tines Francés en México"
              fill
              sizes="(max-width: 680px) 100vw, 50vw"
              className={styles.imagen}
            />
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
