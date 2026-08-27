import CabeceraPagina from "@/components/CabeceraPagina";
import BloqueDos from "@/components/BloqueDos";
import { MediaImagen, MediaCruzada } from "@/components/Media";
import Reveal from "@/components/Reveal";
import GaleriaKathy from "@/components/GaleriaKathy";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import styles from "./page.module.css";

export const metadata = {
  title: "Calcetas para caballero, dama, niños, escolar y diabético | Productos Francesita",
  description:
    "Catálogo Francesita: calcetas para caballero, dama, niños, escolares y línea diabético. Algodón peinado con lycra, por mayoreo para uniformerías y distribuidores.",
  alternates: { canonical: "/productos" },
};

const FAQS = [
  {
    pregunta: "¿Cuál es el pedido mínimo?",
    respuesta:
      "50 pares por modelo y color en artículos de línea. Para color institucional o escudo bordado, el mínimo es de 200 pares.",
  },
  {
    pregunta: "¿Pueden igualar el color de mi escuela?",
    respuesta:
      "Sí. Nos mandas el pantone o una prenda de referencia, igualamos el tono y te enviamos una muestra física antes de producir. La fórmula se guarda para tus resurtidos.",
  },
  {
    pregunta: "¿Cuánto tarda la producción?",
    respuesta:
      "De 3 a 5 días hábiles en modelos de línea y de 10 a 15 días hábiles en pedidos personalizados, contados a partir de que apruebas la muestra.",
  },
  {
    pregunta: "¿Hacen envíos a toda la República?",
    respuesta:
      "Sí, enviamos por paquetería con guía de rastreo a todo México. En la Ciudad de México y zona conurbada podemos entregar directamente.",
  },
  {
    pregunta: "¿Manejan tallas especiales?",
    respuesta:
      "Producimos tallas fuera de rango bajo pedido y con volumen mínimo. Coméntalo en tu cotización y te confirmamos factibilidad y tiempo.",
  },
];

