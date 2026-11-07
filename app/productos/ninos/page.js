import Link from "next/link";
import CabeceraPagina from "@/components/CabeceraPagina";
import BannerGaleriaProducto from "@/components/BannerGaleriaProducto";
import CtaFinal from "@/components/CtaFinal";
import {
  FOTOS_CALCETIN_NINO,
  FOTOS_ESCOLAR_NINA,
  FOTOS_ESCOLAR_CALADA,
  FOTOS_NINA_KATHY,
  FOTOS_TINES_JAMMY_KIDS,
  FOTOS_CALCETAS_JAMMY_KIDS,
} from "@/lib/catalogo";
import { crearMetadatos } from "@/lib/metadatos";

export const metadata = crearMetadatos({
  titulo: "Calcetas y calcetines para niños | Calcetas Francés",
  descripcion:
    "Calcetín niño Paquitos Jr., calceta escolar niña, calceta calada y Kathy niña. Algodón con lycra, por mayoreo para uniformerías y distribuidores.",
  ruta: "/productos/ninos",
  imagen: { url: "/img/MuestraNinos.jpg", alt: "Niños usando calcetas y calcetines Francés" },
  palabrasClave: [
    "calcetas para niños",
    "calcetines para niño",
    "calceta escolar niña",
    "calceta calada",
    "tines para niños",
    "calcetas de uniforme escolar",
  ],
});

export default function ProductosNinos() {
  return (
    <>
      <CabeceraPagina
        miga={
          <>
            <Link href="/productos">Productos</Link> / Niños
          </>
        }
        eyebrow="Línea niños"
        titulo="Calcetas y calcetines Francés para niños"
      >
        Calcetín niño y calceta escolar niña, disponibles por mayoreo en color institucional o de
        línea.
      </CabeceraPagina>

      <section className="seccion" id="calcetin-nino">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea niños"
            titulo="Calcetín niño"
            descripcion="Calcetín tobillero Paquitos Jr. en azul marino, gris, negro y blanco, con y sin estampados."
            fotos={FOTOS_CALCETIN_NINO}
          />
        </div>
      </section>

      <section className="seccion" id="escolar-nina">
        <div className="contenedor">
          <BannerGaleriaProducto
            claro
            eyebrow="Línea niñas"
            titulo="Calceta escolar niña"
            descripcion="Calceta escolar Francés para niña, disponible por mayoreo en color institucional o de línea."
            materiales="70% Spandex, 25% Poliéster y 5% Elástico"
            fotos={FOTOS_ESCOLAR_NINA}
          />
        </div>
      </section>

      <section className="seccion" id="escolar-calada">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea escolar"
            titulo="Calceta escolar calada"
            descripcion="Calceta escolar calada Francés, disponible por mayoreo en color institucional o de línea."
            materiales="70% Acrilán y 30% Nylon"
            fotos={FOTOS_ESCOLAR_CALADA}
          />
        </div>
      </section>

      <section className="seccion" id="nina-kathy">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea Kathy"
            titulo="Calceta niña Kathy"
            descripcion="Calceta Kathy para niña, disponible por mayoreo en color institucional o de línea."
            materiales="70% Spun, 25% Licra y 5% Elástico"
            fotos={FOTOS_NINA_KATHY}
          />
        </div>
      </section>

      <section className="seccion" id="tines-jammy-kids">
        <div className="contenedor">
          <BannerGaleriaProducto
            claro
            eyebrow="Línea JAMMY"
            titulo="Tines JAMMY Kids"
            descripcion="Tines JAMMY Kids para niño y niña, disponibles por mayoreo en color institucional o de línea."
            materiales="70% Algodón y 30% Spandex"
            fotos={FOTOS_TINES_JAMMY_KIDS}
          />
        </div>
      </section>

      <section className="seccion" id="calcetas-jammy-kids">
        <div className="contenedor">
          <BannerGaleriaProducto
            arriba
            eyebrow="Línea JAMMY"
            titulo="Calcetas JAMMY"
            descripcion="Calcetas JAMMY para niño y niña, disponibles por mayoreo en color institucional o de línea."
            materiales="60% Spun, 30% Spandex y 10% Elástico"
            fotos={FOTOS_CALCETAS_JAMMY_KIDS}
          />
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
