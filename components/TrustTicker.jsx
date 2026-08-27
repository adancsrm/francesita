"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import styles from "./TrustTicker.module.css";

const ITEMS = [
  "Tallas de la 12 a la 26",
  "Color institucional a pedido",
  "Escudo bordado o tejido",
  "Envíos a toda la República",
];

export default function TrustTicker() {
  const pista = useRef(null);

  useGSAP(
    () => {
      const el = pista.current;
      if (!el) return;
      const tween = gsap.to(el, {
        xPercent: -50,
        duration: 22,
        ease: "none",
        repeat: -1,
      });
      const enter = () => tween.pause();
      const leave = () => tween.resume();
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      return () => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      };
    },
    { scope: pista },
  );

  return (
    <div className={styles.cinta}>
      <div ref={pista} className={styles.pista}>
        {[0, 1].map((copia) => (
          <ul key={copia} aria-hidden={copia === 1 ? "true" : undefined}>
            {ITEMS.map((item) => (
              <li key={item}>
                <span className={styles.punto} />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
