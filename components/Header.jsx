"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import styles from "./Header.module.css";

const ENLACES = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/productos", label: "Productos" },
  { href: "/cotizacion", label: "Cotización" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [fijo, setFijo] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const barra = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const marcar = () => setFijo(window.scrollY > 10);
    marcar();
    window.addEventListener("scroll", marcar, { passive: true });
    return () => window.removeEventListener("scroll", marcar);
  }, []);

  useGSAP(() => {
    gsap.set(barra.current, { scaleX: 0 });
    gsap.to(barra.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { scrub: 0.3 },
    });
  }, []);

  return (
    <header className={`${styles.header} ${fijo ? styles.fijo : ""}`}>
      <div className={`contenedor ${styles.barraNav}`}>
        <Link className={styles.logo} href="/" aria-label="Francesita, inicio">
          <Image
            src="/img/logo-francesitas.svg"
            alt="Logotipo de Francesita"
            width={46}
            height={46}
            priority
          />
          <span>Francesita</span>
        </Link>

        <nav aria-label="Navegación principal">
          <ul className={`${styles.menu} ${abierto ? styles.abierto : ""}`}>
            {ENLACES.map((e) => (
              <li key={e.href}>
                <Link href={e.href} aria-current={pathname === e.href ? "page" : undefined}>
                  {e.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="btn btnAcento" href="/cotizacion">
                Cotiza ahora
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.acciones}>
          <Link className="btn btnAcento" href="/cotizacion">
            Cotiza ahora
          </Link>
          <button
            className={styles.botonMenu}
            type="button"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={abierto}
            onClick={() => setAbierto((v) => !v)}
          >
            <span className={abierto ? styles.spanAbierto : ""} />
          </button>
        </div>
      </div>
      <div ref={barra} className={styles.progreso} />
    </header>
  );
}
