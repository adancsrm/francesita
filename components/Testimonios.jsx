"use client";

import { useCallback, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, Draggable } from "@/lib/gsap";
import Reveal from "./Reveal";
import styles from "./Testimonios.module.css";

const TESTIMONIOS = [
  {
    texto:
      "Llevamos cuatro ciclos con las mismas calcetas y las mamás ya no reclaman que se vencen del puño. Eso para nosotros lo dice todo.",
    nombre: "Laura Mendoza",
    rol: "Coordinadora administrativa, colegio particular",
  },
  {
    texto:
      "Pedimos color institucional con escudo tejido y entregaron en el tiempo que dijeron, justo antes del regreso a clases.",
    nombre: "Óscar Rivas",
    rol: "Dueño de uniformería",
  },
  {
    texto:
      "El surtido de tallas es lo que más agradezco. Nunca me quedo sin la 14 ni sin la 24 a media temporada.",
    nombre: "Patricia Cruz",
    rol: "Distribuidora, Estado de México",
  },
];

export default function Testimonios() {
  const viewport = useRef(null);
  const pista = useRef(null);
  const draggableRef = useRef(null);
  const [activo, setActivo] = useState(0);

  const irA = useCallback((i) => {
    const drag = draggableRef.current;
    if (!drag) return;
    const clamped = Math.max(0, Math.min(TESTIMONIOS.length - 1, i));
    const tarjetas = gsap.utils.toArray(pista.current.children);
    const objetivo = tarjetas[clamped];
    if (!objetivo) return;
    const x = Math.max(
      drag.minX,
      Math.min(drag.maxX, -objetivo.offsetLeft + 4),
    );
    gsap.to(pista.current, { x, duration: 0.6, ease: "power3.out" });
    setActivo(clamped);
  }, []);

  useGSAP(
    () => {
      const [drag] = Draggable.create(pista.current, {
        type: "x",
        inertia: true,
        bounds: viewport.current,
        edgeResistance: 0.7,
        onDrag: actualizarActivo,
        onThrowComplete: actualizarActivo,
      });
      draggableRef.current = drag;

      function actualizarActivo() {
        const tarjetas = gsap.utils.toArray(pista.current.children);
        let masCercana = 0;
        let distancia = Infinity;
        tarjetas.forEach((t, i) => {
          const real = Math.abs(t.offsetLeft + gsap.getProperty(pista.current, "x"));
          if (real < distancia) {
            distancia = real;
            masCercana = i;
          }
        });
        setActivo(masCercana);
      }

      gsap.fromTo(
        gsap.utils.toArray(pista.current.children),
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: { trigger: viewport.current, start: "top 82%" },
        },
      );

      return () => drag.kill();
    },
    { scope: viewport },
  );

  return (
    <section className="seccion">
      <div className="contenedor">
        <Reveal className={styles.encabezado}>
          <span className="eyebrow">Lo que dicen nuestros clientes</span>
          <h2>Escuelas y uniformerías que ya surten con Francés</h2>
        </Reveal>

        <div className={styles.carrusel}>
          <div ref={viewport} className={styles.viewport}>
            <div ref={pista} className={styles.pista}>
              {TESTIMONIOS.map((t) => (
                <figure key={t.nombre} className={styles.tarjeta}>
                  <blockquote>{t.texto}</blockquote>
                  <figcaption>
                    {t.nombre}
                    <span>{t.rol}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className={styles.controles}>
            <button
              type="button"
              className={styles.flecha}
              onClick={() => irA(activo - 1)}
              aria-label="Testimonio anterior"
            >
              &#8592;
            </button>
            <div className={styles.puntos}>
              {TESTIMONIOS.map((t, i) => (
                <button
                  key={t.nombre}
                  type="button"
                  className={`${styles.punto} ${i === activo ? styles.puntoActivo : ""}`}
                  onClick={() => irA(i)}
                  aria-label={`Ir al testimonio de ${t.nombre}`}
                />
              ))}
            </div>
            <button
              type="button"
              className={styles.flecha}
              onClick={() => irA(activo + 1)}
              aria-label="Siguiente testimonio"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
