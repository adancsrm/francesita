import CabeceraPagina from "@/components/CabeceraPagina";
import CategoriaProductoCard from "@/components/CategoriaProductoCard";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Reveal from "@/components/Reveal";
import { crearMetadatos } from "@/lib/metadatos";

const CATEGORIAS = [
  {
    href: "/productos/dama",
    nombre: "Dama",
    descripcion: "Tin Dama, Kathy y línea diabético dama.",
    imagen: "/img/MuestraDamas.jpg",
    alt: "Mujeres usando calcetas, calcetines y tines Francés para dama",
  },
  {
    href: "/productos/caballero",
    nombre: "Caballero",
    descripcion: "Calceta larga, corta, línea diabético, Sport, UBI Tex y Don Paco.",
    imagen: "/img/MuestraCaballeros.jpg",
    alt: "Hombres usando calcetas y calcetines Francés para caballero",
  },
  {
    href: "/productos/ninos",
    nombre: "Niños",
    descripcion: "Calcetín niño Paquitos Jr. y calceta escolar niña.",
    imagen: "/img/MuestraNinos.jpg",
    alt: "Niños usando calcetas y calcetines Francés para niños",
  },
];

export const metadata = crearMetadatos({
  titulo: "Calcetas para caballero, dama y niños | Calcetas Francés",
  descripcion:
    "Catálogo Francés de calcetas, calcetines y tines por categoría: dama, caballero y niños. Algodón con lycra, por mayoreo para uniformerías y distribuidores.",
  ruta: "/productos",
  imagen: { url: "/img/calcetaMuestra.jpeg", alt: "Calcetín de vestir para caballero Don Paco Executive en azul marino" },
  palabrasClave: [
    "catálogo de calcetas",
    "calcetas para caballero",
    "calcetas para dama",
    "calcetas para niños",
    "tines",
    "calcetines de algodón",
  ],
});

const FAQS = [
  {
    pregunta: "¿Cuál es el pedido mínimo?",
    respuesta:
      "20 docenas por modelo y color en artículos de línea. Para color institucional o escudo bordado, el mínimo es de 200 pares.",
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
        Elige tu categoría: dama, caballero o niños. Todas disponibles por mayoreo en color
        institucional o de línea.
      </CabeceraPagina>

      <section className="seccion">
        <div className="contenedor">
          <div className="rejilla rejilla--3">
            {CATEGORIAS.map((c) => (
              <Reveal key={c.href} y={24}>
                <CategoriaProductoCard {...c} />
              </Reveal>
            ))}
          </div>
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
