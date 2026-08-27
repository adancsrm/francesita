import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="contenedor">
        <div className={styles.grid}>
          <div>
            <div className={styles.logo}>
              <Image
                src="/img/logo-francesitas.svg"
                alt="Logotipo de Francesita"
                width={52}
                height={52}
              />
              <span>Francesita</span>
            </div>
            <p>
              Fabricamos calcetas y calcetines escolares en México, con
              algodón peinado y lycra, para escuelas, uniformerías y
              distribuidores de todo el país.
            </p>
            <div className={styles.redes}>
              <a href="#" aria-label="Facebook de Francesita">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3 0-1.3-.1-2.45-.1-2.4 0-4.05 1.5-4.05 4.2v2.2H7.5V13h2.7v8z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram de Francesita">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1zM18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1.3 15a1.3 1.3 0 0 1-1.3 1.3H6A1.3 1.3 0 0 1 4.7 18V6A1.3 1.3 0 0 1 6 4.7h12A1.3 1.3 0 0 1 19.3 6zM17.4 6a1.1 1.1 0 1 0 1.1 1.1A1.1 1.1 0 0 0 17.4 6z" />
                </svg>
              </a>
              <a
                href="https://wa.me/522228836412"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp de Francesita"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm5.3 14c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-3-.7-2.5-1-4.1-3.6-4.2-3.7-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.3.5-.3.6-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.5-.3.3c-.1.1-.2.3 0 .5.1.3.6 1.1 1.4 1.8 1 .8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.7-.9c.2-.2.3-.2.5-.1l2 .9c.2.1.4.2.4.3s0 .5-.3 1.1z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3>Sitio</h3>
            <ul>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/nosotros">Quiénes somos</Link>
              </li>
              <li>
                <Link href="/productos">Calcetas y calcetines</Link>
              </li>
              <li>
                <Link href="/cotizacion">Cotización</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Productos</h3>
            <ul>
              <li>
                <Link href="/productos#caballero">Calcetas caballero</Link>
              </li>
              <li>
                <Link href="/productos#dama">Calcetas dama</Link>
              </li>
              <li>
                <Link href="/productos#kathy-dama">Calcetas Kathy dama</Link>
              </li>
              <li>
                <Link href="/productos#ninos">Calcetas niños</Link>
              </li>
              <li>
                <Link href="/productos#escolar">Calcetas escolares</Link>
              </li>
              <li>
                <Link href="/productos#diabetico">Línea diabético</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contacto</h3>
            <ul>
              <li>
                San Rafael Ixtapalucan, Puebla, México
                <br />
                <span className={styles.suave}>Plus Code 7CQQ+53M</span>
              </li>
              <li>
                <a href="tel:+525500000000">55 0000 0000</a>
              </li>
              <li>
                <a href="https://wa.me/522228836412" target="_blank" rel="noopener">
                  WhatsApp 222 883 6412
                </a>
              </li>
              <li>
                <a href="mailto:ventas@francesitas.com.mx">
                  ventas@francesitas.com.mx
                </a>
              </li>
              <li>Lunes a viernes 9:00 – 18:00
                <br />
                Sábados 9:00 – 14:00
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.legal}>
          <span>
            &copy; <span>{anio}</span> Francesita. Calcetas y calcetines
            hechos en México.
          </span>
          <span>Aviso de privacidad · Términos y condiciones</span>
        </div>
      </div>
    </footer>
  );
}
