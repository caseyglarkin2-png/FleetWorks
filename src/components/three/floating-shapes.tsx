"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingShapeProps {
  position?: [number, number, number];
  color?: string;
  scale?: number;
  speed?: number;
}

export function FloatingShape({
  position = [0, 0, 0],
  color = "#10b981",
  scale = 1,
  speed = 1
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
    // Gentle float
    meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.15}
        wireframe
      />
    </mesh>
  );
}

interface GlowOrbProps {
  position?: [number, number, number];
  color?: string;
  size?: number;
}

export function GlowOrb({
  position = [0, 0, 0],
  color = "#10b981",
  size = 0.5
}: GlowOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    const scale = 1 + Math.sin(time * 2) * 0.1;
    meshRef.current.scale.setScalar(scale * size);
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  );
}

interface FloatingElementsProps {
  variant?: "hero" | "network" | "minimal";
}

export function FloatingElements({ variant = "hero" }: FloatingElementsProps) {
  if (variant === "hero") {
    return (
      <group>
        <FloatingShape position={[-3, 2, -3]} color="#10b981" scale={0.5} speed={0.3} />
        <FloatingShape position={[3, -1, -4]} color="#3b82f6" scale={0.4} speed={0.4} />
        <FloatingShape position={[2, 2, -5]} color="#f59e0b" scale={0.3} speed={0.2} />
        <GlowOrb position={[-2, -2, -2]} color="#10b981" size={0.4} />
        <GlowOrb position={[4, 1, -3]} color="#3b82f6" size={0.3} />
      </group>
    );
  }

  if (variant === "network") {
    return (
      <group>
        <GlowOrb position={[0, 0, -2]} color="#10b981" size={0.2} />
        <FloatingShape position={[0, 0, -5]} color="#10b981" scale={0.6} speed={0.2} />
      </group>
    );
  }

  // minimal
  return (
    <group>
      <GlowOrb position={[2, 1, -2]} color="#10b981" size={0.2} />
    </group>
  );
}
