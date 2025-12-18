"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Text } from "@react-three/drei";
import * as THREE from "three";

interface DataPulse {
  progress: number;
  speed: number;
  edge: number;
  active: boolean;
}

export function SupplyChainVisualization() {
  const groupRef = useRef<THREE.Group>(null);
  const pulsesRef = useRef<DataPulse[]>([]);

  // Define the supply chain network structure
  const network = useMemo(() => {
    const nodes = [
      // Brokers (left side)
      { id: "b1", position: new THREE.Vector3(-3, 1.5, 0), type: "broker", label: "Broker" },
      { id: "b2", position: new THREE.Vector3(-3, 0, 0), type: "broker", label: "Broker" },
      { id: "b3", position: new THREE.Vector3(-3, -1.5, 0), type: "broker", label: "Broker" },
      
      // FleetWorks Hub (center)
      { id: "hub", position: new THREE.Vector3(0, 0, 0), type: "hub", label: "FleetWorks" },
      
      // Carriers (right side)
      { id: "c1", position: new THREE.Vector3(3, 1.5, 0), type: "carrier", label: "Carrier" },
      { id: "c2", position: new THREE.Vector3(3, 0.5, 0), type: "carrier", label: "Carrier" },
      { id: "c3", position: new THREE.Vector3(3, -0.5, 0), type: "carrier", label: "Carrier" },
      { id: "c4", position: new THREE.Vector3(3, -1.5, 0), type: "carrier", label: "Carrier" },
    ];

    const edges = [
      // Broker to Hub connections
      { from: 0, to: 3 },
      { from: 1, to: 3 },
      { from: 2, to: 3 },
      // Hub to Carrier connections
      { from: 3, to: 4 },
      { from: 3, to: 5 },
      { from: 3, to: 6 },
      { from: 3, to: 7 },
    ];

    // Initialize pulses
    pulsesRef.current = edges.map((_, idx) => ({
      progress: Math.random(),
      speed: 0.3 + Math.random() * 0.3,
      edge: idx,
      active: Math.random() > 0.3
    }));

    return { nodes, edges };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Subtle rotation
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;

    // Update pulses
    pulsesRef.current.forEach((pulse) => {
      if (pulse.active) {
        pulse.progress += delta * pulse.speed;
        if (pulse.progress > 1) {
          pulse.progress = 0;
          pulse.active = Math.random() > 0.3;
        }
      } else if (Math.random() < 0.005) {
        pulse.active = true;
        pulse.progress = 0;
      }
    });
  });

  const getNodeColor = (type: string) => {
    switch (type) {
      case "broker": return "#10b981";
      case "hub": return "#f59e0b";
      case "carrier": return "#3b82f6";
      default: return "#ffffff";
    }
  };

  const getNodeSize = (type: string) => {
    switch (type) {
      case "hub": return 0.25;
      default: return 0.12;
    }
  };

  return (
    <group ref={groupRef}>
      {/* Edges with gradient */}
      {network.edges.map((edge, idx) => {
        const from = network.nodes[edge.from].position;
        const to = network.nodes[edge.to].position;
        return (
          <Line
            key={`edge-${idx}`}
            points={[from, to]}
            color="#ffffff"
            opacity={0.2}
            transparent
            lineWidth={1}
          />
        );
      })}

      {/* Nodes */}
      {network.nodes.map((node, idx) => (
        <group key={`node-${idx}`} position={node.position}>
          {/* Node sphere */}
          <mesh>
            <sphereGeometry args={[getNodeSize(node.type), 32, 32]} />
            <meshBasicMaterial
              color={getNodeColor(node.type)}
              transparent
              opacity={node.type === "hub" ? 1 : 0.8}
            />
          </mesh>
          
          {/* Glow ring for hub */}
          {node.type === "hub" && (
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.3, 0.35, 32]} />
              <meshBasicMaterial color="#f59e0b" transparent opacity={0.5} side={THREE.DoubleSide} />
            </mesh>
          )}
          
          {/* Point light for each node */}
          <pointLight
            color={getNodeColor(node.type)}
            intensity={node.type === "hub" ? 0.8 : 0.3}
            distance={2}
          />
        </group>
      ))}

      {/* Animated data pulses */}
      {network.edges.map((edge, idx) => {
        const from = network.nodes[edge.from].position;
        const to = network.nodes[edge.to].position;
        const pulse = pulsesRef.current[idx];
        
        if (!pulse?.active) return null;

        const position = from.clone().lerp(to, pulse.progress);
        const isToHub = edge.to === 3;
        
        return (
          <mesh key={`pulse-${idx}`} position={position}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshBasicMaterial
              color={isToHub ? "#10b981" : "#3b82f6"}
              transparent
              opacity={0.9}
            />
          </mesh>
        );
      })}

      {/* Labels */}
      <Text
        position={[-3, 2.3, 0]}
        fontSize={0.2}
        color="#10b981"
        anchorX="center"
      >
        BROKERS
      </Text>
      <Text
        position={[0, 1, 0]}
        fontSize={0.15}
        color="#f59e0b"
        anchorX="center"
      >
        FLEETWORKS
      </Text>
      <Text
        position={[3, 2.3, 0]}
        fontSize={0.2}
        color="#3b82f6"
        anchorX="center"
      >
        CARRIERS
      </Text>

      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
    </group>
  );
}
