import Link from "next/link";
import CabeceraPagina from "@/components/CabeceraPagina";
import BannerGaleriaProducto from "@/components/BannerGaleriaProducto";
import CtaFinal from "@/components/CtaFinal";
import {
  FOTOS_TIN_DAMA,
  FOTOS_KATHY_DAMA,
  FOTOS_DIABETICO_DAMA,
  FOTOS_TIN_DAMA_KATHY,
  FOTOS_TINES_KATHY_COLORES_BY_NILA,
} from "@/lib/catalogo";
import { crearMetadatos } from "@/lib/metadatos";

export const metadata = crearMetadatos({
  titulo: "Calcetas, calcetines y tines para dama | Calcetas Francés",
  descripcion:
    "Tin Dama, Kathy y línea diabético dama. Calcetas, calcetines y tines de algodón con lycra, por mayoreo para uniformerías, boutiques y distribuidores.",
  ruta: "/productos/dama",
  imagen: { url: "/img/MuestraDamas.jpg", alt: "Mujeres usando calcetas y tines Francés para dama" },
  palabrasClave: [
    "calcetas para dama",
    "calcetines para dama",
    "tines para dama",
    "tin dama",
    "calcetas Kathy",
    "calcetín para diabético dama",
    "calcetas tobilleras mujer",
  ],
});

export default function ProductosDama() {
  return (
    <>
      <CabeceraPagina
        miga={
          <>
            <Link href="/productos">Productos</Link> / Dama
          </>
        }
        eyebrow="Línea dama"
        titulo="Calcetas y calcetines Francés para dama"
      >
        Tin Dama, Kathy y línea diabético dama, disponibles por mayoreo en color institucional o de
        línea.
      </CabeceraPagina>

      <section className="seccion" id="tin-dama">
        <div className="contenedor">
          <BannerGaleriaProducto
            claro
            arriba
            eyebrow="Línea dama"
            titulo="Tin Dama"
            descripcion="Calcetas Tin para dama, disponibles por mayoreo en color institucional o de línea."
            materiales="97% Algodón y 3% Elastano"
            fotos={FOTOS_TIN_DAMA}
          />
        </div>
      </section>

      <section className="seccion" id="kathy-dama">
        <div className="contenedor">
          <BannerGaleriaProducto
            eyebrow="Línea Kathy"
            titulo="Calcetas Kathy para dama"
            descripcion="Modelo tobillero de moda con puño bordado KATHY, en estampados y colores pastel para venta por mayoreo a boutiques y distribuidores."
            materiales="70% Spun, 25% Licra y 5% Elástico"
            fotos={FOTOS_KATHY_DAMA}
          />
        </div>
      </section>

      <section className="seccion" id="diabetico-dama">
        <div className="contenedor">
          <BannerGaleriaProducto
            claro
            arriba
            eyebrow="Cuidado especial"
            titulo="Línea diabético dama"
            descripcion="Pensada para pies sensibles: sin costuras que rocen la punta y con ajuste suave que ayuda a dispersar el sudor y mejorar la circulación."
            materiales="65% Algodón, 25% Spandex y 10% Elástico"
            fotos={FOTOS_DIABETICO_DAMA}
          />
        </div>
      </section>

      <section className="seccion" id="tin-dama-kathy">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea Kathy"
            titulo="Tin dama Kathy"
            descripcion="Tin Kathy para dama, disponible por mayoreo en color institucional o de línea."
            materiales="97% Algodón y 3% Elastano"
            fotos={FOTOS_TIN_DAMA_KATHY}
          />
        </div>
      </section>

      <section className="seccion" id="tines-kathy-colores-by-nila">
        <div className="contenedor">
          <BannerGaleriaProducto
            claro
            arriba
            eyebrow="Línea Kathy"
            titulo="Tines Kathy Colores By Nila Francés"
            descripcion="Tines Kathy Colores By Nila para dama, disponibles por mayoreo en color institucional o de línea."
            materiales="70% Algodón, 17% Lycra, 10% Nylon y 3% Elastano"
            fotos={FOTOS_TINES_KATHY_COLORES_BY_NILA}
          />
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
