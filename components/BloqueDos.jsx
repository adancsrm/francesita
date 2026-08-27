import Reveal from "./Reveal";
import styles from "./BloqueDos.module.css";

/**
 * Bloque de dos columnas (texto + imagen), como en el sitio original.
 * `media` es cualquier nodo (MediaImagen / MediaCruzada); `children` es el
 * texto. Con `invertido` la imagen pasa a la derecha.
 */
export default function BloqueDos({ id, tenue, invertido, media, children, extra }) {
  return (
    <section className={`seccion ${tenue ? "seccion--tenue" : ""}`} id={id}>
      <div className={`contenedor ${styles.grid} ${invertido ? styles.invertido : ""}`}>
        <Reveal x={invertido ? 28 : -28} y={0} className={styles.media}>
          {media}
        </Reveal>
        <Reveal x={invertido ? -28 : 28} y={0} delay={0.1}>
          {children}
        </Reveal>
      </div>
      {extra}
    </section>
  );
}
