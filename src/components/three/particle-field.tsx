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
  count = 500,
  color = "#10b981",
  size = 0.015,
  speed = 0.2
}: ParticleFieldProps) {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const mainColor = new THREE.Color(color);
    const secondaryColor = new THREE.Color("#3b82f6");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Spread particles in a sphere
      const radius = 4 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Random velocities for organic movement
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;

      // Gradient colors
      const mixFactor = Math.random();
      const particleColor = mainColor.clone().lerp(secondaryColor, mixFactor);
      colors[i3] = particleColor.r;
      colors[i3 + 1] = particleColor.g;
      colors[i3 + 2] = particleColor.b;
    }

    return { positions, velocities, colors };
  }, [count, color]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.elapsedTime * speed;
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Organic floating motion
      positions[i3] += Math.sin(time + i * 0.1) * 0.001;
      positions[i3 + 1] += Math.cos(time + i * 0.1) * 0.001;
      positions[i3 + 2] += Math.sin(time * 0.5 + i * 0.1) * 0.001;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y = time * 0.05;
    mesh.current.rotation.x = Math.sin(time * 0.1) * 0.1;

    if (light.current) {
      light.current.position.x = Math.sin(time) * 3;
      light.current.position.z = Math.cos(time) * 3;
    }
  });

  return (
    <group>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={size}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <pointLight ref={light} color={color} intensity={2} distance={10} />
      <ambientLight intensity={0.1} />
    </group>
  );
}
