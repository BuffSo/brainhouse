'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import { BrainNetwork } from './network';
import * as THREE from 'three';

function Rig({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.x += (mouse.current[0] * 2 - camera.position.x) * 0.05;
    camera.position.y += (mouse.current[1] * 2 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene() {
  const mouse = useRef<[number, number]>([0, 0]);

  return (
    <div
      className="absolute inset-0 z-0"
      onMouseMove={(e) => {
        // Normalize mouse (-1 to 1)
        mouse.current = [
          (e.clientX / window.innerWidth) * 2 - 1,
          -(e.clientY / window.innerHeight) * 2 + 1,
        ];
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]} // Support high DPI
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#3b82f6"
        />

        <Suspense fallback={null}>
          <BrainNetwork mouse={mouse} />
        </Suspense>

        <Rig mouse={mouse} />
      </Canvas>
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-blue-900/50 to-slate-900/90 pointer-events-none" />
    </div>
  );
}
