"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Reveal from "./Reveal";
import styles from "./Proceso.module.css";

// Resumen de las 7 etapas de /proceso (app/proceso/page.js)
const PASOS = [
  {
    titulo: "Maquinado",
    texto: "Las máquinas circulares tejen la calceta en una sola pieza, del puño a la punta.",
  },
  {
    titulo: "Rematado",
    texto: "Se cierra la punta con una costura fina y pareja que no lastima ni se abre.",
  },
  {
    titulo: "Volteo",
    texto: "Se pone al derecho, se retiran hilos sueltos y se hace una primera revisión.",
  },
  {
    titulo: "Hormado",
    texto: "Con calor y vapor se fija la forma, se asienta el tejido y se marca la talla.",
  },
  {
    titulo: "Pareo y etiquetado",
    texto: "Revisión par por par de medida, color y remate. Se parea y se etiqueta.",
  },
  {
    titulo: "Empaquetado",
    texto: "Se empaca por modelo y talla para que llegue limpio y fácil de acomodar.",
  },
  {
    titulo: "Envío",
    texto: "Sale con guía de rastreo a toda la República o con entrega directa.",
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
          <h2>Del telar a tus manos, en siete etapas</h2>
          <p>
            Cada par pasa por siete etapas dentro de nuestro taller. Este es el
            camino que recorre una calceta Francés.
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

        <Link className={`btn btnClaro ${styles.enlace}`} href="/proceso">
          Conoce el proceso completo
        </Link>
      </div>
    </section>
  );
}
