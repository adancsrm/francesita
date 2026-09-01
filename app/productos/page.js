import CabeceraPagina from "@/components/CabeceraPagina";
import Reveal from "@/components/Reveal";
import GaleriaKathy from "@/components/GaleriaKathy";
import BannerGaleriaProducto from "@/components/BannerGaleriaProducto";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";

const FOTOS_CALCETA_LARGA_CABALLERO = [
  {
    src: "/img/CalcetaCaballeroL/CB1.jpg",
    alt: "Calceta larga Jammy Sport para caballero en gris y negro, marca JM bordada",
  },
  {
    src: "/img/CalcetaCaballeroL/CB2.png",
    alt: "Calceta larga Jammy Sport para caballero en negro, detalle de puño y bordado JM",
  },
  {
    src: "/img/CalcetaCaballeroL/CB3.jpg",
    alt: "Calceta larga Jammy Sport para caballero en gris jaspeado, detalle de puño y bordado JM",
  },
  {
    src: "/img/CalcetaCaballeroL/CB4.jpg",
    alt: "Calceta larga Jammy Sport para caballero en gris carbón, detalle de puño y bordado JM",
  },
  {
    src: "/img/CalcetaCaballeroL/CB5.jpg",
    alt: "Tres pares de calceta larga Jammy Sport para caballero en gris carbón, gris jaspeado y negro",
  },
];

const FOTOS_CALCETA_CORTA_CABALLERO = [
  {
    src: "/img/CalcetasJammyCaballero/1_CalcetasCortasCaballero.jpg",
    alt: "Tres pares de calceta corta Jammy Sport para caballero en azul marino, blanco y negro",
  },
  {
    src: "/img/CalcetasJammyCaballero/2_calcetasCortasCaballero.jpg",
    alt: "Dos pares de calceta corta Jammy Sport para caballero en negro y gris",
  },
  {
    src: "/img/CalcetasJammyCaballero/3_CalcetaGrisCortaCaballero.jpg",
    alt: "Calceta corta Jammy Sport para caballero en gris",
  },
  {
    src: "/img/CalcetasJammyCaballero/4_calcetaCortaNegraCaballero.jpg",
    alt: "Calceta corta Jammy Sport para caballero en negro",
  },
  {
    src: "/img/CalcetasJammyCaballero/5_calcetaCortaBlancaCaballero.jpg",
    alt: "Calceta corta Jammy Sport para caballero en blanco",
  },
];

const FOTOS_CALCETIN_NINO = [
  {
    src: "/img/calcetinNino/1_calcetaNino.jpg",
    alt: "Seis pares de calcetín para niño Paquitos Jr. en negro, azul marino, gris y blanco",
  },
  {
    src: "/img/calcetinNino/2_calcetaNino.jpg",
    alt: "Tres pares de calcetín para niño Paquitos Jr. en negro, azul marino y blanco",
  },
  {
    src: "/img/calcetinNino/3_calcetaNino.jpg",
    alt: "Calcetín para niño Paquitos Jr. en azul marino",
  },
  {
    src: "/img/calcetinNino/4_calcetaNino.jpg",
    alt: "Calcetín para niño Paquitos Jr. en negro",
  },
  {
    src: "/img/calcetinNino/5_calcetaNino.jpg",
    alt: "Calcetín para niño Paquitos Jr. en blanco",
  },
  {
    src: "/img/calcetinNino/6_calcetaNino.jpg",
    alt: "Tres pares de calcetín para niño Paquitos Jr. con estampados, en azul marino, gris y negro",
  },
  {
    src: "/img/calcetinNino/7_calcetaNino.jpg",
    alt: "Detalle de tres pares de calcetín para niño Paquitos Jr. con estampados bordados",
  },
];

const FOTOS_TIN_DAMA = [
  { src: "/img/tinDama/1_tinDama.jpg", alt: "Calceta Tin para dama, par 1" },
  { src: "/img/tinDama/2_tinDama.jpg", alt: "Calceta Tin para dama, par 2" },
  { src: "/img/tinDama/3_tinDama.jpg", alt: "Calceta Tin para dama, par 3" },
  { src: "/img/tinDama/4_tinDama.jpg", alt: "Calceta Tin para dama, par 4" },
  { src: "/img/tinDama/5_tinDama.jpg", alt: "Calceta Tin para dama, par 5" },
  { src: "/img/tinDama/6_tinDama.jpg", alt: "Calceta Tin para dama, par 6" },
  { src: "/img/tinDama/7_tinDama.jpg", alt: "Calceta Tin para dama, par 7" },
  { src: "/img/tinDama/8_tinDama.jpg", alt: "Calceta Tin para dama, par 8" },
  { src: "/img/tinDama/9_tinDama.jpg", alt: "Calceta Tin para dama, par 9" },
  { src: "/img/tinDama/10_tinDama.jpg", alt: "Calceta Tin para dama, par 10" },
];

