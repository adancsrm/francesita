"use client";

import Link from "next/link";
import Image from "next/image";
import TiltCard from "./TiltCard";
import styles from "./CategoriaProductoCard.module.css";

export default function CategoriaProductoCard({ href, imagen, alt, nombre, descripcion }) {
  return (
    <TiltCard as={Link} href={href} className={styles.tarjeta} intensity={8}>
      <div className={styles.figura}>
        <Image src={imagen} alt={alt} fill sizes="(max-width: 680px) 100vw, 33vw" className={styles.img} />
        <span className={styles.verMas}>Ver categoría</span>
      </div>
      <div className={styles.cuerpo}>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
      </div>
    </TiltCard>
  );
}
