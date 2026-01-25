'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Elegant floating particles - subtle and clean
export function ElegantNetwork({
  mouse,
}: {
  mouse: React.MutableRefObject<[number, number]>;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const count = 40; // Reduced count for cleaner look
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      // Spread particles more towards edges
      const angle = Math.random() * Math.PI * 2;
      const radius = 8 + Math.random() * 12; // Outer area
      const x = Math.cos(angle) * radius * (0.5 + Math.random() * 0.5);
      const y = (Math.random() - 0.5) * 15;
      const z = Math.sin(angle) * radius * 0.3 - 5; // Push back in z
      const speed = 0.0005 + Math.random() * 0.001; // Very slow
      const phase = Math.random() * Math.PI * 2;
      const size = 0.3 + Math.random() * 0.4; // Varied sizes
      temp.push({ x, y, z, speed, phase, size, baseX: x, baseY: y });
    }
    return temp;
  }, []);

  // Pre-calculate line geometry
  const linePositions = useMemo(() => {
    return new Float32Array(count * count * 6); // Max possible connections
  }, []);

  useFrame((state) => {
    const currentMesh = meshRef.current;
    const currentLines = linesRef.current;
    if (!currentMesh) return;

    const time = state.clock.elapsedTime;
    const positions: THREE.Vector3[] = [];

    // Very subtle mouse influence
    const mouseX = mouse.current[0] * 0.5;
    const mouseY = mouse.current[1] * 0.5;

    particles.forEach((p, i) => {
      // Gentle floating motion
      const xOffset = Math.sin(time * p.speed * 100 + p.phase) * 0.8;
      const yOffset = Math.cos(time * p.speed * 80 + p.phase) * 0.6;

      const x = p.baseX + xOffset + mouseX * 0.3;
      const y = p.baseY + yOffset + mouseY * 0.3;
      const z = p.z + Math.sin(time * p.speed * 50) * 0.3;

      dummy.position.set(x, y, z);

      // Subtle size pulsing
      const scale = p.size * (0.9 + Math.sin(time * 0.5 + p.phase) * 0.1);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      currentMesh.setMatrixAt(i, dummy.matrix);

      positions.push(new THREE.Vector3(x, y, z));
    });

    currentMesh.instanceMatrix.needsUpdate = true;

    // Update connecting lines
    if (currentLines) {
      let lineIndex = 0;
      const maxDistance = 6; // Connection distance threshold

      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const dist = positions[i].distanceTo(positions[j]);
          if (dist < maxDistance) {
            linePositions[lineIndex++] = positions[i].x;
            linePositions[lineIndex++] = positions[i].y;
            linePositions[lineIndex++] = positions[i].z;
            linePositions[lineIndex++] = positions[j].x;
            linePositions[lineIndex++] = positions[j].y;
            linePositions[lineIndex++] = positions[j].z;
          }
        }
      }

      // Fill rest with zeros
      for (let i = lineIndex; i < linePositions.length; i++) {
        linePositions[i] = 0;
      }

      const geometry = currentLines.geometry as THREE.BufferGeometry;
      geometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* Particles */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.4}
        />
      </instancedMesh>

      {/* Connecting lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.08}
        />
      </lineSegments>
    </group>
  );
}

// Keep original components for backward compatibility
export function Network({
  count = 100,
  mouse,
}: {
  count?: number;
  mouse: React.MutableRefObject<[number, number]>;
}) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

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

  useFrame(() => {
    const currentMesh = mesh.current;
    if (!currentMesh) return;

    currentMesh.rotation.x += 0.0005;
    currentMesh.rotation.y += 0.001;

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;

      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      particle.mx += (mouse.current[0] * 1000 - particle.mx) * 0.01;
      particle.my += (mouse.current[1] * 1000 - 1 - particle.my) * 0.01;

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

      const scale = (s > 0 ? s : -s) * 1.5;
      dummy.scale.set(scale, scale, scale);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();

      currentMesh.setMatrixAt(i, dummy.matrix);
    });

    currentMesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshPhongMaterial
        color="#2563eb"
        emissive="#3b82f6"
        emissiveIntensity={0.5}
      />
    </instancedMesh>
  );
}

export function BrainNetwork({
  mouse,
}: {
  mouse: React.MutableRefObject<[number, number]>;
}) {
  return <ElegantNetwork mouse={mouse} />;
}
