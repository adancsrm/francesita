import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { limpiarTexto, validarCorreo, esHoneypot, esEnvioMuyRapido, escaparHtml } from "@/lib/validacionFormulario";
import { limiteExcedido, demasiadosEnVentana, obtenerIp } from "@/lib/limiteFrecuencia";
import { enviarCorreo } from "@/lib/correo";

const CORREO_CONTACTO = process.env.CORREO_CONTACTO || "ventas@calcetasfrances.com";
const SEGUNDOS_ENTRE_ENVIOS = 30;
const SEGUNDOS_VENTANA_IP = 3600;
const MAX_POR_IP_EN_VENTANA = 5;
const SEGUNDOS_VENTANA_ACUSES = 3600;
const MAX_ACUSES_GLOBAL_EN_VENTANA = 40;
const ARCHIVO_BITACORA = path.join(process.cwd(), "data", "solicitudes.log");

function responder(ok, mensaje, codigo = 200) {
  return Response.json({ ok, mensaje }, { status: codigo });
}

async function registrarBitacora(tipo, datos) {
  try {
    await mkdir(path.dirname(ARCHIVO_BITACORA), { recursive: true });
    const linea = JSON.stringify({ fecha: new Date().toISOString(), tipo, datos }) + "\n";
    await appendFile(ARCHIVO_BITACORA, linea, "utf8");
  } catch (error) {
    console.error("[bitacora] no se pudo escribir:", error.message);
  }
}

function filaTabla(etiqueta, valor) {
  return (
    '<tr><td style="padding:8px 12px;font-weight:600;color:#2C3B7E;border-bottom:1px solid #E4E7F2;white-space:nowrap">' +
    escaparHtml(etiqueta) +
    '</td><td style="padding:8px 12px;border-bottom:1px solid #E4E7F2">' +
    escaparHtml(valor).replace(/\n/g, "<br>") +
    "</td></tr>"
  );
}

export async function POST(request) {
  const ip = obtenerIp(request);
  const formData = await request.formData();

  if (esHoneypot(formData.get("sitio_web")) || esEnvioMuyRapido(formData.get("cargado_en"))) {
    return responder(true, "Gracias, hemos recibido tu mensaje.");
  }

  if (
    limiteExcedido(`contacto:${ip}`, SEGUNDOS_ENTRE_ENVIOS) ||
    demasiadosEnVentana(`contacto-ip:${ip}`, SEGUNDOS_VENTANA_IP, MAX_POR_IP_EN_VENTANA)
  ) {
    return responder(
      false,
      "Ya recibimos un mensaje tuyo hace unos segundos. Espera un momento antes de enviar otro.",
      429,
    );
  }

  const nombre = limpiarTexto(formData.get("nombre") || "");
  const correo = validarCorreo(formData.get("correo") || "");
  const telefono = limpiarTexto(formData.get("telefono") || "");
  const asunto = limpiarTexto(formData.get("asunto") || "Otro");
  const mensaje = limpiarTexto(formData.get("mensaje") || "");

  const errores = [];
  if (nombre === "") errores.push("nombre");
  if (correo === false) errores.push("correo");
  if (mensaje.length < 10) errores.push("mensaje");

  if (errores.length > 0) {
    return responder(false, `Revisa estos campos: ${errores.join(", ")}.`, 422);
  }

  const filas = {
    Nombre: nombre,
    Correo: correo,
    Teléfono: telefono || "—",
    Asunto: asunto,
    Mensaje: mensaje,
  };
  const filasHtml = Object.entries(filas).map(([k, v]) => filaTabla(k, v)).join("");

  const cuerpoContacto =
    '<div style="font-family:Arial,sans-serif;max-width:640px">' +
    '<h2 style="color:#2C3B7E;margin-bottom:.3em">Nuevo mensaje de contacto</h2>' +
    `<table style="width:100%;border-collapse:collapse;font-size:14px">${filasHtml}</table></div>`;

  const resultadoContacto = await enviarCorreo(CORREO_CONTACTO, `Nuevo mensaje — ${asunto}`, cuerpoContacto, correo, nombre);

  // Tope global al correo de acuse: es el único que sale hacia una dirección
  // que no controlamos (la que puso el visitante), así que es el vector real
  // de abuso como relay de spam. Lo acotamos aunque alguien evada honeypot,
  // trampa de tiempo y límite por IP.
  if (!demasiadosEnVentana("contacto-acuse:global", SEGUNDOS_VENTANA_ACUSES, MAX_ACUSES_GLOBAL_EN_VENTANA)) {
    const cuerpoAcuse =
      '<div style="font-family:Arial,sans-serif;max-width:640px">' +
      `<h2 style="color:#2C3B7E">¡Gracias, ${escaparHtml(nombre)}!</h2>` +
      `<p>Recibimos tu mensaje sobre <strong>${escaparHtml(asunto)}</strong>. Te contestamos el mismo día hábil.</p>` +
      '<p style="color:#666;font-size:13px">— Equipo Francés</p></div>';
    await enviarCorreo(correo, "Recibimos tu mensaje — Francés", cuerpoAcuse, CORREO_CONTACTO, "Francés");
  }

  await registrarBitacora("contacto", { ...filas, envio_ok: resultadoContacto.ok, envio_metodo: resultadoContacto.metodo });

  if (resultadoContacto.ok) {
    return responder(true, "Gracias, recibimos tu mensaje. Te contestamos el mismo día hábil.");
  }
  return responder(
    true,
    `Recibimos tu mensaje y quedó registrado, aunque el correo automático tardó en salir. Si no tienes noticias nuestras pronto, escríbenos directo a ${CORREO_CONTACTO}.`,
  );
}
