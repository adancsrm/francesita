"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import styles from "./TiltCard.module.css";

/**
 * Tarjeta con inclinación 3D + foco de luz que sigue al cursor.
 * Se desactiva solo con mouse real (hover: hover) y sin movimiento reducido.
 */
export default function TiltCard({
  children,
  className = "",
  intensity = 10,
  lift = -10,
  as: Tag = "div",
  ...props
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.set(el, { rotateY: 0, rotateX: 0, y: 0, transformPerspective: 1000 });
      const anima = (vars) => gsap.to(el, { ...vars, duration: 0.5, ease: "power3.out", overwrite: "auto" });

      const mover = (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        anima({ rotateY: (px - 0.5) * intensity, rotateX: (0.5 - py) * intensity, y: lift });
        el.style.setProperty("--mx", px * 100 + "%");
        el.style.setProperty("--my", py * 100 + "%");
      };
      const salir = () => anima({ rotateY: 0, rotateX: 0, y: 0 });

      el.addEventListener("pointermove", mover);
      el.addEventListener("pointerleave", salir);
      return () => {
        el.removeEventListener("pointermove", mover);
        el.removeEventListener("pointerleave", salir);
      };
    },
    { scope: ref },
  );

  return (
    <Tag
      ref={ref}
      className={`${styles.tarjeta} ${className}`}
      style={{ "--mx": "50%", "--my": "0%" }}
      {...props}
    >
      {children}
      <span className={styles.foco} aria-hidden="true" />
    </Tag>
  );
}
