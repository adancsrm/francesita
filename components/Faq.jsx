"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Reveal from "./Reveal";
import styles from "./Faq.module.css";

function ItemFaq({ pregunta, respuesta }) {
  const [abierto, setAbierto] = useState(false);
  const panel = useRef(null);

  useGSAP(
    () => {
      if (!panel.current) return;
      gsap.to(panel.current, {
        height: abierto ? "auto" : 0,
        opacity: abierto ? 1 : 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    },
    { dependencies: [abierto], scope: panel },
  );

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.pregunta}
        aria-expanded={abierto}
        onClick={() => setAbierto((v) => !v)}
      >
        {pregunta}
        <span className={`${styles.icono} ${abierto ? styles.iconoAbierto : ""}`} aria-hidden="true" />
      </button>
      <div ref={panel} className={styles.panel} style={{ height: 0, opacity: 0, overflow: "hidden" }}>
        <p>{respuesta}</p>
      </div>
    </div>
  );
}

export default function Faq({ items }) {
  return (
    <div className={styles.faq}>
      {items.map((item, i) => (
        <Reveal key={item.pregunta} delay={i * 0.05} y={16}>
          <ItemFaq {...item} />
        </Reveal>
      ))}
    </div>
  );
}
