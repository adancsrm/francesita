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
          <h2>Una fábrica mexicana dedicada solo a calcetas y calcetines</h2>
          <p>
            Francés nació como un taller familiar de tejido de punto y hoy
            surte a escuelas y uniformerías de varios estados del país.
            Hacemos una sola cosa y la hacemos completa: del hilo a la caja,
            sin intermediarios.
          </p>
          <ul className={styles.lista}>
            <li>
              Algodón peinado de 70 a 80% para que la calceta respire y no dé
              comezón.
            </li>
            <li>
              Lycra en el puño para que no se venza a media jornada escolar.
            </li>
            <li>Revisión par por par antes de empacar.</li>
          </ul>
          <Link className="btn btnLinea" href="/nosotros">
            Ver más sobre Francés
          </Link>
        </Reveal>

        <Reveal x={32} y={0} delay={0.1} className={styles.mediaWrap}>
          <TiltCard className={styles.media} intensity={6}>
            <Image
              src="/img/EscolarFrancesitaNinas-blanco.jpeg"
              alt="Producción de calcetas Francesita en México"
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
