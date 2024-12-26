import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function BirthdayCake() {
  const cakeRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (cakeRef.current) {
      cakeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cakeRef} position={[0, 0, 0]}>
      <cylinderGeometry args={[1, 1, 1, 32]} />
      <meshStandardMaterial color="#FF69B4" />
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.5, 32]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
    </mesh>
  );
}