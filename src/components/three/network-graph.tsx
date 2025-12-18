"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface NetworkNode {
  position: THREE.Vector3;
  type: "broker" | "carrier" | "load";
}

interface NetworkGraphProps {
  nodeCount?: number;
  animated?: boolean;
}

export function NetworkGraph({ nodeCount = 25, animated = true }: NetworkGraphProps) {
  const groupRef = useRef<THREE.Group>(null);

  const network = useMemo(() => {
    const nodes: NetworkNode[] = [];
    const edgePoints: THREE.Vector3[] = [];

    // Create nodes in a spherical distribution
    for (let i = 0; i < nodeCount; i++) {
      const radius = 1.5 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const position = new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );

      const types: Array<"broker" | "carrier" | "load"> = ["broker", "carrier", "load"];
      nodes.push({
        position,
        type: types[i % 3]
      });
    }

    // Create connections between nearby nodes - collect all edge points
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < 1.2 && Math.random() > 0.5) {
          edgePoints.push(nodes[i].position.clone(), nodes[j].position.clone());
        }
      }
    }

    return { nodes, edgePoints };
  }, [nodeCount]);

  // Create line segments geometry for all edges
  const edgesGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(network.edgePoints.length * 3);
    network.edgePoints.forEach((pt, i) => {
      positions[i * 3] = pt.x;
      positions[i * 3 + 1] = pt.y;
      positions[i * 3 + 2] = pt.z;
    });
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [network.edgePoints]);

  useFrame((state) => {
    if (!groupRef.current || !animated) return;
    const time = state.clock.elapsedTime;
    groupRef.current.rotation.y = time * 0.08;
    groupRef.current.rotation.x = Math.sin(time * 0.05) * 0.1;
  });

  const getNodeColor = (type: string) => {
    switch (type) {
      case "broker": return "#10b981";
      case "carrier": return "#f59e0b";
      case "load": return "#3b82f6";
      default: return "#ffffff";
    }
  };

  return (
    <group ref={groupRef}>
      {/* Edges as line segments */}
      <lineSegments geometry={edgesGeometry}>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </lineSegments>

      {/* Nodes */}
      {network.nodes.map((node, idx) => (
        <mesh key={`node-${idx}`} position={node.position}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshBasicMaterial
            color={getNodeColor(node.type)}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}
    </group>
  );
}
