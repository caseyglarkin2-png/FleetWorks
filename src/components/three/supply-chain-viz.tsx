"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function SupplyChainVisualization() {
  const groupRef = useRef<THREE.Group>(null);

  // Define the supply chain network structure
  const network = useMemo(() => {
    const nodes = [
      // Brokers (left side)
      { position: new THREE.Vector3(-2.5, 1.2, 0), type: "broker" },
      { position: new THREE.Vector3(-2.5, 0, 0), type: "broker" },
      { position: new THREE.Vector3(-2.5, -1.2, 0), type: "broker" },
      
      // FleetWorks Hub (center)
      { position: new THREE.Vector3(0, 0, 0), type: "hub" },
      
      // Carriers (right side)
      { position: new THREE.Vector3(2.5, 1.2, 0), type: "carrier" },
      { position: new THREE.Vector3(2.5, 0.4, 0), type: "carrier" },
      { position: new THREE.Vector3(2.5, -0.4, 0), type: "carrier" },
      { position: new THREE.Vector3(2.5, -1.2, 0), type: "carrier" },
    ];

    const edgeIndices = [
      [0, 3], [1, 3], [2, 3], // broker to hub
      [3, 4], [3, 5], [3, 6], [3, 7], // hub to carrier
    ];

    // Build edge points array for lineSegments
    const edgePoints: number[] = [];
    edgeIndices.forEach(([from, to]) => {
      edgePoints.push(
        nodes[from].position.x, nodes[from].position.y, nodes[from].position.z,
        nodes[to].position.x, nodes[to].position.y, nodes[to].position.z
      );
    });

    return { nodes, edgePoints: new Float32Array(edgePoints) };
  }, []);

  // Edges geometry
  const edgesGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(network.edgePoints, 3));
    return geo;
  }, [network.edgePoints]);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle sway
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
  });

  const getNodeColor = (type: string) => {
    switch (type) {
      case "broker": return "#10b981";
      case "hub": return "#f59e0b";
      case "carrier": return "#3b82f6";
      default: return "#ffffff";
    }
  };

  const getNodeSize = (type: string) => type === "hub" ? 0.2 : 0.1;

  return (
    <group ref={groupRef}>
      {/* Edges */}
      <lineSegments geometry={edgesGeometry}>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.15} />
      </lineSegments>

      {/* Nodes */}
      {network.nodes.map((node, idx) => (
        <mesh key={`node-${idx}`} position={node.position}>
          <sphereGeometry args={[getNodeSize(node.type), 16, 16]} />
          <meshBasicMaterial
            color={getNodeColor(node.type)}
            transparent
            opacity={node.type === "hub" ? 1 : 0.8}
          />
        </mesh>
      ))}

      {/* Hub ring */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.25, 0.28, 32]} />
        <meshBasicMaterial color="#f59e0b" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}
