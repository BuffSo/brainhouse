'use client';

import { useRef, useMemo } from 'react';
import { useFrame, RootState } from '@react-three/fiber';
import * as THREE from 'three';

export function Network({
  count = 100,
  mouse,
}: {
  count?: number;
  mouse: React.MutableRefObject<[number, number]>;
}) {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state: RootState) => {
    if (!mesh.current) return;

    // Rotate the whole group slowly
    mesh.current.rotation.x += 0.0005;
    mesh.current.rotation.y += 0.001;

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;

      // Update time
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      // Mouse influence
      particle.mx += (mouse.current[0] * 1000 - particle.mx) * 0.01; // stronger mouse
      particle.my += (mouse.current[1] * 1000 - 1 - particle.my) * 0.01;

      // Update position
      dummy.position.set(
        (particle.mx / 10) * a +
          xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b +
          yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b +
          zFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 10
      );

      const scale = (s > 0 ? s : -s) * 1.5; // Scale range
      dummy.scale.set(scale, scale, scale);

      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();

      // Apply to instance
      // Using Points, not InstancedMesh actually.
      // Wait, for diverse movements, bufferGeometry update is needed or InstancedMesh.
      // Let's stick to simple Points with custom geometry for now or use @react-three/drei's PointMaterial if available.
      // But standard Points is easier without drey specific shaders.
      // Actually, simple floating spheres (InstancedMesh) look better for "nodes".
    });
  });

  // Re-implementing as InstancedMesh for individual control
  return (
    <instancedMesh ref={mesh as any} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.15, 16, 16]} /> {/* Node size */}
      <meshPhongMaterial
        color="#2563eb"
        emissive="#3b82f6"
        emissiveIntensity={0.5}
      />
    </instancedMesh>
  );
}

// Rewriting logic for InstancedMesh properly
export function BrainNetwork({
  mouse,
}: {
  mouse: React.MutableRefObject<[number, number]>;
}) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const count = 200;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const spread = 15; // Spread of the brain
      const x = (Math.random() - 0.5) * spread;
      const y = (Math.random() - 0.5) * spread;
      const z = (Math.random() - 0.5) * spread;

      const speed = Math.random() * 0.002;

      temp.push({ x, y, z, speed, t: Math.random() * 100 });
    }
    return temp;
  }, []);

  useFrame((state: RootState) => {
    if (!mesh.current) return;

    // Global rotation
    mesh.current.rotation.y += 0.001;

    particles.forEach((p, i) => {
      const { x, y, z, speed } = p;
      p.t += speed;

      // Oscillate slightly
      const yOsc = y + Math.sin(p.t * 2) * 0.5;
      const xOsc = x + Math.cos(p.t) * 0.5;

      // Mouse interaction (repel)
      // Simple parallax for now

      dummy.position.set(xOsc, yOsc, z);
      dummy.scale.setScalar(1 + Math.sin(p.t * 5) * 0.3); // Pulse
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial
        color="#60a5fa"
        transparent
        opacity={0.8}
        roughness={0.5}
        metalness={0.5}
      />
    </instancedMesh>
  );
}
