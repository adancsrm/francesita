/**
 * Límite de envíos por IP+formulario, en memoria del proceso.
 * Equivalente simple de la seme sión PHP original. Como vive en memoria,
 * se reinicia si el servidor se reinicia y no se comparte entre instancias
 * si algún día se despliega en varios procesos/serverless — para eso se
 * necesitaría un almacén compartido (Redis, KV, etc.).
 */
const ultimosEnvios = new Map();
const ventanas = new Map();

export function limiteExcedido(clave, segundos) {
  const ahora = Date.now();
  const anterior = ultimosEnvios.get(clave) || 0;
  if (ahora - anterior < segundos * 1000) {
    return true;
  }
  ultimosEnvios.set(clave, ahora);
  return false;
}

/**
 * Tope por ventana deslizante: como máximo `maximo` marcas dentro de los
 * últimos `segundos`. Se usa además del cooldown de `limiteExcedido` para
 * acotar el volumen por IP (rotación de IP) y el volumen global de correos
 * salientes hacia direcciones que llena el propio visitante — así, aunque
 * alguien evada el honeypot y el cooldown, el sitio no puede convertirse en
 * un relay de spam masivo hacia terceros.
 */
export function demasiadosEnVentana(clave, segundos, maximo) {
  const ahora = Date.now();
  const desde = ahora - segundos * 1000;
  const marcas = (ventanas.get(clave) || []).filter((marca) => marca > desde);
  if (marcas.length >= maximo) {
    ventanas.set(clave, marcas);
    return true;
  }
  marcas.push(ahora);
  ventanas.set(clave, marcas);
  return false;
}

export function obtenerIp(request) {
  const reenviada = request.headers.get("x-forwarded-for");
  if (reenviada) return reenviada.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "desconocida";
}
