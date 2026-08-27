import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { limpiarTexto, limpiarLista, validarCorreo, esHoneypot, escaparHtml } from "@/lib/validacionFormulario";
import { limiteExcedido, obtenerIp } from "@/lib/limiteFrecuencia";
import { enviarCorreo } from "@/lib/correo";

const CORREO_VENTAS = process.env.CORREO_VENTAS || "ventas@francesitas.com.mx";
const SEGUNDOS_ENTRE_ENVIOS = 30;
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

  if (esHoneypot(formData.get("sitio_web"))) {
    return responder(true, "Gracias, hemos recibido tu solicitud.");
  }

  if (limiteExcedido(`cotizacion:${ip}`, SEGUNDOS_ENTRE_ENVIOS)) {
    return responder(
      false,
      "Ya recibimos una solicitud tuya hace unos segundos. Espera un momento antes de enviar otra.",
      429,
    );
  }

  const nombre = limpiarTexto(formData.get("nombre") || "");
  const institucion = limpiarTexto(formData.get("institucion") || "");
  const correo = validarCorreo(formData.get("correo") || "");
  const telefono = limpiarTexto(formData.get("telefono") || "");
  const producto = limpiarTexto(formData.get("producto") || "");
  const cantidad = parseInt(formData.get("cantidad") || "0", 10) || 0;
  const tallas = limpiarLista(formData.getAll("tallas"));
  const comentarios = limpiarTexto(formData.get("comentarios") || "");

  const errores = [];
  if (nombre === "") errores.push("nombre");
  if (correo === false) errores.push("correo");
  if (producto === "") errores.push("producto");
  if (cantidad < 50) errores.push("cantidad");

  if (errores.length > 0) {
    return responder(false, `Revisa estos campos: ${errores.join(", ")}.`, 422);
  }

  const filas = {
    Nombre: nombre,
    "Escuela/empresa": institucion || "—",
    Correo: correo,
    Teléfono: telefono || "—",
    Producto: producto,
    Cantidad: `${cantidad} pares`,
    Tallas: tallas.length ? tallas.join(", ") : "—",
    Comentarios: comentarios || "—",
  };
  const filasHtml = Object.entries(filas).map(([k, v]) => filaTabla(k, v)).join("");

  const cuerpoVentas =
    '<div style="font-family:Arial,sans-serif;max-width:640px">' +
    '<h2 style="color:#2C3B7E;margin-bottom:.3em">Nueva solicitud de cotización</h2>' +
    `<table style="width:100%;border-collapse:collapse;font-size:14px">${filasHtml}</table></div>`;

  const resultadoVentas = await enviarCorreo(CORREO_VENTAS, `Nueva cotización — ${nombre}`, cuerpoVentas, correo, nombre);

  const cuerpoAcuse =
    '<div style="font-family:Arial,sans-serif;max-width:640px">' +
    `<h2 style="color:#2C3B7E">¡Gracias, ${escaparHtml(nombre)}!</h2>` +
    `<p>Recibimos tu solicitud de cotización para <strong>${escaparHtml(producto)}</strong> (${cantidad} pares). ` +
    "Te respondemos en menos de 24 horas hábiles con precio por par, tiempo de producción y costo de envío.</p>" +
    '<p style="color:#666;font-size:13px">— Equipo Francesita</p></div>';
  await enviarCorreo(correo, "Recibimos tu cotización — Francesita", cuerpoAcuse, CORREO_VENTAS, "Francesita");

  await registrarBitacora("cotizacion", { ...filas, envio_ok: resultadoVentas.ok, envio_metodo: resultadoVentas.metodo });

  if (resultadoVentas.ok) {
    return responder(true, "Gracias, recibimos tu solicitud. Te contactamos en menos de 24 horas hábiles.");
  }
  return responder(
    true,
    `Recibimos tu solicitud y quedó registrada, aunque el correo automático tardó en salir. Si no tienes noticias nuestras en 24 horas, escríbenos directo a ${CORREO_VENTAS}.`,
  );
}
