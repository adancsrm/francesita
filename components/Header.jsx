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
];

const CATEGORIAS_PRODUCTOS = [
  { href: "/productos/dama", label: "Dama" },
  { href: "/productos/caballero", label: "Caballero" },
  { href: "/productos/ninos", label: "Niños" },
];

const ENLACES_FINALES = [
  { href: "/cotizacion", label: "Cotización" },
  { href: "/proceso", label: "Proceso" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [fijo, setFijo] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const [submenuOculto, setSubmenuOculto] = useState(false);
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

  // Al elegir una categoría se cierra el submenú (hover/focus lo mantendrían abierto)
  // y el menú móvil. Se vuelve a habilitar cuando el cursor sale del ítem.
  const elegirCategoria = (e) => {
    setSubmenuOculto(true);
    setAbierto(false);
    e.currentTarget.blur();
  };

  return (
    <header className={`${styles.header} ${fijo ? styles.fijo : ""}`}>
      <div className={`contenedor ${styles.barraNav}`}>
        <Link className={styles.logo} href="/" aria-label="Francés, inicio">
          <Image
            src="/img/LogoFrances.jpeg"
            alt="Logotipo de Francés, fábrica de calcetas y calcetines"
            width={180} //88
            height={98} //44
            priority
          />
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

            <li
              className={`${styles.itemProductos} ${submenuOculto ? styles.submenuOculto : ""}`}
              onMouseLeave={() => setSubmenuOculto(false)}
            >
              <Link
                href="/productos"
                aria-current={pathname === "/productos" ? "page" : undefined}
                aria-haspopup="true"
              >
                Productos
              </Link>
              <ul className={styles.submenu}>
                {CATEGORIAS_PRODUCTOS.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      aria-current={pathname === c.href ? "page" : undefined}
                      onClick={elegirCategoria}
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {ENLACES_FINALES.map((e) => (
              <li key={e.href}>
                <Link href={e.href} aria-current={pathname === e.href ? "page" : undefined}>
                  {e.label}
                </Link>
              </li>
            ))}
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
