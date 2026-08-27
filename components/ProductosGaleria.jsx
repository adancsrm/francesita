"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import TiltCard from "./TiltCard";
import Lightbox from "./Lightbox";
import styles from "./ProductosGaleria.module.css";

const ProductoIcono3D = dynamic(() => import("./three/ProductoIcono3D"), {
  ssr: false,
  loading: () => <div className={styles.cargando} />,
});

export default function ProductosGaleria({ productos }) {
  const grid = useRef(null);
  const [abierto, setAbierto] = useState(null);

  useGSAP(
    () => {
      const el = grid.current;
      if (!el) return;
      gsap.fromTo(
        gsap.utils.toArray(el.children),
        { opacity: 0, y: 40, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 82%" },
        },
      );
    },
    { scope: grid },
  );

  const total = productos.length;
  const cambia = (delta) =>
    setAbierto((i) => (i === null ? i : (i + delta + total) % total));

  return (
    <>
      <div ref={grid} className={`rejilla rejilla--4 ${styles.grid}`}>
        {productos.map((p, i) => (
          <TiltCard
            key={p.nombre}
            as="article"
            className={styles.tarjeta}
            intensity={12}
            onClick={() => setAbierto(i)}
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setAbierto(i);
            }}
          >
            <div className={styles.figura}>
              <ProductoIcono3D
                color={p.color}
                cuffColor={p.cuffColor}
                girado={i % 2 === 1}
                piernaLarga={p.piernaLarga}
                liso={p.liso}
              />
              <span className={styles.verMas}>Ver en 3D</span>
            </div>
            <div className={styles.cuerpo}>
              {p.etiqueta && <span className="etiqueta">{p.etiqueta}</span>}
              <h3>{p.nombre}</h3>
              <p>{p.descripcion}</p>
              <div className={styles.pie}>Tallas {p.tallas}</div>
            </div>
          </TiltCard>
        ))}
      </div>

      {abierto !== null && (
        <Lightbox
          item={productos[abierto]}
          indice={abierto}
          total={total}
          onClose={() => setAbierto(null)}
          onPrev={() => cambia(-1)}
          onNext={() => cambia(1)}
        >
          <ProductoIcono3D
            color={productos[abierto].color}
            cuffColor={productos[abierto].cuffColor}
            girado={abierto % 2 === 1}
            piernaLarga={productos[abierto].piernaLarga}
            liso={productos[abierto].liso}
          />
        </Lightbox>
      )}
    </>
  );
}
