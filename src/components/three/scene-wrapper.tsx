"use client";

import { Canvas, type CanvasProps } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense, type ReactNode } from "react";

interface SceneWrapperProps extends Omit<CanvasProps, "children"> {
  children: ReactNode;
  className?: string;
}

export function SceneWrapper({ children, className = "", ...props }: SceneWrapperProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5], fov: 75 }}
        {...props}
      >
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
