"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);

  // Las tipografías web pueden cargar después de que ScrollTrigger calcule
  // posiciones, provocando saltos de línea (flex-wrap) que dejan disparadores
  // "huérfanos". Recalculamos una vez que las fuentes están listas.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
  window.addEventListener("load", () => ScrollTrigger.refresh());
}

export { gsap, ScrollTrigger, Draggable, InertiaPlugin };
