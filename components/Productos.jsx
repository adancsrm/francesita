import Link from "next/link";
import Reveal from "./Reveal";
import ProductosGaleria from "./ProductosGaleria";
import styles from "./Productos.module.css";

const PRODUCTOS = [
  {
    etiqueta: "Más pedida",
    nombre: "Calceta escolar alta",
    descripcion:
      "La clásica hasta la rodilla, con puño reforzado y opción de rayas en color institucional.",
    tallas: "12 – 26",
    color: "#F1F3F2",
    cuffColor: "#F1F3F2",
    piernaLarga: true,
    liso: true,
  },
  {
    nombre: "Calceta tobillera",
    descripcion:
      "Corte bajo para uniforme de diario y clima cálido. Punto liso, blanco o color.",
    tallas: "12 – 24",
    color: "#B5B8BC",
    cuffColor: "#2C3B7E",
  },
  {
    nombre: "Calceta deportiva",
    descripcion:
      "Con suela acolchada y refuerzo en talón y punta, para la clase de educación física.",
    tallas: "14 – 26",
    color: "#0D1230",
    cuffColor: "#EC1F26",
  },
  {
    nombre: "Calcetín de vestir",
    descripcion:
      "Tejido fino para uniforme formal de secundaria, preparatoria y personal docente.",
    tallas: "22 – 30",
    color: "#EC1F26",
    cuffColor: "#0D1230",
  },
];

export default function Productos() {
  return (
    <section className={`seccion ${styles.seccion}`}>
      <div className="contenedor">
        <Reveal className={styles.encabezado} stagger={0.08}>
          <span className="eyebrow">Nuestros productos</span>
          <h2>Calcetas y calcetines para cada uniforme</h2>
          <p>
            Cuatro líneas de producción, todas disponibles en color
            institucional y con la talla que pida tu plantel.
          </p>
        </Reveal>

        <ProductosGaleria productos={PRODUCTOS} />

        <Reveal className={styles.cta} y={16}>
          <Link className="btn btnPrimario" href="/productos">
            Ver el catálogo completo
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
