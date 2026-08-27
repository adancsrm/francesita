"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Reveal from "./Reveal";
import styles from "./Proceso.module.css";

const PASOS = [
  {
    titulo: "Cotización",
    texto: "Nos dices modelo, tallas y cantidad. Te mandamos precio por par en 24 horas.",
  },
  {
    titulo: "Muestra",
    texto: "Tejemos una muestra física con tu color y escudo. La apruebas antes de producir.",
  },
  {
    titulo: "Producción",
    texto: "Entra a telar. De 10 a 15 días hábiles según el volumen del pedido.",
  },
  {
    titulo: "Revisión",
    texto: "Se revisa par por par: medida, color, remate y empaque.",
  },
  {
    titulo: "Entrega",
    texto: "Salida con guía de rastreo a toda la República o entrega directa en la Ciudad de México.",
  },
];

export default function Proceso() {
  const lista = useRef(null);
  const linea = useRef(null);

  useGSAP(
    () => {
      const el = lista.current;
      if (!el) return;

      gsap.fromTo(
        linea.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 75%", end: "bottom 60%", scrub: 0.6 },
        },
      );

      gsap.fromTo(
        gsap.utils.toArray(el.children),
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "expo.out",
          stagger: 0.15,
          scrollTrigger: { trigger: el, start: "top 78%" },
        },
      );
    },
    { scope: lista },
  );

  return (
    <section className={`seccion ${styles.seccion}`}>
      <span className={styles.brillo} aria-hidden="true" />
      <div className="contenedor">
        <Reveal className={styles.encabezado}>
          <span className="eyebrow">Cómo trabajamos</span>
          <h2>De la cotización a la entrega, en cinco pasos</h2>
          <p>
            Cada paso tiene un responsable y una fecha. Así sabes exactamente
            cuándo llegan tus calcetas.
          </p>
        </Reveal>

        <div className={styles.pista}>
          <span ref={linea} className={styles.linea} aria-hidden="true" />
          <ol ref={lista} className={styles.lista}>
            {PASOS.map((p, i) => (
              <li key={p.titulo} className={styles.paso}>
                <span className={styles.numero}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
