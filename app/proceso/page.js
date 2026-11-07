import CabeceraPagina from "@/components/CabeceraPagina";
import BloqueDos from "@/components/BloqueDos";
import { MediaImagen } from "@/components/Media";
import CtaFinal from "@/components/CtaFinal";
import Reveal from "@/components/Reveal";
import VideoDiferido from "@/components/VideoDiferido";
import styles from "./page.module.css";
import { crearMetadatos } from "@/lib/metadatos";

export const metadata = crearMetadatos({
  titulo: "Nuestro proceso de fabricación de calcetas | Calcetas Francés",
  descripcion:
    "Conoce las 7 etapas con las que fabricamos las calcetas Francés: maquinado, rematado, volteo, hormado, pareo y etiquetado, empaquetado y envío.",
  ruta: "/proceso",
  imagen: {
    url: "/img/Proceso/1_Maquinado.jpg",
    alt: "Hilera de máquinas circulares tejiendo calcetas y calcetines en la fábrica Francés",
  },
  palabrasClave: [
    "fabricación de calcetas",
    "cómo se hacen los calcetines",
    "tejido de calcetas",
    "máquinas circulares de calcetín",
  ],
});

// Las fotografías de cada etapa viven en /public/img/Proceso/, numeradas
// según la etapa (1_Maquinado.jpg … 7_Envio.jpg). `aspecto` sigue la
// orientación de la foto. Si `foto` es null se muestra un espacio reservado.
const ETAPAS = [
  {
    id: "maquinado",
    titulo: "Maquinado",
    foto: "/img/Proceso/1_Maquinado.jpg",
    aspecto: "3 / 4",
    alt: "Hilera de máquinas circulares tejiendo calcetas y calcetines en la fábrica Francés",
    texto: [
      "Todo empieza en el telar. Nuestras máquinas circulares tejen la calceta en una sola pieza, desde el puño hasta la punta, con la mezcla de algodón, poliéster y lycra que le da suavidad, cuerpo y elasticidad.",
      "Cada máquina se programa con el modelo, la talla, el color y el diseño del pedido, para que todas las piezas salgan con la misma medida y el mismo tejido.",
    ],
  },
  {
    id: "rematado",
    titulo: "Rematado",
    foto: "/img/Proceso/2_Remate.jpg",
    aspecto: "3 / 4",
    alt: "Operarias rematando la punta de las calcetas en máquina remalladora",
    texto: [
      "La calceta sale del telar abierta por la punta. En el rematado se cierra con una costura fina y pareja que no lastima los dedos ni se abre con el uso.",
      "Un buen remate es lo que hace que la calceta aguante lavada tras lavada sin desbaratarse.",
    ],
  },
  {
    id: "volteo",
    titulo: "Volteo",
    foto: "/img/Proceso/3_Volteo.jpg",
    aspecto: "3 / 4",
    alt: "Área de volteo con operarias poniendo al derecho las calcetas y calcetines",
    texto: [
      "Después del remate la calceta queda al revés. En el volteo se pone al derecho para que la costura quede por dentro y el tejido limpio por fuera.",
      "En este paso también se retiran hilos sueltos y se hace una primera revisión visual de la pieza.",
    ],
  },
  {
    id: "hormado",
    titulo: "Hormado",
    foto: "/img/Proceso/4_Hormado.jpg",
    aspecto: "3 / 4",
    alt: "Calcetas y tines colocados en hormas metálicas de la máquina de hormado con vapor",
    texto: [
      "Cada calceta se coloca en una horma con calor y vapor. Así se fija su forma, se asienta el tejido y se marca la talla correcta.",
      "El hormado le da a la calceta el acabado terso y uniforme que se ve en el empaque y se siente al ponerla.",
    ],
  },
  {
    id: "pareo-etiquetado",
    titulo: "Pareo y etiquetado (calidad)",
    foto: "/img/Proceso/5_Calidad.jpg",
    aspecto: "3 / 4",
    alt: "Equipo revisando, pareando y etiquetando calcetas y tines en mesas de control de calidad",
    texto: [
      "Aquí se revisa par por par: medida, tono de color, remate, elasticidad del puño y que no haya defectos en el tejido. La pieza que no pasa, no sale de la fábrica.",
      "Las calcetas aprobadas se juntan en pares idénticos y se etiquetan con la marca, la talla y la composición del hilo.",
    ],
  },
  {
    id: "empaquetado",
    titulo: "Empaquetado",
    foto: "/img/Proceso/6_Empaquetado.jpg",
    aspecto: "3 / 4",
    alt: "Almacén con paquetes de calcetas y calcetines Francés empacados por modelo y talla",
    texto: [
      "Los pares se empacan por modelo y talla, en paquetes y cajas pensados para que lleguen limpios, ordenados y fáciles de acomodar en tu punto de venta.",
      "Cada caja se identifica con su contenido para que recibir y revisar tu pedido sea rápido.",
    ],
  },
  {
    id: "envio",
    titulo: "Envío",
    foto: "/img/Proceso/7_Envio.jpg",
    aspecto: "4 / 3",
    alt: "Personal cargando paquetes de calcetas Francés en el camión de reparto para su envío",
    texto: [
      "Tu pedido sale con guía de rastreo a cualquier parte de la República Mexicana, o con entrega directa según tu zona.",
      "Te avisamos cuando sale de la fábrica para que sepas exactamente cuándo llegan tus calcetas.",
    ],
  },
];

function EspacioFoto({ numero, titulo }) {
  return (
    <div className={styles.espacioFoto} role="img" aria-label={`Fotografía de la etapa ${titulo} (próximamente)`}>
      <span className={styles.espacioNumero}>{numero}</span>
      <span className={styles.espacioTexto}>Fotografía · {titulo}</span>
    </div>
  );
}

export default function Proceso() {
  return (
    <>
      <CabeceraPagina miga="Proceso" eyebrow="Nuestro proceso" titulo="Fabricamos las mejores calcetas">
        Cada par pasa por siete etapas dentro de nuestro taller, del telar hasta tus manos. Este es el
        camino que recorre una calceta Francés.
      </CabeceraPagina>

      {ETAPAS.map((etapa, i) => {
        const numero = String(i + 1).padStart(2, "0");
        return (
          <BloqueDos
            key={etapa.id}
            id={etapa.id}
            tenue={i % 2 === 0}
            invertido={i % 2 === 1}
            media={
              etapa.foto ? (
                <MediaImagen src={etapa.foto} alt={etapa.alt} aspecto={etapa.aspecto} />
              ) : (
                <EspacioFoto numero={numero} titulo={etapa.titulo} />
              )
            }
          >
            <span className="eyebrow">Etapa {numero} de 07</span>
            <h2>{etapa.titulo}</h2>
            {etapa.texto.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </BloqueDos>
        );
      })}

      <section className="seccion" id="video">
        <Reveal className={`contenedor ${styles.video}`}>
          <span className="eyebrow">Míralo en acción</span>
          <h2>Así fabricamos tus calcetas</h2>
          <VideoDiferido
            className={styles.videoReproductor}
            src="/img/Proceso/videoProcesoFrances-web.mp4"
            poster="/img/Proceso/videoProcesoFrances-portada.jpg"
            aria-label="Video del proceso de fabricación de calcetas Francés"
          />
        </Reveal>
      </section>

      <CtaFinal />
    </>
  );
}
