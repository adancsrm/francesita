"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import TiltCard from "./TiltCard";
import styles from "./Media.module.css";

/**
 * Imagen única con reveal de cortina (como .imagen-revela del sitio
 * original): un panel de color se retira mientras la foto hace zoom-out,
 * disparado al entrar en pantalla. Con tilt + zoom al pasar el mouse.
 */
export function MediaImagen({ src, alt, aspecto = "4 / 3", sizes = "(max-width: 680px) 100vw, 50vw" }) {
  const cortina = useRef(null);
  const imagen = useRef(null);
  const raiz = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: raiz.current, start: "top 85%" },
      });
      tl.fromTo(imagen.current, { scale: 1.15 }, { scale: 1, duration: 1.1, ease: "expo.out" }, 0);
      tl.fromTo(
        cortina.current,
        { scaleX: 1 },
        { scaleX: 0, duration: 0.8, ease: "power4.inOut", transformOrigin: "right" },
        0.1,
      );
    },
    { scope: raiz },
  );

  return (
    <div ref={raiz}>
      <TiltCard as="div" className={styles.marco} intensity={4} lift={0}>
        <div className={styles.caja} style={{ aspectRatio: aspecto }}>
          <div ref={imagen} className={styles.imagenEnv}>
            <Image src={src} alt={alt} fill sizes={sizes} className={styles.img} />
          </div>
          <div ref={cortina} className={styles.cortina} aria-hidden="true" />
        </div>
      </TiltCard>
    </div>
  );
}

/**
 * Dos imágenes que se cruzan (crossfade) al pasar el mouse encima.
 */
export function MediaCruzada({ imagenes, aspecto = "1 / 1" }) {
  const [activa, setActiva] = useState(0);

  return (
    <div
      className={styles.marco}
      style={{ aspectRatio: aspecto }}
      onMouseEnter={() => setActiva(1)}
      onMouseLeave={() => setActiva(0)}
    >
      {imagenes.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 680px) 100vw, 50vw"
          className={styles.imgCruzada}
          style={{ opacity: i === activa ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
