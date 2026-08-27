"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import styles from "./CursorOrbe.module.css";

export default function CursorOrbe() {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    const setX = gsap.quickTo(el, "x", { duration: 0.55, ease: "power3.out" });
    const setY = gsap.quickTo(el, "y", { duration: 0.55, ease: "power3.out" });

    const mover = (e) => {
      el.classList.add(styles.activo);
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener("mousemove", mover, { passive: true });
    window.addEventListener("mouseleave", () => el.classList.remove(styles.activo));

    return () => window.removeEventListener("mousemove", mover);
  }, []);

  return <div ref={ref} className={styles.orbe} aria-hidden="true" />;
}
