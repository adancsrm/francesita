"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Video que no pide nada al servidor hasta que está por entrar en pantalla.
 * Mientras tanto muestra `poster`, para que no quede un recuadro vacío.
 */
export default function VideoDiferido({ src, poster, className, margen = "300px", ...props }) {
  const ref = useRef(null);
  const [cargar, setCargar] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setCargar(true);
          observador.disconnect();
        }
      },
      { rootMargin: margen },
    );
    observador.observe(el);
    return () => observador.disconnect();
  }, [margen]);

  return (
    <video
      ref={ref}
      className={className}
      src={cargar ? src : undefined}
      poster={poster}
      preload={cargar ? "metadata" : "none"}
      controls
      playsInline
      {...props}
    />
  );
}
