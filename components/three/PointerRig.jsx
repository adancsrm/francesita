"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

/**
 * Inclina suavemente a sus hijos según la posición del mouse/dedo:
 * "elementos que reaccionan al movimiento del usuario".
 */
export default function PointerRig({
  children,
  intensity = 0.35,
  damping = 0.06,
  baseRotation = [0, 0, 0],
}) {
  const grupo = useRef(null);

  useFrame((state) => {
    if (!grupo.current) return;
    const { x, y } = state.pointer;
    const metaX = baseRotation[0] - y * intensity;
    const metaY = baseRotation[1] + x * intensity;
    grupo.current.rotation.x += (metaX - grupo.current.rotation.x) * damping;
    grupo.current.rotation.y += (metaY - grupo.current.rotation.y) * damping;
  });

  return <group ref={grupo}>{children}</group>;
}
