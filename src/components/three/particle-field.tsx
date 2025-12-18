"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
  color?: string;
  size?: number;
  speed?: number;
}

export function ParticleField({
  count = 300,
  color = "#10b981",
  size = 0.015,
  speed = 0.2
}: ParticleFieldProps) {
  const mesh = useRef<THREE.Points>(null);

  // Create particles only once
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const mainColor = new THREE.Color(color);
    const secondaryColor = new THREE.Color("#3b82f6");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Spread particles in a sphere
      const radius = 3 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = radius * Math.cos(phi);

      // Gradient colors
      const mixFactor = Math.random();
      const particleColor = mainColor.clone().lerp(secondaryColor, mixFactor);
      col[i3] = particleColor.r;
      col[i3 + 1] = particleColor.g;
      col[i3 + 2] = particleColor.b;
    }

    return [pos, col];
  }, [count, color]);

  // Simple rotation only - no position modification
  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime * speed;
    mesh.current.rotation.y = time * 0.1;
    mesh.current.rotation.x = Math.sin(time * 0.05) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
