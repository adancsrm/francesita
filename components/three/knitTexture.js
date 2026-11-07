import * as THREE from "three";

let texturaCache = null;
const cachePatrones = new Map();

/** Suma un desplazamiento a cada canal RGB de un color hex, sin tocar el tono. */
function aclarar(hex, delta) {
  const c = new THREE.Color(hex);
  return `rgb(${[c.r, c.g, c.b]
    .map((v) => Math.min(255, Math.max(0, Math.round(v * 255 + delta))))
    .join(",")})`;
}

/**
 * Textura de color (no solo relieve) tejida a mano en un <canvas>: base de
 * color sólido con costillas sutiles (mismo look que texturaTejido, pero en
 * color) y un motivo pequeño tipo "pino" repetido, inspirado en calcetas
 * escolares de vestir con diseño "fantasía" (referencia: calcetaMuestra.jpeg,
 * azul marino con motivo verde-amarillo pálido). Se usa como `map` del
 * material, así el color y el patrón vienen de una sola textura realista en
 * vez de un color plano.
 */
export function texturaPatronCalceta({ base = "#1B2340", motivo = "#C9C67A" } = {}) {
  const llave = `${base}|${motivo}`;
  if (cachePatrones.has(llave)) return cachePatrones.get(llave);
  if (typeof document === "undefined") return null;

  const tam = 128;
  const canvas = document.createElement("canvas");
  canvas.width = tam;
  canvas.height = tam;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = base;
  ctx.fillRect(0, 0, tam, tam);

  // Costillas verticales sutiles del punto, en el mismo tono de fondo
  const franjas = 16;
  for (let i = 0; i < franjas; i++) {
    const x = (i / franjas) * tam;
    const ancho = tam / franjas;
    const gradiente = ctx.createLinearGradient(x, 0, x + ancho, 0);
    gradiente.addColorStop(0, aclarar(base, 10));
    gradiente.addColorStop(0.5, aclarar(base, -12));
    gradiente.addColorStop(1, aclarar(base, 10));
    ctx.fillStyle = gradiente;
    ctx.fillRect(x, 0, ancho, tam);
  }

  // Ruido fino tipo hilo, preservando el tono
  const imagen = ctx.getImageData(0, 0, tam, tam);
  for (let p = 0; p < imagen.data.length; p += 4) {
    const ruido = (Math.random() - 0.5) * 14;
    imagen.data[p] = Math.min(255, Math.max(0, imagen.data[p] + ruido));
    imagen.data[p + 1] = Math.min(255, Math.max(0, imagen.data[p + 1] + ruido));
    imagen.data[p + 2] = Math.min(255, Math.max(0, imagen.data[p + 2] + ruido));
  }
  ctx.putImageData(imagen, 0, 0);

  // Motivo "pino" pequeño, centrado en la casilla (se repite al enrollar la
  // textura sobre la calceta: varias columnas alrededor, varias filas a lo
  // largo de la pierna, igual que un tejido de fantasía real).
  ctx.fillStyle = motivo;
  const cx = tam / 2;
  const base_y = tam * 0.82;
  const niveles = [
    { anchoMitad: 6, y0: base_y - 8, y1: base_y },
    { anchoMitad: 9, y0: base_y - 18, y1: base_y - 7 },
    { anchoMitad: 12, y0: base_y - 30, y1: base_y - 17 },
  ];
  niveles.forEach(({ anchoMitad, y0, y1 }) => {
    ctx.beginPath();
    ctx.moveTo(cx, y0);
    ctx.lineTo(cx - anchoMitad, y1);
    ctx.lineTo(cx + anchoMitad, y1);
    ctx.closePath();
    ctx.fill();
  });
  ctx.fillRect(cx - 2, base_y, 4, 6);

  const textura = new THREE.CanvasTexture(canvas);
  textura.wrapS = THREE.RepeatWrapping;
  textura.wrapT = THREE.RepeatWrapping;
  textura.colorSpace = THREE.SRGBColorSpace;
  textura.repeat.set(1, 1);
  cachePatrones.set(llave, textura);
  return textura;
}

/**
 * Textura de relieve (bump) tejida a mano en un <canvas>: costillas finas
 * verticales + ruido, para que la tela no se vea como plástico liso.
 * Es neutra (gris) porque solo modula relieve/rugosidad; el color real
 * lo pone el material de cada calceta.
 */
export function texturaTejido() {
  if (texturaCache) return texturaCache;
  if (typeof document === "undefined") return null;

  const tam = 128;
  const canvas = document.createElement("canvas");
  canvas.width = tam;
  canvas.height = tam;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#808080";
  ctx.fillRect(0, 0, tam, tam);

  // Costillas verticales suaves (imitan el punto del tejido)
  const franjas = 16;
  for (let i = 0; i < franjas; i++) {
    const x = (i / franjas) * tam;
    const ancho = tam / franjas;
    const gradiente = ctx.createLinearGradient(x, 0, x + ancho, 0);
    gradiente.addColorStop(0, "rgba(255,255,255,0.12)");
    gradiente.addColorStop(0.5, "rgba(0,0,0,0.1)");
    gradiente.addColorStop(1, "rgba(255,255,255,0.12)");
    ctx.fillStyle = gradiente;
    ctx.fillRect(x, 0, ancho, tam);
  }

  // Ruido fino tipo hilo
  const imagen = ctx.getImageData(0, 0, tam, tam);
  for (let p = 0; p < imagen.data.length; p += 4) {
    const ruido = (Math.random() - 0.5) * 18;
    imagen.data[p] = Math.min(255, Math.max(0, imagen.data[p] + ruido));
    imagen.data[p + 1] = imagen.data[p];
    imagen.data[p + 2] = imagen.data[p];
  }
  ctx.putImageData(imagen, 0, 0);

  const textura = new THREE.CanvasTexture(canvas);
  textura.wrapS = THREE.RepeatWrapping;
  textura.wrapT = THREE.RepeatWrapping;
  textura.repeat.set(1, 1);
  texturaCache = textura;
  return textura;
}
