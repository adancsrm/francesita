"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

/**
 * Envuelve un único elemento (normalmente un <a>/<button>) y lo hace
 * "magnético": se desplaza suavemente hacia el cursor al pasar cerca.
 * Usa un contenedor `display: contents` para no alterar el layout.
 */
export default function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current?.firstElementChild;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const setX = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const setY = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    const mover = (e) => {
      const r = el.getBoundingClientRect();
      setX((e.clientX - r.left - r.width / 2) * strength);
      setY((e.clientY - r.top - r.height / 2) * strength);
    };
    const salir = () => {
      setX(0);
      setY(0);
    };

    el.addEventListener("mousemove", mover);
    el.addEventListener("mouseleave", salir);
    return () => {
      el.removeEventListener("mousemove", mover);
      el.removeEventListener("mouseleave", salir);
    };
  }, [strength]);

  return (
    <span ref={ref} style={{ display: "contents" }}>
      {children}
    </span>
  );
}
