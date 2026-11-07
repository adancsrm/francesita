export const SITIO_URL = "https://www.calcetasfrances.com";
export const NOMBRE_SITIO = "Calcetas Francés";
// Otras formas en que la gente busca la marca (sin acento, nombre corto).
export const NOMBRES_ALTERNOS = ["Francés", "Calcetas Frances", "Calcetas Francés México"];

export const PALABRAS_CLAVE_BASE = [
  "calcetas",
  "calceta",
  "calcetines",
  "calcetín",
  "tines",
  "tin",
  "calcetas por mayoreo",
  "calcetines por mayoreo",
  "fábrica de calcetas",
  "fabricante de calcetines en México",
  "calcetas escolares",
  "Francés calcetas",
  "Calcetas Francés",
  "calcetas frances",
  "maquila de calcetas",
  "calcetas con tu marca",
];

export const IMAGEN_PREDETERMINADA = {
  url: "/img/InicioFabrica.jpg",
  alt: "Fábrica de calcetas, calcetines y tines Francés en México",
};

/**
 * Arma el objeto `metadata` de una página. Open Graph y Twitter se
 * definen completos porque Next.js reemplaza (no fusiona) esos campos
 * respecto al layout raíz.
 */
export function crearMetadatos({ titulo, descripcion, ruta, imagen = IMAGEN_PREDETERMINADA, palabrasClave = [] }) {
  return {
    title: titulo,
    description: descripcion,
    keywords: [...palabrasClave, ...PALABRAS_CLAVE_BASE],
    alternates: { canonical: ruta },
    openGraph: {
      title: titulo,
      description: descripcion,
      url: ruta,
      siteName: NOMBRE_SITIO,
      locale: "es_MX",
      type: "website",
      images: [imagen],
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descripcion,
      images: [imagen],
    },
  };
}
