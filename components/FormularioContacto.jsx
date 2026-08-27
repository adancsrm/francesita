"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function FormularioContacto() {
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
      const respuesta = await fetch("/api/contacto", { method: "POST", body: new FormData(form) });
      const datos = await respuesta.json();
      if (datos.ok) {
        form.reset();
      }
      setAviso({
        tipo: datos.ok ? "exito" : "fallo",
        texto: datos.mensaje || (datos.ok ? "Gracias, recibimos tu mensaje." : "No pudimos enviar tu mensaje."),
      });
    } catch {
      setAviso({
        tipo: "fallo",
        texto: "No pudimos conectar con el servidor. Escríbenos a contacto@francesitas.com.mx.",
      });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <Reveal as="form" x={-28} y={0} className="formulario" noValidate onSubmit={onSubmit}>
      <h2>Envíanos un mensaje</h2>

      <div className="campos">
        <div className="campo">
          <label htmlFor="nombre">
            Nombre <span className="req">*</span>
          </label>
          <input type="text" id="nombre" name="nombre" required autoComplete="name" maxLength={120} />
          <span className="errorCampo">{errores.nombre}</span>
        </div>

        <div className="campo">
          <label htmlFor="correo">
            Correo electrónico <span className="req">*</span>
          </label>
          <input type="email" id="correo" name="correo" required autoComplete="email" maxLength={160} />
          <span className="errorCampo">{errores.correo}</span>
        </div>

        <div className="campo">
          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" id="telefono" name="telefono" autoComplete="tel" maxLength={20} placeholder="55 0000 0000" />
          <span className="errorCampo">{errores.telefono}</span>
        </div>

        <div className="campo">
          <label htmlFor="asunto">Asunto</label>
          <select id="asunto" name="asunto" defaultValue="Información de productos">
            <option>Información de productos</option>
            <option>Seguimiento a un pedido</option>
            <option>Quiero ser distribuidor</option>
            <option>Facturación</option>
            <option>Otro</option>
          </select>
          <span className="errorCampo">{errores.asunto}</span>
        </div>

        <div className="campo campoAncho">
          <label htmlFor="mensaje">
            Mensaje <span className="req">*</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            required
            minLength={10}
            maxLength={2000}
            placeholder="Cuéntanos qué necesitas"
          />
          <span className="errorCampo">{errores.mensaje}</span>
        </div>
      </div>

      <div className="soloLectores" aria-hidden="true">
        <label htmlFor="sitio_web">No llenar</label>
        <input type="text" id="sitio_web" name="sitio_web" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grupoBotones" style={{ marginTop: "1.6rem" }}>
        <button className="btn btnAcento" type="submit" disabled={enviando}>
          {enviando ? "Enviando…" : "Enviar mensaje"}
        </button>
      </div>
      {aviso && (
        <div className={`avisoFormulario ${aviso.tipo === "exito" ? "avisoExito" : "avisoFallo"}`} aria-live="polite">
          {aviso.texto}
        </div>
      )}
    </Reveal>
  );
}
