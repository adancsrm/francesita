"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { Float } from "@react-three/drei";
import { construirGeometriaCalceta, curvaCalceta, perfilCalceta, PUNTA_CALCETA } from "./sockGeometry";
import { texturaTejido } from "./knitTexture";

/**
 * Calceta 3D procedural (sin Blender): la malla se "loftea" a mano a lo
 * largo de una curva pierna→tobillo→pie, con un perfil de sección que se
 * angosta en el tobillo, se ensancha y aplana en el empeine (planta recta,
 * empeine redondeado) y cierra en punta redonda. Puño acanalado y talón
 * aparte. El material usa "sheen" + una textura de relieve tejida a mano
 * para que no se vea a plástico liso.
 *
 * `piernaLarga`: calceta escolar hasta la rodilla (misma forma de pie, solo
 * se alarga la pierna). `liso`: sin puño de color contrastante ni acanalado
 * marcado, como la calceta escolar lisa blanca de referencia.
 */
export default function SockModel({
  color = "#2C3B7E",
  cuffColor = "#EC1F26",
  scale = 1,
  piernaLarga = false,
  liso = false,
  float = true,
  floatSpeed = 1,
  floatIntensity = 1,
  rotationIntensity = 1,
  ...props
}) {
  const cuerpoGeo = useMemo(() => {
    const curva = curvaCalceta({ piernaLarga });
    return construirGeometriaCalceta({
      curva,
      perfil: (t) => perfilCalceta(t, { piernaLarga }),
    });
  }, [piernaLarga]);

  const relieve = useMemo(() => texturaTejido(), []);

  const colorPuño = liso ? color : cuffColor;
  const alturaPuño = piernaLarga ? 2.37 : 1.32;
  const anillos = liso ? [0.05, 0.34] : [0.03, 0.14, 0.25, 0.36];

  const contenido = (
    <group {...props} scale={scale}>
      {/* pierna + tobillo + pie */}
      <mesh geometry={cuerpoGeo} castShadow receiveShadow>
        <meshPhysicalMaterial
          color={color}
          roughness={0.6}
          roughnessMap={relieve}
          bumpMap={relieve}
          bumpScale={0.006}
          clearcoat={0.12}
          clearcoatRoughness={0.7}
          sheen={1}
          sheenColor={color}
          sheenRoughness={0.75}
        />
      </mesh>

      {/* punta: casquete que redondea el cierre del loft, menos picuda */}
      <mesh
        position={[PUNTA_CALCETA.x, PUNTA_CALCETA.y + 0.01, PUNTA_CALCETA.z - 0.04]}
        scale={[0.95, 0.82, 0.8]}
        castShadow
      >
        <sphereGeometry args={[0.115, 18, 18]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.6}
          roughnessMap={relieve}
          bumpMap={relieve}
          bumpScale={0.006}
          sheen={1}
          sheenColor={color}
          sheenRoughness={0.75}
        />
      </mesh>

      {/* talón: bulto detrás del tobillo */}
      <mesh position={[0.015, -0.3, 0.08]} scale={[0.85, 0.7, 0.75]} castShadow>
        <sphereGeometry args={[0.27, 20, 20]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.6}
          roughnessMap={relieve}
          bumpMap={relieve}
          bumpScale={0.006}
          sheen={1}
          sheenColor={color}
          sheenRoughness={0.75}
        />
      </mesh>

      {/* puño: acanalado marcado en las deportivas, sutil y liso en la escolar */}
      <group position={[0, alturaPuño, 0]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.36, 0.335, 0.42, 32, 1, true]} />
          <meshPhysicalMaterial
            color={colorPuño}
            roughness={liso ? 0.55 : 0.65}
            roughnessMap={liso ? relieve : undefined}
            bumpMap={liso ? relieve : undefined}
            bumpScale={liso ? 0.006 : 0}
            side={THREE.DoubleSide}
            sheen={1}
            sheenColor={colorPuño}
            sheenRoughness={0.8}
          />
        </mesh>
        {anillos.map((y, i) => (
          <mesh key={i} position={[0, y - 0.03, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.365 - i * 0.006, liso ? 0.007 : 0.011, 8, 32]} />
            <meshStandardMaterial color={colorPuño} roughness={0.5} metalness={0.05} />
          </mesh>
        ))}
        {!liso && (
          <mesh position={[0, 0.21, 0]}>
            <torusGeometry args={[0.345, 0.028, 12, 32]} />
            <meshPhysicalMaterial color={colorPuño} roughness={0.6} sheen={1} sheenColor={colorPuño} />
          </mesh>
        )}
        {/* boca del puño, para que no se vea hueca por dentro */}
        <mesh position={[0, 0.21, 0]}>
          <circleGeometry args={[0.335, 32]} />
          <meshStandardMaterial color={colorPuño} roughness={0.9} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );

  if (!float) return contenido;

  return (
    <Float
      speed={2 * floatSpeed}
      rotationIntensity={0.5 * rotationIntensity}
      floatIntensity={0.6 * floatIntensity}
    >
      {contenido}
    </Float>
  );
}
