import Link from "next/link";
import CabeceraPagina from "@/components/CabeceraPagina";
import BannerGaleriaProducto from "@/components/BannerGaleriaProducto";
import CtaFinal from "@/components/CtaFinal";
import {
  FOTOS_CALCETA_LARGA_CABALLERO,
  FOTOS_CALCETA_CORTA_CABALLERO,
  FOTOS_DIABETICO_CABALLERO,
  FOTOS_SPORT,
  FOTOS_UBI_TEX,
  FOTOS_DON_PACO_EXECUTIVE,
  FOTOS_DON_PACO_SAABA,
  FOTOS_DON_PACO_DE_LUXE,
  FOTOS_JAMMY_SPORT_LARGA,
  FOTOS_TINES_DEPORTIVOS_JAMMY_CABALLERO,
  FOTOS_TINES_JAMMY_SPORT_CABALLERO,
  FOTOS_CALCETAS_CORTAS_FRANCO_SPORT,
  FOTOS_TINES_FRANCES_CABALLERO,
} from "@/lib/catalogo";
import { crearMetadatos } from "@/lib/metadatos";

export const metadata = crearMetadatos({
  titulo: "Calcetas y calcetines para caballero | Calcetas Francés",
  descripcion:
    "Calceta larga y corta caballero, línea diabético, Sport, UBI Tex, Don Paco Executive, Saaba y De Luxe. Algodón con lycra, por mayoreo para uniformerías y distribuidores.",
  ruta: "/productos/caballero",
  imagen: { url: "/img/MuestraCaballeros.jpg", alt: "Hombres usando calcetas y calcetines Francés para caballero" },
  palabrasClave: [
    "calcetas para caballero",
    "calcetines para caballero",
    "calcetín de vestir",
    "calceta deportiva",
    "tines para caballero",
    "calcetín para diabético caballero",
    "Don Paco calcetines",
    "calcetas Jammy Sport",
  ],
});

