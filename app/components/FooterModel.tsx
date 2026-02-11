"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Blob() {
  const mesh = useRef<THREE.Mesh>(null!);

  //   useFrame((_, delta) => {
  //     mesh.current.rotation.y += delta * 0.15;
  //     mesh.current.rotation.x += delta * 0.05;
  //   });
  useFrame((_, delta) => {
    mesh.current.rotation.y += delta * 0.12;
    mesh.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.2;
  });

  return (
    <mesh ref={mesh} scale={1.25}>
      <torusKnotGeometry args={[1, 0.4, 200, 32]} />
      <MeshDistortMaterial
        color="#bfa24a" // gold tone
        roughness={0.45}
        metalness={0.6}
        distort={0.35}
        speed={1.5}
      />
    </mesh>
  );
}

export default function FooterModel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      className="absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Blob />
    </Canvas>
  );
}
