import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
// Ruta a tu modelo
const FEATHER_PATH = "../assets/Feather.glb";

function FallingFeather(props) {
  const mesh = useRef();
  const { scene } = useGLTF(FEATHER_PATH);

  // Animación del movimiento
  useFrame((state, delta) => {
    if (mesh.current) {
      // Caída vertical + zig-zag simple
      mesh.current.position.y -= 0.01;
      mesh.current.position.x += 0.005 * Math.sin(state.clock.elapsedTime * 2);
      mesh.current.rotation.z += 0.01;
      // Reinicia la pluma si llega muy abajo (loop)
      if (mesh.current.position.y < -2) {
        mesh.current.position.y = 2; // posición inicial arriba
      }
    }
  });

  return <primitive ref={mesh} object={scene} position={[0, 2, 0]} scale={1.5} />;
}

export default function FeatherAnimation() {
  return (
    <Canvas style={{ width: 400, height: 400 }}>
      <ambientLight intensity={0.8} />
      <FallingFeather />
    </Canvas>
  );
}