export default function ProductosCaballero() {
  return (
    <>
      <CabeceraPagina
        miga={
          <>
            <Link href="/productos">Productos</Link> / Caballero
          </>
        }
        eyebrow="Línea caballero"
        titulo="Calcetas y calcetines Francés para caballero"
      >
        Corte largo, corto, línea diabético, Sport, UBI Tex y las líneas Don Paco, disponibles por mayoreo en
        color institucional o de línea.
      </CabeceraPagina>

      <section className="seccion" id="ubi-tex">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea UBI Tex"
            titulo="UBI Tex"
            descripcion="Calceta línea UBI Tex Francés, disponible por mayoreo en color institucional o de línea."
            materiales="70% Algodón, 25% Poliéster y 5% Elastano"
            fotos={FOTOS_UBI_TEX}
          />
        </div>
      </section>

      <section className="seccion" id="caballero">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea caballero"
            titulo="Calceta larga caballero"
            descripcion="Corte largo con puño reforzado, en gris jaspeado, gris carbón y negro, marca JM bordada."
            materiales="65% Algodón, 25% Poliéster y 10% Spandex"
            fotos={FOTOS_CALCETA_LARGA_CABALLERO}
          />
        </div>
      </section>

      <section className="seccion" id="calceta-corta-caballero">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea caballero"
            titulo="Calceta corta caballero"
            descripcion="Corte tobillero con puño suave, en azul marino, gris, negro y blanco, marca JM bordada."
            materiales="70% Algodón y 30% Spandex"
            fotos={FOTOS_CALCETA_CORTA_CABALLERO}
          />
        </div>
      </section>

      <section className="seccion" id="diabetico-caballero">
        <div className="contenedor">
          <BannerGaleriaProducto
            claro
            arriba
            eyebrow="Cuidado especial"
            titulo="Línea diabético caballero"
            descripcion="Diseñada para pies sensibles: sin costuras que rocen la punta y con ajuste suave que ayuda a dispersar el sudor y mejorar la circulación."
            materiales="65% Algodón, 25% Spandex y 10% Elástico"
            fotos={FOTOS_DIABETICO_CABALLERO}
          />
        </div>
      </section>

      <section className="seccion" id="sport">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea Sport"
            titulo="Línea Sport"
            descripcion="Calceta deportiva Francés, resistente y transpirable para uso diario o actividad física."
            materiales="70% Algodón y 30% Spandex"
            fotos={FOTOS_SPORT}
          />
        </div>
      </section>

      <section className="seccion" id="don-paco-executive">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea Don Paco"
            titulo="Don Paco Executive"
            descripcion="Calceta línea Don Paco Executive Francés, disponible por mayoreo en color institucional o de línea."
            materiales="71% Algodón, 9% Poliéster, 17% Spandex y 3% Elastano"
            fotos={FOTOS_DON_PACO_EXECUTIVE}
          />
        </div>
      </section>

      <section className="seccion" id="don-paco-saaba">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea Don Paco"
            titulo="Don Paco Saaba"
            descripcion="Calceta línea Don Paco Saaba Francés, disponible por mayoreo en color institucional o de línea."
            materiales="71% Algodón, 9% Poliéster, 17% Spandex y 3% Elastano"
            fotos={FOTOS_DON_PACO_SAABA}
          />
        </div>
      </section>

      <section className="seccion" id="don-paco-de-luxe">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea Don Paco"
            titulo="Don Paco Calcetines De Luxe"
            descripcion="Calcetín línea Don Paco De Luxe Francés, disponible por mayoreo en color institucional o de línea."
            materiales="70% Acrilan y 30% Nylon"
            fotos={FOTOS_DON_PACO_DE_LUXE}
          />
        </div>
      </section>

      <section className="seccion" id="jammy-sport-larga">
        <div className="contenedor">
          <BannerGaleriaProducto
            claro
            arriba
            eyebrow="Línea JAMMY"
            titulo="Calceta JAMMY sport larga"
            descripcion="Calceta JAMMY Sport larga para caballero, disponible por mayoreo en color institucional o de línea."
            materiales="70% Algodón y 30% Spandex"
            fotos={FOTOS_JAMMY_SPORT_LARGA}
          />
        </div>
      </section>

      <section className="seccion" id="tines-deportivos-jammy-caballero">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea JAMMY"
            titulo="Tines Deportivos Jammy"
            descripcion="Tines deportivos JAMMY para caballero, disponibles por mayoreo en color institucional o de línea."
            materiales="70% Algodón y 30% Spandex"
            fotos={FOTOS_TINES_DEPORTIVOS_JAMMY_CABALLERO}
          />
        </div>
      </section>

      <section className="seccion" id="tines-jammy-sport-caballero">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea JAMMY"
            titulo="Tines Jammy Sport"
            descripcion="Tines JAMMY Sport para caballero, disponibles por mayoreo en color institucional o de línea."
            materiales="70% Algodón y 30% Spandex"
            fotos={FOTOS_TINES_JAMMY_SPORT_CABALLERO}
          />
        </div>
      </section>

      <section className="seccion" id="calcetas-cortas-franco-sport">
        <div className="contenedor">
          <BannerGaleriaProducto
            claro
            arriba
            eyebrow="Línea Franco Sport"
            titulo="Calcetas cortas Franco Sport"
            descripcion="Calcetas cortas Franco Sport para caballero, disponibles por mayoreo en color institucional o de línea."
            materiales="95% Nylon y 5% Spandex"
            fotos={FOTOS_CALCETAS_CORTAS_FRANCO_SPORT}
          />
        </div>
      </section>

      <section className="seccion" id="tines-frances-caballero">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea caballero"
            titulo="Tines Francés"
            descripcion="Tines Francés para caballero, disponibles por mayoreo en color institucional o de línea."
            materiales="70% Spun, 25% Spandex y 5% Lycra"
            fotos={FOTOS_TINES_FRANCES_CABALLERO}
          />
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
