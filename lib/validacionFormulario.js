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

export function escaparHtml(valor) {
  return String(valor)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
