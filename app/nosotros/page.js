import Link from "next/link";
import CabeceraPagina from "@/components/CabeceraPagina";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import BloqueDos from "@/components/BloqueDos";
import { MediaImagen } from "@/components/Media";
import CtaFinal from "@/components/CtaFinal";
import styles from "./page.module.css";

export const metadata = {
  title: "Quiénes somos: misión, visión e historia | Francesita",
  description:
    "Conoce la misión, visión e historia de Francesita: taller mexicano de tejido de punto especializado en calcetas escolares y calcetines de algodón con lycra.",
  alternates: { canonical: "/nosotros" },
};

export default function Nosotros() {
  return (
    <>
      <CabeceraPagina miga="Quiénes somos" eyebrow="Quiénes somos" titulo="Nuestra misión, visión e historia">
        Esto es lo que nos mueve todos los días en el taller: hacia dónde vamos, y de dónde venimos.
      </CabeceraPagina>

      <section className="seccion">
        <div className="contenedor">
          <div className={`rejilla rejilla--2 ${styles.rejilla}`}>
            <Reveal>
              <TiltCard as="article" className={styles.tarjeta} intensity={6}>
                <div className={styles.cuerpo}>
                  <h3>Misión</h3>
                  <p>
                    Fabricar y distribuir calcetas de calidad que combinen comodidad, durabilidad y
                    estilo, ofreciendo productos accesibles para cada necesidad. Trabajamos para brindar
                    un servicio confiable y cercano, atendiendo tanto al consumidor individual como a
                    nuestros clientes mayoristas, contribuyendo al crecimiento de sus negocios y llevando
                    nuestros productos a cada vez más personas.
                  </p>
                </div>
              </TiltCard>
            </Reveal>
            <Reveal delay={0.1}>
              <TiltCard as="article" className={styles.tarjeta} intensity={6}>
                <div className={styles.cuerpo}>
                  <h3>Visión</h3>
                  <p>
                    Ser una marca referente en la fabricación y distribución de calcetas en México,
                    reconocida por la calidad de nuestros productos, la confianza de nuestros clientes y
                    nuestra capacidad para ofrecer soluciones competitivas al mercado mayorista. Buscamos
                    crecer de manera constante, ampliar nuestra presencia y consolidarnos como una empresa
                    mexicana líder dentro de la industria de la confección y comercialización de prendas.
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      <BloqueDos
        tenue
        invertido
        media={
          <MediaImagen
            src="/img/EscolarFrancesitaNinas.jpeg"
            alt="Taller de Francesita donde se tejen las calcetas escolares"
            aspecto="1127 / 1111"
          />
        }
      >
        <span className="eyebrow">Nuestra historia</span>
        <h2>De un taller familiar a proveedor de escuelas</h2>
        <p>
          Francesita empezó con dos telares y un pedido pequeño para la escuela del barrio. Las mamás
          regresaban por más porque las calcetas duraban el ciclo completo, y esa recomendación de boca
          en boca fue el primer catálogo que tuvimos.
        </p>
        <p>
          Hoy producimos para colegios, uniformerías y distribuidores de varios estados, con el mismo
          criterio del primer día: si una calceta no pasaría en el uniforme de nuestros hijos, no sale
          de la fábrica.
        </p>
        <p className={styles.nota}>
          <em>
            Nota para el cliente: este texto es una propuesta editorial. Cuéntanos el año de fundación y
            los datos reales de la empresa y lo ajustamos.
          </em>
        </p>
      </BloqueDos>

      <BloqueDos
        media={
          <MediaImagen
            src="/img/EscolarFrancesitaNinas-blanco1.jpeg"
            alt="Tejido de algodón peinado con lycra de las calcetas Francesita"
            aspecto="1127 / 1111"
          />
        }
      >
        <span className="eyebrow">Materiales</span>
        <h2>Por qué nuestras calcetas no se vencen</h2>
        <p>
          La diferencia entre una calceta que dura y una que se afloja a la tercera lavada está en la
          mezcla del hilo y en el remate del puño. Estos son los nuestros:
        </p>
        <ul className="listaCheck">
          <li>
            <strong>Algodón peinado 70–80%.</strong> Absorbe humedad, respira y no raspa la piel.
          </li>
          <li>
            <strong>Poliéster.</strong> Da cuerpo al tejido y sostiene el color lavada tras lavada.
          </li>
          <li>
            <strong>Lycra elastano.</strong> Devuelve la calceta a su forma después de cada uso.
          </li>
          <li>
            <strong>Puño de doble remate.</strong> Se queda arriba sin apretar la pierna.
          </li>
        </ul>
        <Link className="btn btnLinea" href="/productos">
          Ver calcetas y calcetines
        </Link>
      </BloqueDos>

      <CtaFinal />
    </>
  );
}
