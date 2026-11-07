import { SITIO_URL } from "@/lib/metadatos";
import { FOTOS_POR_CATEGORIA } from "@/lib/catalogo";

const absoluta = (ruta) => `${SITIO_URL}${ruta}`;

const PAGINAS = [
  { ruta: "/", prioridad: 1, imagenes: ["/img/InicioFabrica.jpg"] },
  {
    ruta: "/productos",
    prioridad: 0.9,
    imagenes: ["/img/MuestraDamas.jpg", "/img/MuestraCaballeros.jpg", "/img/MuestraNinos.jpg", "/img/calcetaMuestra.jpeg"],
  },
  { ruta: "/productos/dama", prioridad: 0.9 },
  { ruta: "/productos/caballero", prioridad: 0.9 },
  { ruta: "/productos/ninos", prioridad: 0.9 },
  {
    ruta: "/proceso",
    prioridad: 0.6,
    imagenes: [
      "/img/Proceso/1_Maquinado.jpg",
      "/img/Proceso/2_Remate.jpg",
      "/img/Proceso/3_Volteo.jpg",
      "/img/Proceso/4_Hormado.jpg",
      "/img/Proceso/5_Calidad.jpg",
      "/img/Proceso/6_Empaquetado.jpg",
      "/img/Proceso/7_Envio.jpg",
    ],
  },
  { ruta: "/nosotros", prioridad: 0.6, imagenes: ["/img/quienesSomosLuz.jpg", "/img/Nosotros.jpg"] },
  { ruta: "/cotizacion", prioridad: 0.8 },
  { ruta: "/contacto", prioridad: 0.7 },
];

export default function sitemap() {
  return PAGINAS.map(({ ruta, prioridad, imagenes = [] }) => {
    const fotosCatalogo = (FOTOS_POR_CATEGORIA[ruta] ?? []).map((f) => f.src);
    return {
      url: absoluta(ruta),
      changeFrequency: "monthly",
      priority: prioridad,
      images: [...imagenes, ...fotosCatalogo].map(absoluta),
    };
  });
}
