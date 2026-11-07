import Reveal from "./Reveal";
import Contador from "./Contador";
import Hero3D from "./three/Hero3D";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero-3d-ancla" className={styles.hero}>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <Reveal as="span" className="eyebrow" y={12}>
            Fabricantes desde 1998
          </Reveal>
          <Reveal as="h1" y={22} delay={0.05}>
            <em className={styles.enfasis}>Calcetas Francés</em>
          </Reveal>
          <Reveal as="p" className={styles.texto} y={18} delay={0.12}>
            Del hilo a la caja, fabricamos calcetas y calcetines de la más
            alta calidad para todas las edades. ¿Tienes una marca o quieres
            crear la tuya? Producimos con tu diseño y tu etiqueta.
          </Reveal>

          <Reveal
            className={styles.datos}
            y={18}
            delay={0.24}
            stagger={0.08}
          >
            <div>
              <Contador className={styles.dato} valor="+ 25 años" />
              <span>tejiendo en México</span>
            </div>
            <div>
              <Contador className={styles.dato} valor="20 docenas" />
              <span>de pedido mínimo</span>
            </div>
            <div>
              <Contador className={styles.dato} valor="- 24 horas" />
              <span>para recibir tu cotización</span>
            </div>
          </Reveal>
        </div>

        <Reveal as="figure" className={styles.figura} x={30} y={0} delay={0.1}>
          <Hero3D />
        </Reveal>
      </div>
    </section>
  );
}
