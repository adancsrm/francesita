/**
 * Límite de envíos por IP+formulario, en memoria del proceso.
 * Equivalente simple de la sesión PHP original. Como vive en memoria,
 * se reinicia si el servidor se reinicia y no se comparte entre instancias
 * si algún día se despliega en varios procesos/serverless — para eso se
 * necesitaría un almacén compartido (Redis, KV, etc.).
 */
const ultimosEnvios = new Map();

export function limiteExcedido(clave, segundos) {
  const ahora = Date.now();
  const anterior = ultimosEnvios.get(clave) || 0;
  if (ahora - anterior < segundos * 1000) {
    return true;
  }
  ultimosEnvios.set(clave, ahora);
  return false;
}

export function obtenerIp(request) {
  const reenviada = request.headers.get("x-forwarded-for");
  if (reenviada) return reenviada.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "desconocida";
}
