"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, GradientTexture } from "@react-three/drei";
import * as THREE from "three";

interface FloatingShapeProps {
  position?: [number, number, number];
  color?: string;
  scale?: number;
  speed?: number;
  shape?: "sphere" | "torus" | "octahedron" | "icosahedron";
}

export function FloatingShape({
  position = [0, 0, 0],
  color = "#10b981",
  scale = 1,
  speed = 1,
  shape = "sphere"
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case "torus":
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      default:
        return <sphereGeometry args={[1, 32, 32]} />;
    }
  }, [shape]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.3}
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </mesh>
    </Float>
  );
}

interface GlowOrbProps {
  position?: [number, number, number];
  color?: string;
  size?: number;
  intensity?: number;
}

export function GlowOrb({
  position = [0, 0, 0],
  color = "#10b981",
  size = 0.5,
  intensity = 1
}: GlowOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    const scale = 1 + Math.sin(time * 2) * 0.1;
    meshRef.current.scale.setScalar(scale * size);
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      <pointLight color={color} intensity={intensity} distance={5} />
    </group>
  );
}

interface FloatingElementsProps {
  variant?: "hero" | "network" | "minimal";
}

export function FloatingElements({ variant = "hero" }: FloatingElementsProps) {
  const elements = useMemo(() => {
    switch (variant) {
      case "hero":
        return (
          <>
            <FloatingShape position={[-3, 2, -2]} color="#10b981" scale={0.4} shape="icosahedron" />
            <FloatingShape position={[3, -1, -3]} color="#3b82f6" scale={0.3} shape="octahedron" />
            <FloatingShape position={[2, 2, -4]} color="#f59e0b" scale={0.25} shape="torus" />
            <GlowOrb position={[-2, -2, -2]} color="#10b981" size={0.3} intensity={0.5} />
            <GlowOrb position={[4, 1, -3]} color="#3b82f6" size={0.2} intensity={0.3} />
          </>
        );
      case "network":
        return (
          <>
            <GlowOrb position={[0, 0, 0]} color="#10b981" size={0.1} intensity={0.8} />
            <FloatingShape position={[0, 0, -5]} color="#10b981" scale={0.8} shape="icosahedron" />
          </>
        );
      case "minimal":
        return (
          <>
            <GlowOrb position={[2, 1, -2]} color="#10b981" size={0.15} intensity={0.3} />
          </>
        );
      default:
        return null;
    }
  }, [variant]);

  return <group>{elements}</group>;
}
