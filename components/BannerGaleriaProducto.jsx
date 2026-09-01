"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import styles from "./BannerGaleriaProducto.module.css";

export default function BannerGaleriaProducto({ eyebrow, titulo, descripcion, materiales, fotos, claro, arriba }) {
  const raiz = useRef(null);
  const capas = useRef([]);
  const [activo, setActivo] = useState(0);
  const pausado = useRef(false);

  const irA = useCallback((i) => setActivo((i + fotos.length) % fotos.length), [fotos.length]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const intervalo = setInterval(() => {
      if (!pausado.current) irA(activo + 1);
    }, 2000);
    return () => clearInterval(intervalo);
  }, [activo, irA]);

  useGSAP(
    () => {
      capas.current.forEach((capa, i) => {
        if (!capa) return;
        gsap.to(capa, {
          opacity: i === activo ? 1 : 0,
          scale: i === activo ? 1 : 1.08,
          duration: 1.1,
          ease: "power3.inOut",
        });
      });
    },
    { dependencies: [activo], scope: raiz },
  );

  useGSAP(
    () => {
      gsap.fromTo(
        raiz.current,
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: raiz.current, start: "top 85%" },
        },
      );

      const el = raiz.current;
      if (!el) return;
      if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const mover = (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.style.setProperty("--mx", `${px * 100}%`);
        el.style.setProperty("--my", `${py * 100}%`);
        gsap.to(el, {
          rotateY: (px - 0.5) * 4,
          rotateX: (0.5 - py) * 4,
          duration: 0.6,
          ease: "power3.out",
          overwrite: "auto",
        });
        gsap.utils.toArray(el.querySelectorAll(`.${styles.capa}`)).forEach((capa) => {
          gsap.to(capa, {
            x: (px - 0.5) * -18,
            y: (py - 0.5) * -18,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };
      const salir = () => {
        gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "power3.out" });
        gsap.utils.toArray(el.querySelectorAll(`.${styles.capa}`)).forEach((capa) => {
          gsap.to(capa, { x: 0, y: 0, duration: 0.8, ease: "power3.out" });
        });
      };

      el.addEventListener("pointermove", mover);
      el.addEventListener("pointerenter", () => (pausado.current = true));
      el.addEventListener("pointerleave", () => {
        pausado.current = false;
        salir();
      });
      return () => {
        el.removeEventListener("pointermove", mover);
        el.removeEventListener("pointerleave", salir);
      };
    },
    { scope: raiz },
  );

  return (
    <div
      ref={raiz}
      className={`${styles.banner} ${claro ? styles.claro : ""} ${arriba ? styles.arriba : ""}`}
      style={{ "--mx": "50%", "--my": "50%" }}
    >
      {!claro && <div className={styles.aurora} aria-hidden="true" />}
      {!claro && <span className={styles.brillo} aria-hidden="true" />}
      <span className={styles.foco} aria-hidden="true" />

      <div className={styles.contenido}>
        <span className={`etiqueta ${styles.etiqueta}`}>{eyebrow}</span>
        <h2 className={styles.titulo}>{titulo}</h2>
        <p className={styles.texto}>{descripcion}</p>
        {materiales && <p className={styles.materiales}>Materiales: {materiales}</p>}

        <div className={styles.controles}>
          <button
            type="button"
            aria-label="Imagen anterior"
            className={styles.flecha}
            onClick={() => irA(activo - 1)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Imagen siguiente"
            className={styles.flecha}
            onClick={() => irA(activo + 1)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.fotoPanel}>
        <div className={styles.lienzo}>
          {fotos.map((foto, i) => (
            <div
              key={foto.src}
              ref={(el) => (capas.current[i] = el)}
              className={styles.capa}
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <Image
                src={foto.src}
                alt=""
                aria-hidden="true"
                fill
                sizes="100vw"
                priority={i === 0}
                className={styles.imgFondo}
              />
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="100vw"
                priority={i === 0}
                className={styles.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
