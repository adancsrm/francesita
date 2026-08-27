"use client";

/**
 * @react-three/fiber (v9.7.0, la última estable) todavía crea un THREE.Clock
 * internamente para medir el tiempo entre cuadros, y three.js ya lo marcó
 * como obsolescente a favor de THREE.Timer. Es un aviso de la librería, no
 * de nuestro código, y no afecta el render ni las animaciones. Mientras no
 * salga una versión de r3f que use Timer, silenciamos solo ese mensaje
 * exacto para no ensuciar la consola (el resto de los avisos sigue igual).
 */
if (typeof window !== "undefined" && !window.__fsAvisosThreeFiltrados) {
  window.__fsAvisosThreeFiltrados = true;
  const advertenciaOriginal = console.warn.bind(console);
  console.warn = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("THREE.Clock: This module has been deprecated")) {
      return;
    }
    advertenciaOriginal(...args);
  };
}
