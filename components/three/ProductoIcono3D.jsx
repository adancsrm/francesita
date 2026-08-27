"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import SockModel from "./SockModel";
import SceneBoundary from "./SceneBoundary";
import styles from "./ProductoIcono3D.module.css";

export default function ProductoIcono3D({
  color,
  cuffColor,
  girado = false,
  piernaLarga = false,
  liso = false,
}) {
  const escala = piernaLarga ? 0.56 : 0.95;
  const offsetY = piernaLarga ? -0.43 : -0.15;

  return (
    <div className={styles.caja}>
      <SceneBoundary fallback={<div className={styles.respaldo} />}>
        <Canvas dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0.15, 3.4]} fov={30} />
            <ambientLight intensity={0.75} />
            <directionalLight position={[2, 3, 2]} intensity={1.3} color="#FFF6E8" />
            <pointLight position={[-2, -1, -1]} intensity={4} color="#EC1F26" />
            <group rotation={[0, girado ? -0.6 : 0.6, 0]} position={[0, offsetY, 0]}>
              <SockModel
                color={color}
                cuffColor={cuffColor}
                scale={escala}
                piernaLarga={piernaLarga}
                liso={liso}
                floatIntensity={1.2}
              />
            </group>
            <Environment preset="city" environmentIntensity={0.45} />
          </Suspense>
        </Canvas>
      </SceneBoundary>
    </div>
  );
}
