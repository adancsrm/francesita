import nodemailer from "nodemailer";

/**
 * Francés — envío de correo (equivalente en Node de php/lib/mailer.php).
 * Si no hay credenciales SMTP en las variables de entorno, no truena: guarda
 * la solicitud en la bitácora del servidor (consola) y responde éxito igual,
 * tal como el PHP original hacía con su respaldo de mail() nativo.
 */

let transportador = null;

function obtenerTransportador() {
  const { SMTP_HOST, SMTP_PUERTO, SMTP_USUARIO, SMTP_CLAVE } = process.env;
  if (!SMTP_HOST || !SMTP_USUARIO || !SMTP_CLAVE) return null;

  if (!transportador) {
    transportador = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PUERTO) || 465,
      secure: (Number(SMTP_PUERTO) || 465) === 465,
      auth: { user: SMTP_USUARIO, pass: SMTP_CLAVE },
    });
  }
  return transportador;
}

export async function enviarCorreo(destinatario, asunto, cuerpoHtml, responderA = "", nombreResponderA = "") {
  const remitente = process.env.CORREO_REMITENTE || "ventas@calcetasfrances.com";
  const nombreRemitente = process.env.NOMBRE_REMITENTE || "Sitio web Francés";
  const transporte = obtenerTransportador();

  if (!transporte) {
    console.log(
      `[correo] SMTP no configurado (faltan variables de entorno). Solicitud registrada, no se envió correo real a ${destinatario}: "${asunto}"`,
    );
    return { ok: true, metodo: "simulado", error: null };
  }

  try {
    await transporte.sendMail({
      from: `"${nombreRemitente}" <${remitente}>`,
      to: destinatario,
      replyTo: responderA ? `"${nombreResponderA || responderA}" <${responderA}>` : undefined,
      subject: asunto,
      html: cuerpoHtml,
    });
    return { ok: true, metodo: "smtp", error: null };
  } catch (error) {
    console.error("[correo] Falló el envío SMTP:", error.message);
    return { ok: false, metodo: "smtp", error: error.message };
  }
}
