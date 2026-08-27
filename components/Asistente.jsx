"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Asistente.module.css";

const GUION = [
  {
    chip: "Ver productos",
    claves: ["producto", "catalogo", "catálogo", "calceta", "calcetin", "calcetín", "modelo", "tipo"],
    respuesta:
      'Manejamos calcetas escolares, tobilleras, calcetas altas y calcetines de vestir para caballero y dama, en algodón peinado con lycra. Puedes verlos todos en <a href="/productos">Productos</a>.',
  },
  {
    chip: "Cotizar",
    claves: ["cotiza", "precio", "costo", "presupuesto", "mayoreo", "cuanto", "cuánto"],
    respuesta:
      'Cotizamos por volumen a escuelas, uniformerías y distribuidores. Llena el <a href="/cotizacion">formulario de cotización</a> con modelo, tallas y cantidad; te respondemos en menos de 24 horas hábiles.',
  },
  {
    chip: "Tallas",
    claves: ["talla", "medida", "numero", "número", "chico", "mediano", "grande"],
    respuesta:
      "Tenemos tallas de la 12 a la 17 en línea infantil y de la 18 a la 26 en línea juvenil y adulto. Si tu escuela necesita una talla especial, la producimos bajo pedido.",
  },
  {
    chip: "Pedido mínimo",
    claves: ["minimo", "mínimo", "docena", "cantidad", "pares"],
    respuesta:
      "El pedido mínimo es de 50 pares por modelo y color. Para colores institucionales o logotipo bordado, el mínimo es de 200 pares.",
  },
  {
    chip: "Personalización",
    claves: ["logo", "bordado", "personaliza", "escudo", "color institucional", "raya"],
    respuesta:
      "Sí personalizamos: colores institucionales, rayas, puño con vivos y escudo bordado o tejido. Envíanos tu logotipo al cotizar y te mandamos una muestra física.",
  },
  {
    chip: "Envíos",
    claves: ["envio", "envío", "entrega", "tiempo", "paqueteria", "paquetería", "cuando llega"],
    respuesta:
      "Enviamos a toda la República Mexicana. Producción de 10 a 15 días hábiles para pedidos personalizados y de 3 a 5 días para modelos de línea.",
  },
  {
    chip: "Contacto",
    claves: ["contacto", "telefono", "teléfono", "correo", "whatsapp", "direccion", "dirección", "horario", "hablar"],
    respuesta:
      'Estamos de lunes a viernes de 9:00 a 18:00 y sábados de 9:00 a 14:00. Escríbenos por <a href="/contacto">el formulario de contacto</a>, por WhatsApp al <a href="https://wa.me/522228836412" target="_blank" rel="noopener">222 883 6412</a> o al correo ventas@francesitas.com.mx.',
  },
  {
    chip: "Materiales",
    claves: ["material", "algodon", "algodón", "lycra", "tela", "calidad", "compos"],
    respuesta:
      "Tejemos con algodón peinado (70–80%), poliéster y lycra elastano. El resultado: calcetas que no se vencen del puño y aguantan el uso diario y el lavado constante.",
  },
];

const RESPUESTA_GENERICA =
  'No estoy seguro de haber entendido. Puedo ayudarte con productos, tallas, cotizaciones, personalización y envíos. Si prefieres hablar con una persona, escríbenos en <a href="/contacto">Contacto</a>.';

const SALUDO =
  "¡Hola! Soy el asistente de Francesita. Te ayudo con calcetas, calcetines, tallas y cotizaciones. ¿Qué necesitas?";

var MARCAS_DIACRITICAS = new RegExp("[\\u0300-\\u036f]", "g");

function normaliza(texto) {
  return texto.toLowerCase().normalize("NFD").replace(MARCAS_DIACRITICAS, "");
}

function responderA(texto) {
  const normalizado = normaliza(texto);
  const encontrada = GUION.find((item) =>
    item.claves.some((clave) => normalizado.indexOf(normaliza(clave)) !== -1),
  );
  return encontrada ? encontrada.respuesta : RESPUESTA_GENERICA;
}

export default function Asistente() {
  const [abierto, setAbierto] = useState(false);
  const [iniciado, setIniciado] = useState(false);
  const [mensajes, setMensajes] = useState([]);
  const [texto, setTexto] = useState("");
  const listaRef = useRef(null);
  const botonRef = useRef(null);

  useEffect(() => {
    if (listaRef.current) {
      listaRef.current.scrollTop = listaRef.current.scrollHeight;
    }
  }, [mensajes]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && abierto) cerrar();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [abierto]);

  function agregar(html, quien) {
    setMensajes((m) => [...m, { html, quien, id: m.length }]);
  }

  function abrir() {
    setAbierto(true);
    if (!iniciado) {
      agregar(SALUDO, "bot");
      setIniciado(true);
    }
  }

  function cerrar() {
    setAbierto(false);
    botonRef.current?.focus();
  }

  function enviarChip(item) {
    agregar(item.chip, "yo");
    setTimeout(() => agregar(item.respuesta, "bot"), 380);
  }

  function onSubmit(e) {
    e.preventDefault();
    const limpio = texto.trim();
    if (!limpio) return;
    agregar(limpio.replace(/[<>]/g, ""), "yo");
    setTexto("");
    setTimeout(() => agregar(responderA(limpio), "bot"), 380);
  }

  return (
    <>
      <button
        ref={botonRef}
        className={styles.boton}
        type="button"
        aria-label={abierto ? "Cerrar asistente en línea" : "Abrir asistente en línea"}
        aria-expanded={abierto}
        onClick={() => (abierto ? cerrar() : abrir())}
      >
        <span className={styles.punto} aria-hidden="true" />
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3C6.9 3 2.8 6.4 2.8 10.6c0 2.4 1.4 4.6 3.5 6L5.6 20l3.6-1.7c.9.2 1.8.3 2.8.3 5.1 0 9.2-3.4 9.2-7.6S17.1 3 12 3z" />
        </svg>
      </button>

      <section
        className={`${styles.panel} ${abierto ? styles.abierto : ""}`}
        aria-label="Asistente en línea de Francesita"
      >
        <header className={styles.cabecera}>
          <Image src="/img/logo-francesitas.svg" alt="" width={38} height={38} />
          <div>
            <strong>Asistente Francesita</strong>
            <small>En línea ahora</small>
          </div>
          <button type="button" className={styles.cerrarBtn} aria-label="Cerrar asistente" onClick={cerrar}>
            &times;
          </button>
        </header>

        <div ref={listaRef} className={styles.mensajes} role="log" aria-live="polite">
          {mensajes.map((m) => (
            <div
              key={m.id}
              className={`${styles.burbuja} ${m.quien === "yo" ? styles.yo : styles.bot}`}
              dangerouslySetInnerHTML={{ __html: m.html }}
            />
          ))}
        </div>

        <div className={styles.opciones}>
          {GUION.map((item) => (
            <button key={item.chip} type="button" className={styles.chip} onClick={() => enviarChip(item)}>
              {item.chip}
            </button>
          ))}
        </div>

        <form className={styles.entrada} onSubmit={onSubmit}>
          <label className="soloLectores" htmlFor="asistente-texto">
            Escribe tu pregunta
          </label>
          <input
            id="asistente-texto"
            type="text"
            autoComplete="off"
            placeholder="Escribe tu pregunta…"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
          <button type="submit" aria-label="Enviar pregunta">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </section>
    </>
  );
}
