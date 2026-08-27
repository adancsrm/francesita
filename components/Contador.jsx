"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Cifra que cuenta desde 0 hasta su valor final al entrar en pantalla.
 * Acepta prefijos/sufijos como "+25" o "24 h". Usa IntersectionObserver
 * (no ScrollTrigger) porque su posición no se ve afectada por el salto de
 * línea que provoca la carga tardía de las tipografías web.
 */
export default function Contador({ valor, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const match = valor.match(/^(\D*)(\d+)(.*)$/);
    if (!match) return;
    const [, prefijo, numero, sufijo] = match;
    const meta = parseInt(numero, 10);
    const contador = { n: 0 };

    const observador = new IntersectionObserver(
      (entradas, obs) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          gsap.to(contador, {
            n: meta,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = prefijo + Math.round(contador.n) + sufijo;
            },
          });
          obs.unobserve(el);
        });
      },
      { threshold: 0.3 },
    );

    observador.observe(el);
    return () => observador.disconnect();
  }, [valor]);

  return (
    <strong ref={ref} className={className}>
      {valor}
    </strong>
  );
}