const FOTOS_ESCOLAR_NINA = [
  { src: "/img/Escolar/1_escolar.jpg", alt: "Calceta escolar Francés para niña, par 1" },
  { src: "/img/Escolar/2_escolar.jpg", alt: "Calceta escolar Francés para niña, par 2" },
  { src: "/img/Escolar/3_escolar.jpg", alt: "Calceta escolar Francés para niña, par 3" },
  { src: "/img/Escolar/4_escolar.jpg", alt: "Calceta escolar Francés para niña, par 4" },
  { src: "/img/Escolar/5_escolar.jpg", alt: "Calceta escolar Francés para niña, par 5" },
  { src: "/img/Escolar/6_escolar.jpg", alt: "Calceta escolar Francés para niña, par 6" },
  { src: "/img/Escolar/7_escolar.jpg", alt: "Calceta escolar Francés para niña, par 7" },
  { src: "/img/Escolar/8_escolar.jpg", alt: "Calceta escolar Francés para niña, par 8" },
  { src: "/img/Escolar/9_escolar.jpg", alt: "Calceta escolar Francés para niña, par 9" },
  { src: "/img/Escolar/10_escolar.jpg", alt: "Calceta escolar Francés para niña, par 10" },
];

const FOTOS_DIABETICO_DAMA = [
  {
    src: "/img/diabeticoDama/1_diabeticoDama.jpg",
    alt: "Calcetín Francés línea diabético para dama, par 1",
  },
  {
    src: "/img/diabeticoDama/2_diabeticoDama.jpg",
    alt: "Calcetín Francés línea diabético para dama, par 2",
  },
  {
    src: "/img/diabeticoDama/3_diabeticoDama.jpg",
    alt: "Calcetín Francés línea diabético para dama, par 3",
  },
  {
    src: "/img/diabeticoDama/4_diabeticoDama.jpg",
    alt: "Calcetín Francés línea diabético para dama, par 4",
  },
  {
    src: "/img/diabeticoDama/5_diabeticoDama.jpg",
    alt: "Calcetín Francés línea diabético para dama, par 5",
  },
  {
    src: "/img/diabeticoDama/6_diabeticoDama.jpg",
    alt: "Calcetín Francés línea diabético para dama, par 6",
  },
  {
    src: "/img/diabeticoDama/7_diabeticoDama.jpg",
    alt: "Calcetín Francés línea diabético para dama, par 7",
  },
];

const FOTOS_DIABETICO_CABALLERO = [
  {
    src: "/img/diabeticoCaballero/1_diabeticoCaballero.jpg",
    alt: "Calcetín Francés línea diabético para caballero, par 1",
  },
  {
    src: "/img/diabeticoCaballero/2_diabeticoCaballero.jpg",
    alt: "Calcetín Francés línea diabético para caballero, par 2",
  },
  {
    src: "/img/diabeticoCaballero/3_diabeticoCaballero.jpg",
    alt: "Calcetín Francés línea diabético para caballero, par 3",
  },
  {
    src: "/img/diabeticoCaballero/4_diabeticoCaballero.jpg",
    alt: "Calcetín Francés línea diabético para caballero, par 4",
  },
  {
    src: "/img/diabeticoCaballero/5_diabeticoCaballero.jpg",
    alt: "Calcetín Francés línea diabético para caballero, par 5",
  },
  {
    src: "/img/diabeticoCaballero/6_diabeticoCaballero.jpg",
    alt: "Calcetín Francés línea diabético para caballero, par 6",
  },
  {
    src: "/img/diabeticoCaballero/7_diabeticoCaballero.jpg",
    alt: "Calcetín Francés línea diabético para caballero, par 7",
  },
  {
    src: "/img/diabeticoCaballero/8_diabeticoCaballero.jpg",
    alt: "Calcetín Francés línea diabético para caballero, par 8",
  },
];

