import * as THREE from "three";

let texturaCache = null;

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