export default function Productos() {
  return (
    <>
      <CabeceraPagina
        miga="Productos"
        eyebrow="Catálogo"
        titulo="Calcetas y calcetines Francesita para toda la familia"
      >
        Cinco líneas de producción en algodón peinado con lycra: caballero, dama, niños, escolar y
        diabético. Todas disponibles por mayoreo en color institucional o de línea.
      </CabeceraPagina>

      <BloqueDos
        id="caballero"
        media={
          <MediaCruzada
            imagenes={[
              { src: "/img/TinFrancesCaballero.jpeg", alt: "Calcetas deportivas Francés para caballero, tobilleras" },
              {
                src: "/img/calcetaDeportivaCaballero.jpeg",
                alt: "Calcetas Franco Sport para caballero, tobilleras en azul marino",
              },
            ]}
          />
        }
      >
        <span className="etiqueta">Línea caballero</span>
        <h2>Calcetas para caballero</h2>
        <p>
          Calcetas deportivas tobilleras para uso diario y actividad física, con puño suave que no
          aprieta y refuerzo en talón y punta para que aguanten el paso del día completo.
        </p>
        <ul className="listaCheck">
          <li>Algodón peinado con lycra para que no se venzan.</li>
          <li>Corte tobillero, ideal para tenis y zapato de trabajo.</li>
          <li>Colores de línea: negro, gris Oxford y azul marino.</li>
        </ul>
      </BloqueDos>

      <BloqueDos
        id="dama"
        tenue
        invertido
        media={
          <MediaImagen
            src="/img/TinFrancesDama.jpeg"
            alt="Calcetas deportivas Francés para dama en azul marino, blanco y negro"
            aspecto="16 / 9"
          />
        }
        extra={
          <div className={`contenedor ${styles.extra}`} id="kathy-dama">
            <Reveal className={styles.encabezado}>
              <span className="eyebrow">Línea Kathy</span>
              <h2>Calcetas Kathy para dama, estampadas</h2>
              <p>
                Modelo tobillero de moda con puño bordado KATHY, en estampados y colores pastel para
                venta por mayoreo a boutiques y distribuidores.
              </p>
            </Reveal>
            <GaleriaKathy />
          </div>
        }
      >
        <span className="etiqueta">Línea dama</span>
        <h2>Calcetas para dama</h2>
        <p>
          Calcetas tobilleras ligeras y cómodas para el uso diario, en los colores que más se piden
          para uniforme y para calle: azul marino, blanco y negro.
        </p>
        <ul className="listaCheck">
          <li>Algodón peinado con lycra, corte tobillero.</li>
          <li>Disponibles en azul marino, blanco y negro.</li>
          <li>Mismo hilo y calidad que el resto de la línea Francesita.</li>
        </ul>
      </BloqueDos>

      <BloqueDos
        id="ninos"
        media={
          <MediaCruzada
            imagenes={[
              { src: "/img/TinFrancesNinos.jpeg", alt: "Calcetas escolares Paquitos Jr. Francés para niños, azul marino" },
              { src: "/img/TinDeportivoNinos.jpeg", alt: "Calcetas deportivas Francés para niños en blanco y azul" },
            ]}
          />
        }
      >
        <span className="etiqueta">Línea niños</span>
        <h2>Calcetas para niños</h2>
        <p>
          Dos modelos para el día a día: calceta escolar Paquitos Jr. en azul marino y calceta
          deportiva tobillera, ambas en algodón peinado para que resistan el recreo completo.
        </p>
        <ul className="listaCheck">
          <li>Calceta escolar Paquitos Jr., corte alto, azul marino.</li>
          <li>Calceta deportiva tobillera en blanco y azul.</li>
          <li>Tallas infantiles, disponibles por mayoreo.</li>
        </ul>
      </BloqueDos>

      <BloqueDos
        id="escolar"
        tenue
        invertido
        media={
          <MediaImagen
            src="/img/EscolarFrancesitaNinas-blanco.jpeg"
            alt="Calceta escolar Francesita lisa con lycra para niñas, corte alto blanco"
            aspecto="4 / 5"
          />
        }
      >
        <span className="etiqueta">Línea principal</span>
        <h2>Calceta escolar</h2>
        <p>
          La calceta escolar lisa de toda la vida: corte alto hasta la rodilla, en blanco, con lycra
          en el puño para que no se venza a media jornada.
        </p>
        <ul className="listaCheck">
          <li>Acabado liso, con lycra en el puño.</li>
          <li>Corte alto hasta la rodilla, color blanco.</li>
          <li>Escudo bordado o tejido a partir de 200 pares.</li>
        </ul>
      </BloqueDos>

      <BloqueDos
        id="diabetico"
        media={
          <MediaCruzada
            imagenes={[
              { src: "/img/diabetico.jpeg", alt: "Calcetines Francés línea diabético para caballero, negro y gris" },
              {
                src: "/img/diabetico2.jpeg",
                alt: "Calcetines Francés línea diabético, tres pares en azul marino, negro y gris",
              },
            ]}
          />
        }
      >
        <span className="etiqueta">Cuidado especial</span>
        <h2>Línea diabético</h2>
        <p>
          Diseñada para personas con diabetes, ácido úrico o hinchazón de pies: sin costuras que rocen
          la punta del pie y con un ajuste suave que ayuda a dispersar el sudor y mejorar la
          circulación.
        </p>
        <ul className="listaCheck">
          <li>Ayuda a dispersar el sudor y evitar la proliferación de hongos.</li>
          <li>Mejora la circulación gracias a su ajuste suave, sin apretar.</li>
          <li>Costura especial en la punta para evitar roces.</li>
        </ul>
      </BloqueDos>

      <section className="seccion">
        <div className="contenedor">
          <Reveal className="encabezadoSeccion">
            <span className="eyebrow">Antes de pedir</span>
            <h2>Preguntas frecuentes sobre calcetas y calcetines</h2>
          </Reveal>
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
