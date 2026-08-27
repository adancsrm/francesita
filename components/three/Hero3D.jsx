"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, PerspectiveCamera } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import "@/lib/silenciarAvisosThree";
import SockModel from "./SockModel";
import PointerRig from "./PointerRig";
import SceneBoundary from "./SceneBoundary";
import styles from "./Hero3D.module.css";

function Escena({ reducido }) {
  const rig = useRef(null);

  useGSAP(() => {
    if (!rig.current || reducido) return;
    gsap.set(rig.current.rotation, { y: -0.35 });
    gsap.to(rig.current.rotation, {
      y: 0.15,
      scrollTrigger: {
        trigger: "#hero-3d-ancla",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(rig.current.position, {
      y: -0.5,
      scrollTrigger: {
        trigger: "#hero-3d-ancla",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, [reducido]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.35, 4.4]} fov={32} />
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 4, 2]} intensity={1.4} color="#FFF6E8" castShadow />
      <pointLight position={[-3, 1, -2]} intensity={6} color="#EC1F26" />
      <pointLight position={[2, -1, 2]} intensity={3} color="#2C3B7E" />

      <group ref={rig} position={[0, -0.35, 0]}>
        <PointerRig intensity={reducido ? 0 : 0.28}>
          {/* Par de calcetas escolares lisas, blancas, hasta la rodilla */}
          <SockModel
            color="#F1F3F2"
            cuffColor="#F1F3F2"
            piernaLarga
            liso
            scale={0.7}
            position={[0.35, -0.05, 0]}
            rotation={[0, 0.45, 0.06]}
            float={!reducido}
            floatSpeed={0.9}
          />
          <SockModel
            color="#F1F3F2"
            cuffColor="#F1F3F2"
            piernaLarga
            liso
            scale={0.5}
            position={[-1.1, -0.05, -0.5]}
            rotation={[0.05, -0.5, -0.1]}
            float={!reducido}
            floatSpeed={1.2}
            floatIntensity={1.4}
          />
        </PointerRig>
      </group>

      <ContactShadows position={[0, -1.05, 0]} opacity={0.45} scale={7} blur={2.6} far={2} color="#0D1230" />
      <Environment preset="city" environmentIntensity={0.5} />
    </>
  );
}

export default function Hero3D() {
  const [reducido, setReducido] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = (e) => setReducido(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  return (
    <div className={styles.envoltura} aria-hidden="true">
      <SceneBoundary fallback={<div className={styles.respaldo} />}>
        <Canvas shadows dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
          <Suspense fallback={null}>
            <Escena reducido={reducido} />
          </Suspense>
        </Canvas>
      </SceneBoundary>
    </div>
  );
}
