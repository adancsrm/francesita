// Fotografías del catálogo. Las usan las páginas de productos y el
// sitemap de imágenes (app/sitemap.js), así que cualquier foto nueva
// basta con agregarla aquí.

const serie = (rutas, alt) => rutas.map((src, i) => ({ src, alt: `${alt}, par ${i + 1}` }));

// ---------- Dama ----------

export const FOTOS_TIN_DAMA = serie(
  Array.from({ length: 10 }, (_, i) => `/img/tinDama/${i + 1}_tinDama.jpg`),
  "Tin para dama Francés, calcetín tobillero de algodón con elastano",
);

export const FOTOS_KATHY_DAMA = serie(
  Array.from({ length: 7 }, (_, i) => `/img/tinesDamaKathy/${i + 1}_tinDamaKathy.jpeg`),
  "Calcetas Kathy para dama, tines tobilleros con puño bordado KATHY",
);

export const FOTOS_DIABETICO_DAMA = serie(
  Array.from({ length: 7 }, (_, i) => `/img/diabeticoDama/${i + 1}_diabeticoDama.jpg`),
  "Calcetín para diabético dama Francés, calceta sin costura en la punta",
);

export const FOTOS_TIN_DAMA_KATHY = serie(
  Array.from({ length: 5 }, (_, i) => `/img/TinDamaKathy/${i + 1}_TinDamaKathy.jpg`),
  "Tin dama Kathy, calcetín tobillero de algodón para mujer",
);

export const FOTOS_TINES_KATHY_COLORES_BY_NILA = serie(
  Array.from({ length: 3 }, (_, i) => `/img/tinesKathyColoresByNilaDama/${i + 1}_tinesKathyColoresByNilaDama.jpg`),
  "Tines Kathy Colores By Nila Francés para dama, calcetín tobillero de algodón con lycra",
);

// ---------- Caballero ----------

export const FOTOS_CALCETA_LARGA_CABALLERO = [
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

export const FOTOS_CALCETA_CORTA_CABALLERO = [
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
    alt: "Calceta corta Jammy Sport para caballero en gris, calcetín tobillero",
  },
  {
    src: "/img/CalcetasJammyCaballero/4_calcetaCortaNegraCaballero.jpg",
    alt: "Calceta corta Jammy Sport para caballero en negro, calcetín tobillero",
  },
  {
    src: "/img/CalcetasJammyCaballero/5_calcetaCortaBlancaCaballero.jpg",
    alt: "Calceta corta Jammy Sport para caballero en blanco, calcetín tobillero",
  },
];

export const FOTOS_DIABETICO_CABALLERO = serie(
  Array.from({ length: 8 }, (_, i) => `/img/diabeticoCaballero/${i + 1}_diabeticoCaballero.jpg`),
  "Calcetín para diabético caballero Francés, calceta sin costura en la punta",
);

export const FOTOS_SPORT = serie(
  Array.from({ length: 4 }, (_, i) => `/img/Sport/${i + 1}_Sport.jpg`),
  "Calceta deportiva línea Sport Francés, calcetín de algodón con spandex",
);

export const FOTOS_UBI_TEX = serie(
  Array.from({ length: 4 }, (_, i) => `/img/ubiTex/${i + 1}_ubiTex.jpg`),
  "Calceta para caballero línea UBI Tex, calcetín de algodón con elastano",
);

export const FOTOS_DON_PACO_EXECUTIVE = serie(
  Array.from({ length: 4 }, (_, i) => `/img/donPacoExecutive/${i + 1}_donPacoExecutive.jpg`),
  "Calcetín de vestir para caballero Don Paco Executive, calceta unitalla",
);

export const FOTOS_DON_PACO_SAABA = serie(
  [
    "/img/DonPacoSaaba/1_donPacoSaaba.jpg",
    "/img/DonPacoSaaba/2_DonPacoSaaba.jpg",
    "/img/DonPacoSaaba/3_DonPacoSaaba.jpg",
    "/img/DonPacoSaaba/4_DonPacoSaaba.jpg",
    "/img/DonPacoSaaba/5_DonPacoSaaba.jpg",
    "/img/DonPacoSaaba/6_DonPacoSaaba.jpg",
    "/img/DonPacoSaaba/7_DonPacoSaaba.jpg",
    "/img/DonPacoSaaba/8_donPacoSaaba.jpg",
  ],
  "Calceta para caballero línea Don Paco Saaba, calcetín de algodón",
);

export const FOTOS_DON_PACO_DE_LUXE = serie(
  [
    "/img/DonPacoCalcetinesDeLuxe/1_donPacoCelcetinesDeLuxe.jpg",
    "/img/DonPacoCalcetinesDeLuxe/2_donPacoCalcetinesDeLuxe.jpg",
    "/img/DonPacoCalcetinesDeLuxe/3_donPacoCelcetinesDeLuxe.jpg",
    "/img/DonPacoCalcetinesDeLuxe/4_donPacoCelcetinesDeLuxe.jpg",
    "/img/DonPacoCalcetinesDeLuxe/5_donPacoCelcetinesDeLuxe.jpg",
  ],
  "Calcetín Don Paco De Luxe para caballero, calceta de acrilán y nylon",
);

export const FOTOS_JAMMY_SPORT_LARGA = serie(
  Array.from({ length: 5 }, (_, i) => `/img/CalcetaCaballeroJAMMY/${i + 1}_CalcetaCaballeroJAMMY.jpg`),
  "Calceta JAMMY Sport larga para caballero, calcetín deportivo de algodón",
);

