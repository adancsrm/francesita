/**
 * Francés — sanitización y validación de formularios (lado servidor).
 * Equivalente en Node del antiguo php/lib/validacion.php.
 */

export function limpiarTexto(valor) {
  if (typeof valor !== "string") return "";
  return valor
    .replace(/[\r\0]/g, "")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "")
    .trim();
}

export function limpiarLista(valores) {
  if (!Array.isArray(valores)) return [];
  return valores.map((v) => limpiarTexto(String(v))).filter((v) => v !== "");
}

const RE_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validarCorreo(correo) {
  const limpio = String(correo || "").trim();
  return RE_CORREO.test(limpio) ? limpio : false;
}

export function esHoneypot(valor) {
  return String(valor || "").trim() !== "";
}

/**
 * Trampa de tiempo: el formulario manda la hora en que se cargó (campo
 * oculto `cargado_en`, en milisegundos). Una persona real tarda al menos un
 * par de segundos en llenarlo; un bot que llama al endpoint directo suele
 * enviarlo de inmediato o sin ese campo. Sirve para descartar abuso
 * automatizado del endpoint sin depender solo del honeypot.
 */
export function esEnvioMuyRapido(cargadoEn, minimoMs = 1500) {
  const marca = Number(cargadoEn);
  if (!Number.isFinite(marca) || marca <= 0) return true;
  return Date.now() - marca < minimoMs;
}

export function escaparHtml(valor) {
  return String(valor)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
