import Link from "next/link";
import Reveal from "./Reveal";
import styles from "./CabeceraPagina.module.css";

export default function CabeceraPagina({ miga, eyebrow, titulo, children }) {
  return (
    <header className={styles.cabecera}>
      <div className="contenedor">
        <p className={styles.migas}>
          <Link href="/">Inicio</Link> / {miga}
        </p>
        <Reveal as="span" className="eyebrow" y={10}>
          {eyebrow}
        </Reveal>
        <Reveal as="h1" y={20} delay={0.05}>
          {titulo}
        </Reveal>
        {children && (
          <Reveal as="p" className={styles.texto} y={16} delay={0.12}>
            {children}
          </Reveal>
        )}
      </div>
    </header>
  );
}