export const FOTOS_TINES_DEPORTIVOS_JAMMY_CABALLERO = serie(
  [
    "/img/TinesDeportivosJammyCaballero/1_tinesDeportivosJammyCaballero_sin_arrugas_v2.jpg",
    "/img/TinesDeportivosJammyCaballero/2_tinesDeportivosJammyCaballero_sin_arrugas_v2.jpg",
    "/img/TinesDeportivosJammyCaballero/3_tinesDeportivosJammyCaballero_sin_arrugas_v2.jpg",
  ],
  "Tines deportivos JAMMY para caballero, calcetín tobillero de algodón con spandex",
);

export const FOTOS_TINES_JAMMY_SPORT_CABALLERO = serie(
  Array.from({ length: 4 }, (_, i) => `/img/tinesJammySportCaballero/${i + 1}_tinesJammySportCaballero.jpg`),
  "Tines JAMMY Sport para caballero, calcetín tobillero deportivo de algodón con spandex",
);

export const FOTOS_CALCETAS_CORTAS_FRANCO_SPORT = serie(
  [
    "/img/calcetasCortaFrancoSportCaballero/1_calcetasFrancoSportCaballero_L.jpg",
    "/img/calcetasCortaFrancoSportCaballero/2_calcetasFrancoSportCaballero.jpg",
    "/img/calcetasCortaFrancoSportCaballero/3_calcetasFrancoSportCaballero_L.jpg",
    "/img/calcetasCortaFrancoSportCaballero/4_calcetasFrancoSportCaballero.jpg",
  ],
  "Calcetas cortas Franco Sport para caballero, calcetín deportivo de nylon con spandex",
);

export const FOTOS_TINES_FRANCES_CABALLERO = serie(
  Array.from({ length: 5 }, (_, i) => `/img/tinesFrancesCaballero/${i + 1}_tinesFrancesCaballero.jpg`),
  "Tines Francés para caballero, calcetín tobillero de spun con spandex",
);

// ---------- Niños ----------

export const FOTOS_CALCETIN_NINO = [
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
    alt: "Calcetín para niño Paquitos Jr. en azul marino, tin tobillero infantil",
  },
  {
    src: "/img/calcetinNino/4_calcetaNino.jpg",
    alt: "Calcetín para niño Paquitos Jr. en negro, tin tobillero infantil",
  },
  {
    src: "/img/calcetinNino/5_calcetaNino.jpg",
    alt: "Calcetín para niño Paquitos Jr. en blanco, tin tobillero infantil",
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

export const FOTOS_ESCOLAR_NINA = serie(
  Array.from({ length: 10 }, (_, i) => `/img/Escolar/${i + 1}_escolar.jpg`),
  "Calceta escolar Francés para niña, calcetín de uniforme escolar",
);

export const FOTOS_ESCOLAR_CALADA = serie(
  Array.from({ length: 5 }, (_, i) => `/img/CalcetaEscolarCalada/${i + 1}_CalcetaEscolarCalada.jpg`),
  "Calceta escolar calada Francés para niña, calcetín de uniforme",
);

export const FOTOS_NINA_KATHY = serie(
  Array.from({ length: 8 }, (_, i) => `/img/CalcetaNinaKathy/${i + 1}_CalcetaNinaKathy.jpg`),
  "Calceta niña Kathy, calcetín infantil con puño bordado",
);

export const FOTOS_TINES_JAMMY_KIDS = serie(
  Array.from({ length: 4 }, (_, i) => `/img/TinesJammyKids/${i + 1}_tinesJammyKids.jpg`),
  "Tines JAMMY Kids, calcetín tobillero infantil de algodón con spandex",
);

export const FOTOS_CALCETAS_JAMMY_KIDS = serie(
  Array.from({ length: 4 }, (_, i) => `/img/JammyCalcetasKids/${i + 1}_JammyCalcetasKids.jpg`),
  "Calcetas JAMMY para niños, calcetín infantil de spun con spandex",
);

export const FOTOS_POR_CATEGORIA = {
  "/productos/dama": [
    FOTOS_TIN_DAMA,
    FOTOS_KATHY_DAMA,
    FOTOS_DIABETICO_DAMA,
    FOTOS_TIN_DAMA_KATHY,
    FOTOS_TINES_KATHY_COLORES_BY_NILA,
  ].flat(),
  "/productos/caballero": [
    FOTOS_UBI_TEX,
    FOTOS_CALCETA_LARGA_CABALLERO,
    FOTOS_CALCETA_CORTA_CABALLERO,
    FOTOS_DIABETICO_CABALLERO,
    FOTOS_SPORT,
    FOTOS_DON_PACO_EXECUTIVE,
    FOTOS_DON_PACO_SAABA,
    FOTOS_DON_PACO_DE_LUXE,
    FOTOS_JAMMY_SPORT_LARGA,
    FOTOS_TINES_DEPORTIVOS_JAMMY_CABALLERO,
    FOTOS_TINES_JAMMY_SPORT_CABALLERO,
    FOTOS_CALCETAS_CORTAS_FRANCO_SPORT,
    FOTOS_TINES_FRANCES_CABALLERO,
  ].flat(),
  "/productos/ninos": [
    FOTOS_CALCETIN_NINO,
    FOTOS_ESCOLAR_NINA,
    FOTOS_ESCOLAR_CALADA,
    FOTOS_NINA_KATHY,
    FOTOS_TINES_JAMMY_KIDS,
    FOTOS_CALCETAS_JAMMY_KIDS,
  ].flat(),
};
