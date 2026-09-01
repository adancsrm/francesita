"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Reveal from "./Reveal";

const TALLAS = ["12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "Surtido"];

export default function FormularioCotizacion() {
  const router = useRouter();
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [aviso, setAviso] = useState(null);

  function validar(form) {
    const nuevos = {};
    let primerInvalido = null;
    form.querySelectorAll(".campo input, .campo select, .campo textarea").forEach((campo) => {
      if (!campo.willValidate || campo.disabled) return;
      if (!campo.checkValidity()) {
        nuevos[campo.name] = campo.validationMessage;
        if (!primerInvalido) primerInvalido = campo;
      }
    });
    setErrores(nuevos);
    if (primerInvalido) primerInvalido.focus();
    return Object.keys(nuevos).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validar(form)) {
      setAviso({ tipo: "fallo", texto: "Revisa los campos marcados antes de enviar." });
      return;
    }
    setEnviando(true);
    setAviso(null);
    try {
      const respuesta = await fetch("/api/cotizacion", { method: "POST", body: new FormData(form) });
      const datos = await respuesta.json();
      if (datos.ok) {
        form.reset();
        setTimeout(() => router.push("/gracias"), 900);
        setAviso({ tipo: "exito", texto: datos.mensaje || "Gracias, recibimos tu solicitud." });
      } else {
        setAviso({ tipo: "fallo", texto: datos.mensaje || "No pudimos enviar tu solicitud. Intenta de nuevo." });
      }
    } catch {
      setAviso({
        tipo: "fallo",
        texto: "No pudimos conectar con el servidor. Escríbenos a ventas@calcetasfrances.com.",
      });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <Reveal as="form" x={-28} y={0} className="formulario" noValidate onSubmit={onSubmit}>
      <h2>Datos de tu solicitud</h2>

      <div className="campos">
        <div className="campo">
          <label htmlFor="nombre">
            Nombre completo <span className="req">*</span>
          </label>
          <input type="text" id="nombre" name="nombre" required autoComplete="name" maxLength={120} />
          <span className="errorCampo">{errores.nombre}</span>
        </div>

        <div className="campo">
          <label htmlFor="institucion">Empresa</label>
          <input type="text" id="institucion" name="institucion" autoComplete="organization" maxLength={160} />
          <span className="errorCampo">{errores.institucion}</span>
        </div>

        <div className="campo">
          <label htmlFor="correo">
            Correo electrónico <span className="req">*</span>
          </label>
          <input type="email" id="correo" name="correo" required autoComplete="email" maxLength={160} />
          <span className="errorCampo">{errores.correo}</span>
        </div>

        <div className="campo">
          <label htmlFor="telefono">Teléfono o WhatsApp</label>
          <input type="tel" id="telefono" name="telefono" autoComplete="tel" maxLength={20} placeholder="55 0000 0000" />
          <span className="errorCampo">{errores.telefono}</span>
        </div>

        <div className="campo">
          <label htmlFor="producto">
            Producto de interés <span className="req">*</span>
          </label>
          <select id="producto" name="producto" required defaultValue="">
            <option value="">Elige un modelo</option>
            <option>Calceta escolar alta</option>
            <option>Calceta tobillera</option>
            <option>Calceta deportiva</option>
            <option>Calcetín de vestir</option>
            <option>Varios modelos</option>
          </select>
          <span className="errorCampo">{errores.producto}</span>
        </div>

        <div className="campo">
          <label htmlFor="cantidad">
            Cantidad de pares <span className="req">*</span>
          </label>
          <input type="number" id="cantidad" name="cantidad" required min={1} step={1} placeholder="10" />
          <span className="errorCampo">{errores.cantidad}</span>
        </div>

        <div className="campo campoAncho">
          <label>Tallas que necesitas</label>
          <div className="casillas">
            {TALLAS.map((t) => (
              <label className="casilla" key={t}>
                <input type="checkbox" name="tallas" value={t} /> {t}
              </label>
            ))}
          </div>
        </div>

        <div className="campo campoAncho">
          <label htmlFor="comentarios">Comentarios</label>
          <textarea
            id="comentarios"
            name="comentarios"
            maxLength={1500}
            placeholder="Color institucional, escudo bordado, fecha en que necesitas la entrega…"
          />
          <span className="errorCampo">{errores.comentarios}</span>
        </div>
      </div>

      <div className="soloLectores" aria-hidden="true">
        <label htmlFor="sitio_web">No llenar</label>
        <input type="text" id="sitio_web" name="sitio_web" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grupoBotones" style={{ marginTop: "1.6rem" }}>
        <button className="btn btnAcento" type="submit" disabled={enviando}>
          {enviando ? "Enviando…" : "Enviar solicitud"}
        </button>
      </div>
      <p className="ayuda" style={{ marginTop: ".9rem" }}>
        Usamos tus datos solo para responder esta cotización.
      </p>
      {aviso && (
        <div className={`avisoFormulario ${aviso.tipo === "exito" ? "avisoExito" : "avisoFallo"}`} aria-live="polite">
          {aviso.texto}
        </div>
      )}
    </Reveal>
  );
}
