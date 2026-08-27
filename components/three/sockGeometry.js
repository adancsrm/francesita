import * as THREE from "three";

/**
 * Interpola un conjunto de "llaves" { t, ...campos } en un valor t dado.
 * Los campos numéricos declarados en `fields` se interpolan linealmente.
 */
function muestrear(llaves, t, fields) {
  let i = 0;
  while (i < llaves.length - 2 && llaves[i + 1].t < t) i++;
  const a = llaves[i];
  const b = llaves[i + 1];
  const rango = b.t - a.t || 1;
  const f = Math.min(1, Math.max(0, (t - a.t) / rango));
  const salida = {};
  fields.forEach((campo) => {
    salida[campo] = a[campo] + (b[campo] - a[campo]) * f;
  });
  return salida;
}

/**
 * Construye la malla de una calceta a partir de una curva central y un
 * perfil de sección que varía a lo largo del recorrido: pierna cilíndrica,
 * tobillo angosto, empeine que se ensancha y aplana (planta recta, empeine
 * redondeado) y punta que cierra en redondo. Es un "loft" hecho a mano:
 * anillos elípticos asimétricos orientados con la tangente de la curva.
 */
export function construirGeometriaCalceta({
  curva,
  segmentos = 64,
  segmentosRadiales = 22,
  perfil,
}) {
  const posiciones = [];
  const uvs = [];
  const indices = [];

  const derechaMundo = new THREE.Vector3(1, 0, 0);

  for (let i = 0; i <= segmentos; i++) {
    const t = i / segmentos;
    const centro = curva.getPointAt(t);
    const tangente = curva.getTangentAt(t).normalize();
    const arriba = new THREE.Vector3().crossVectors(derechaMundo, tangente).normalize();
    const derecha = new THREE.Vector3().crossVectors(tangente, arriba).normalize();

    const { rx, ryArriba, ryAbajo, offsetY, offsetX } = perfil(t);

    for (let j = 0; j <= segmentosRadiales; j++) {
      const theta = (j / segmentosRadiales) * Math.PI * 2;
      const cosT = Math.cos(theta);
      const sinT = Math.sin(theta);
      const ry = sinT >= 0 ? ryArriba : ryAbajo;
      const cx = cosT * rx + offsetX;
      const cy = sinT * ry + offsetY;

      const punto = centro
        .clone()
        .addScaledVector(derecha, cx)
        .addScaledVector(arriba, cy);

      posiciones.push(punto.x, punto.y, punto.z);
      uvs.push((j / segmentosRadiales) * 4, t * 6);
    }
  }

  const columnas = segmentosRadiales + 1;
  for (let i = 0; i < segmentos; i++) {
    for (let j = 0; j < segmentosRadiales; j++) {
      const a = i * columnas + j;
      const b = a + columnas;
      const c = a + 1;
      const d = b + 1;
      indices.push(a, b, c, c, b, d);
    }
  }

  const geometria = new THREE.BufferGeometry();
  geometria.setAttribute("position", new THREE.Float32BufferAttribute(posiciones, 3));
  geometria.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometria.setIndex(indices);
  geometria.computeVertexNormals();
  return geometria;
}

/** Punta del pie: mismo punto final en las dos variantes de curva. */
export const PUNTA_CALCETA = new THREE.Vector3(0, -0.33, 1.28);

/**
 * Curva central: pierna que baja y se dobla hacia adelante en el pie.
 * `piernaLarga` alarga solo el tramo de la pierna (hasta la rodilla, como
 * la calceta escolar lisa de la foto de referencia); el pie queda igual.
 */
export function curvaCalceta({ piernaLarga = false } = {}) {
  const puntos = piernaLarga
    ? [
        new THREE.Vector3(0, 2.35, 0),
        new THREE.Vector3(0, 1.75, -0.02),
        new THREE.Vector3(0, 1.1, -0.01),
        new THREE.Vector3(0, 0.5, 0.01),
        new THREE.Vector3(0.01, 0.02, 0.08),
        new THREE.Vector3(0.02, -0.24, 0.2),
        new THREE.Vector3(0.03, -0.42, 0.58),
        new THREE.Vector3(0.02, -0.4, 0.98),
        PUNTA_CALCETA.clone(),
      ]
    : [
        new THREE.Vector3(0, 1.3, 0),
        new THREE.Vector3(0, 0.78, -0.02),
        new THREE.Vector3(0, 0.18, 0.02),
        new THREE.Vector3(0.02, -0.22, 0.18),
        new THREE.Vector3(0.03, -0.42, 0.58),
        new THREE.Vector3(0.02, -0.4, 0.98),
        PUNTA_CALCETA.clone(),
      ];

  return new THREE.CatmullRomCurve3(puntos, false, "catmullrom", 0.35);
}

const CAMPOS_PERFIL = ["rx", "ryArriba", "ryAbajo", "offsetY", "offsetX"];

/**
 * Genera las llaves del perfil de sección. `finPierna` marca en qué t
 * termina la pierna y empieza el angostamiento del tobillo; el resto del
 * pie (tobillo → punta) se ubica en fracciones relativas del tramo que
 * queda, así la misma forma de pie sirve tanto para la calceta corta como
 * para la larga, sin importar cuánto mida la pierna.
 */
function generarLlavesPerfil(finPierna) {
  const pie = (frac) => finPierna + frac * (1 - finPierna);
  return [
    { t: 0.0, rx: 0.34, ryArriba: 0.34, ryAbajo: 0.34, offsetY: 0, offsetX: 0 },
    { t: finPierna * 0.55, rx: 0.32, ryArriba: 0.32, ryAbajo: 0.32, offsetY: 0, offsetX: 0 },
    { t: finPierna, rx: 0.25, ryArriba: 0.25, ryAbajo: 0.25, offsetY: 0, offsetX: 0 },
    { t: pie(0.25), rx: 0.29, ryArriba: 0.24, ryAbajo: 0.27, offsetY: -0.01, offsetX: 0 },
    { t: pie(0.5), rx: 0.35, ryArriba: 0.22, ryAbajo: 0.29, offsetY: -0.02, offsetX: 0 },
    { t: pie(0.72), rx: 0.32, ryArriba: 0.19, ryAbajo: 0.25, offsetY: -0.015, offsetX: 0 },
    { t: pie(0.85), rx: 0.26, ryArriba: 0.16, ryAbajo: 0.2, offsetY: -0.01, offsetX: 0 },
    { t: pie(0.94), rx: 0.18, ryArriba: 0.12, ryAbajo: 0.14, offsetY: -0.005, offsetX: 0 },
    { t: 1.0, rx: 0.12, ryArriba: 0.09, ryAbajo: 0.1, offsetY: 0, offsetX: 0 },
  ];
}

const LLAVES_CORTA = generarLlavesPerfil(0.38);
const LLAVES_LARGA = generarLlavesPerfil(0.58);

export function perfilCalceta(t, { piernaLarga = false } = {}) {
  return muestrear(piernaLarga ? LLAVES_LARGA : LLAVES_CORTA, t, CAMPOS_PERFIL);
}
