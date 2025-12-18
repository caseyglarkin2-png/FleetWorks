"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Sphere } from "@react-three/drei";
import * as THREE from "three";

interface NetworkNode {
  position: THREE.Vector3;
  type: "broker" | "carrier" | "load";
  connections: number[];
}

interface NetworkGraphProps {
  nodeCount?: number;
  animated?: boolean;
}

export function NetworkGraph({ nodeCount = 30, animated = true }: NetworkGraphProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRef = useRef(0);

  const network = useMemo(() => {
    const nodes: NetworkNode[] = [];
    const edges: [THREE.Vector3, THREE.Vector3][] = [];

    // Create nodes in a spherical distribution
    for (let i = 0; i < nodeCount; i++) {
      const radius = 2 + Math.random() * 1.5;
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
        type: types[i % 3],
        connections: []
      });
    }

    // Create connections (edges) between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < 1.5 && Math.random() > 0.4) {
          nodes[i].connections.push(j);
          nodes[j].connections.push(i);
          edges.push([nodes[i].position, nodes[j].position]);
        }
      }
    }

    return { nodes, edges };
  }, [nodeCount]);

  useFrame((state) => {
    if (!groupRef.current || !animated) return;
    
    const time = state.clock.elapsedTime;
    groupRef.current.rotation.y = time * 0.1;
    groupRef.current.rotation.x = Math.sin(time * 0.05) * 0.2;
    pulseRef.current = Math.sin(time * 2) * 0.5 + 0.5;
  });

  const getNodeColor = (type: string) => {
    switch (type) {
      case "broker": return "#10b981";
      case "carrier": return "#f59e0b";
      case "load": return "#3b82f6";
      default: return "#ffffff";
    }
  };

  const getNodeSize = (type: string) => {
    switch (type) {
      case "broker": return 0.08;
      case "carrier": return 0.06;
      case "load": return 0.05;
      default: return 0.05;
    }
  };

  return (
    <group ref={groupRef}>
      {/* Edges */}
      {network.edges.map((edge, idx) => (
        <Line
          key={`edge-${idx}`}
          points={[edge[0], edge[1]]}
          color="#ffffff"
          opacity={0.15}
          transparent
          lineWidth={1}
        />
      ))}

      {/* Nodes */}
      {network.nodes.map((node, idx) => (
        <Sphere
          key={`node-${idx}`}
          position={node.position}
          args={[getNodeSize(node.type), 16, 16]}
        >
          <meshBasicMaterial
            color={getNodeColor(node.type)}
            transparent
            opacity={0.9}
          />
        </Sphere>
      ))}

      {/* Ambient glow */}
      <pointLight color="#10b981" intensity={0.5} position={[0, 0, 0]} />
    </group>
  );
}
