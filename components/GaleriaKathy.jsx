"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import TiltCard from "./TiltCard";
import styles from "./GaleriaKathy.module.css";

const FOTOS = [
  {
    src: "/img/tinesDamaKathy/tinesGrisesKathyDama.jpeg",
    alt: "Calcetas Kathy para dama en gris jaspeado con estampado de mariposas",
    titulo: "Gris con mariposas",
    texto: "Gris jaspeado, puño bordado KATHY.",
  },
  {
    src: "/img/tinesDamaKathy/tinesRosasKathyDama.jpeg",
    alt: "Calcetas Kathy para dama en rosa con estampado de corazones",
    titulo: "Rosa con corazones",
    texto: "Rosa pastel, estampado tipo firma.",
  },
  {
    src: "/img/tinesDamaKathy/tinesAmarillosKathyDama.jpeg",
    alt: "Calcetas Kathy para dama en amarillo pastel con texto bordado Crazy Girl",
    titulo: "Amarillo Crazy Girl",
    texto: "Amarillo pastel, texto bordado.",
  },
  {
    src: "/img/tinesDamaKathy/SeisTinesKathyDama.jpeg",
    alt: "Set de seis pares de calcetas Kathy para dama en distintos colores y estampados",
    titulo: "Set de seis pares",
    texto: "Muestra de todos los colores de línea.",
  },
  {
    src: "/img/tinesDamaKathy/tinesDamaKathyCuatro.jpeg",
    alt: "Mosaico de cuatro modelos de calcetas Kathy para dama: azul marino con uvas, gris con mariposas, rosa con corazones y amarillo Crazy Girl",
    titulo: "Colores de línea",
    texto: "Uvas, mariposa, corazones y Crazy Girl.",
  },
  {
    src: "/img/tinesDamaKathy/tinesDamaKathyCuatroA.jpeg",
    alt: "Detalle de calcetas Kathy para dama: puño bordado, par puesto y pares doblados en pila",
    titulo: "Detalle y acabado",
    texto: "Puño bordado KATHY en cada par.",
  },
  {
    src: "/img/tinesDamaKathy/tinesDamaKathyCuatroB.jpeg",
    alt: "Vista de conjunto de calcetas Kathy para dama en varios colores, puestas y dobladas",
    titulo: "Vista de conjunto",
    texto: "Cómo lucen puestas y en pila.",
  },
];

export default function GaleriaKathy() {
  const grid = useRef(null);

  useGSAP(
    () => {
      const el = grid.current;
      if (!el) return;
      gsap.fromTo(
        gsap.utils.toArray(el.children),
        { opacity: 0, y: 36, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 85%" },
        },
      );
    },
    { scope: grid },
  );

  return (
    <div ref={grid} className="rejilla rejilla--4">
      {FOTOS.map((foto) => (
        <TiltCard key={foto.src} as="article" className={styles.tarjeta} intensity={10}>
          <div className={styles.figura}>
            <Image src={foto.src} alt={foto.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className={styles.img} />
          </div>
          <div className={styles.cuerpo}>
            <h3>{foto.titulo}</h3>
            <p>{foto.texto}</p>
          </div>
        </TiltCard>
      ))}
    </div>
  );
}
