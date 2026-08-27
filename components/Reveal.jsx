"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

/**
 * Envoltura de revelado al hacer scroll, con GSAP + ScrollTrigger.
 * Si se pasa `stagger`, anima los hijos directos en cascada (útil para rejillas).
 */
export default function Reveal({
  children,
  as: Tag = "div",
  y = 36,
  x = 0,
  scale = 1,
  blur = 0,
  delay = 0,
  duration = 1,
  className,
  stagger,
  start = "top 85%",
  ...props
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets = stagger ? gsap.utils.toArray(el.children) : el;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y,
          x,
          scale,
          filter: blur ? `blur(${blur}px)` : "none",
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          filter: "blur(0px)",
          duration,
          delay,
          ease: "expo.out",
          stagger: stagger || 0,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}