export const metadata = {
  title: "Calcetas para caballero, dama, niños, escolar y diabético | Productos Francés",
  description:
    "Catálogo Francés: calcetas para caballero, dama, niños, escolares y línea diabético. Algodón peinado con lycra, por mayoreo para uniformerías y distribuidores.",
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
        titulo="Calcetas y calcetines Francés para toda la familia"
      >
        Cinco líneas de producción en algodón peinado con lycra: caballero, dama, niños, escolar y
        diabético. Todas disponibles por mayoreo en color institucional o de línea.
      </CabeceraPagina>

      <section className="seccion" id="caballero">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea caballero"
            titulo="Calceta larga caballero"
            descripcion="Corte largo con puño reforzado, en gris jaspeado, gris carbón y negro, marca JM bordada."
            materiales="65% Algodón, 25% Poliéster y 10% Spandex"
            fotos={FOTOS_CALCETA_LARGA_CABALLERO}
          />
        </div>
      </section>

      <section className="seccion" id="calceta-corta-caballero">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea caballero"
            titulo="Calceta corta caballero"
            descripcion="Corte tobillero con puño suave, en azul marino, gris, negro y blanco, marca JM bordada."
            materiales="70% Spun, 20% Licra y 10% Elástico"
            fotos={FOTOS_CALCETA_CORTA_CABALLERO}
          />
        </div>
      </section>

      <section className="seccion" id="calcetin-nino">
        <div className="contenedor">
          <BannerGaleriaProducto
            eyebrow="Línea niños"
            titulo="Calcetín niño"
            descripcion="Calcetín tobillero Paquitos Jr. en azul marino, gris, negro y blanco, con y sin estampados."
            fotos={FOTOS_CALCETIN_NINO}
          />
        </div>
      </section>

      <section className="seccion" id="tin-dama">
        <div className="contenedor">
          <BannerGaleriaProducto
            claro
            eyebrow="Línea dama"
            titulo="Tin Dama"
            descripcion="Calcetas Tin para dama, disponibles por mayoreo en color institucional o de línea."
            materiales="97% Algodón y 3% Elastano"
            fotos={FOTOS_TIN_DAMA}
          />
        </div>
      </section>

      <section className="seccion seccion--tenue" id="kathy-dama">
        <div className="contenedor">
          <Reveal className="encabezadoSeccion">
            <span className="eyebrow">Línea Kathy</span>
            <h2>Calcetas Kathy para dama</h2>
            <p>
              Modelo tobillero de moda con puño bordado KATHY, en estampados y colores pastel para
              venta por mayoreo a boutiques y distribuidores.
            </p>
            <p>Materiales: 70% Spun, 25% Licra y 5% Elástico.</p>
          </Reveal>
          <GaleriaKathy />
        </div>
      </section>

      <section className="seccion" id="escolar-nina">
        <div className="contenedor">
          <BannerGaleriaProducto
            claro
            eyebrow="Línea niñas"
            titulo="Calceta escolar niña"
            descripcion="Calceta escolar Francés para niña, disponible por mayoreo en color institucional o de línea."
            fotos={FOTOS_ESCOLAR_NINA}
          />
        </div>
      </section>

      <section className="seccion" id="diabetico-dama">
        <div className="contenedor">
          <BannerGaleriaProducto
            claro
            arriba
            eyebrow="Cuidado especial"
            titulo="Línea diabético dama"
            descripcion="Pensada para pies sensibles: sin costuras que rocen la punta y con ajuste suave que ayuda a dispersar el sudor y mejorar la circulación."
            materiales="65% Algodón, 25% Spandex y 10% Elástico"
            fotos={FOTOS_DIABETICO_DAMA}
          />
        </div>
      </section>

      <section className="seccion" id="diabetico-caballero">
        <div className="contenedor">
          <BannerGaleriaProducto
            claro
            arriba
            eyebrow="Cuidado especial"
            titulo="Línea diabético caballero"
            descripcion="Diseñada para pies sensibles: sin costuras que rocen la punta y con ajuste suave que ayuda a dispersar el sudor y mejorar la circulación."
            materiales="65% Algodón, 25% Spandex y 10% Elástico"
            fotos={FOTOS_DIABETICO_CABALLERO}
          />
        </div>
      </section>

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
