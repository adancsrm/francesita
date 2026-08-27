"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import styles from "./Lightbox.module.css";

export default function Lightbox({ item, onClose, onPrev, onNext, indice, total, children }) {
  const fondo = useRef(null);
  const panel = useRef(null);

  useGSAP(() => {
    gsap.fromTo(fondo.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
    gsap.fromTo(
      panel.current,
      { opacity: 0, y: 24, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "expo.out" },
    );
  }, [item]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      ref={fondo}
      className={styles.fondo}
      role="dialog"
      aria-modal="true"
      aria-label={item.nombre}
      onClick={(e) => {
        if (e.target === fondo.current) onClose();
      }}
    >
      <div ref={panel} className={styles.panel}>
        <button className={styles.cerrar} type="button" onClick={onClose} aria-label="Cerrar galería">
          &times;
        </button>

        <div className={styles.escena}>{children}</div>

        <div className={styles.info}>
          {item.etiqueta && <span className="etiqueta">{item.etiqueta}</span>}
          <h3>{item.nombre}</h3>
          <p>{item.descripcion}</p>
          <div className={styles.pie}>Tallas {item.tallas}</div>
        </div>

        <button className={`${styles.nav} ${styles.prev}`} type="button" onClick={onPrev} aria-label="Producto anterior">
          &#8592;
        </button>
        <button className={`${styles.nav} ${styles.next}`} type="button" onClick={onNext} aria-label="Producto siguiente">
          &#8594;
        </button>

        <div className={styles.contador}>
          {indice + 1} / {total}
        </div>
      </div>
    </div>
  );
}
